<template lang="html">
  <div v-if="loading" class="loading-page">
    <div class="loading-cont">
        <img class="loading-img" src="~/static/images/loading.png"/>
        <p v-if="loadingText">{{ loadingText }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      loadingText: ""
    }),
    methods: {
      start(loadingText) {
        this.loading = true;
        this.loadingText = loadingText;
      },
      finish() {
        this.loading = false
        this.loadingText = "";
      }
    }
  }
</script>

<style lang="less" scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    font-size: 16px;
    font-family: sans-serif;
    color: #999;
    .loading-cont{
        width: 100%;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
    }
    .loading-img{
        width: 50px;
        padding-bottom: 20px;
    }
  }
</style>