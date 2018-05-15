module.exports = function (sequelize, DataTypes) {
    var Event = sequelize.define("Events", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    return Event;
}