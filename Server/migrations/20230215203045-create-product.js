'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull:false
      },
      image: {
        type: Sequelize.STRING,
        allowNull:false
      },
      methodOfPayment:{
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      userId:{
        type:Sequelize.INTEGER(11),
        allowNull:false,
        references: {
            model: 'Users',
            key: 'id' 
        }
      },
      description:{
        type: Sequelize.STRING,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};