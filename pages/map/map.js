var qqmap = require('../../libs/qqmap-wx-jssdk.min.js');
var qqmapsdk = new qqmap({
  key: "PKRBZ-M7MCW-7EIRF-OOUMT-EW6TQ-S4BFY"
});
Page({
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    address: '',
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/image/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/image/location.png'
    }]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  onLoad: function () {
    this.getCenterLocation(this)
  },
  // 获取当前地址
  getCenterLocation: function (_self) {
    
    wx.getLocation({
      success: function(res) {
        _self.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        });
        _self.loadCity(res.latitude, res.longitude)
      },
    })
  },
  //把当前位置的经纬度传给高德地图，调用高德API获取当前地理位置，天气情况等信息
  loadCity: function (latitude, longitude) {
    var that = this;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      // keyword: '酒店',
      //逆解析成功回调函数
      success: function (res) {
        console.log(res)
        var res = res.result;
        that.setData({
          address: res.address,
          city: res.address_component.city,
          markers: [{
            id: 1,
            latitude: res.location.lat,
            longitude: res.location.lng,
            name: res.address
          }]
        })
      },
      fail: function (res) {
        console.log(res)
      }
    })
  },
  // 选择城市
  selcity: function () {
    var that = this;
    qqmapsdk.geocoder({
      
      address: '河北省石家庄市',
      //逆解析成功回调函数
      success: function (res) {
        console.log(res)
        var res = res.result;
        // that.setData({
        //   address: res.address,
        //   markers: [{
        //     id: 1,
        //     latitude: res.location.lat,
        //     longitude: res.location.lng,
        //     name: res.address
        //   }]
        // })
      },
      fail: function (res) {
        console.log(res)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  }
})
