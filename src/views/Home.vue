<template lang="pug">
#Home
  section
    .container
      p.display-3 All Posts
      //- router-link.post(  v-for="item in ss.response.data" :key="item.id" :to="{name: 'Post2'}" @click="changeCurrent(item.id)" )
      //-   p #[strong 2 {{ item.title }}]
        hr
      //- .post(  v-for="item in ss.response.data" :key="item.id" @click='router.push({name: "Post", params: {slug: item.id}})')
      router-link.post(  v-for="item in ss.response.data" :key="item.id" :to="{name: 'Post', params: {slug: item.id}}" )
        p #[strong {{ item.title }}]
        hr

</template>

//
//
//
//
//
//
//
//
//

<script lang="ts">
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { onMounted,  ref, provide , onUpdated, onUnmounted} from "vue";
import useData from "@/composables/useData";
// import {fire, fireAuth} from '@/firebase/config'
// import { a, n } from "@/composables/types";
// import useCss from "@/composables/useCss";

export default ({

  setup(){
    const ss = useStore().state;
    const route = useRoute();
    const router = useRouter();
    const axios = require('axios').default;
    const {getData, getAuthors} = useData();
    // const sg = useStore().getters;
    ///////////////////////



    // // GET data and store in vuex store
    getData(ss)


    // // GET author data and store in vuex store
    getAuthors(ss)
    // console.log({ss})



    const changeCurrent = (clickId) =>{
      ss.currentPost = ss.response.data.filter(item => {
          return item.id == clickId;
        })
      // console.log('post', ss.currentPost)
    }

    ///////////////////////////
    // // js for css
    // const { cqueA, cLenEqual } = useCss();
    //......................................
    //

    // // js after the page has been mounted 
    onMounted(()=>{
        console.log('home mounted')
    });
     onUpdated(()=>{
       console.log('home updated')
    });
    onUnmounted(()=>{
      console.log('home unmounted')
        // // GET data and store in vuex store
      getData(ss)


      // // GET author data and store in vuex store
      getAuthors(ss)
      // console.log({ss})
    })
    onMounted(() => {
      // // elements
      // // action
      // // if data is not here
      // console.log('home on mounted')
      if(!ss.response){
        getData(ss)
      }
    });
    return{
      ss, getData, router, useData, changeCurrent
    }
  }

});
</script>

//
//
//
//
//
//
//
//
//

<style lang="scss">
#Home{
  section{
    .post{
      cursor: pointer;
    }
  }
}
</style>
