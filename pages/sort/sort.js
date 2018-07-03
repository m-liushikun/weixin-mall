//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    flag: true,
    catalogNameDeflaut:true,
    brandNameDeflaut:true,
    seriesNameDeflaut:true,
    productList: [{
      "model_img": "http://image-shop.dxracer.com.cn/model/240X240155e4cb36d7d4ea69a77d9318832bf4120180523104925.jpg",
      "original_img": "model/430X430155e4cb36d7d4ea69a77d9318832bf4120180523104925.jpg",
      "catalog_name": "座椅",
      "type_name": "办公椅",
      "create_time": "May 22, 2018 9:31:26 AM",
      "type_id": "b60ee757aa744b14b7e0c969933c98b2",
      "brand_name": "迪瑞克斯",
      "video": "XMzQ0MDE5OTEzMg==",
      "model_no": "OH/CE120",
      "sale_price": "￥2,499.00",
      "brand_id": "3ff20303b1d04909a6130d8653d48cf7",
      "series_id": "00fdf38e9341469a9aea80813833ccfa",
      "small_img": "model/60X60155e4cb36d7d4ea69a77d9318832bf4120180523104925.jpg",
      "catalog_id": "972bb5568ac9478aab979d90d60f275e",
      "model_name": "迪瑞克斯DXRACER FE0二代电脑椅子 LPL品牌电脑椅家用办公椅转椅",
      "last_update": "May 23, 2018 11:22:35 AM",
      "series_name": "Advanced高级系列",
      "model_title": "迪瑞克斯DXRACER FE0二代电脑椅子 LPL品牌电脑椅家用办公椅转椅",
      "id": "155e4cb36d7d4ea69a77d9318832bf41",
      "custom_no1": "",
      "custom_no2": "",
      "status": "Y"
    }, {
      "model_img": "http://image-shop.dxracer.com.cn/model/240X240832e535bc4664257a23e2063fb73362720180523105945.jpg",
      "original_img": "model/430X430832e535bc4664257a23e2063fb73362720180523105945.jpg",
      "catalog_name": "座椅",
      "type_name": "电竞椅",
      "create_time": "May 22, 2018 9:31:26 AM",
      "type_id": "e78e915e7d5a4327985cd957e91ee88c",
      "brand_name": "迪瑞克斯",
      "video": "XMzQ0MDE5OTY5Ng==",
      "model_no": "OH/KS182",
      "sale_price": "￥1,599.00",
      "brand_id": "3ff20303b1d04909a6130d8653d48cf7",
      "series_id": "1e05b540ed7b4036b73ef02e31ea98ed",
      "small_img": "model/60X60832e535bc4664257a23e2063fb73362720180523105945.jpg",
      "catalog_id": "972bb5568ac9478aab979d90d60f275e",
      "model_name": "DXRacer迪瑞克斯 女神电竞椅女生主播直播椅电脑椅人体工学椅",
      "last_update": "May 23, 2018 11:22:48 AM",
      "series_name": "女神款",
      "model_title": "DXRacer迪瑞克斯 女神电竞椅女生主播直播椅电脑椅人体工学椅",
      "id": "832e535bc4664257a23e2063fb733627",
      "custom_no1": "",
      "custom_no2": "",
      "status": "Y"
    }, {
      "model_img": "http://image-shop.dxracer.com.cn/model/240X240e96e36979a4244e98531627c0a77115420180523113437.jpg",
      "original_img": "model/430X430e96e36979a4244e98531627c0a77115420180523113437.jpg",
      "catalog_name": "饰品",
      "type_name": "游戏周边",
      "create_time": "May 23, 2018 11:34:38 AM",
      "type_id": "678e83555a5d4a7f9dda680ed0dd98a2",
      "brand_name": "迪瑞克斯",
      "video": "",
      "model_no": "ZB/001",
      "sale_price": "￥258.00",
      "brand_id": "3ff20303b1d04909a6130d8653d48cf7",
      "series_id": "7ca7c231571745649a240cb2792c16ae",
      "small_img": "model/60X60e96e36979a4244e98531627c0a77115420180523113437.jpg",
      "catalog_id": "7e66866922ca4f59b99a7a1e0e5d772f",
      "model_name": "迪瑞克斯DXRACER颈枕",
      "last_update": "May 23, 2018 11:34:42 AM",
      "series_name": "游戏周边",
      "model_title": "迪瑞克斯DXRACER颈枕",
      "id": "e96e36979a4244e98531627c0a771154",
      "custom_no1": "",
      "custom_no2": "",
      "status": "Y"
    }, {
      "model_img": "http://image-shop.dxracer.com.cn/model/240X2402b0665b21bca4fe297c219ec10ab57af20180523103430.jpg",
      "original_img": "model/500X5002b0665b21bca4fe297c219ec10ab57af20180523103430.jpg",
      "catalog_name": "座椅",
      "type_name": "办公椅",
      "create_time": "May 22, 2018 9:31:26 AM",
      "type_id": "b60ee757aa744b14b7e0c969933c98b2",
      "brand_name": "迪瑞克斯",
      "video": "XMzQ0MDIwMTAzMg==",
      "model_no": "OH/RW92",
      "sale_price": "￥1,399.00",
      "brand_id": "3ff20303b1d04909a6130d8653d48cf7",
      "series_id": "79e9385f6432473dab7de45a52ea4a23",
      "small_img": "model/60X602b0665b21bca4fe297c219ec10ab57af20180523103430.jpg",
      "catalog_id": "972bb5568ac9478aab979d90d60f275e",
      "model_name": "R92款电竞椅W1配置",
      "last_update": "May 23, 2018 11:22:55 AM",
      "series_name": "吃鸡座椅",
      "model_title": "R92款电竞椅W1配置",
      "id": "2b0665b21bca4fe297c219ec10ab57af",
      "custom_no1": "",
      "custom_no2": "",
      "status": "Y"
    }, {
      "model_img": "http://image-shop.dxracer.com.cn/model/240X240dc76cc6393084471ad17905996001e7020180523110612.jpg",
      "original_img": "model/430X430dc76cc6393084471ad17905996001e7020180523110612.jpg",
      "catalog_name": "座椅",
      "type_name": "办公椅",
      "create_time": "May 22, 2018 9:31:26 AM",
      "type_id": "b60ee757aa744b14b7e0c969933c98b2",
      "brand_name": "迪瑞克斯",
      "video": "XMzQ0MDIwMTAzMg==",
      "model_no": "OH/KS28",
      "sale_price": "￥1,999.00",
      "brand_id": "3ff20303b1d04909a6130d8653d48cf7",
      "series_id": "00fdf38e9341469a9aea80813833ccfa",
      "small_img": "model/60X60dc76cc6393084471ad17905996001e7020180523110612.jpg",
      "catalog_id": "972bb5568ac9478aab979d90d60f275e",
      "model_name": "迪瑞克斯DXRacer KX0老板椅升降电脑座椅家用办公椅躺椅LPL电竞椅",
      "last_update": "May 23, 2018 11:23:01 AM",
      "series_name": "Advanced高级系列",
      "model_title": "迪瑞克斯DXRacer KX0老板椅升降电脑座椅家用办公椅躺椅LPL电竞椅",
      "id": "dc76cc6393084471ad17905996001e70",
      "custom_no1": "",
      "custom_no2": "",
      "status": "Y"
    }, {
      "model_img": "http://image-shop.dxracer.com.cn/model/240X2402be27b3b80b04485afcd48c010c2447d20180521202517.jpg",
      "original_img": "model/430X4302be27b3b80b04485afcd48c010c2447d20180521202517.jpg",
      "catalog_name": "座椅",
      "type_name": "电竞椅",
      "create_time": "May 21, 2018 8:25:19 PM",
      "type_id": "e78e915e7d5a4327985cd957e91ee88c",
      "brand_name": "迪瑞克斯",
      "video": "XMzQ0MDIwMTAzMg==",
      "model_no": "OH/FL08",
      "sale_price": "￥1,499.00",
      "brand_id": "3ff20303b1d04909a6130d8653d48cf7",
      "series_id": "00fdf38e9341469a9aea80813833ccfa",
      "small_img": "model/60X602be27b3b80b04485afcd48c010c2447d20180521202517.jpg",
      "catalog_id": "972bb5568ac9478aab979d90d60f275e",
      "model_name": "迪瑞克斯DXRacer FL08电脑椅时尚LPL品牌 游戏座椅转椅健康电竞",
      "last_update": "May 23, 2018 11:23:05 AM",
      "series_name": "Advanced高级系列",
      "model_title": "迪瑞克斯DXRacer FL08电脑椅时尚LPL品牌 游戏座椅转椅健康电竞",
      "id": "2be27b3b80b04485afcd48c010c2447d",
      "custom_no1": "",
      "custom_no2": "",
      "status": "Y"
    }, {
      "model_img": "http://image-shop.dxracer.com.cn/model/240X2405949ba660aff4d27b7da5b24d3d2d3b120180523112504.jpg",
      "original_img": "model/430X4305949ba660aff4d27b7da5b24d3d2d3b120180523112504.jpg",
      "catalog_name": "座椅",
      "type_name": "办公椅",
      "create_time": "May 22, 2018 9:31:26 AM",
      "type_id": "b60ee757aa744b14b7e0c969933c98b2",
      "brand_name": "英格瑞玛",
      "video": "",
      "model_no": "OH/FD06",
      "sale_price": "￥16,800.00",
      "brand_id": "66c0aa5e60a34063b56207b8b197b43a",
      "series_id": "00fdf38e9341469a9aea80813833ccfa",
      "small_img": "model/60X605949ba660aff4d27b7da5b24d3d2d3b120180523112504.jpg",
      "catalog_id": "972bb5568ac9478aab979d90d60f275e",
      "model_name": "DXRACER英格瑞玛 电竞椅 电脑座舱赛车椅 老板椅",
      "last_update": "May 23, 2018 11:25:09 AM",
      "series_name": "Advanced高级系列",
      "model_title": "DXRACER英格瑞玛 电竞椅 电脑座舱赛车椅 老板椅",
      "id": "5949ba660aff4d27b7da5b24d3d2d3b1",
      "custom_no1": "",
      "custom_no2": "",
      "status": "Y"
    }, {
      "model_img": "http://image-shop.dxracer.com.cn/model/240X240a99bd89e0ba349f59084dcd1489c58c820180606182038.jpg",
      "original_img": "model/500X500a99bd89e0ba349f59084dcd1489c58c820180606182038.jpg",
      "catalog_name": "定制",
      "type_name": "办公椅",
      "create_time": "Jun 6, 2018 6:20:39 PM",
      "type_id": "b60ee757aa744b14b7e0c969933c98b2",
      "brand_name": "迪瑞克斯",
      "video": "",
      "model_no": "OH/FA04",
      "sale_price": "￥200.00",
      "brand_id": "3ff20303b1d04909a6130d8653d48cf7",
      "series_id": "00fdf38e9341469a9aea80813833ccfa",
      "small_img": "model/60X60a99bd89e0ba349f59084dcd1489c58c820180606182038.jpg",
      "catalog_id": "6d87a7dcf9344f63b0656bf3f8b48857",
      "model_name": "OH/FA04",
      "last_update": "Jun 6, 2018 6:23:50 PM",
      "series_name": "Advanced高级系列",
      "model_title": "OH/FA04",
      "id": "a99bd89e0ba349f59084dcd1489c58c8",
      "custom_no1": "",
      "custom_no2": "",
      "status": "Y"
    }, {
      "model_img": "http://image-shop.dxracer.com.cn/model/240X24040409998a0fe4062b50e8d711ef5b76720180522093708.jpg",
      "original_img": "model/500X50040409998a0fe4062b50e8d711ef5b76720180522093708.jpg",
      "catalog_name": "座椅",
      "type_name": "电竞桌",
      "create_time": "May 22, 2018 9:37:36 AM",
      "type_id": "ec7e45f39ae343efb1911b9fc3c10ea3",
      "brand_name": "迪瑞克斯",
      "video": "XMzQ0MDE5OTA0MA==",
      "model_no": "GD/1000",
      "sale_price": "￥2,888.00",
      "brand_id": "3ff20303b1d04909a6130d8653d48cf7",
      "series_id": "00fdf38e9341469a9aea80813833ccfa",
      "small_img": "model/60X6040409998a0fe4062b50e8d711ef5b76720180522093708.jpg",
      "catalog_id": "972bb5568ac9478aab979d90d60f275e",
      "model_name": "DXRACER迪瑞克斯电脑桌台式桌家用办公桌 书桌台式电脑桌",
      "last_update": "May 23, 2018 11:23:31 AM",
      "series_name": "Advanced高级系列",
      "model_title": "DXRACER迪瑞克斯电脑桌台式桌家用办公桌 书桌台式电脑桌",
      "id": "40409998a0fe4062b50e8d711ef5b767",
      "custom_no1": "",
      "custom_no2": "",
      "status": "Y"
    }, {
      "model_img": "http://image-shop.dxracer.com.cn/model/240X24083af79be66904f90bf99131ba742bb8420180521180311.jpg",
      "original_img": "model/430X43083af79be66904f90bf99131ba742bb8420180521180311.jpg",
      "catalog_name": "座椅",
      "type_name": "电竞椅",
      "create_time": "May 21, 2018 6:03:13 PM",
      "type_id": "e78e915e7d5a4327985cd957e91ee88c",
      "brand_name": "迪瑞克斯",
      "video": "XMzQ1Nzg3MTgzNg==",
      "model_no": "OH/FA01",
      "sale_price": "￥899.00",
      "brand_id": "3ff20303b1d04909a6130d8653d48cf7",
      "series_id": "00fdf38e9341469a9aea80813833ccfa",
      "small_img": "model/60X6083af79be66904f90bf99131ba742bb8420180521180311.jpg",
      "catalog_id": "972bb5568ac9478aab979d90d60f275e",
      "model_name": "迪锐克斯DXRacer FA01时尚电脑椅采购网吧椅WCG电竞椅休闲游戏椅",
      "last_update": "May 23, 2018 11:23:12 AM",
      "series_name": "Advanced高级系列",
      "model_title": "迪锐克斯DXRacer FA01时尚电脑椅采购网吧椅WCG电竞椅休闲游戏椅",
      "id": "83af79be66904f90bf99131ba742bb84",
      "custom_no1": "",
      "custom_no2": "",
      "status": "Y"
    }],
    "catalog":[{
      "id": "2d789c3f650b4a12bab006f46a303dbd",
      "catalogName": "服装",
      "level": 2,
      "status": "Y",
      "createTime": 1525921709000,
      "lastUpdate": 1525921709000
    }, {
      "id": "6d87a7dcf9344f63b0656bf3f8b48857",
      "catalogName": "定制",
      "level": 4,
      "status": "Y",
      "createTime": 1526296207000,
      "lastUpdate": 1526296207000
    }, {
      "id": "7e66866922ca4f59b99a7a1e0e5d772f",
      "catalogName": "饰品",
      "level": 1,
      "status": "Y",
      "createTime": 1526283852000,
      "lastUpdate": 1526283852000,
    }, {
      "id": "972bb5568ac9478aab979d90d60f275e",
      "catalogName": "座椅",
      "level": 1,
      "status": "Y",
      "createTime": 1525918985000,
      "lastUpdate": 1525918985000
    }],
    "type": [{
      "id": "58c3b63b1200461d8891552b9e7797fc",
      "typeName": "电竞服",
      "parentId": ""
    }, {
      "id": "678e83555a5d4a7f9dda680ed0dd98a2",
      "typeName": "游戏周边",
      "parentId": ""
    }, {
      "id": "814ff096d4d846d9b67f038649d0361e",
      "typeName": "搁脚凳",
      "parentId": ""
    }, {
      "id": "b4a1e7b0c7384692b36ae2f2aa1c8bd4",
      "typeName": "工作服",
      "parentId": ""
    }, {
      "id": "b60ee757aa744b14b7e0c969933c98b2",
      "typeName": "办公椅",
      "parentId": ""
    }, {
      "id": "c97f7c5617e8412a82793704fc78e888",
      "typeName": "赛车椅",
      "parentId": ""
    }, {
      "id": "e2a29f332a9e46a1897aac14efb47441",
      "typeName": "游戏支架",
      "parentId": ""
    }, {
      "id": "e78e915e7d5a4327985cd957e91ee88c",
      "typeName": "电竞椅",
      "parentId": ""
    }, {
      "id": "ec7e45f39ae343efb1911b9fc3c10ea3",
      "typeName": "电竞桌",
      "parentId": ""
    }, {
      "id": "f35fd75489f8462eb03e7cca1b6e5eaa",
      "typeName": "办公桌",
      "parentId": ""
    }],
    "series":[{
      "id": "00fdf38e9341469a9aea80813833ccfa",
      "seriesName": "Advanced高级系列"
    }, {
      "id": "1767cab29bd746a2a6ceb4c88b479c4b",
      "seriesName": "Origin基础系列"
    }, {
      "id": "1e05b540ed7b4036b73ef02e31ea98ed",
      "seriesName": "女神款"
    }, {
      "id": "4ccf80547cb841c2a07f242a48174123",
      "seriesName": "战队款"
    }, {
      "id": "79e9385f6432473dab7de45a52ea4a23",
      "seriesName": "吃鸡座椅"
    }, {
      "id": "7ca7c231571745649a240cb2792c16ae",
      "seriesName": "游戏周边"
    }],
    "brand": [{
      "id": "3ff20303b1d04909a6130d8653d48cf7",
      "brandName": "迪瑞克斯"
    }, {
      "id": "66c0aa5e60a34063b56207b8b197b43a",
      "brandName": "英格瑞玛"
    }, {
      "id": "92b5d7f60c1d4ce8abfb4e5a63ff7b2c",
      "brandName": "锐斯曼"
    }]
  },
  //事件处理函数
  filtration: function () {
    // wx.navigateTo({
    //   url: '../sort/sort'
    // })
  },
  show: function () {
    this.setData({ flag: false })

  },
  //消失
  hide: function () {
    this.setData({ flag: true })
  },
  preventTouchMove: function (e) {
  },
  catalogName: function (e) {
    if (e.target.dataset.key >= 0){
      this.setData({
        catalogNameDeflaut:false
      })
      for (var i = 0; i < this.data.catalog.length; i++) {
        var str = 'catalog['+i+'].seleted';
        if (i == e.target.dataset.key) {
          this.setData({
            [str]: true,
          })
        } else {
          this.setData({
            [str]: false,
          })
        }
        
      }
    }else{
      this.setData({
        catalogNameDeflaut:true
      })
      for (var i = 0; i < this.data.catalog.length; i++) {
        var str = 'catalog[' + i + '].seleted';
          this.setData({
            [str]: false,
          })
      }      
    }
  },
  brandName(e){
    if (e.target.dataset.key >= 0) {
      this.setData({
        brandNameDeflaut: false
      })
      for (var i = 0; i < this.data.brand.length; i++) {
        var str = 'brand[' + i + '].seleted';
        if (i == e.target.dataset.key) {
          this.setData({
            [str]: true,
          })
        } else {
          this.setData({
            [str]: false,
          })
        }

      }
    } else {
      this.setData({
        brandNameDeflaut: true
      })
      for (var i = 0; i < this.data.brand.length; i++) {
        var str = 'brand[' + i + '].seleted';
        this.setData({
          [str]: false,
        })
      }
    }
  },
  seriesName(e){
    if (e.target.dataset.key >= 0) {
      this.setData({
        seriesNameDeflaut: false
      })
      for (var i = 0; i < this.data.series.length; i++) {
        var str = 'series[' + i + '].seleted';
        if (i == e.target.dataset.key) {
          this.setData({
            [str]: true,
          })
        } else {
          this.setData({
            [str]: false,
          })
        }

      }
    } else {
      this.setData({
        seriesNameDeflaut: true
      })
      for (var i = 0; i < this.data.series.length; i++) {
        var str = 'series[' + i + '].seleted';
        this.setData({
          [str]: false,
        })
      }
    }
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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

})
