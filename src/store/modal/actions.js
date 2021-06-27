const actions = {
    setModalBox({commit}, modalData) {
        const { alertText, showModal } = modalData;
        commit('SHOW_MODAL', showModal);
        commit('SET_ALERT_TEXT', alertText);
    }
};

export default actions;