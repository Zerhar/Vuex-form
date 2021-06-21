<template>
  <div class="container">
    <add-user />
    <user-list />
  </div>
</template>

<script>
  import AddUser from './components/AddUser.vue'
  import UserList from './components/UserList.vue'

  export default {
    name: 'App',
    components: {
      AddUser,
      UserList,
    },
  }
</script>