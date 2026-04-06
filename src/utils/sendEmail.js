const { SendEmailCommand } = require("@aws-sdk/client-ses");
const { sesClient } = require("./sesClient.js");

const createSendEmailCommand = (toAddress, fromAddress, subject, body) => {
  return new SendEmailCommand({
    Destination: {
      ToAddresses: [toAddress],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<h1>${body}</h1>`,
        },
        Text: {
          Charset: "UTF-8",
          Data: body,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
    Source: fromAddress,
  });
};

const run = async (subject, body) => {
  const sendEmailCommand = createSendEmailCommand(
    "vs3023351@gmail.com",
    "amishaaworks06@gmail.com",  
    subject,
    body
  );

  try {
    const response = await sesClient.send(sendEmailCommand);
    console.log("EMAIL SENT SUCCESSFULLY");
    return response;
  } catch (error) {
    console.log("EMAIL ERROR", error);
    throw error;
  }
};

module.exports = { run };