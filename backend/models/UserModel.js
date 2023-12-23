const { DataTypes } = require('sequelize');
const sequelize = require('../config/Database');

const UserModel = sequelize.define('tb_user', {
    user_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nim: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    semester: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone_number: {
        type: DataTypes.STRING,
        unique: true,
    },
    isVerification: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
    },
});

module.exports = UserModel;
