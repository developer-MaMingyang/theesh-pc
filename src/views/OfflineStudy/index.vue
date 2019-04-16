/*
* author: mamingyang@baofeng.com
* date: 2019/4/12
*/

<template>
  <div class="wrap-box">
    <p class="tc note">  目前招聘的老师只服务于北京地区，其他地区以后会陆续开放，敬请期待。老师应聘请投简历到business@theesh.com</p>
    <div class="list">
      <el-card class="item bgcWhi mb20" shadow="hover" v-for="(item, index) in teachers" :key="index">
        <div class="clearfix">
          <div class="df fl img-wrap">
            <img :src="item.photo" alt="加载失败">
          </div>
          <div class="fl item-content">
            <div class="title" v-text="item.name"></div>
            <div class="summary">
              <p v-text="item.desc"></p>
              <p>教学类别：{{item.course}}</p>
            </div>
          </div>
          <div class="fl contact">
            <el-button class="contact-button" type="primary" @click="openContactDialog(index)">联系</el-button>
          </div>
        </div>
      </el-card>
    </div>
    <el-dialog :close-on-click-modal="false" :close-on-press-escape="false" :visible.sync="dialogVisible" :title="`联系${teachers[contactForm.tId].name.substr(0, 1)}老师`" custom-class="w400 contact-form">
      <el-form :model="contactForm">
        <el-form-item label="姓名">
          <el-input v-model="contactForm.name"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="contactForm.phone"></el-input>
        </el-form-item>
        <el-button class="db center w300" type="primary" @click="submitContact">提交</el-button>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import Teacher1 from '../../assets/img/offline-study/teacher-1.jpg';
import Teacher2 from '../../assets/img/offline-study/teacher-2.jpg';
import Teacher3 from '../../assets/img/offline-study/teacher-3.jpg';
import Teacher4 from '../../assets/img/offline-study/teacher-4.jpg';
import Teacher5 from '../../assets/img/offline-study/teacher-5.jpg';
import Teacher6 from '../../assets/img/offline-study/teacher-6.jpg';

export default {
  name: 'OfflineStudy',
  data: () => ({
    dialogVisible: false,
    contactForm: {
      name: '',
      phone: '',
      tId: 0,
    },
    teachers: [{
      photo: Teacher1,
      name: '贺**',
      desc: '四川音乐学院  钢琴专业',
      course: '钢琴',
    }, {
      photo: Teacher2,
      name: '杨**',
      desc: '意大利米兰音乐学院 即兴伴奏专业',
      course: '钢琴',
    }, {
      photo: Teacher3,
      name: '杨**',
      desc: '山西师范大学 音乐学专业',
      course: '钢琴',
    }, {
      photo: Teacher4,
      name: '李**',
      desc: '沈阳音乐学院 音乐教育',
      course: '钢琴',
    }, {
      photo: Teacher5,
      name: '彭**',
      desc: '台湾黄钟小提琴教学法认证老师',
      course: '小提琴',
    }, {
      photo: Teacher6,
      name: '李**',
      desc: '四川音乐学院 小提琴专业',
      course: '小提琴',
    }],
  }),
  created() {

  },
  methods: {
    openContactDialog(index) {
      this.contactForm.tId = index;
      this.dialogVisible = true;
    },
    submitContact() {
      this.$store.dispatch('offlineStudy/contactTeacher', {
        payload: this.contactForm,
      }).then(({ code, message }) => {
        if (code) {
          this.$message.error(message);
        } else {
          this.$message.success('恭喜您，提交成功');
          this.dialogVisible = false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped src="./styles.scss"></style>
