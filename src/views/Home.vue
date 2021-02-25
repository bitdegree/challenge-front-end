<template lang="pug">
#Home
  section
    .container
      p.display-3 All Posts
      //- p authors
      //- li(  v-for="item in ss.authors.data" :key="item.id") {{ item.username }}
      .postss(  v-for="item in ss.response.data" :key="item.id"  )
        router-link(:to="{name: 'Post', params: {slug: item.id}}") #[strong {{ item.title }}]
      

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
    .postss{

      // // OUTSIDE
      margin-bottom: 1rem;

      // // INSIDE
      padding: 1rem;

      // // styling
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      a{ 
        color: inherit;
        &:hover{text-decoration: none;}  
      }
      &:hover{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transition: .5s;
      }
      &:active{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
      }
      border-radius: 4px;
      cursor: pointer;
      // color: red;
    }
  }
}
</style>
