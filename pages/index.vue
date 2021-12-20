<template>
    <div>
        <!-- <div>{{ JSON.stringify(list) }}</div> -->
        <nuxt-link to="/random_food">关于</nuxt-link>
    </div>
</template>

<script>
import axios from "~/utils/axios.js";
export default {
    // async asyncData(){
    //     const list = await axios({
    //         url: "/api/drag/list",
    //         method: "GET"
    //     });
    //     return {
    //         list
    //     }
    // },
    created() {
        axios({
            url: "http://1.116.243.13/api/drag/list",
            method: "GET"
        });
    }
}
</script>
