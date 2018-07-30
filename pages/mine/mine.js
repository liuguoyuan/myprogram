var appInstance = getApp();
var util = require('../../utils/util.js');
var postsData = require('../../utils/posts-data.js');

var pageData = {
  data: { 
    "user_center1": { 
      "type": "user-center", 
      "style": "opacity:1;color:rgb(255, 255, 255);margin-top:0;font-size:37.5rpx;height:656.25rpx;margin-left:auto;", 
      "content": "", 
      "customFeature": { "mode": 1, "with-horizontal": true, "appendComponent": ["myAddress", "myOrder", "shoppingCart", "myMessage"] },      "animations": [],
      "page_form": "",
      "compId": "user_center1",
      "parentCompid": "user_center1"
    },
    date: '2018.07.30'
  },
  app_title: '我的应用',
  app_description: '我的应用',
  page_router: 'page10000',
  page_form: 'none',
  list_compids_params: [],
  goods_compids_params: [],
  relobj_auto: [],
  bbsCompIds: [],
  dynamicVesselComps: [],
  
  onLoad: function (e) {
    // appInstance.setPageUserInfo();
    // if (e.detail) {
    //   this.dataId = e.detail;
    // }
    // appInstance.checkLogin();
    console.log(postsData.postList[0].date)
    var that = this;
    that.setData({
      date: postsData.postList[0].date
    })
  },
  dataInitial: function () {
    appInstance.dataInitial();
  },
  onShareAppMessage: function () {
    var pageRouter = this.page_router;
    return {
      title: this.app_title || '即速应用',
      desc: this.app_description || '即速应用，拖拽生成app，无需编辑代码，一键打包微信小程序',
      path: '/pages/' + pageRouter + '/' + pageRouter
    }
  },
  onShow: function () {
    var that = this;
    // setTimeout(function () {
    //   appInstance.setPageUserInfo();
    // });
  },

  pageScrollFunc: function (e) {
    let compid = e.target.dataset.compid;
    let curpage = parseInt(e.target.dataset.curpage) + 1;
    appInstance.pageScrollFunc(compid, curpage);
  },
  goodsScrollFunc: function (e) {
    let compid = e.target.dataset.compid;
    let curpage = parseInt(e.target.dataset.curpage) + 1;
    appInstance.goodsScrollFunc(compid, curpage);
  },
  changeCount: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.changeCount(dataset);
  },
  inputChange: function (e) {
    let dataset = e.currentTarget.dataset;
    let value = e.detail.value;
    appInstance.inputChange(dataset, value);
  },
  bindDateChange: function (e) {
    let dataset = e.currentTarget.dataset;
    let value = e.detail.value;
    appInstance.bindDateChange(dataset, value);
  },
  bindTimeChange: function (e) {
    let dataset = e.currentTarget.dataset;
    let value = e.detail.value;
    appInstance.bindTimeChange(dataset, value);
  },
  bindSelectChange: function (e) {
    let dataset = e.currentTarget.dataset;
    let value = e.detail.value;
    appInstance.bindSelectChange(dataset, value);
  },
  bindScoreChange: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.bindScoreChange(dataset);
  },
  submitForm: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.submitForm(dataset);
  },
  udpateVideoSrc: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.udpateVideoSrc(dataset);
  },
  tapMapDetail: function (event) {
    appInstance.turnToPage("../mapDetail/mapDetail?eventParams=" + event.currentTarget.dataset.eventParams);
  },
  uploadFormImg: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.uploadFormImg(dataset);
  },
  listVesselTurnToPage: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.listVesselTurnToPage(dataset);
  },
  UserCenterTurnToPage: function (e) {
    let router = e.currentTarget.dataset.router;
    appInstance.turnToPage('../' + router + '/' + router + '?from=userCenterEle');
  },
  turnToGoodsDetail: function (e) {
    let id = e.currentTarget.dataset.id;
    let contact = e.currentTarget.dataset.contact;
    appInstance.turnToPage('../goodsDetail/goodsDetail?detail=' + id + '&contact=' + contact);
  },
  sortListFunc: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.sortListFunc(dataset);
  },
  bbsInputComment: function (e) {
    var dataset = e.target.dataset,
      comment = e.detail.value;
    appInstance.bbsInputComment(dataset, comment);
  },
  bbsInputReply: function (e) {
    var dataset = e.target.dataset,
      comment = e.detail.value;
    appInstance.bbsInputReply(dataset, comment);
  },
  uploadBbsCommentImage: function (e) {
    var dataset = e.currentTarget.dataset;
    appInstance.uploadBbsCommentImage(dataset);
  },
  uploadBbsReplyImage: function (e) {
    var dataset = e.currentTarget.dataset;
    appInstance.uploadBbsReplyImage(dataset);
  },
  deleteCommentImage: function (e) {
    var dataset = e.currentTarget.dataset;
    appInstance.deleteCommentImage(dataset);
  },
  deleteReplyImage: function (e) {
    var dataset = e.currentTarget.dataset;
    appInstance.deleteReplyImage(dataset);
  },
  bbsPublishComment: function (e) {
    var dataset = e.currentTarget.dataset;
    appInstance.bbsPublishComment(dataset);
  },
  clickBbsReplyBtn: function (e) {
    var dataset = e.currentTarget.dataset;
    appInstance.clickBbsReplyBtn(dataset);
  },
  bbsPublishReply: function (e) {
    var dataset = e.currentTarget.dataset;
    appInstance.bbsPublishReply(dataset);
  },
  keywordList: {},
  bindSearchTextChange: function (e) {
    this.keywordList[e.currentTarget.dataset.compid] = e.detail.value;
  },
  searchList: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.searchList(dataset);

  },




  tapGoodsTradeHandler: function (event) {
    appInstance.tapGoodsTradeHandler(event);
  },
  tapInnerLinkHandler: function (event) {
    appInstance.tapInnerLinkHandler(event);
  },
  tapPhoneCallHandler: function (event) {
    appInstance.tapPhoneCallHandler(event);
  },
  tapRefreshListHandler: function (event) {
    var _this = this;
    appInstance.tapRefreshListHandler(event, _this);
  }
};
Page(pageData);
