<template>
  <form class="">
    <div class="">
      <div class="">
        <label
          class=""
          for="grid-first-name"
          v-text="'First Name'"
        />
        <input
          class=""
          id="grid-first-name"
          type="text"
          placeholder="Enter First Name"
          v-model="user.firstName"
        />
      </div>
      <div class="">
        <label
          class=""
          for="grid-last-name"
          v-text="'Last Name'"
        />
        <input
          class=""
          id="grid-last-name"
          type="text"
          placeholder="Enter Last Name"
          v-model="user.lastName"
        />
      </div>
      <div class="">
        <label
          class=""
          for="grid-date"
          v-text="'Date of Birth'"
        />
        <input
          class=""
          id="grid-date"
          type="date"
          v-model="user.birthDate"
        />
      </div>
      <div class="">
        <label
          class=""
          for="grid-quote"
          v-text="'Favorite Quote'"
        />
        <input
          class=""
          id="grid-quote"
          type="text"
          placeholder="Enter Quote"
          v-model="user.quote"
        />
      </div>
      <drop-down
        :options="professions"
        :changeSelect="setProfession"
        :label="'Profession'"
      />
      <drop-down
        :options="countries"
        :changeSelect="setCountry"
        :label="'Country'"
      />
    </div>
    <button class="" @click.prevent="addUser">
      Save User
    </button>
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import DropDown from './DropDown';

export default {
  name: 'AddUser',
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        birthDate: null,
        quote: '',
        profession_id: 1,
        country_id: 1
      },
    };
  },
  components: {
    DropDown,
  },
  computed: {
    ...mapState({
      professions: state => state.professionModule.professions,
      countries: state => state.countryModule.countries
    })
  },
  methods: {
    ...mapActions(["addNewUser"]),
    addUser() {
      if ((this.user.firstName.length === 0) || (this.user.lastName.length === 0)) {
        alert("Whooooooooooooooooooooo are you? WHO? WHO?... WHO? WHO?...");
      } else if (!this.user.birthDate || (new Date(this.user.birthDate).getTime() > new Date().getTime())) {
        alert("What's wrong with your birthday, brah?");
      } else if (this.user.quote.length === 0) {
        alert("Forgetting something?");
      } else {
        this.$store.dispatch("addNewUser", this.user);
        this.user = {
          firstName: '',
          lastName: '',
          birthDate: null,
          quote: '',
          profession_id: 1,
          country_id: 1
        };
      }
    },
    setProfession(id) {
      this.user.profession_id = parseInt(id) + 1;
    },
    setCountry(id) {
      this.user.country_id = parseInt(id) + 1;
    }
  }
}
</script>

<style scoped>
</style>