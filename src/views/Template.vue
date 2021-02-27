<template lang="pug">
#Template
  section
    .container
    
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
// #Template{
//    section{}
// }

</style>
