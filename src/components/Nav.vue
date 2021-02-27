<template lang="pug">
#Nav
  nav.navbar.navbar-expand-sm.navbar-dark.bg-dark
    .nav-bar
      router-link(:to='{name: "Home"}') 
        span.brand Test'o Blog
      router-link(:to='{name: "Create"}').fas.fa-plus.brand
      //- i.fas.fa-chess-knight(@click='changeTheme')
      //- i.fas.fa-bars(@click='')
    
</template>




<script lang="ts">
// Possible reusable functions placed in other files
import { useStore } from "vuex";
// import {fire, fireAuth} from '@/firebase/config'
// import { onMounted, ref, provide } from "vue";
// import { a, n } from "@/composables/types";
// import useCss from "@/composables/useCss";
// import { useRouter, useRoute } from "vue-router";

export default ({

  setup(){
    const ss = useStore().state;
    ///////////////////////








    // // js for css ...

    // js after the page has been mounted 
    // onMounted(() => {
    // });
    return {
      ss
    };
  }

});
</script>




<style lang="scss">
// uni scss is imported globaly, but for use of variables uniTheme.scss is imported every time lsdjf lsdkjf lskdjf lskdjf lskdjf lskdj flksdj flksdj flksdj fl
// @import 'x../assets/uniTheme.scss'
#Nav{
  nav{

    a{
      &:hover{text-decoration: none;}
    }
  }
   
  .brand{
    font-size: 25px;
    font-weight: bold;
    color: white;
    &:hover{ transform: scale(1.2); transition: .2s; color: rgb(255, 94, 94)}
  }
}

</style>
