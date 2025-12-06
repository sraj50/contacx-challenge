import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as apigw from "aws-cdk-lib/aws-apigateway";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as iam from "aws-cdk-lib/aws-iam"
import * as path from "node:path";

const AMAZON_CONNECT_SERVICE_PRINCIPAL = "connect.amazonaws.com"
const AMAZON_CONNECT_CONTACX_INSTANCE_ARN = "arn:aws:connect:ap-southeast-2:390299133809:instance/2f5aba56-7ffb-4455-b81b-c1e840da445e"

export class ContacxChallengeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // lambda function
    const fn = new lambda.Function(this, "ContacxGetSydneyDateTime", {
      runtime: lambda.Runtime.NODEJS_LATEST,
      handler: "index.handler",
      code: lambda.Code.fromAsset(path.join(__dirname, "lambda-handler")),
    });

    // permission for Amazon Connect to invoke lambda function
    fn.addPermission("AmazonConnectInvokePermission", {
      principal: new iam.ServicePrincipal(AMAZON_CONNECT_SERVICE_PRINCIPAL),
      action: "lambda:InvokeFunction",
      sourceArn: AMAZON_CONNECT_CONTACX_INSTANCE_ARN
    })
  }
}
