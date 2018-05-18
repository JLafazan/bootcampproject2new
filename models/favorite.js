// INTENT - TO CREATE A MODEL TO STORE FAVORITE EVENTS BASED ON USER ID

module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER,
  });
  return Favorite;
};