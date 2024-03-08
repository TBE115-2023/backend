const { DataTypes } = require('sequelize');
const {sequelize } = require ('../db/config.js');

const Invernadero = sequelize.define('invernadero', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    FECHA:{
        type: DataTypes.DATE,
        // required:[true, 'ponele correo'],
        // unique:true
    },
    DTH11T:{
        type: DataTypes.FLOAT,
        // required:[true, 'ponele contra']
    },
    LM35:{
        type: DataTypes.FLOAT,
    },
    HUMCAP:{
        type: DataTypes.FLOAT,
    },
    HUMRES:{
        type: DataTypes.FLOAT,
    },
    DTH11H:{
        type: DataTypes.FLOAT,
    },

  }, {
    paranoid: true,
  });


module.exports={
    Invernadero
};