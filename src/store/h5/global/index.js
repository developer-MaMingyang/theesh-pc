/*
* author: mamingyang@baofeng.com
* date: 2019/3/15
*/

const global = {
    namespaced: true,
    state: {
        source: 'h5',
    },
    mutations: {
        initSource(state, { source }) {
            state.source = source;
        },
    },
    actions: {
        setSource({ commit }, { source }) {
            commit('initSource', { source });
        },
    },
};

export default global;
