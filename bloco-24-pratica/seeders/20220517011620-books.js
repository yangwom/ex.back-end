'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('books', [{
      title: 'oiii',
      author: 'caguei',
      pageQuantity: 300,
      createdAt: '2019/07/06',
      updatedAt: '2020/08/09'
    }], {});

  },

  async down(queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('books', null, {});

  }
};
