const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs = require('fs');
const shortid = require('shortid');
// To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require('os').EOL;


module.exports = function (req, res) {
  const idGenerate = shortid.generate()
  let dataBefore = '',dataFile = idGenerate
  const fileExist = fs.existsSync(VALID_KEYS_PATH)
  if (fileExist) {
    dataBefore = fs.readFileSync(VALID_KEYS_PATH)
    dataFile = dataBefore + LINE_ENDING + idGenerate
  }
  fs.writeFileSync(VALID_KEYS_PATH, dataFile)
  const data = fs.readFileSync(VALID_KEYS_PATH)
  res.send(String(data).split(LINE_ENDING)[0])
};

