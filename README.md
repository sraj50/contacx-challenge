# Purpose

To allow an Amazon Connect instance to invoke a Lambda function, used in in a Contact Flow. An Australian phone number is provisioned, which a user can call to hear the current date and time in Sydney.

This CDK project deploys a Lambda function that returns the current date and time in Sydney. The code for the Lambda function can be found in `lib/lambda-handler/index.js`.

Additional permissions are created to allow the Amazon Connect instance to invoke the Lambda function.

# Local Development

This is a project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

## CDK Set Up

### Pre-requisites
1. Instal CDK CLI with `npm install -g aws-cdk`
2. Configure an AWS profile with the following.

```
# ~/.aws/credentials
[contacx]
aws_access_key_id = <YOUR_AWS_ACCESS_KEY>
aws_secret_access_key = <YOUR_AWS_SECRET_KEY>

# ~/.aws/config
[profile contacx]
region = ap-southeast-2

```

### Deployment

Follow the below commands to deploy resources to your AWS account.

1. `cdk --profile contacx bootstrap aws://${AWS_ACCOUNT_ID}/${AWS_REGION}` (first time only)
2. `cdk --profile contacx --region ap-southeast-2 synth`
3. `cdk --profile contacx --region ap-southeast-2 diff`
4. `cdk --profile contacx --region ap-southeast-2 deploy`

# Demo

Call the number `+61 2 8348 6373` to hear the current date and time in Sydney. 