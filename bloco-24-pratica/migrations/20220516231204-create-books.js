'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const books = await queryInterface.createTable("books", {
      id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
      },

      title:{
      allowNull: false,
      type: Sequelize.STRING,

      },

      author:{
        allowNull: false,
        type: Sequelize.STRING,
      },

      pageQuantity:{
        allowNull: true,
        type: Sequelize.INTEGER
      },

      createdAt:{
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt:{
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    return books
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("books")
  }
};
