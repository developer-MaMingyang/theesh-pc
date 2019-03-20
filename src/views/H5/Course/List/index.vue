/*
* author: mamingyang@baofeng.com
* date: 2019/3/14
*/

<template>
    <div>
        <div class="mb20">
            <VideoPlayer v-if="currentPlaying.videoId" :video-id="currentPlaying.videoId" :cover="currentPlaying.coverUrl" />
            <img v-else class="photo" :src="coursePhoto">
        </div>
        <ul class="course-list">
            <li v-for="(item, index) in lessons" :key="index" class="cp lesson" @click="selectLesson(index)">
                {{ index + 1 }}、{{ item.lessonName }}
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'CourseList',
        components: {
            VideoPlayer: () => import('../../../../components/H5VideoPlayer/index'),
        },
        data: () => ({

        }),
        computed: {
            ...mapState('h5/course/list', ['courseName', 'coursePhoto', 'lessons', 'currentPlaying']),
            ...mapState('h5/global', ['source']),
        },
        created() {
          const { courseId } = this.$route.params;
            this.getList(courseId);
        },
        destroyed() {
            this.$store.dispatch('h5/course/list/reset');
        },
        methods: {
            getList(courseId) {
                this.$store.dispatch('h5/course/list/getList', { courseId });
            },
            selectLesson(index) {
                this.$store.dispatch('h5/course/list/selectLesson', { index });
                window.scrollTo(0, 0);
            },
        },
    };
</script>

<style lang="scss" scoped>
    .photo {
        display: block;
        margin: 0 auto;
    }

    .lesson {
        padding: 15px;
        border-top: 1px solid #ccc;
        font-size: 18px;

        &:last-child {
            border-bottom: 1px solid #ccc;
        }
    }
</style>
