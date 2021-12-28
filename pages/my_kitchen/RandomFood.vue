<template>
    <div class="random-food">
        <div class="random-food-img-box">
            <img class="random-food-img" :src="imgMap[currentFood.code] || require('~/static/images/eat-what.webp')" alt="">
        </div>
        <p class="random-food-text">{{ currentFood.name || "今日菜品" }}</p>
        <a-button class="random-food-btn" @click="startSelect">开始</a-button>
    </div>
</template>

<script>
import { foodList } from "./js/config";
import { random } from "~/utils/index";
export default {
    data() {
        return {
            currentFood: "",
            imgMap: {}
        };
    },
    created() {
        this.loadImg();
    },
    methods: {
        loadImg() {
            for(const { code } of foodList) {
                this.imgMap[code] = require(`~/static/images/food/${code}.jpeg`)
            }
        },
        startSelect() {
            const len = foodList.length;
            const randomTimes = random(20, 40);
            let count = 0;
            const repeatSel = () => {
                const randomIndex = random(0, len - 1);
                this.currentFood = foodList[randomIndex];
                count++;
                if(count >= randomTimes) return;
                setTimeout(repeatSel, 50);
            }
            repeatSel();
        }
    }
};
</script>
<style lang="less" scoped>
.random-food{
    text-align: center;
    box-sizing: border-box;
    .px2rem(padding-top, 300);
    .random-food-img-box{
        width: 50vw;
        height: 50vw;
        margin: 0 auto;
        .random-food-img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .random-food-text{
        .px2rem(font-size, 32);
        .px2rem(padding, 32);
    }
}
</style>
