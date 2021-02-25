<template lang="pug">
#Footer
  footer.bg-light.text-center.text-white
    .container.p-5.pb-0
      
      a.social-btn( target="_blank" href="https://github.com/adomasgaudi")
        i.fab.fa-github

      a.social-btn( target="_blank"  href="https://www.facebook.com/adomas.gaudiesius")
        i.fab.fa-facebook

      a.social-btn( target="_blank"  href="https://www.linkedin.com/in/adomas-g-0738b487/" )
        i.fab.fa-linkedin
        
    .text-center.p-3(  style="background-color: rgba(0, 0, 0, 0.2);") coding is dope
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
#Footer{
  a.social-btn{
    background: rgb(153, 153, 153);
    
    &:hover{ background: rgb(252, 94, 94);  transform: scale(1.01)}
  }
}

</style>
