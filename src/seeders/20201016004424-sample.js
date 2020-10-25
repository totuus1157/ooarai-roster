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
      },
      {
        name: '角谷　杏',
        name_kana: 'かどたに　あんず',
        year:3,
        height:142,
        team: 'カメさん',
        role: '車長',
        leader: true,
        nickname: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '小山　柚子',
        name_kana: 'こやま　ゆず',
        year:3,
        height:157,
        team: 'カメさん',
        role: '操縦手',
        leader: null,
        nickname: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '河嶋　桃',
        name_kana: 'かわしま　もも',
        year:3,
        height:164,
        team: 'カメさん',
        role: '砲手',
        leader: null,
        nickname: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '磯辺　典子',
        name_kana: 'いそべ　のりこ',
        year:2,
        height:143,
        team: 'アヒルさん',
        role: '車長',
        leader: true,
        nickname: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '近藤　妙子',
        name_kana: 'こんどう　たえこ',
        year:1,
        height:167,
        team: 'アヒルさん',
        role: '通信手',
        leader: null,
        nickname: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '河西　忍',
        name_kana: 'かわにし　しのぶ',
        year:1,
        height:170,
        team: 'アヒルさん',
        role: '操縦手',
        leader: null,
        nickname: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '佐々木　あけび',
        name_kana: 'ささき　あけび',
        year:1,
        height:165,
        team: 'アヒルさん',
        role: '砲手',
        leader: null,
        nickname: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '鈴木　貴子',
        name_kana: 'すずき　たかこ',
        year:2,
        height:165,
        team: 'カバさん',
        role: '装填手',
        leader: true,
        nickname: 'カエサル',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '松本　里子',
        name_kana: 'まつもと　さとこ',
        year:2,
        height:158,
        team: 'カバさん',
        role: '車長',
        leader: null,
        nickname: 'エルヴィン',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '杉山　清美',
        name_kana: 'すぎやま　きよみ',
        year:2,
        height:156,
        team: 'カバさん',
        role: '砲手',
        leader: null,
        nickname: '左衛門佐',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '野上　武子',
        name_kana: 'のがみ　たけこ',
        year:2,
        height:149,
        team: 'カバさん',
        role: '操縦手',
        leader: null,
        nickname: 'おりょう',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '澤　梓',
        name_kana: 'さわ　あずさ',
        year:1,
        height:151,
        team: 'ウサギさん',
        role: '車長',
        leader: true,
        nickname: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '山郷　あゆみ',
        name_kana: 'やまごう　あゆみ',
        year:1,
        height:160,
        team: 'ウサギさん',
        role: '砲手',
        leader: null,
        nickname: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '丸山　紗希',
        name_kana: 'まるやま　さき',
        year:1,
        height:150,
        team: 'ウサギさん',
        role: '装填手',
        leader: null,
        nickname: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '阪口　桂利奈',
        name_kana: 'さかぐち　かりな',
        year:1,
        height:145,
        team: 'ウサギさん',
        role: '操縦手',
        leader: null,
        nickname: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '宇津木　優季',
        name_kana: 'うつぎ　ゆうき',
        year:1,
        height:145,
        team: 'ウサギさん',
        role: '通信手',
        leader: null,
        nickname: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '大野　あや',
        name_kana: 'おおの　あや',
        year:1,
        height:150,
        team: 'ウサギさん',
        role: '砲手',
        leader: null,
        nickname: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '園　みどり子',
        name_kana: 'その　みどりこ',
        year:3,
        height:145,
        team: 'カモさん',
        role: '車長',
        leader: true,
        nickname: 'そど子',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '後藤　モヨ子',
        name_kana: 'ごとう　もよこ',
        year:2,
        height:145,
        team: 'カモさん',
        role: '操縦手',
        leader: null,
        nickname: 'ごも代',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '金春　希美',
        name_kana: 'こんぱる　のぞみ',
        year:2,
        height:145,
        team: 'カモさん',
        role: '砲手',
        leader: null,
        nickname: 'パゾ美',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};

