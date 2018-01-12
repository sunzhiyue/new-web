/**
 * sunzhiyue   2018-1-11
 */

 export default {
   namespace: 'users',
   state: {
     list: [],
     total: null,
     loading: false,
     current: null,
     currentItem: {},
     modalVisible: false,
     modalType: 'create',
   },

   reducers: {
     showLoading() {},
     showModal() {},
     hideModal() {},
     querySuccess() {},
     create() {},
     deleteeSuccess() {},
     updataSuccess() {},
   },
 };
