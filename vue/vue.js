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
     groceryList: [{
         text: '蔬菜'
       },
       {
         text: '奶酪'
       },
       {
         text: '随便其他什么人吃的东西'
       }
     ]
   },
   created: function () {
     console.log(this.groceryList);
   }
 })

 // var vm = new Vue({
 //   data: {
 //     a: 1
 //   },
 //   created: function () {
 //     // `this` 指向 vm 实例
 //     console.log('a is: ' + this.a)
 //   }
 // })
 // -> "a is: 1"

 var watchExampleVM = new Vue({
   el: '#watch-example',
   data: {
     question: '',
     answer: 'I cannot give you an answer until you ask a question!'
   },
   watch: {
     // 如果 question 发生改变，这个函数就会运行
     question: function (newQuestion) {
       this.answer = 'Waiting for you to stop typing...'
       this.getAnswer()
     }
   },
   methods: {
     // _.debounce 是一个通过 lodash 限制操作频率的函数。
     // 在这个例子中，我们希望限制访问yesno.wtf/api的频率
     // ajax请求直到用户输入完毕才会发出
     // 学习更多关于 _.debounce function (and its cousin
     // _.throttle), 参考: https://lodash.com/docs#debounce
     getAnswer: _.debounce(
       function () {
         var vm = this
         if (this.question.indexOf('?') === -1) {
           vm.answer = 'Questions usually contain a question mark. ;-)'
           return
         }
         vm.answer = 'Thinking...'
         axios.get('https://yesno.wtf/api')
           .then(function (response) {
             vm.answer = _.capitalize(response.data.answer)
           })
           .catch(function (error) {
             vm.answer = 'Error! Could not reach the API. ' + error
           })
       },
       // 这是我们为用户停止输入等待的毫秒数
       500
     )
   }
 });

 var app8 = new Vue({
   el: '#app-8',
   data: {
     loginType: 'username',
     ok: true
   }
 });

 var app9 = new Vue({
   el: '#app-9',
   methods: {
     say: function (message) {
       alert(message);
     },
     warn: function (message, event) {
       if (event) event.preventDefault()
       alert(message)
     }
   }
 });
 var app10 = new Vue({
   el: '#app-10',
   data: {
     message: '',
     checked: false,
     checkedNames: [],
     picked: '',
     selected: null,
     selected1: 'A',
      options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
   }
 })

 Vue.component('my-component', {
  template: '<span>{{ message }}</span>',
  data:function(){
    return {
      message:0
    }
  }
})

Vue.component('child2', {
  // camelCase in JavaScript
  props: ['myMessage'],
  template: '<span>{{ myMessage }}</span>'
})
Vue.component('child', {
  // 声明 props
  props: ['message'],
  // 就像 data 一样，prop 可以用在模板内
  // 同样也可以在 vm 实例中像 “this.message” 这样使用
  template: '<span>{{ message }}</span>'
})

Vue.component('button-counter', {
  template: '<button v-on:click="increment2">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    increment2: function () {
      this.counter += 1
      this.$emit('increment')
    }
  },
})
new Vue({
  el: '#counter-event-example',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }
})
var app11 = new Vue({
  el:'#app-11',
  data:{
    parentMsg:'message from parent'
  }
})

