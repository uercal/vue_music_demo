import axios from 'axios'
//

const state = {
    ids: [867822471, 150524989, 815980319, 864480097],
    title: 'Second',
    author: "uercal",
    isload: false,
    isshow: false,
    // isPlaying:false,
    bgm: [],
    playbgm: [],
    audio: new Audio()
}

const getters = {
    title: state => state.title,
    author: state => state.author,
    isload: state => state.isload,
    isshow: state => state.isshow,
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
    play: ({ commit }, id) => {
        console.log(id);
        axios.get('https://bird.ioliu.cn/netease/song?id=' + id, {}, {
            headers: {},
            emulateJSON: true
        }).then(res => {
            state.audio.src = res.data.data.mp3.url;
            state.audio.load();
            state.audio.play();
        }).catch(function(res) {
            console.log(res);
        });

    },
    getBgm({ commit }) {
        var data = [];
        var ids = state.ids;
        for (var i in ids) {
            axios.get('https://bird.ioliu.cn/netease/playlist?id=' + ids[i], {}, {
                headers: {},
                emulateJSON: true
            }).then(function(res) {
                data.push({
                    title: res.data.playlist.name,
                    src: res.data.playlist.coverImgUrl,
                    tracks: res.data.playlist.tracks
                });
            }).catch(function(err) {
                console.log(err)
            });
        }
        commit('LOADED_BGM', { data })
    }
}



//传递给vue需要改变的数据（方法）
const mutations = {
    ['LOADED_BGM'](state, { data }) {
        state.bgm = data;
        state.isload = true;
    },

    ['LOADED_TRACKS'](state, { data }) {
        state.playbgm = data;
        state.isshow = true;
    }
}



export default {
    state,
    actions,
    mutations,
    getters
}