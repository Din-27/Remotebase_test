const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const shortid = require('shortid');
const fs = require('fs');


module.exports = function (req, res, next) {
  const getID = req.header("x-api-key")
  const verify = shortid.isValid(getID)
  if(!req.header("x-api-key")){
    return res.status(401)
  }
  if(verify){
    return next()
  }else{
    return res.status(401)
  }
};
