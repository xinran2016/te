// pages/cates/cates.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        age: 20,
        person: {
            name: 'eric',
            age: 15
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 不同于vue，vue底层实现了自动挂载
        this.data.age = 30;
        // console.log(this.age);
    }
})