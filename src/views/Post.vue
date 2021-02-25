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
          button.btn.btn-primary(type='submit' @click.prevent="sendComment(message)") Comment

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
// //Possible reusable functions placed in other files
import { useStore } from "vuex";
import { onMounted, ref, provide, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import useData from "@/composables/useData";
// import {fire, fireAuth} from '@/firebase/config'
// import { a, n } from "@/composables/types";
// import useCss from "@/composables/useCss";

export default ({
  
  setup(){
    const ss = useStore().state;
    const route = useRoute();
    const {getData, getAuthors, getComments, sendComment} = useData();
    const axios = require('axios').default;
    ///////////////////////


    const message = ref('')
    
    getComments( route.params.slug, (response)=>{
      ss.comments = response
    })


    getData( (response)=>{
      ss.response = response

      // // save current post data
      ss.currentPost = response.data.filter(item => {
        return item.id == route.params.slug;  
      })

      
      getAuthors((response)=>{
      ss.authors = response

      // // save current author data using current post data
      ss.currentAuthor = response.data.filter(item => {
        return item.id == ss.currentPost[0].userId;
      })
      })
    })
    
    
    

    // // js for css ... 

    // js after the page has been mounted 
    // onMounted(() => {})
     
    return {
      ss, message, sendComment
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
