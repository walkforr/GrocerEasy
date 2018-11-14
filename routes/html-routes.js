const path = require("path");

module.exports = function(app) {
  app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/google706da3544a696cfd.html ", function(request, response) {
    response.sendFile(
      path.join(__dirname, "../public/google706da3544a696cfd.html")
    );
  });
};
