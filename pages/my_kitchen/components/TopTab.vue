<template>
    <div class="top-tab">
        <ul class="tab-list">
            <li 
                v-for="item in tabList" 
                :key="item.code"
                class="item"
                :class="{ 'active': item.code === curTab }"
                @click="selTab(item)"
            >
                {{ item.desc }}
            </li>
        </ul>
        <div class="zhanwei"></div>
    </div>
</template>

<script>
import { tabList } from "../js/config";
export default {
    props: {
        curTab: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            tabList
        };
    },
    methods: {
        selTab(item) {
            this.$emit("selTab", item.code);
        }
    }
};
</script>

<style lang='less' scoped>
.top-tab{
    .item{
        .px2rem(padding-left, 40);
        .px2rem(padding-right, 40);
        .px2rem(padding-bottom, 16);
        .px2rem(padding-top, 16);
        &.active{
            background: #000;
            color: #fff;
            .px2rem(border-radius, 60);
        }
    }
    .tab-list{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        position: fixed;
        top: 0;
        left: 0;
        .px2rem(font-size, 28);
        line-height: 1;
        .px2rem(padding, 24);
        color: #666;
        box-shadow: 0 0 20px 0 #E9ECF1;
    }
    .zhanwei{
        width: 100%;
        .px2rem(height, (24*2+16*2+28));
    }
}
</style>