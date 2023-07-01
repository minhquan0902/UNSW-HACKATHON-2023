"use strict";
const {
  DynamoDBClient,
  BatchExecuteStatementCommand,
} = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  PutCommand,
  UpdateCommand,
  DeleteCommand,
  ScanCommand,
} = require("@aws-sdk/lib-dynamodb");
const { v4: uuidv4 } = require('uuid')


const client = new DynamoDBClient({ region: process.env.AWS_REGION });
const ddbDocClient = DynamoDBDocumentClient.from(client);
const REQUEST_TABLE = process.env.REQUEST_TABLE;
const send = (statusCode, data) => {
  return {
    statusCode,
    body: JSON.stringify(data),
  };
};

module.exports.hello = async (event) => {
  return send(200, "hello world");
};

module.exports.createRequest = async (event) => {
  // return send(201, uuidv4());
  let data = JSON.parse(event.body);
  console.log(event);
  try {
    const params = {
      TableName: REQUEST_TABLE,
      Item: {
        requestId: uuidv4(),
        userInput: data.userInput,
      },
      ConditionExpression: "attribute_not_exists(requestId)",
    };
    await ddbDocClient.send(new PutCommand(params));
    return send(201, data);
  } catch (err) {
    return send(500, data);
  }
};
