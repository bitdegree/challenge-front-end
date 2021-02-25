<template lang="pug">
#Create
  section
    .container
      form
        .form-group
          label() select author
          select( v-model="author" )
            option( v-if="ss.authors" v-for="item in ss.authors.data" :key="item.id" :value="item.username") {{item.username}}
          br
          p author {{author}}
          label(for='') Edit the page
          input.form-control( v-model="title" ) 
          p title {{title}}
          textarea(  v-model="body" @keypress.enter.prevent="createPost")
          p body {{body}}
          p {{ $route.params.slug }}
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
    const {getData, getAuthors, getComments, sendComment, createPost} = useData();
    ///////////////////////

    const title = ref('')
    const body = ref('')
    const author = ref('')


    getData( (response)=>{
      ss.response = response
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
   section{}
}

</style>
