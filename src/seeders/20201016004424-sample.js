'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [
      {
        name: '西住　みほ',
        name_kana: 'にしずみ　みほ',
        year:2,
        height:158,
        team: 'あんこう',
        role: '車長',
        leader: true,
        nickname: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '武部　沙織',
        name_kana: 'たけべ　さおり',
        year:2,
        height:157,
        team: 'あんこう',
        role: '通信手',
        leader: null,
        nickname: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '五十鈴　華',
        name_kana: 'いすず　はな',
        year:2,
        height:163,
        team: 'あんこう',
        role: '砲手',
        leader: null,
        nickname: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '秋山　優花里',
        name_kana: 'あきやま　ゆかり',
        year:2,
        height:157,
        team: 'あんこう',
        role: '装填手',
        leader: null,
        nickname: 'グデーリアン',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '冷泉　麻子',
        name_kana: 'れいぜい　まこ',
        year:2,
        height:145,
        team: 'あんこう',
        role: '操縦手',
        leader: null,
        nickname: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};
