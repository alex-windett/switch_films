// Setting up basic authentication middleware
var auth = function (req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.send(401);
  };

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  };

  if (user.name === process.env.USERNAME && user.pass === process.env.USER_PASSWORD ) {
    return next();
  } else {
    return unauthorized(res);
  };
};

module.exports = auth;
