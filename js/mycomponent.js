Vue.component('todo-item', {
  props: ['text'],
  template: '<li class="list-group-item list-group-item-action">{{text}}</li>'
});
