<template>
  <form>
    <div>
      <input
        type="text"
        placeholder="Enter First Name"
        v-model="user.firstName"
      />
    </div>
    <div>
      <input
        type="text"
        placeholder="Enter Last Name"
        v-model="user.lastName"
      />
    </div>
    <div>
      <input
        placeholder="Enter birth date"
        type="text"
        onfocus="(this.type='date')"
        v-model="user.birthDate"
      />
    </div>
    <div>
      <input
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
    <div></div>
    <div>
      <button @click.prevent="addUser">
        Save User
      </button>
    </div>
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