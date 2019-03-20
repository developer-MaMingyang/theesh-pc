/*
* author: mamingyang@baofeng.com
* date: 2018/10/31
* usage: 封装阿里视频播放组件
*/

<template>
    <div id="player-wrap" :class="{ noMaxWidth: source==='app' }"></div>
</template>

<script>
    import { mapState } from 'vuex';
    import { getPlayAuth } from '../../service/h5';

    export default {
        name: 'VideoPlayer',
        props: {
            title: String,
            cover: String,
            videoId: String,
        },
        data() {
            return {
                playAuth: '',
                player: null,
            };
        },
        computed: mapState('global', ['source']),
        watch: {
            videoId() {
                this.player.dispose();
                this.getAuth();
            },
        },
        async created() {
            await require('https://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css'); // eslint-disable-line
            await require('https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js'); // eslint-disable-line
            this.getAuth();
        },
        methods: {
            async getAuth() {
                const { data } = await getPlayAuth({
                    videoId: this.videoId,
                    el: '#player-wrap',
                });
                if (data) {
                    this.player = new Aliplayer({ // eslint-disable-line
                        id: 'player-wrap',
                        width: '100%',
                        autoplay: false,
                        vid: this.videoId,
                        playauth: data,
                        cover: this.cover,
                    });
                    this.player.on('requestFullScreen', () => {
                        window.postMessage('full-screen');
                    });
                    this.player.on('cancelFullScreen', () => {
                        window.postMessage('cancel-full-screen');
                    });
                }
            },
        },
    };
</script>

<style lang="scss" scoped>
    @import "./styles";
</style>
