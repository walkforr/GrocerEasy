const path = require("path");

exports.signup = function(req, res) {
  res.sendFile(path.join(__dirname, "../public/signup.html"));
};

exports.signin = function(req, res) {
  res.sendFile(path.join(__dirname, "../signin.html"));
};

exports.dashboard = function(req, res) {
  res.sendFile(path.join(__dirname, "../dashboard.html"));
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/");
  });
};
