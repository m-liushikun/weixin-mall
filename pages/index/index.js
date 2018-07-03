//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    movies: [{ url:"http://image-shop.dxracer.com.cn/poster/a15335b2bcf5470b85a42f2c8deb0f8220180515112933449.jpg"}],
    aditems: [{
      "rowNum": 1,
      "list": [{
        "id": "d1102ea51d1447f6a13fbdaf74c8d7b5",
        "imgUrl": "http://image-shop.dxracer.com.cn/navigation/d1102ea51d1447f6a13fbdaf74c8d7b520180516182225249.jpg",
        "linkUrl": "e78e915e7d5a4327985cd957e91ee88c",
        "rowNum": 1,
        "rowIndex": 1,
        "proportion": 25.0,
        "status": "B",
        "type": "B",
        "createTime": "2018-05-16 18:22:25"
      }, {
        "id": "6824cca7ecbc460da1421b9f3fba3f8c",
        "imgUrl": "http://image-shop.dxracer.com.cn/navigation/6824cca7ecbc460da1421b9f3fba3f8c20180516182239941.jpg",
        "linkUrl": "ec7e45f39ae343efb1911b9fc3c10ea3",
        "rowNum": 1,
        "rowIndex": 2,
        "proportion": 25.0,
        "status": "B",
        "type": "B",
        "createTime": "2018-05-16 18:22:40"
      }, {
        "id": "2752288e4d07451fbb9f71b72bc7ea29",
        "imgUrl": "http://image-shop.dxracer.com.cn/navigation/2752288e4d07451fbb9f71b72bc7ea2920180516182250335.jpg",
        "linkUrl": "b60ee757aa744b14b7e0c969933c98b2",
        "rowNum": 1,
        "rowIndex": 3,
        "proportion": 25.0,
        "status": "B",
        "type": "B",
        "createTime": "2018-05-16 18:22:50"
      }, {
        "id": "98457b5657e544dc845a54406596193f",
        "imgUrl": "http://image-shop.dxracer.com.cn/navigation/98457b5657e544dc845a54406596193f20180516182303069.jpg",
        "linkUrl": "678e83555a5d4a7f9dda680ed0dd98a2",
        "rowNum": 1,
        "rowIndex": 4,
        "proportion": 25.0,
        "status": "B",
        "type": "B",
        "createTime": "2018-05-16 18:23:03"
      }]
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../sort/sort'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
})
