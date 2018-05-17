module.exports = function (sequelize, DataTypes) {
  var UserEvents = sequelize.define("UserEvents", {

     userid: DataTypes.INTEGER,
     eventid: DataTypes.INTEGER

     
  });
  return UserEvents;
};