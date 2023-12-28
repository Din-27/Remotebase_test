const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const shortid = require('shortid');
const fs = require('fs');


module.exports = function (req, res, next) {
  const getID = fs.readFileSync(VALID_KEYS_PATH)
  const verify = shortid.isValid(getID)
  if(verify){
    return next()
  }else{
    return res.status(401)
  }
};
