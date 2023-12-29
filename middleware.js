const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const LINE_ENDING = require('os').EOL;
const fs = require('fs');


module.exports = function (req, res, next) {
  const getID = req.header("x-api-key")
  const verify = fs.readFileSync(VALID_KEYS_PATH)
  const checking = String(verify).split(LINE_ENDING).filter(x => x === getID)

  if (!req.header("x-api-key")) {
    return res.status(401).send()
  }
  if (checking.length === 0) {
    return res.status(401).send()
  }
  return next()
}
