import axios from 'axios'
// import jsonp from 'jsonp'
// import qs from 'qs'
// //

const state = {
    ids: [867822471, 150524989, 963404566, 398340443],
    title: 'Music',
    author: "uercal",
    isload: false,
    isshow: false,
    show_title: 'SHOW',
    bgm: [],
    playbgm: [],
    audio: new Audio(),
    backStyle: "background-image: url('')",
}

const getters = {
    backStyle: state => state.backStyle,
    title: state => state.title,
    author: state => state.author,
    isload: state => state.isload,
    isshow: state => state.isshow,
    show_title: state => state.show_title,
    bgm: state => state.bgm,
    playbgm: state => state.playbgm,
    audio: state => state.audio
}

const actions = {
    Onbgm: ({ commit }, index) => {
        console.log(index);
        let data = state.bgm[index]['tracks'];
        commit('LOADED_TRACKS', { data })
    },
    play: ({ commit }, value, audio) => {
        console.log(value.album.blurPicUrl);
        let backUrl = value.album.blurPicUrl;
        axios.get('/music/getDetail/' + value.id, {}, {
            headers: {},
            emulateJSON: true
        }).then(res => {
            // console.log(res.data);
            // state.audio.src = res.data;
            // state.audio.load();
            // state.audio.play();
            state.audio.audio.src = res.data;
            state.audio.element.children[0].firstChild.src = backUrl;
            state.audio.audio.load();
            state.audio.audio.play();
            console.log(state.audio);

            state.backStyle = "background: url('" + backUrl + "');";

        }).catch(function(res) {
            console.log('error');
            console.log(res);
        });

    },
    getBgm({ commit }, payload) {
        console.log('run getBgm');
        // console.log(payload);
        let data = [];
        let ids = state.ids;
        for (let i of ids) {
            axios.get('/music/getTracks?list_id=' + i).then(res => {
                console.log(res);
                data.push({
                    title: res.data.result.name,
                    src: res.data.result.coverImgUrl,
                    tracks: res.data.result.tracks
                });
            }).catch(function(err) {
                console.log(err)
            });
        }
        commit('LOADED_BGM', { data, payload });
        // commit('SHOWBGM', {});
    },
    showBgm({ commit }) {
        commit('SHOWBGM', {});
    }
}

//传递给vue需要改变的数据（方法）
const mutations = {
    ['LOADED_BGM'](state, { data, payload }) {
        state.bgm = data;
        state.audio = payload.audio;
    },

    ['LOADED_TRACKS'](state, { data }) {
        state.playbgm = data;
        state.isshow = true;
    },

    ['SHOWBGM'](state, {}) {
        state.show_title = state.show_title == 'SHOW' ? 'HIDDEN' : 'SHOW'
        state.isload = !state.isload
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}