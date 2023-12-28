const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs = require('fs');
const shortid = require('shortid');
// To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require('os').EOL;


module.exports = function (req, res) {
  let dataBefore
  const idGenerate = shortid.generate()
  const fileExist = fs.existsSync(VALID_KEYS_PATH)
  for (let i = 0; i < 5; i++) {
    if (fileExist) {
      dataBefore = fs.readFileSync(VALID_KEYS_PATH)
    }
    fs.writeFileSync(VALID_KEYS_PATH, dataBefore + idGenerate)
  }
  res.send(dataBefore)
};

