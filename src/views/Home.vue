<template lang="pug">
#Home
  section
    .container
      p.display-3 All Posts
      p authors
      li(  v-for="item in ss.authors.data" :key="item.id") {{ item.username }}
      router-link.post(  v-for="item in ss.response.data" :key="item.id" :to="{name: 'Post', params: {slug: item.id}}" )
        p #[strong {{ item.title }}]
        hr
      

</template>





<script lang="ts">
// //Possible reusable functions placed in other files
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { onMounted,  ref, provide , onUpdated, onUnmounted, onBeforeMount} from "vue";
import useData from "@/composables/useData";
// import {fire, fireAuth} from '@/firebase/config'
// import { a, n } from "@/composables/types";
// import useCss from "@/composables/useCss";

export default ({

  setup(){
    // // imported functions
    const ss = useStore().state;
    const route = useRoute();
    const axios = require('axios').default;
    const {getData, getAuthors} = useData();
    ///////////////////////


 

      // // GET data and store in vuex store
    getData((response)=>{
      ss.response = response;
    })
      // // GET author data and store in vuex store
    getAuthors((response)=>{
      ss.authors = response
    })





    ///////////////////////////
    // // js for css


    // // js after the page has been mounted 
    // onMounted(() => {
    // });

    return{
      ss
    }
  }

});
</script>





<style lang="scss">
#Home{
  section{
    .post{
      cursor: pointer;
    }
  }
}
</style>
