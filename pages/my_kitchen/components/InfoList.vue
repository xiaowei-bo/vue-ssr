<template>
    <div class="info-list">
        <ul v-if="foodList.length > 0" class="food-list">
            <li v-for="item in foodList" :key="item.code" class="food-item">
                <div class="food-img-box">
                    <img class="food-img" :src="require(`~/static/images/food/${item.code}.jpeg`)" alt="">
                </div>
                <p class="food-desc">{{ sliceText(item.desc) }}</p>
            </li>
        </ul>
        <div v-else class="list-null">
            <img class="list-null-img" src="~/static/images/list-null.jpeg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        foodList: {
            type: Array,
            default: () => ([])
        }
    },
    data() {
        return {
            
        };
    },
    methods: {
        sliceText(str) {
            if(str.length <= 45) return str;
            return str.slice(0, 45) + "...";
        }
    }
};
</script>

<style lang='less' scoped>
.info-list{
    .px2rem(padding, 32);
    .food-item{
        width: 100%;
        display: flex;
        background-color: #fff;
        .px2rem(border-radius, 16);
        .px2rem(padding, 24);
        .px2rem(margin-bottom, 16);
        box-sizing: border-box;
        .food-img-box{
            .px2rem(width, 128);
            .px2rem(height, 128);
            .px2rem(border-radius, 20);
            overflow: hidden;
            flex-shrink: 0;
            .food-img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .food-desc{
            .px2rem(padding-left, 24);
            .px2rem(font-size, 28);
        }
    }
    .list-null{
        .px2rem(width, 450);
        margin: 0 auto;
        .list-null-img{
            width: 100%;
        }
    }
}
</style>