# Simple Serverless ExpressJS Application

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This is a simple serverless ExpressJS application with TypeScript and the serverless framework. The app provides three routes:

- GET     `/api/v1/test`
- POST    `/api/v1/test`
- GET     `/api/v1/test2`

## Run Application

### Run Locally

1. Install dependencies: `npm install`
2. Start the application: `npm run start` or `npm run prod`

### Run with AWS Lambda and AWS API Gateway

1. Build the serverless app:

   - Configure AWS credentials to deploy the app. You can find instructions on how to do this online (Hint: `aws configure`)
   - Install serverless framework: `npm install -g serverless`
   - Build the TypeScript app: `npm run build`

2. Run the app locally: `serverless offline`
3. Deploy the app: `serverless deploy`

## Plugins and Configurations

1. Included serverless offline plugin
2. ESLint setup included
3. Two environments configured: `dev` and `prod` with the dotenv package
4. TypeScript is set up with the output directory as the `dist` folder.