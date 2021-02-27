<template lang="pug">
#Home
  section
    .container
      .box
        p.display-3.text-center {{myauthor}}
        .choice
          select( v-model="myauthor" ).drop-down
            option( @click.prevent="allList" value="All Posts") All Posts
            option( v-if="ss.authors" v-for="item in ss.authors.data" :key="item.id" :value="item.username") {{item.username}}
          button.btn.btn-primary( @click.prevent="run") sort
      .all-posts
        router-link.post( :to="{name: 'Post', params: {slug: item.id}}" v-for="item in ss.list" :key="item.id"  )
          .header
            p {{ findAuthor(item) }}
          p.title #[strong {{ item.title }}]
      

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
    const myauthor = ref('')
    ///////////////////////


    const allList = () => {
      console.log("")
    }

 

      // // GET data and store in vuex store
    getData((response)=>{
      ss.response = response;
      getAuthors((response)=>{
        ss.authors = response
        ss.list = ss.response.data
      })
    })
      // // GET author data and store in vuex store
    
    const run = () =>{


        if(myauthor.value != "All Posts" ){

          // // find correct author id
          ss.filterAuthor = ss.authors.data.filter((author)=>{
            return author.username == myauthor.value
          })
  
          // // filter by correct author
          ss.list = ss.response.data.filter((item)=>{
            return item.userId == ss.filterAuthor[0].id
            // author.value
          })
        }
        else{
          ss.list = ss.response.data
        }

    }

    const findAuthor = (itemId) =>{
      const thisAuthor = ss.authors.data.filter(author => {
        return author.id == itemId.userId;
      })
      console.log( thisAuthor )
      return thisAuthor[0].username.toString()
    }

    




    ///////////////////////////
    // // js for css


    // // js after the page has been mounted 
    // onMounted(() => {
    // });

    return{
      ss, myauthor, run, allList, findAuthor
    }
  }

});
</script>





<style lang="scss">
#Home{
  section{
    .all-posts{
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
    }
    
    .box{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: row wrap;
      >*{margin: 0 2rem;}
      margin-bottom: 3rem;

      .choice{
        display: flex;
        justify-content: center;
        align-items: center;
        >*{margin: 0 .2rem;}
      }
    }
    .post{
      @media(min-width: 576px) {
        width: 45%;
      }
      @media(min-width: 992px) {
        width: 30%;
      }
      width: 100%;
      // display: flex;
      // flex-flow: row wrap;
      margin: .5rem .5rem;
      // // OUTSIDE

      // // INSIDE
      padding: 1rem;

      // // styling
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      color: black;


      a{ 
        color: black;
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
