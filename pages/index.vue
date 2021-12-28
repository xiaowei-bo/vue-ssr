<template>
    <div class="home-page">
        <div class="hp-time">
            <p>一起走过了</p>
            <p>{{ format(loveTime) }}</p>
        </div>
        <div class="menu-box">
            <div class="menu-item" @click="menuClick">
                <img class="menu-item-img" src="~/static/images/icon-kitchen.png" alt="">
                <p class="menu-item-text">干饭</p>
            </div>
            <div class="menu-item">
                <img class="menu-item-img" src="~/static/images/icon-friends.png" alt="">
                <p class="menu-item-text">敬请</p>
            </div>
            <div class="menu-item">
                <img class="menu-item-img" src="~/static/images/icon-kitchen.png" alt="">
                <p class="menu-item-text">期待</p>
            </div>
            <div class="menu-item">
                <img class="menu-item-img" src="~/static/images/icon-kitchen.png" alt="">
                <p class="menu-item-text">~~</p>
            </div>
        </div>
        <Star :conf="PoPoConf" />
    </div>
</template>

<script>
const startLoveTime = "2014.11.20 10:00";
export default {
    data() {
        return {
            nowTime: +new Date(),
            PoPoConf: {
                mode: "down",
                icon: require("~/static/images/icon-snow.png"),// "circle",
                count: 12,
                size: 4,
                colors: ["rgba(134,217,226,1)", "rgba(18,27,58,1)", "rgba(62,27,187,1)"],
			}
        }
    },
    computed: {
        loveTime() {
            return this.nowTime - +new Date(startLoveTime);
        }
    },
    created() {
        this.countDown();
    },
    methods: {
        menuClick() {
            this.$router.push("/my_kitchen");
        },
        format(time) {
            const to = a => a > 9 ? a : `0${a}`;
            const s = Math.floor(time / 1000 % 60);
            const m = Math.floor(time / 1000 / 60 % 60);
            const h = Math.floor(time / 1000 / 60 / 60 % 24);
            const d = Math.floor(time / 1000 / 60 / 60 / 24 % 365);
            const y = Math.floor(time / 1000 / 60 / 60 / 24 / 365);
            return `${y} 年 ${d} 天 ${to(h)} : ${to(m)} : ${to(s)}`;
        },
        countDown() {
            setTimeout(() => {
                this.nowTime += 1000;
                this.countDown();
            }, 1000);
        }
    }
}
</script>
<style lang="less" scoped>
.home-page{
    width: 100vw;
    height: 100vh;
    background: url("~/static/images/bg/bg1.jpeg") no-repeat top / 100% #040323;
    .hp-time{
        color: #fff;
        text-align: center;
        .px2rem(font-size, 36);
        .px2rem(padding-top, 150);
        line-height: 2;
        font-family: cursive;
    }
    .menu-box{
        width: 90%;
        position: fixed;
        left: 50%;
        transform: translate(-50%, 0);
        .px2rem(bottom, 120);
        .px2rem(padding, 24);
        .px2rem(border-radius, 14);
        .px2rem(font-size, 26);
        -webkit-backdrop-filter: blur(20px);	
        backdrop-filter: blur(20px);
        color: #fff;
        background: rgba(255, 255, 255, 0.18);
        display: flex;
        justify-content: space-between;
        text-align: center;
        .menu-item{
            width: 22%;
            .menu-item-img{
                width: 50%;
                .px2rem(margin-bottom, 16);
            }
        }
    }
}
</style>
