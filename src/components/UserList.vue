<template>
  <table>
    <thead>
      <th
        v-text="'Namn'"
      />
      <th
        v-text="'Date of Birth'"
      />
      <th
        v-text="'Age'"
      />
      <th
        v-text="'Profession'"
      />
      <th
        v-text="'Country'"
      />
      <th
        v-text="'Favorite Quote'"
      />
      <th
        v-text="''"
      />
    </thead>
    <tbody>
      <tr
        v-for="(user, key) in users"
        :key="key"
      >
        <td
          v-text="user.firstName + ' ' + user.lastName"
        />
        <td
          v-text="user.birthDate"
        />
        <td
          v-text="userAge(user)"
        />
        <td
          v-text="getProfession(user.profession_id)"
        />
        <td
          v-text="getCountry(user.country_id)"
        />
        <td
          v-text="user.quote"
        />
        <td
          @click="removeRow(user)"
        >
          Remove
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: 'UserList',
  components: {
  },
  data() {
    return {
      selected: []
    };
  },
  computed: {
    ...mapState({
      users: state => state.userModule.users,
      professions: state => state.professionModule.professions
    }),
    ...mapGetters(["getProfession", "getCountry"])
  },
  methods: {
    ...mapActions(["removeUser"]),
    removeRow(user) {
      this.$store.dispatch("removeUser", user);
    },
    userAge(user) {
      const birthDate = user.birthDate;
      const todaysDate = Date.now();
      const birthDateInMilliseconds = (new Date(birthDate)).getTime();
      const ageInMilliSeconds = todaysDate - birthDateInMilliseconds;
      const age = (new Date(ageInMilliSeconds)).getUTCFullYear() - 1970;
      return age;
    },
  },
}
</script>