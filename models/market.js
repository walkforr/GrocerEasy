module.exports = function(connection, Sequelize) {
  const Market = connection.define(
    "Market",
    {
      name: Sequelize.STRING,
      address: Sequelize.STRING,
      city: Sequelize.STRING,
      state: Sequelize.STRING,
      zip: Sequelize.INTEGER,
      image: Sequelize.STRING,
      website: Sequelize.STRING,
      operationHours: Sequelize.STRING
    },
    { timestamps: false }
  );

  Market.associate = function(models) {
    Market.belongsToMany(models.Product, {
      through: "MarketProduct"
    });
  };

  return Market;
};
