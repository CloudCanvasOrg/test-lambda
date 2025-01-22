import {
  APIGatewayProxyEventV2,
  APIGatewayProxyStructuredResultV2,
} from "aws-lambda";

export async function handler(
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> {
  console.log("recv req");
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: "<div>Test lambda</div>",
  };
}
