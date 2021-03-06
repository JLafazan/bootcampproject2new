module.exports = function (sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
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
       
    });
    
    // ENABLES EVENT TO BE ACCESSIBLE TO ALL USERS
    Event.associate = models => {
        Event.belongsToMany(models.User, {
            through: models.Favorite,
            // 11.07 am - added this to get rid of duplicate column error
          foreignKey: 'eventId'
        })
      }
    
    return Event;
}