
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET || 'someothersecretasdefault';

function checkToken(req, res, next) {
  var token = req.headers['authorization'];
  if (!token) 
    return res.status(403).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, secret, function(err, decoded) {      
    if (err) 
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });    
      req.userId = decoded.id;
      next();
  });
}

module.exports = {
  checkToken: checkToken
}