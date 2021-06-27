<template>
  <div class="container">
    <alert-modal />
    <add-user />
    <user-list />
  </div>
</template>

<script>
  import AddUser from './components/AddUser.vue'
  import AlertModal from './components/AlertModal.vue'
  import UserList from './components/UserList.vue'

  export default {
    name: 'App',
    components: {
      AddUser,
      AlertModal,
      UserList,
    },
  }
</script>