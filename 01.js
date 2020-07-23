// let ary = [{
//   id: 1,
//   name: '张三'
// }, {
//   id: 2,
//   name: '李四'
// }];

// let target = ary.findIndex((item, index) => item.id == 2);

class A {
  //ES6中的构造方法（类的属性，定义在构造方法中）
  constructor(name) {
    this.name = name;
    this.age = 30;
  }
  //实例方法
  say() {
    console.log('我是A中的实例方法say，我的名字是 ' + this.name);
  }
  //静态方法(静态方法与实例方法 同名互不影响)
  static say() {
    console.log("我是A中的静态方法say");
  }
}

//直接调用静态方法
console.log(A.prototype);



// console.log(person2.name);
