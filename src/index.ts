import { APIGatewayProxyEventV2 } from "aws-lambda";

export async function handler(event: APIGatewayProxyEventV2) {
  console.log('running');
  return {
    statusCode: 200,
    body: "<div>Test lambda</div>",
  };
}
