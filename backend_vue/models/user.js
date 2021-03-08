const Sequelize = require("sequelize");
const sequelize = require("./../db_instance");

const user = sequelize.define(
    "user", //name table
    {      
        username: { //col
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        password: { //col
            type: Sequelize.STRING,
            allowNull: false,  
        },
        level: { //col
            type: Sequelize.STRING,
            defaultValue: "normal"
        },
    },
  );

  
  (async () => {
    await user.sync({ force: false });
  })();

  module.exports = user;

    
