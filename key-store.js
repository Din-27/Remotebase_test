const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs = require('fs');
const shortid = require('shortid');
// To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require('os').EOL;


module.exports = function (req, res) {
  const idGenerate = shortid.generate() + LINE_ENDING
  const fileExist = fs.existsSync(VALID_KEYS_PATH)
  if (!fileExist) {
    fs.appendFileSync(VALID_KEYS_PATH, idGenerate)
  } else {
    const data = fs.readFileSync(VALID_KEYS_PATH)
    const dataString = String(data) + idGenerate
    fs.writeFileSync(VALID_KEYS_PATH, dataString)
  }
  const data = fs.readFileSync(VALID_KEYS_PATH)
  res.send({ apiKey: String(data).split(LINE_ENDING)[0] })
};

