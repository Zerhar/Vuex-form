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
        :type="type"
        @focus="changeType"
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
import { mapState, mapActions, mapMutations } from 'vuex';
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
      type: 'text',
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
    ...mapActions([
      "addNewUser",
      "setModalBox",
      ]),
    ...mapMutations({
      setAlertText: "SET_ALERT_TEXT",
      }),
    changeType() {
      this.type = 'date';
    },
    addUser() {
      let alertText = '';
      let showModal = true;
      if ((this.user.firstName.length === 0) || (this.user.lastName.length === 0)) {
          alertText = "Whooooooooooooooooooooo are you? WHO? WHO?... WHO? WHO?...";
      } else if (!this.user.birthDate || (new Date(this.user.birthDate).getTime() > new Date().getTime())) {
          alertText = "What's wrong with your birthday, brah?";
      } else if (this.user.quote.length === 0) {
          alertText = "Forgetting something?";
      } else {
        this.$store.dispatch("addNewUser", this.user);
        showModal = false;
        this.type = 'text';
        this.user = {
          firstName: '',
          lastName: '',
          birthDate: null,
          quote: '',
          profession_id: 1,
          country_id: 1
        };
      }
      this.setModalBox({alertText, showModal});
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