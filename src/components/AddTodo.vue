<template>
  <div>
    <input type="text" @keydown.enter="add" v-model="todo" placeholder="add a todo">
  </div>
</template>

<script>
  export default {
    name: 'AddTodo',
    props: ['addCb'],
    data() {
      return {
        todo: '',
      };
    },
    methods: {
      add() {
        this.addCb(this.todo);
        this.todo = '';
      },
    },
  };
</script>