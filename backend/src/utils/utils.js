const fs = require("fs");

const writeToFile = (file, data) => {
  fs.writeFile(file, JSON.stringify(data), (err) => {
    if (err) {
      console.log(err);
    }
  });
};

const getReqData = (req) => {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        resolve(body);
      });
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = { getReqData, writeToFile };
