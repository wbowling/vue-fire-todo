<template>
  <div id="app">
    <div v-if="user">
      Welcome {{ user.displayName }}
      <br />
      <Todos :todos=todos :removeTodo=removeTodo />
      <AddTodo :addCb=addCb />
    </div>
    <div v-else>Authenticating...</div>
  </div>
</template>

<script>
import firebase from 'firebase';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import db from './firebase';

export default {
  name: 'app',
  components: {
    Todos,
    AddTodo,
  },
  data() {
    return {
      user: null,
      todos: [],
    };
  },
  methods: {
    addCb(val) {
      this.$firebaseRefs.todos.push({ text: val });
    },
    removeTodo(todo) {
      this.$firebaseRefs.todos.child(todo['.key']).remove();
    },
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.$bindAsArray('todos', db.ref(`todos/${user.uid}`));
      } else {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
      }
    });
  },
};
</script>

<style>

</style>
