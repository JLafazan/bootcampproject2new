module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        }

    });

    return User;
}


