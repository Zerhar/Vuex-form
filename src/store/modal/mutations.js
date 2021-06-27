const mutations = {
    SET_ALERT_TEXT: (state, value) => {
        state.alertText = value;
    },
    SHOW_MODAL: (state, value) => {
        state.showModalBox = value;
    }
};

export default mutations;