 var app = new Vue({
     el: '#app',
     data: {
         message: 'Hello Vue!'
     }
 })

 var app2 = new Vue({
     el: '#app-2',
     data: {
         message: '页面加载于 ' + new Date()
     }
 })
 var app3 = new Vue({
     el: '#app-3',
     data: {
         seen: true
     }
 })
 var app4 = new Vue({
     el: '#app-4',
     data: {
         todos: [{
                 text: '学习 JavaScript'
             },
             {
                 text: '学习 Vue'
             },
             {
                 text: '整个牛项目'
             }
         ]
     }
 })
 var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { text: '蔬菜' },
      { text: '奶酪' },
      { text: '随便其他什么人吃的东西' }
    ]
  },
  created:function(){
      console.log(this.groceryList);
  }
})

var vm = new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  }
})
// -> "a is: 1"