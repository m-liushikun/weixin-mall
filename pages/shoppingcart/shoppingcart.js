// pages/shoppingcart/shoppingcart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc:'http://image-shop.dxracer.com.cn/',
    checkBox:[],
    handleCheckAll:{},
    cartList: [{
      "image": "modelcolor/430X430d2469cb1ce4b4da2ab7cab5c0c54304920180622091816.jpg",
      "quantity": 1,
      "salePrice": 1599.00,
      "id": "96d5c99b4be64112a088b287556d6656",
      "productName": "DXRACER迪瑞克斯 女神女生电竞椅小仙女主播直播椅电脑椅人体工学椅",
      "productType": "0102a78ee81740229b04b2baa6e9cd39",
      "originSalePrice": 1599.00,
      "productAttr": "【萤粉女神款】【铝合金脚】【旋转升降扶手】"
    }, {
      "image": "modelcolor/430X430948196eb17a94a98b938c655e40e575620180619160953.jpg",
      "quantity": 1,
      "salePrice": 1599.00,
      "id": "9f1ccab7727e42b98017bf3784ea3c6c",
      "productName": "DXRACER迪瑞克斯 FE0二代电脑椅子 LPL品牌电脑椅家用办公椅转椅",
      "productType": "0102a78ee81740229b04b2baa6e9cd39",
      "originSalePrice": 1599.00,
      "productAttr": "【黑红色】【铝合金脚】【升降扶手】"
    }, {
      "image": "modelcolor/430X43035aa1360f9d543b796bf9f425478761420180621135636.jpg",
      "quantity": 1,
      "salePrice": 1999.00,
      "id": "ebb3c4296a304f24b2d147167f28bef2",
      "productName": "DXRACER迪瑞克斯 人体工学电脑椅子 办公椅 老板椅 家用电竞椅转椅 KS06 白色",
      "productType": "0102a78ee81740229b04b2baa6e9cd39",
      "originSalePrice": 1999.00,
      "productAttr": "【黑白(ZERO)】【铝合金脚】【旋转升降扶手】"
    }],
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
  
  },

  checkboxChange:function(e){
    var arr = [], obj ={};
    var index = e.target.dataset.index;
    var Check = false
    if(e.detail.value.length > 0){
      for (var i = 0; i < this.data.checkBox.length;i++){
        if (index == this.data.checkBox[i].index){
            Check = true
        }
        arr.push(this.data.checkBox[i]);
      }
      if(Check == false){
          obj.index = index;
          obj.id = e.detail.value;
          arr.push(obj);
      }
      this.setData({
        checkBox:arr
      })
    }else{
      for (var i = 0; i < this.data.checkBox.length; i++) {
        if (index != this.data.checkBox[i].index) {
          arr.push(this.data.checkBox[i]);
        }
      }
      this.setData({
        checkBox: arr
      })
    }
    if (this.data.checkBox.length == this.data.cartList.length){
        this.setData({
          "handleCheckAll.checks":"true"
        })
    }else{
      this.setData({
        handleCheckAll: {}
      })
    }
  },
  handleCheckAll:function(e){
      for (var i = 0; i < this.data.cartList.length; i++) {
        var EcheckTrue = "cartList[" + i +"].checks.checks"
        var EcheckFalse = "cartList[" + i + "].checks"
        if (this.data.cartList[i].checks == "checks:true"){
          console.log("*****************")
          
          this.setData({
            [EcheckFalse]: {}
          })
          console.log(this.data.cartList[i].checks)
        }else{
          console.log("++++++++++++++++++++++")
          
          this.setData({
            [EcheckTrue]: true
          })
          console.log(this.data.cartList[i].checks)
        }
        
      }
    console.log(this.data.cartList)

  }
})