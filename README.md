# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

# CDK Set Up

## Pre-requisites
1. Instal CDK cli with `npm install -g aws-cdk`
2. Configure AWS profile with the following.

```
# ~/.aws/credentials

[contacx]
aws_access_key_id = <YOUR_AWS_ACCESS_KEY>
aws_secret_access_key = <YOUR_AWS_SECRET_KEY>

# ~/.aws/config

[profile contacx]
region = ap-southeast-2

```

## Deployment

Follow the below commands to deploy resources to your AWS account.

1. `cdk --profile contacx bootstrap aws://${AWS_ACCOUNT_ID}/${AWS_REGION}` (first time only)
2. `cdk --profile contacx --region ap-southeast-2 synth`
3. `cdk --profile contacx --region ap-southeast-2 diff`
4. `cdk --profile contacx --region ap-southeast-2 deploy`