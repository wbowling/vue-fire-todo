<template>
  <div>
    Todos:
    <li v-for="todo in todos">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </div>
</template>

<script>
  export default {
    name: 'Todos',
    props: ['todos', 'removeTodo'],
  };
</script>