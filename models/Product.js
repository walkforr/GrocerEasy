module.exports = function(connection, Sequelize) {
  const Product = connection.define(
    "Product",
    {
      name: Sequelize.STRING,
      category: Sequelize.STRING,
      isOrganic: Sequelize.BOOLEAN
    },
    {
      timestamps: false
    }
  );

  Product.associate = function(models) {
    Product.belongsToMany(models.Market, {
      through: "MarketProduct"
    });
  };

  return Product;
};
