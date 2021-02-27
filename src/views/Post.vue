<template lang="pug">

#Post
  section.post-sec
    .container
      .post
        .profile-box.d-flex
          .right.d-flex
            img.profile( src="https://picsum.photos/200/300" )
            .text.d-flex
              span.author-name(v-if="ss.currentAuthor")  {{ ss.currentAuthor[0].username}}
              span.small(v-if="ss.currentAuthor")  {{ ss.currentAuthor[0].address.city}}
          router-link(:to="{name: 'Edit', params: {slug: $route.params.slug}}").btn.btn-secondary Edit
        h2(v-if="ss.currentPost") {{ ss.currentPost[0].title }}
        p(v-if="ss.currentPost") {{ ss.currentPost[0].body }}
        hr( style="border-top: 2px dashed grey;")

  section 
    .container
      .comments
        form
          .form-group
            label(for='exampleInputEmail1') Comment below!
            input.form-control( placeholder='your thoughts go here' v-model="message")
          button.btn.btn-primary(type='submit' @click.prevent="sendComment(message)") Comment

        .d-flex.justify-content-center.row
          .d-flex.flex-column.col-md-8
            .coment-bottom.bg-white.p-2.px-4
              
              .commented-section.mt-2(v-for="comment in ss.comments.data")
                .d-flex.flex-row.align-items-center.commented-user
                  h5.mr-2 {{comment.email}}
                .comment-text-sm
                  span {{comment.body}}
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
    const {getPosts, getAuthors, getComments, sendComment, getPhotos} = useData();
    const axios = require('axios').default;
    ///////////////////////


    const message = ref('')
    
    getComments( route.params.slug, (response)=>{
      ss.comments = response
    })


    getPosts( (response)=>{
      ss.posts = response

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
#Post{ 
  section.post-sec{
    background: rgb(238, 239, 243);
  }
  .container{
    padding: .2rem;
  }
  .post{
    // box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: .5rem;
    border-radius: 4px;
  }
  .profile-box{
    justify-content: space-between;
    align-content: center;
    padding: .3rem;
  }
   img.profile{
     width: 40px;
     height: 40px;
     border-radius: 50%;
   }
   .right{
     .text{
       flex-direction: column;
       margin-left: .5rem;
     }
   }
   .author-name{
     margin: 0 0rem;
     
     font-size: 16px;
     font-weight: bold;
     
   }
}

</style>
