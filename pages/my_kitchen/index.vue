<template>
    <div class="my-kitchen">
        <p class="title">我的厨房</p>
        <div class="swiper-img" @click="toRandom">
            <img src="~/static/images/swiper-eat-what.webp" alt="">
        </div>
        <div class="more">敬请期待~</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
    methods: {
        toRandom() {
            this.$router.push("/my_kitchen/RandomFood");
        }
    }
};
</script>
<style lang="less" scoped>
.my-kitchen{
    width: 100vw;
    height: 100vh;
    background-color: #f7f8fa;
    .title{
        .px2rem(font-size, 32);
        .px2rem(padding, 24);
        box-sizing: border-box;
        font-weight: bold;
    }
    .swiper-img{
        width: 90%;
        .px2rem(height, 300);
        .px2rem(border-radius, 24);
        overflow: hidden;
        margin: 0 auto;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .more{
        text-align: center;
        color: #999;
        .px2rem(font-size, 32);
        .px2rem(padding-top, 200);
    }
}
</style>
