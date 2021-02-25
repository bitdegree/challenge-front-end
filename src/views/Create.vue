<template lang="pug">
#Create
  section
    .container
      form
        .form-group
          label() select author
          select()
            option( value='biii' v-for="item in ss.authors.data" :key="item.id") {{item.username}}
          br
          label(for='') Edit the page
          input.form-control( value="" ) 
          textarea( value=""  @keypress.enter.prevent="handleSubmit")
          p {{ $route.params.slug }}
        button.btn.btn-primary(type='submit' @click.prevent="") Post
    
    
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
// import { onMounted, ref, provide } from "vue";
// import { a, n } from "@/composables/types";
// import useCss from "@/composables/useCss";
// import { useRouter, useRoute } from "vue-router";
export default ({

  setup(){
    const ss = useStore().state;
    // const router = useRouter();
    // const sg = useStore().getters;
    ///////////////////////

    ///////////css////////////
    // const { cqueA, cLenEqual } = useCss();
    //......................................
    //
    console.log(ss.authors.data[0])
    // js after the page has been mounted 
    // onMounted(() => {
    // elements
    // action
    // });
    ////////////////////////
    return {
      ss
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
