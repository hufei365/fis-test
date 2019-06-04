<template>
  <div>
    Hello Fis {{new Date}}
    <book :name="name" :desc="desc"></book>
    <nav>
      <a href="/">
        <i class="ico ico-001"></i>UX
      </a>
      <a href="/">
        <i class="ico ico-002"></i>Nuts
      </a>
      <a href="/">
        <i class="ico ico-003"></i>
      </a>
      <a href="/">
        <i class="ico ico-004"></i>
      </a>
      <a href="/">
        <i class="ico ico-005"></i>
      </a>
      <a href="/">
        <i class="ico ico-006"></i>
      </a>
      <a href="/">
        <i class="ico ico-007"></i>
      </a>
      <a href="/">
        <i class="ico ico-008"></i>
      </a>
      <a href="/">
        <i class="ico ico-009"></i>
      </a>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
nav{
  a{
    color: yellowgreen;
    text-decoration: none;
    font-size: 2em;
  }
}
.ico-009{
    -webkit-animation: rotate 3.0s infinite linear;
    animation: rotate 3.0s infinite linear;
}

@-webkit-keyframes rotate { 100% { -webkit-transform: rotate(360deg) }}
@keyframes rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}
</style>



<script>
import Book from 'components/book.vue';

export default {
  data(){
    return {
      name: '历史的',
      desc: 'This is desc'
    }
  },
  components:{
    Book
  }
};
</script>

components/theme/jquery.ui.scss
