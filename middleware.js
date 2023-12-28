const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const shortid = require('shortid');


module.exports = function (req, res, next) {
  const verify = shortid.isValid()
  if(verify){
    return next()
  }else{
    return res.status(401)
  }
};
