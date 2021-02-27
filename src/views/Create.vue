<template lang="pug">
#Create
  section
    .container
      form
        .form-group
          select( v-model="author" ).drop-down
            option( v-if="ss.authors" v-for="item in ss.authors.data" :key="item.id" :value="item.username") {{item.username}}
          input.form-control.title( v-model="title" placeholder="Title" ) 
          //- p title {{title}}
          textarea(  v-model="body" @keypress.enter.prevent="createPost" placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, quidem consequatur aperiam officiis, expedita cum nam cupiditate, impedit eveniet eaque quaerat. Odit ducimus voluptatibus dolor, ab in nisi iste repellat sequi commodi sapiente cumque eum! Optio odio porro commodi repellendus.")
          //- p body {{body}}
        button.btn.btn-primary(type='submit' @click.prevent="createPost(author, title, body)") Post
    
    
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
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref, provide, onBeforeMount, onUpdated } from "vue";
import useData from "@/composables/useData";
// import {fire, fireAuth} from '@/firebase/config'
// import { onMounted, ref, provide } from "vue";
// import { a, n } from "@/composables/types";
// import useCss from "@/composables/useCss";
export default ({

  setup(){
    const ss = useStore().state;
    const route = useRoute();
    const axios = require('axios').default;
    const {getPosts, getAuthors, getComments, sendComment, createPost} = useData();
    ///////////////////////

    const title = ref('')
    const body = ref('')
    const author = ref('')


    getPosts( (response)=>{
      ss.posts = response
    })
    getAuthors((response)=>{
      ss.authors = response
    })


    // // js for css ...
    

    // js after the page has been mounted 
    // onMounted(() => {
    // });

    return {
      ss, title, body, author, createPost
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
#Create{
  *:focus {
    outline: none;
}
   section{}
   
}

</style>
