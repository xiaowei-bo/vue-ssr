<template>
    <div class="my-love">
        <TopTab :cur-tab="curTab" @selTab="selTab" />
        <InfoList :food-list="curFoodList" />
    </div>
</template>

<script>
import TopTab from "./components/TopTab.vue";
import InfoList from "./components/InfoList.vue";
import { foodList } from "./js/config";
export default {
    components: { TopTab, InfoList },
    data() {
        return {
            curTab: "chaocai",
            curFoodList: []
        }
    },
    created() {
        this.getFoodList();
    },
    methods: {
        selTab(tab) {
            this.curTab = tab;
            this.getFoodList();
        },
        getFoodList() {
            this.curFoodList = foodList.filter(i => i.type.includes(this.curTab));
            console.log(this.curFoodList);
        }
    }
}
</script>
<style lang="less" scoped>
.my-love{
    width: 100vw;
    height: 100vh;
    background-color: #f7f8fa;
}
</style>
