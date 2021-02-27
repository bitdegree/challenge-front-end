<template lang="pug">
#Home
  section
    .container
      .box
        p.display-3.text-center {{myauthor}}
        .choice
          select( v-model="myauthor" ).drop-down
            option(  value="All Posts") All Posts
            option( v-if="ss.authors" v-for="item in ss.authors.data" :key="item.id" :value="item.username") {{item.username}}
          button.btn.btn-primary( @click.prevent="sort(ss, myauthor)") sort
      .all-posts
        router-link.post( :to="{name: 'Post', params: {slug: item.id}}" v-for="item in ss.list" :key="item.id"  )
          .header
            p {{ findAuthor(item, ss) }}
          p.title #[strong {{ item.title }}]
      

</template>





<script lang="ts">
// //Possible reusable functions placed in other files
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { onMounted,  ref, provide , onUpdated, onUnmounted, onBeforeMount} from "vue";
import useData from "@/composables/useData";
import useJs from "@/composables/useJs";
// import {fire, fireAuth} from '@/firebase/config'
// import { a, n } from "@/composables/types";
// import useCss from "@/composables/useCss";

export default ({

  setup(){
    // // imported functions
    const ss = useStore().state;
    const route = useRoute();
    const axios = require('axios').default;
    const { getPosts, getAuthors } = useData();
    const { sort,findAuthor} = useJs();
    const myauthor = ref('')
    ///////////////////////


 

      
    
    // // default value of my
    // const sort = (_ss = ss, _myauthor = myauthor.value) =>{

    //     // // if you select a specific author then...
    //     if(_myauthor != "All Posts" ){

    //       // // find correct author id
    //       _ss.filterAuthor = _ss.authors.data.filter((author)=>{
    //         return author.username == _myauthor
    //       })
  
    //       // // filter by correct author
    //       _ss.list = _ss.posts.data.filter((item)=>{
    //         return item.userId == _ss.filterAuthor[0].id
    //       })
    //     }
    //     else{
    //       _ss.list = _ss.posts.data
    //     }

    // }

 

    

    // // GET data and store in vuex store
    getPosts((response)=>{
      ss.posts = response;
      getAuthors((response)=>{
        ss.authors = response
        ss.list = ss.posts.data
        myauthor.value = "All Posts"
      })
    })




    // // js for css


    // // js after the page has been mounted 
    // onMounted(() => {
    // });

    return{
      ss, myauthor, sort, findAuthor
    }
  }

});
</script>





<style lang="scss">
#Home{

  section{

    .box{
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      >*{margin: 0 2rem;}
      margin-bottom: 3rem;

      .choice{
        display: flex;
        justify-content: center;
        align-items: center;
        >*{margin: 0 .2rem;}
      }
    }

    .all-posts{
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
    }
    

    .post{
      width: 100%;
      @media(min-width: 576px) {
        width: 45%;
      }
      @media(min-width: 992px) {
        width: 30%;
      }
      margin: .5rem .5rem;
      // // OUTSIDE

      // // INSIDE
      padding: 1rem;

      // // styling
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      border-radius: 4px;
      cursor: pointer;

      &:hover{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transition: .5s;
        text-decoration: none;
      }
      &:active{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
      }
     
      // color: red;
    }
  }
}
</style>
