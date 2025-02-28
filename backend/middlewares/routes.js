const { readFileSync } = require("fs");
const path = require("path");
const clientPath = path.join(__dirname, "..", "..", "frontend");

const index = (req, res) => {
  res.status(200).sendFile(path.join(clientPath, "index.html"));
};

const about = (req, res) => {
  res.status(200).sendFile(path.join(clientPath,'html', "about.html"));
}

const contact = (req, res) => {
  res.status(200).sendFile(path.join(clientPath,'html', "contact.html"));
}



module.exports = {
    index,about,contact
};
