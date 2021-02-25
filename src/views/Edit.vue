<template lang="pug">
#Edit
  section
    .container
      form
        .form-group
          label(for='exampleInputEmail1') Edit the page
          input.form-control(  v-model="title.value") 
          textarea(  v-model="body.value" @keypress.enter.prevent="handleSubmit")
          p {{ $route.params.slug }}
          p {{ ss.currentPost }}
        button.btn.btn-primary(type='submit' @click.prevent="createPost") Update
    
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
import { onMounted, ref, provide, onBeforeMount, onUpdated } from "vue";
// import { a, n } from "@/composables/types";
// import useCss from "@/composables/useCss";
import { useRouter, useRoute } from "vue-router";
export default ({

  setup(){
    const ss = useStore().state;
    // const sg = useStore().getters;
    // const router = useRouter();
    const route = useRoute();
    const axios = require('axios').default;
    ///////////////////////

    // // v-model variables
      const title = ref('')
      const body = ref('')
    const checkUpdate = () =>{
      if(ss.currentPost){
        title.value = ref(ss.currentPost[0].title)
        body.value = ref(ss.currentPost[0].body)
        console.log('UUPPPP')
      }
    }

    // // after we have the title and body then PUT to url
    const createPost = () =>{
      // console.log(message.value)
      axios.put('https://jsonplaceholder.typicode.com/posts/' + route.params.slug, {
        title: title.value,
        body: body.value
      }).then(response =>{
        console.log("created post: ", response)
      }).catch(err => {
        console.log(err)
      })
    }

    // ss.currentPost = ss.response.data.filter(item => {
    //   return item.id == route.params.slug; 
    // })

     const getData = (ss) =>{
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{ 
          ss.response = response;
          console.log  ('getdata resp', ss.response)
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
    

    onBeforeMount(()=>{
      console.log('edit beforemount')
      getData(ss)
      // getComments()
    })
    onUpdated(()=>{
      console.log('edit updated')
      checkUpdate()
      console.log(ss.currentPost)
      // getComments()
    })
    // // js for css
    // const { cqueA, cLenEqual } = useCss();
    //......................................
    //

    // // js after the page has been mounted 
    // onMounted(() => {
      // // elements
      // // action
    // });
    ////////////////////////
    return {
      ss, createPost, title, body
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
// uni scss is imported globaly, but for use of variables uniTheme.scss is imported every time 
// @import 'x../assets/uniTheme.scss'
#Edit{
   section{}
}

</style>
