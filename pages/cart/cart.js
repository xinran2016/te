// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color: 'red',
    style2: '',
    style: 'anniu',
    t: [1, 2, 3],
    p:1,
    top: 0,
    age: 18,
    lists: [
      '我就是数据1',
      '我就是数据1',
      '我就是数据1',
      '我就是数据1',
      '我就是数据1',
      '我就是数据1',
      '我就是数据1',
      '我就是数据1',
      '我就是数据1',
      '我就是数据1',
      '我就是数据1',
      '我就是数据1',
      '我就是数据1',
      '我就是数据1',
      '我就是数据1',
      '我就是数据1',
      '我就是数据1',
      '我就是数据1',
      '我就是数据1',
      '我就是数据1',
      '我就是数据1',
      '我就是数据1',
      '我就是数据1',
      '我就是数据1',
      '我就是数据1',
      '我就是数据2'
    ],
    items: []
  },

  onLoad(options) {
    // console.log(options);

    // wx.request({
    //   url: '',
    //   data: {},
    //   header: { 'content-type': 'application/json' },
    //   method: 'GET',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: (result) => {

    //   },
    //   fail: () => { },
    //   complete: () => { }
    // });
  },

  onReady(){
    // this.data.age = 50;
    this.setData({
      age : 50
    })
  },

  clickF(e) {
    console.log(e)
  },
  clickF2(e) {
    // console.log(e.currentTarget.dataset)

    let { color } = e.currentTarget.dataset;
    this.setData({
      color
    })
  },
  clickF3(e) {
    // console.log(e.currentTarget.dataset)
    if (this.data.style === 'anniu') {
      this.data.style += ' line'
    } else {
      this.data.style = 'anniu'
    }
    this.setData({
      style: this.data.style
    })

    // console.log(this.data.style.join(' '))
  },
  clickF4(e) {
    this.setData({
      top: 0
    })
  },
  top(evt) {
    // 滚动离顶部高度
    let scrollTop = evt.detail.scrollTop;

    // 显示回到顶部
    if (scrollTop >= 150) {
      this.setData({
        style2: 'now'
      })
    }
    // 隐藏回到顶部
    if (scrollTop < 150) {
      this.setData({
        style2: ''
      })
    }

  },
  // 回到顶部
  gotoTop() {
    this.setData({
      top: 0
    })
  },
  getmore(evt) {
    // console.log('到底了')
    let p = this.data.p + 1;
    let newVal = [];
    for(let i=0;i<20;i++){
      newVal.push('新数据'+p);
    }
    /* this.data.items.forEach((item,index)=>{
      this.data.lists.push(item);
    }) */
    let lists = this.data.lists.concat(newVal);
    this.setData({
      lists,
      p
    })
  },
  onShareAppMessage() {
    return {
      title: "小P学堂，让我成长",
      path: "/pages/btn/btn",
      imageUrl: "https://wx.1314000.cn/avatar.png"
    };
  }
})