const db = require("../models");
const productSeeds = require("./seed-products.json");
const marketSeeds = require("./seed-markets.json");
const _sample = require("lodash.sample");
const _sampleSize = require("lodash.samplesize");

let markets = [];
db.sequelize.sync({ force: true }).then(function() {
  const bulkQueries = [
    db.Market.bulkCreate(marketSeeds),
    db.Product.bulkCreate(productSeeds)
  ];
  Promise.all(bulkQueries)
    .then(function() {
      return db.Market.findAll();
    })
    .then(function(dbMarkets) {
      markets = dbMarkets;
      return db.Product.findAll();
    })
    .then(function(dbProducts) {
      const prodSampleSize = dbProducts.length / markets.length + 30;
      const marketsToProducts = markets.map(function(market) {
        const productsSample = _sampleSize(dbProducts, prodSampleSize);
        return market.addProducts(productsSample);
      });

      Promise.all(marketsToProducts).then(function() {
        const productsToMarkets = dbProducts.map(function(product) {
          const marketSample = _sample(markets);
          return product.addMarket(marketSample);
        });

        Promise.all(productsToMarkets).then(function() {
          db.sequelize.close();
        });
      });
    })
    .catch(function(err) {
      console.log(err);
      db.sequelize.close();
    });
});
