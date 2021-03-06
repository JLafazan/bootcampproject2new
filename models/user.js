// module.exports = function (sequelize, DataTypes) {
//     var User = sequelize.define("User", {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,

//         },
//         created_at: {
//             type: DataTypes.DATE,
//             allowNull: false
//         },

//     });
//     return User;
// }

// Will create a table with email info and password
//password will be hashed to be stored in our database, but will compare password with stored password when user logs in 
// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        // The email cannot be null, and must be a proper email before creation
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // The password cannot be null
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    User.hook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    //This will create a new model called Favorites with the equivalent foreign keys eventId and userId
    //This will add methods getUsers, setUsers, addUser,addUsers to Event, and getEvents, setEvents, addEvent, and addEvents to User
    // var Event = require('./event.js');
    // User.belongsToMany(Event, { through: Favorite }); 
    // Event.belongsToMany(User, { through: Favorite });

    // ATTEMPTS TO CREATE MODEL FOR USER TO MAKE EVENT ACCESSIBLE TO ALL USERS
    User.associate = models => {
      console.log(models)
      User.belongsToMany(models.Event, {
          through: models.Favorite,
          // 11.07 am - added this to get rid of duplicate column error
          foreignKey: 'userId'
      })
    }

    return User;
};



