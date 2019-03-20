/*
* author: mamingyang@baofeng.com
* date: 2019/3/14
*/

import { getCourseList } from '../../../service/h5';

const list = {
    namespaced: true,
    state: {
        lessons: [],
        courseName: '',
        coursePhoto: '',
        currentPlaying: {
            coverUrl: '',
            videoId: '',
            index: -1,
        },
    },
    mutations: {
        setList(state, { lessons, courseName, coursePhoto }) {
            state.lessons = lessons;
            state.courseName = courseName;
            state.coursePhoto = coursePhoto;
        },
        initLessonData(state, { index }) {
            const currentSelect = state.lessons[index];
            state.currentPlaying = Object.assign({}, state.currentPlaying, {
                coverUrl: currentSelect.coverUrl,
                videoId: currentSelect.videoId,
                index,
            });
        },
        doReset(state) {
            state.lessons = [];
            state.courseName = '';
            state.coursePhoto = '';
            state.currentPlaying = Object.assign({}, state.currentPlaying, {
                coverUrl: '',
                videoId: '',
                index: -1,
            });
        },
    },
    actions: {
        async getList({ commit }, { courseId }) {
          const { data: { lessons, courseName, coursePhoto } } = await getCourseList(courseId);
            commit('setList', { lessons, courseName, coursePhoto });
        },
        selectLesson({ commit }, { index }) {
            commit('initLessonData', { index });
        },
        reset({ commit }) {
            commit('doReset');
        },
    },
};

export default list;
