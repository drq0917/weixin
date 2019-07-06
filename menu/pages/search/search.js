// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
  },
  bindd:function(e){
    var value=e.detail.value;
    
    console.log(value)
    wx.request({
      url: 'https://apis.juhe.cn/cook/query.php?key=9e95051fbfc7d6a8c5eb2422bf16814c&menu=' + value,
      success: res => {
        console.log(res)
        this.setData({
          list: res.data.result.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})