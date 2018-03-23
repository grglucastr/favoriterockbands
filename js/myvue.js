var vm = new Vue({
  el: '#myVueApp',
  data:{
    newTodo: '',
    todos:[]
  },
  methods:{
    addNewItem: function(){
      if(this.newTodo.length > 0){
        this.todos.push({title: this.newTodo});
        this.newTodo = '';
      }
    },
    removeItem:function(itemIndex){
      this.todos.splice(itemIndex, 1);
    },
    listFromDataSource: function(){
      var vmTemp = this;
      var url = window.location.pathname + 'db/datasource.json';
      return axios.get(url).then(function(response){
        vmTemp.todos = response.data;
      });
    }
  },
  mounted:function() {
    this.listFromDataSource();
  }
});
