module.exports = function (sequelize, DataTypes) {
    var Fav = sequelize.define("Favorite", {
        //Somehow grab the events id and users id
        // User has many favorites
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    });
    return Fav;
};
// WHen they favorite something on the event page 
// Onto their favorites 

//Favorties has own id, grabbing event id from event table, and user id from user table