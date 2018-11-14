const db = require("../models");

module.exports = function(app) {
  // GET route for retrieving all products
  app.get("/api/products", function(req, res) {
    db.Product.findAll({
      include: [db.Market]
    })
      .then(function(grocereasy_DB) {
        res.json(grocereasy_DB);
      })
      .catch(function(error) {
        res.json({ error: error });
      });
  });

  // GET route for retrieving a single specified product
  app.get("/api/products/:id", function(req, res) {
    db.Product.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(grocereasy_DB) {
        res.json(grocereasy_DB);
      })
      .catch(function(error) {
        res.json({ error: error });
      });
  });

  // POST route for adding new products
  app.post("/api/products", function(req, res) {
    db.Product.create(req.body)
      .then(function(grocereasy_DB) {
        res.json(grocereasy_DB);
      })
      .catch(function(error) {
        res.json({ error: error });
      });
  });

  // PUT route for updating products
  app.put("/api/products/:id", function(req, res) {
    db.Product.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(function(grocereasy_DB) {
        res.json(grocereasy_DB);
      })
      .catch(function(error) {
        res.json({ error: error });
      });
  });

  // DELETE route for deleting products
  app.delete("/api/products/:id", function(req, res) {
    db.Product.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(grocereasy_DB) {
        res.json(grocereasy_DB);
      })
      .catch(function(error) {
        res.json({ error: error });
      });
  });

  app.get("/api/markets", function(req, res) {
    const Op = db.sequelize.Op;
    let productFilter = {};
    if (req.query && req.query.product) {
      productFilter = {
        name: {
          [Op.like]: `${req.query.product}%`
        }
      };
    }
    let zipFilter = {};
    if (req.query && req.query.zips) {
      zipFilter = {
        zip: {
          [Op.in]: req.query.zips.split(",")
        }
      };
    }
    db.Market.findAll({
      where: zipFilter,
      include: [
        {
          model: db.Product,
          where: productFilter
        }
      ]
    }).then(function(dbMarkets) {
      res.json(dbMarkets);
    });
  });

  app.post("/api/signup", function(req, res) {
    db.User.create(req.body)
      .then(function(grocereasy_db) {
        res.json(grocereasy_db);
      })
      .catch(function(error) {
        res.json({ error: error });
      });
  });
};
