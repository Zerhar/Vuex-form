const mutations = {
    REMOVE_USER: (state, userId) => {
        console.log("state", state.users, "userId", userId);
        state.users = state.users.filter(user => user.id !== userId)
    },
    ADD_NEW_USER: (state, user) => {
        let idArray = state.users.map(x => x.id);
        let highestNumber = Math.max(...idArray);
        let uniqId = highestNumber + 1;
        user.id = uniqId;
        state.users = [...state.users, user];
    },
  };

export default mutations;