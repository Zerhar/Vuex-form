<template>
  <table class="">
    <thead>
      <th
        class=""
        v-text="'Namn'"
      />
      <th
        class=""
        v-text="'Date of Birth'"
      />
      <th
        class=""
        v-text="'Age'"
      />
      <th
        class=""
        v-text="'Profession'"
      />
      <th
        class=""
        v-text="'Country'"
      />
      <th
        class=""
        v-text="'Favorite Quote'"
      />
      <th
        class=""
        v-text="''"
      />
    </thead>
    <tbody>
      <tr
        v-for="(user, key) in users"
        :key="key"
      >
        <td
          class=""
          v-text="user.firstName + ' ' + user.lastName"
        />
        <td
          class=""
          v-text="user.birthDate"
        />
        <td
          class=""
          v-text="userAge(user)"
        />
        <td
          class=""
          v-text="getProfession(user.profession_id)"
        />
        <td
          class=""
          v-text="getCountry(user.country_id)"
        />
        <td
          class=""
          v-text="user.quote"
        />
        <td
          class=""
        >
          <button
            class=""
            @click="removeRow(user)"
          >
            Remove
          </button>
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