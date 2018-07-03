// pages/sortDetail/sortDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    kucunshow: false,
    xiajia: false,
    firstshow: false,
    bigchoose: '',
    cxshow: false,
    modal2:true,
    productItemId: '',
    quantity: 1,
    max: 100,
    productId: '',
    selected: true,
    selected1: false,
    productDesc: [{
      "id": "47db5af2b38c49a683ef33128c72fae9",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "attrCode": "品牌名称",
      "attrValue": "DXRACER",
      "rowNum": 1,
      "rowIndex": ""
    }, {
      "id": "9bcbc98d3bfd4bb293135eaed99a71b1",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "attrCode": "型号",
      "attrValue": "RZ85",
      "rowNum": 2,
      "rowIndex": ""
    }, {
      "id": "d2a076761dc04fd198f59264af9cda5c",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "attrCode": "出租车是否可运输",
      "attrValue": "否",
      "rowNum": 3,
      "rowIndex": ""
    }, {
      "id": "5a1cbdd6036842948e677fb7c98a5b7c",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "attrCode": "款式定位",
      "attrValue": "品质奢华型",
      "rowNum": 4,
      "rowIndex": ""
    }, {
      "id": "a2b067d5020f46caba2d855f2f218d76",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "attrCode": "面质材料",
      "attrValue": "人造革",
      "rowNum": 5,
      "rowIndex": ""
    }, {
      "id": "82416333c27c43aab86dbe705b652808",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "attrCode": "材质",
      "attrValue": "其他",
      "rowNum": 6,
      "rowIndex": ""
    }, {
      "id": "00373b04360a4e08ac2fc7b9cc1e74aa",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "attrCode": "五星脚材质",
      "attrValue": "铝合金脚",
      "rowNum": 7,
      "rowIndex": ""
    }, {
      "id": "5c404b9068a948dfafae68001d905505",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "attrCode": "扶手类型",
      "attrValue": "升降扶手",
      "rowNum": 8,
      "rowIndex": ""
    }, {
      "id": "204da2947b6e4268b5601689a88decc3",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "attrCode": "是否可定制",
      "attrValue": "是",
      "rowNum": 9,
      "rowIndex": ""
    }, {
      "id": "60133c97fb4f45cfb20299248aba3567",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "attrCode": "是否可升降",
      "attrValue": "是",
      "rowNum": 10,
      "rowIndex": ""
    }, {
      "id": "59cb913df21e4d23af626d80a9de8f80",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "attrCode": "是否可旋转",
      "attrValue": "是",
      "rowNum": 11,
      "rowIndex": ""
    }, {
      "id": "d47c7ae5d8b44031af37fd74ea9fedda",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "attrCode": "是否支持人体工程学",
      "attrValue": "是",
      "rowNum": 12,
      "rowIndex": ""
    } ],
    productimg: [{
      "id": "3e03543659ab4b8ea2862aa911718199",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "imgUrl": "http://image-shop.dxracer.com.cn/modeldetailimg/3e03543659ab4b8ea2862aa91171819920180620101311.jpg",
      "rowNum": 1
    }, {
      "id": "191154330e65461883a10b89a7782738",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "imgUrl": "http://image-shop.dxracer.com.cn/modeldetailimg/191154330e65461883a10b89a778273820180620101323.jpg",
      "rowNum": 2
    }, {
      "id": "0a0d6a0538104a7b86cea8cbe251bcfc",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "imgUrl": "http://image-shop.dxracer.com.cn/modeldetailimg/0a0d6a0538104a7b86cea8cbe251bcfc20180620101331.jpg",
      "rowNum": 3
    }, {
      "id": "dc5bb397fada4d5394fcade596239693",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "imgUrl": "http://image-shop.dxracer.com.cn/modeldetailimg/dc5bb397fada4d5394fcade59623969320180620101343.jpg",
      "rowNum": 4
    }, {
      "id": "20b6061e379044a0ae7871795d24595f",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "imgUrl": "http://image-shop.dxracer.com.cn/modeldetailimg/20b6061e379044a0ae7871795d24595f20180620101354.jpg",
      "rowNum": 5
    }, {
      "id": "43131304e14147c6914bca9a7f1e0cf8",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "imgUrl": "http://image-shop.dxracer.com.cn/modeldetailimg/43131304e14147c6914bca9a7f1e0cf820180620101405.jpg",
      "rowNum": 6
    }, {
      "id": "68d4854f64da4c03a2accfd6499e145b",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "imgUrl": "http://image-shop.dxracer.com.cn/modeldetailimg/68d4854f64da4c03a2accfd6499e145b20180620101417.jpg",
      "rowNum": 7
    }, {
      "id": "1494bc53febd42fab9ff57337dc79d6f",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "imgUrl": "http://image-shop.dxracer.com.cn/modeldetailimg/1494bc53febd42fab9ff57337dc79d6f20180620101426.jpg",
      "rowNum": 8
    }, {
      "id": "941463f3935145758b838df4c0296a5f",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "imgUrl": "http://image-shop.dxracer.com.cn/modeldetailimg/941463f3935145758b838df4c0296a5f20180620101435.jpg",
      "rowNum": 9
    }, {
      "id": "44885b84a34e4f40b418e7e7f2e0638d",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "imgUrl": "http://image-shop.dxracer.com.cn/modeldetailimg/44885b84a34e4f40b418e7e7f2e0638d20180620101443.gif",
      "rowNum": 10
    }, {
      "id": "19e33d8b7ea54a228e9b7ca718e3015c",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "imgUrl": "http://image-shop.dxracer.com.cn/modeldetailimg/19e33d8b7ea54a228e9b7ca718e3015c20180620101450.jpg",
      "rowNum": 11
    }, {
      "id": "1ec36b5db0374c089300bd9a161bdc9b",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "imgUrl": "http://image-shop.dxracer.com.cn/modeldetailimg/1ec36b5db0374c089300bd9a161bdc9b20180620101509.jpg",
      "rowNum": 12
    }, {
      "id": "93cf0cf193e348a991e63759b50dd859",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "imgUrl": "http://image-shop.dxracer.com.cn/modeldetailimg/93cf0cf193e348a991e63759b50dd85920180620101522.jpg",
      "rowNum": 13
    }, {
      "id": "744998d7a14e4ab9a41020b3c460a970",
      "productModelId": "e43acbeb22c446adb12ecf351d25b7ce",
      "imgUrl": "http://image-shop.dxracer.com.cn/modeldetailimg/744998d7a14e4ab9a41020b3c460a97020180620101532.jpg",
      "rowNum": 14
    }],
    choosesp: {
      img: '',
      itemNo: '',
      price: '',
      cuxiaoprice: '',
      activityName: '',
      startTime: '',
      endTime: '',
      kucun: '',
    },
    movies: [{ url: "http://image-shop.dxracer.com.cn/poster/a15335b2bcf5470b85a42f2c8deb0f8220180515112933449.jpg" }, 
              { url: "http://image-shop.dxracer.com.cn/poster/a15335b2bcf5470b85a42f2c8deb0f8220180515112933449.jpg" }],
    shangp: {
      "product": {
        "id": "88f192c8b3d94bedb76ab705b13c1d0d",
        "catalogId": "7efeb8b53db14c51acc1af46dface451",
        "typeId": "ddeefac7131f4ca7a6df80425e4c1d4f",
        "seriesId": "90714b60f3c64ce9af3c2ebf1ab5f703",
        "brandId": "e2c9022148994065bdf4f49e2df9d968",
        "modelNo": "GD/1000",
        "modelName": "DXRACER迪瑞克斯电脑桌台式桌家用办公桌 书桌台式电脑桌",
        "modelTitle": "DXRACER迪瑞克斯电脑桌台式桌家用办公桌 书桌台式电脑桌",
        "customNo1": "",
        "customNo2": "",
        "createTime": 1529457564000,
        "lastUpdate": 1529995632000,
        "status": "Y",
        "originalImg": "model/500X50088f192c8b3d94bedb76ab705b13c1d0d20180620091923.jpg",
        "modelImg": "model/430X43088f192c8b3d94bedb76ab705b13c1d0d20180620091923.jpg",
        "smallImg": "model/60X6088f192c8b3d94bedb76ab705b13c1d0d20180620091923.jpg",
        "salePrice": 1699.00,
        "video": ""
      },
      "promotions": [{
        "onSalePrice": "1649.00",
        "productItemId": "0c5a15cfc9484d41be805f52ee749aa3",
        "activityName": "新店开张",
        "startTime": "2018-06-27 00:00:00",
        "endTime": "2018-06-29 00:00:00",
        "id": "7dcb296e693347439512932a59ead9ed",
        "activityType": "normal",
        "productModelId": "88f192c8b3d94bedb76ab705b13c1d0d",
        "status": "D"
      }, {
        "onSalePrice": "1649.00",
        "productItemId": "0d8eaddac5364e60a282005e11868bcb",
        "activityName": "新店开张",
        "startTime": "2018-06-27 00:00:00",
        "id": "edf82dd1aa2640308ed78d84c0e49e8c",
        "endTime": "2018-06-29 00:00:00",
        "activityType": "normal",
        "productModelId": "88f192c8b3d94bedb76ab705b13c1d0d",
        "status": "D"
      }, {
        "onSalePrice": "1649.00",
        "productItemId": "151790ae664a42efb04bd3b3256e38cc",
        "activityName": "新店开张",
        "startTime": "2018-06-27 00:00:00",
        "endTime": "2018-06-29 00:00:00",
        "id": "ed09994dec644b9c9332972d43913301",
        "activityType": "normal",
        "productModelId": "88f192c8b3d94bedb76ab705b13c1d0d",
        "status": "D"
      }],
      "crush": [],
      "productImageList": [{
        "id": "3dc8131a170c4fe49a5a4b0507aa1209",
        "productModelId": "88f192c8b3d94bedb76ab705b13c1d0d",
        "listImg": "modelimage/430X4303dc8131a170c4fe49a5a4b0507aa120920180620092709.jpg",
        "smallImg": "modelimage/60X603dc8131a170c4fe49a5a4b0507aa120920180620092709.jpg",
        "originImg": "430X4303dc8131a170c4fe49a5a4b0507aa120920180620092709.jpg",
        "indexNum": 1
      }, {
        "id": "27183e89c47943578cc86021972f40b0",
        "productModelId": "88f192c8b3d94bedb76ab705b13c1d0d",
        "listImg": "modelimage/430X43027183e89c47943578cc86021972f40b020180620092748.jpg",
        "smallImg": "modelimage/60X6027183e89c47943578cc86021972f40b020180620092748.jpg",
        "originImg": "430X43027183e89c47943578cc86021972f40b020180620092748.jpg",
        "indexNum": 2
      }, {
        "id": "a201d737fc734218b6b3245cca6e7688",
        "productModelId": "88f192c8b3d94bedb76ab705b13c1d0d",
        "listImg": "modelimage/430X430a201d737fc734218b6b3245cca6e768820180620092752.jpg",
        "smallImg": "modelimage/60X60a201d737fc734218b6b3245cca6e768820180620092752.jpg",
        "originImg": "430X430a201d737fc734218b6b3245cca6e768820180620092752.jpg",
        "indexNum": 3
      }],
      "productItemList": [{
        "id": "0c5a15cfc9484d41be805f52ee749aa3",
        "productId": "88f192c8b3d94bedb76ab705b13c1d0d",
        "itemNo": "GD-1000-N-1",
        "itemName": "",
        "itemTitle": "",
        "status": "published",
        "customNo1": "GD/1000/N",
        "customNo2": "",
        "createTime": 1529457631000,
        "lastUpdate": 1529457631000,
        "productModelAttrs": "4e8bd2d38143461e9a66193592b2fa6e",
        "isDeleted": "N",
        "salePrice": 1699.00,
        "listImg": "modelcolor/430X4304e8bd2d38143461e9a66193592b2fa6e20180620092435.jpg",
        "originImg": "modelcolor/430X4304e8bd2d38143461e9a66193592b2fa6e20180620092435.jpg",
        "smallImg": "modelcolor/40X404e8bd2d38143461e9a66193592b2fa6e20180620092435.jpg"
      }, {
        "id": "0d8eaddac5364e60a282005e11868bcb",
        "productId": "88f192c8b3d94bedb76ab705b13c1d0d",
        "itemNo": "GD-1000-NR-1",
        "itemName": "",
        "itemTitle": "",
        "status": "published",
        "customNo1": "GD/1000/NR",
        "customNo2": "",
        "createTime": 1529457610000,
        "lastUpdate": 1529457610000,
        "productModelAttrs": "667ad6a7aced488fb7a2f61468e69af5",
        "isDeleted": "N",
        "salePrice": 1699.00,
        "listImg": "modelcolor/430X430667ad6a7aced488fb7a2f61468e69af520180620092430.jpg",
        "originImg": "modelcolor/430X430667ad6a7aced488fb7a2f61468e69af520180620092430.jpg",
        "smallImg": "modelcolor/40X40667ad6a7aced488fb7a2f61468e69af520180620092430.jpg"
      }, {
        "id": "151790ae664a42efb04bd3b3256e38cc",
        "productId": "88f192c8b3d94bedb76ab705b13c1d0d",
        "itemNo": "GD-1000-NE-1",
        "itemName": "",
        "itemTitle": "",
        "status": "published",
        "customNo1": "GD/1000/NE",
        "customNo2": "",
        "createTime": 1529457638000,
        "lastUpdate": 1529457638000,
        "productModelAttrs": "cd4bfda269ac4d0f997b1cbb7fcc6811",
        "isDeleted": "N",
        "salePrice": 1699.00,
        "listImg": "modelcolor/430X430cd4bfda269ac4d0f997b1cbb7fcc681120180620092441.jpg",
        "originImg": "modelcolor/430X430cd4bfda269ac4d0f997b1cbb7fcc681120180620092441.jpg",
        "smallImg": "modelcolor/40X40cd4bfda269ac4d0f997b1cbb7fcc681120180620092441.jpg"
      }, {
        "id": "f11676ad366447f6877b369920101d0f",
        "productId": "88f192c8b3d94bedb76ab705b13c1d0d",
        "itemNo": "GD-1000-NW-1",
        "itemName": "",
        "itemTitle": "",
        "status": "published",
        "customNo1": "GD/1000/NW",
        "customNo2": "",
        "createTime": 1529457596000,
        "lastUpdate": 1529457596000,
        "productModelAttrs": "dd97379cd56e4aae98b1618f6c96349c",
        "isDeleted": "N",
        "salePrice": 1699.00,
        "listImg": "modelcolor/430X430dd97379cd56e4aae98b1618f6c96349c20180620092421.jpg",
        "originImg": "modelcolor/430X430dd97379cd56e4aae98b1618f6c96349c20180620092421.jpg",
        "smallImg": "modelcolor/40X40dd97379cd56e4aae98b1618f6c96349c20180620092421.jpg"
      }],
      "inventory": [{
        "id": "3ceaf5f831d2446183c292ac355f438e",
        "skuId": "0c5a15cfc9484d41be805f52ee749aa3",
        "quantity": 10,
        "lockQuantity": 1,
        "warehouse": "814ff096d4d846d9b67f038649d0361e",
        "lastUpdate": 1530181200000
      }, {
        "id": "01bebb68fba24bfe86b721ccb31912e9",
        "skuId": "0d8eaddac5364e60a282005e11868bcb",
        "quantity": 10,
        "lockQuantity": 0,
        "warehouse": "814ff096d4d846d9b67f038649d0361e",
        "lastUpdate": 1530181200000
      }, {
        "id": "15aa7297b4d04a44ab0de369987a1ef2",
        "skuId": "151790ae664a42efb04bd3b3256e38cc",
        "quantity": 29,
        "lockQuantity": 0,
        "warehouse": "814ff096d4d846d9b67f038649d0361e",
        "lastUpdate": 1530181200000
      }, {
        "id": "c5d22d79874a4027ba0be56fbaf4c551",
        "skuId": "f11676ad366447f6877b369920101d0f",
        "quantity": 9,
        "lockQuantity": 0,
        "warehouse": "814ff096d4d846d9b67f038649d0361e",
        "lastUpdate": 1530181201000
      }],
      "productAttrList": [{
        "attrKey": {
          "id": "93dc3c4a361a4340a4a523ed6299d747",
          "catalogId": "7efeb8b53db14c51acc1af46dface451",
          "catalogAttrValue": "颜色分类",
          "indexNum": 1,
          "isColorAttr": "Y"
        },
        "attrValues": [{
          "id": "4e8bd2d38143461e9a66193592b2fa6e",
          "productModelId": "88f192c8b3d94bedb76ab705b13c1d0d",
          "catalogAttrId": "93dc3c4a361a4340a4a523ed6299d747",
          "modelAttrValue": "静谧黑",
          "indexNum": 3,
          "isDeleted": "N",
          "listImg": "modelcolor/430X4304e8bd2d38143461e9a66193592b2fa6e20180620092435.jpg",
          "smallImg": "modelcolor/40X404e8bd2d38143461e9a66193592b2fa6e20180620092435.jpg",
          "originImg": "modelcolor/430X4304e8bd2d38143461e9a66193592b2fa6e20180620092435.jpg"
        }, {
          "id": "667ad6a7aced488fb7a2f61468e69af5",
          "productModelId": "88f192c8b3d94bedb76ab705b13c1d0d",
          "catalogAttrId": "93dc3c4a361a4340a4a523ed6299d747",
          "modelAttrValue": "锐意红",
          "indexNum": 2,
          "isDeleted": "N",
          "listImg": "modelcolor/430X430667ad6a7aced488fb7a2f61468e69af520180620092430.jpg",
          "smallImg": "modelcolor/40X40667ad6a7aced488fb7a2f61468e69af520180620092430.jpg",
          "originImg": "modelcolor/430X430667ad6a7aced488fb7a2f61468e69af520180620092430.jpg"
        }, {
          "id": "cd4bfda269ac4d0f997b1cbb7fcc6811",
          "productModelId": "88f192c8b3d94bedb76ab705b13c1d0d",
          "catalogAttrId": "93dc3c4a361a4340a4a523ed6299d747",
          "modelAttrValue": "炫光绿",
          "indexNum": 4,
          "isDeleted": "N",
          "listImg": "modelcolor/430X430cd4bfda269ac4d0f997b1cbb7fcc681120180620092441.jpg",
          "smallImg": "modelcolor/40X40cd4bfda269ac4d0f997b1cbb7fcc681120180620092441.jpg",
          "originImg": "modelcolor/430X430cd4bfda269ac4d0f997b1cbb7fcc681120180620092441.jpg"
        }, {
          "id": "dd97379cd56e4aae98b1618f6c96349c",
          "productModelId": "88f192c8b3d94bedb76ab705b13c1d0d",
          "catalogAttrId": "93dc3c4a361a4340a4a523ed6299d747",
          "modelAttrValue": "流光白",
          "indexNum": 1,
          "isDeleted": "N",
          "listImg": "modelcolor/430X430dd97379cd56e4aae98b1618f6c96349c20180620092421.jpg",
          "smallImg": "modelcolor/40X40dd97379cd56e4aae98b1618f6c96349c20180620092421.jpg",
          "originImg": "modelcolor/430X430dd97379cd56e4aae98b1618f6c96349c20180620092421.jpg"
        }]
      }]
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var duanziId = options.id 
    // var that = this
    // wx.showToast({
    //   title: '加载中',
    //   icon: 'loading',
    //   duration: 1000
    // })
    // wx.request({
    //   url: 'http://test-shop.dxracer.com.cn:8084/mall/wap/product/' + duanziId, //服务器参数接收地址， 
    //   // data: { token: token },
    //   method: 'POST',
    //   success: function (res) {
    //     console.log(res.data.result) //打印获取数据 
    //     that.setData({
    //       duanziDetail: res.data.result
    //     })
    //   }
    // }) 
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
  selected: function (e) {
    this.setData({
      selected1: false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true
    })
  },

  chooseBig:function(){
    this.setData({
      modal2:false
    })
  },
  modalClose:function(){
    this.setData({
      modal2: true
    })
  },
  shoppingcart:function(){
    wx.switchTab({
      url: '../shoppingcart/shoppingcart'
    })
  } ,
   //添加
  jia: function () {
    if (this.data.quantity >= this.data.max) {
      this.setData({
        quantity: this.data.max
      })
    } else {
      this.setData({
        quantity: parseInt(this.data.quantity) + 1
      })
        ;
    }
  },
  //减
  jian: function () {
    if (this.data.quantity == 1) {
      this.setData({
        quantity:1
      })
    } else {
      this.setData({
        quantity: parseInt(this.data.quantity) - 1
      })
    }
  },
  //选择商品
  chooseSP:function(e) {
    this.kucunshow = false;
    this.cxshow = false;
    var chooseId = [] ,jishu = 0,chooseAttrText='';
    var catalogattr = e.target.dataset.catalogattr;
    var key = e.target.dataset.key
    // let p = e.target.parentNode.childNodes;
    //商品属性高亮
    for (var j = 0; j < this.data.shangp.productAttrList.length;j++){
      if (j == catalogattr){
        for (var i = 0; i < this.data.shangp.productAttrList[catalogattr].attrValues.length; i++) {
          var str = 'shangp.productAttrList[' + catalogattr + '].attrValues[' + i + '].seleted';
          if (key == i) {
            this.setData({
              [str]: true,
            })
           chooseId.push (this.data.shangp.productAttrList[catalogattr].attrValues[i].id);
           if (catalogattr < this.data.shangp.productAttrList.length-1){
             chooseAttrText = chooseAttrText + this.data.shangp.productAttrList[catalogattr].attrValues[i].modelAttrValue + ","
           }else{
             chooseAttrText = chooseAttrText + this.data.shangp.productAttrList[catalogattr].attrValues[i].modelAttrValue
           }
           
          } else {
            this.setData({
              [str]: false,
            })
          }

        }
      }else{
        for (var k = 0; k < this.data.shangp.productAttrList[catalogattr].attrValues.length; k++) {
          if (this.data.shangp.productAttrList[j].attrValues[k].seleted == "true"){
            chooseId.push(this.data.shangp.productAttrList[j].attrValues[k].id);
            
            if (j < this.data.shangp.productAttrList.length-1){
              chooseAttrText = chooseAttrText + this.data.shangp.productAttrList[j].attrValues[k].modelAttrValue + ","
            }else{
              chooseAttrText = chooseAttrText + this.data.shangp.productAttrList[j].attrValues[k].modelAttrValue
            }
          }
        }
      }
    }
    //显示促销信息
    if (this.data.shangp.promotions)
    this.setData({
      bigchoose: chooseAttrText
    })
      //商品详情页已选显示
    var flag = false;
    //只有选择完属性才可以 读出选中商品的促销价格+促销类目
    if (chooseId.length == this.data.shangp.productAttrList.length) {
      //通过选择属性读出productItemId
      for (let chooseItem of this.data.shangp.productItemList) {
        if (chooseItem.productModelAttrs == chooseId) {
          
          this.setData({
            'choosesp.img':chooseItem.listImg
          })
          
            this.setData({
              'choosesp.itemNo': chooseItem.itemNo
            })
          this.setData({
            'choosesp.price': chooseItem.salePrice
          })
          this.setData({
            productItemId: chooseItem.id
          })
          if (this.data.shangp.promotions.length > 0) {
            for (let cxitem of this.data.shangp.promotions) {
              if (cxitem.productItemId == this.data.productItemId) {
                this.setData({
                  cxshow:true
                })
                this.setData({
                  'choosesp.cuxiaoprice': cxitem.onSalePrice,
                })
                this.setData({
                  'choosesp.activityName': cxitem.activityName,
                })
                this.setData({
                 'choosesp.activityName': cxitem.startTime,
                })
                this.setData({
                  'choosesp.endTime': cxitem.endTime,
                })
              }
            }
          }
          flag = true;
          break;
        } else {
          flag = false
        }

      }
      if (flag == false) {
        this.setData({
          'choosesp.itemNo':'',
          "choosesp.price":'',
          xiajia:true,
          firstshow:false
        })
      } else {
        this.setData({
          xiajia: false,
          firstshow: true
        })
      }
    }
    //计算库存（库存需大于0才显示）
    if (this.data.shangp.inventory.length > 0) {
      for (let kucunitem of this.data.shangp.inventory) {
        if (kucunitem.skuId == this.data.productItemId) {
          this.setData({
            "choosesp.kucun": kucunitem.quantity - kucunitem.lockQuantity
          })
        }
      }
    }
    if (this.data.choosesp.kucun <= 0) {
      this.setData({
        kucunshow:false
      })
    }
  },
})