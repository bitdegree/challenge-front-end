<template lang="pug">
#Post
  section
    .container
      router-link(:to="{name: 'Edit', params: {slug: $route.params.slug}}").btn.btn-secondary edit
      p(v-if="ss.currentAuthor")  #[strong author name: ] {{ ss.currentAuthor[0].username}}
      p(v-if="ss.currentPost")  #[strong user id: ] {{ ss.currentPost[0].userId }}
      h2(v-if="ss.currentPost") {{ ss.currentPost[0].title }}
      p(v-if="ss.currentPost") {{ ss.currentPost[0].body }}
  section 
    .container
      .comments
        form
          .form-group
            label(for='exampleInputEmail1') Comment below!
            input.form-control( placeholder='your thoughts go here' v-model="message")
          button.btn.btn-primary(type='submit' @click.prevent="sendComment") Comment

        ul
          li(v-for="comment in ss.comments.data") {{comment.body}}
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
// Possible reusable functions placed in other files

// import {fire, fireAuth} from '@/firebase/config'
import { useStore } from "vuex";
import { onMounted, ref, provide, onBeforeMount } from "vue";
// import { a, n } from "@/composables/types";
// import useCss from "@/composables/useCss";
import { useRouter, useRoute } from "vue-router";
import useData from "@/composables/useData";

export default ({

  setup(){
    const ss = useStore().state;
    const route = useRoute();
    // const { getAuthors, getAuthorsnt} = useData();
    // const sg = useStore().getters;
    ///////////////////////
    const axios = require('axios').default;


    
    // const getandwait = async(ss) =>{
    //   await getData(ss)
    //   console.log('ss.resp', {...ss})
    // }
    // getandwait(ss)
    // getAuthors(ss);
    const getData = (ss) =>{
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response =>{ 
        ss.response = response;
        // console.log  ('getdata resp', ss.response)
        ss.currentPost = response.data.filter(item => {
          return item.id == route.params.slug;  
          })
        console.log('current', ss.currentPost, ss.response)
      })
      .catch(err => {console.log(err)})

      axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + route.params.slug)
        .then(response =>{
          ss.comments = response
        })
    }
    

    // getAuthorsnt(ss).then(resp => {
      // })
    // const getAuthors = (ss) =>{
    //   axios 
    //     .get('https://jsonplaceholder.typicode.com/users')
    //     .then(response =>{ 
    //       ss.authors = response 
    //       ss.currentAuthor = ss.authors.data.filter(item => {
    //       return item.id == ss.currentPost[0].userId; 
    //       })
    //       console.log(ss.currentAuthor, 'authoooooot')
    //       })
    //     .catch(err => {console.log(err)})
    // }
    // getAuthors(ss)



    const getComments = () =>{
      axios
        .get('https://jsonplaceholder.typicode.com/comments?postId=' + route.params.slug)
        .then(response =>{
          ss.comments = response
        })
        .catch(err=>console.log(err))
    }
      // getData()
      

    // // v-model message var
    const message = ref('')

    // // 
    const sendComment = () =>{
      // console.log(message.value)
      axios.post('https://jsonplaceholder.typicode.com/comments', {
        body: message.value,
        title: "title is real"
      }).then(response =>{
        // console.log(response)
      }).catch(err=>{console.log(err)})
    }

    onBeforeMount(()=>{
      console.log('post beforemount')
      getData(ss)
      // getComments()
    })
    onMounted(()=>{
      console.log('post mounted')
      getComments()
    })
    ///////////css////////////
    // const { cqueA, cLenEqual } = useCss();
    //......................................
    //

    // js after the page has been mounted 
    // onMounted(() => {
    // elements
    // action
    // });
    ////////////////////////
    return {
      ss, message, sendComment, getData
      // , getAuthors
    };
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

<style lang="scss">
// uni scss is imported globaly, but for use of variables uniTheme.scss is imported every time lsdjf lsdkjf lskdjf lskdjf lskdjf lskdj flksdj flksdj flksdj fl
// @import 'x../assets/uniTheme.scss'
// #Template{
//    section{}
// }

</style>
