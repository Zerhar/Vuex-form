<template>
  <div
    v-if="showModalBox"
    class="modal"
  >
    <div
        class="modal-content"
    >
        <span
            @click="close"
            class="close"
        >
            &times;
        </span>
        <div>
            {{ alertText }}
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'AlertModal',
  computed: {
    ...mapState({
      alertText: state => state.modalModule.alertText,
      showModalBox: state => state.modalModule.showModalBox,
    })
  },
  methods: {
      ...mapMutations({
        showModal: "SHOW_MODAL",
      }),
      close() {
          this.showModal(false);
      }
  },
}
</script>

<style>

</style>