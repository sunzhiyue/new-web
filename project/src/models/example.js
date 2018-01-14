
export default {

  namespace: 'example',

  state: {
    allContent: [
      {
        name: '余生，我们一起吃饭',
        src: 'http://isujin.com/wp-content/themes/Diaspora/timthumb/timthumb.php?src=http://isujin.com/wp-content/uploads/2017/05/wallhaven-153272.jpg',
        cardContent: '上周末，远嫁外地的好朋友杨洁回来探亲。我们几个女朋友为她接风。酒过三巡饭过五味后，大家便开启了对..',
        date: '十一月 27, 2017',
        edit: '111',
        unhide: '111',
        heart: '111',
      },
      {
        name: '我终于瘦下来了，却不再喜欢你',
        src: 'http://isujin.com/wp-content/themes/Diaspora/timthumb/timthumb.php?src=http://isujin.com/wp-content/uploads/2017/09/wallhaven-558971.jpg',
        cardContent: '01 许桐最大的毛病就是贪吃。 她尤其喜欢吃甜食，精致的蛋糕、松软的面包、酥脆的饼干都是她的心头好...',
        date: '九月 24, 2017',
        edit: '111',
        unhide: '111',
        heart: '222',
      },
      {
        name: '说句再见吧，少年',
        src: 'http://isujin.com/wp-content/themes/Diaspora/timthumb/timthumb.php?src=http://isujin.com/wp-content/uploads/2017/09/wallhaven-241627.jpg',
        cardContent: '1 毕业之后，我和大学的很多同学都留在了这座不大的城市里，两个室友在学校附近租了一套小资豪华房，我...',
        date: '九月 19, 2017',
        edit: '11',
        unhide: '222',
        heart: '11',
      },
      {
        name: '失恋，让我成为更好的人',
        src: 'http://isujin.com/wp-content/themes/Diaspora/timthumb/timthumb.php?src=http://isujin.com/wp-content/uploads/2017/07/wallhaven-134449.jpg',
        cardContent: '1 我是在机场认识的栗子姐，跟她在自助充电那儿偶遇，在等待电充满的时间里，我们随便聊了几句。 她说...',
        date: '七月 31, 2017',
        edit: '11',
        unhide: '22',
        heart: '221',
      },
    ],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        allContent: action.payload };
    },
  },

};
