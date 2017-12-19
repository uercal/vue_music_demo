// import jsonp from 'jsonp'
// import qs from 'qs'
// //
import APlayer from 'APlayer'

const state = {
    ids: [867822471, 150524989, 963404566],
    title: 'Music',
    author: "uercal",
    isload: false,
    isshow: false,
    show_title: 'SHOW',
    bgm: [],
    playbgm: [],
    elemet: null,
    audio: null,
    backStyle: "/images/1.jpg",
    lrc: '',
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
    audio: state => state.audio,
    lrc: state => state.lrc
}

const actions = {
    Onbgm: ({ commit }, index) => {
        // console.log(index);
        console.log(state.bgm);
        let data = state.bgm[index]['tracks'];
        console.log(data);
        commit('LOADED_TRACKS', { data })
    },
    play: ({ commit }, value, audio) => {
        console.log(value);
        let backUrl = value.al.picUrl;
        // 获取歌词
        axios.get('/music/getLyrics/' + value.id).then(res => {
            let lrc = res.data;
            state.lrc = lrc;
            axios.get('/music/getDetail/' + value.id, {}, {
                headers: {},
                emulateJSON: true
            }).then(res => {
                state.audio = new APlayer({
                    element: state.element,
                    // narrow: false,
                    autoplay: false,
                    showlrc: 1,
                    music: {
                        title: value.name,
                        author: value.ar[0].name,
                        url: res.data.data[0]['url'],
                        pic: backUrl,
                        lrc: state.lrc,
                    }
                });

                state.backStyle = backUrl;
                console.log(state.audio);

                state.audio.audio.play();

            }).catch(function(res) {
                console.log('error');
                console.log(res);
            });
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
                    title: res.data.playlist.name,
                    src: res.data.playlist.coverImgUrl,
                    tracks: res.data.playlist.tracks
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
        state.element = payload.audio;
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