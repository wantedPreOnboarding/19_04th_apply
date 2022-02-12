const users = [
  {
    userId: 1,
    userName: '임수',
    avatarURL: `${process.env.REACT_APP_ASSET_PATH}/defaultUserImg.png`,
  },
  {
    userId: 2,
    userName: '송현',
    avatarURL: `${process.env.REACT_APP_ASSET_PATH}/defaultUserImg.png`,
  },
  {
    userId: 3,
    userName: '빈다',
    avatarURL: `${process.env.REACT_APP_ASSET_PATH}/defaultUserImg.png`,
  },
];

const messages = [
  {
    id: 1000,
    createAt: 1644492766000,
    userId: 1,
    message: '안녕~',
  },
  {
    id: 1001,
    createAt: 1644492996000,
    userId: 2,
    message: '응 임수야~',
  },
  {
    id: 1002,
    createAt: 1644494116000,
    userId: 3,
    message: '앗 금지!',
  },
  {
    id: 1003,
    createAt: 1644494000000,
    userId: 1,
    message: '너무해 ㅠㅠ',
  },
  {
    id: 1004,
    createAt: 1644494100000,
    userId: 3,
    message: '😋',
  },
];

export { users, messages };
