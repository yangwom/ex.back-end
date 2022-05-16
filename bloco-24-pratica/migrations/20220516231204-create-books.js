'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const books = queryInterface.createTable("books", {
      id: {
      allowNull: false,
      autoIcrement: true,
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
      
      update:{
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
