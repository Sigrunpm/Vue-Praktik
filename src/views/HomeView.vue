<template>
  <body>
  <header>
    <MenuToppen /> 
  </header>
  
  <section id="home">
    <HeroBil />
  </section>
  
  <section id="kompetancer">
    <KompeTancer />
  </section>
  
  <section id="ommig">
    <OmMig />
  </section>

  <section id="cv">
    <CvCv />
  </section>

  <section id="kontakt">
    <KontaktMig />
  </section>

  <section>
    <FooterFooter />
  </section>

</body>
</template>

<script>
// @ is an alias to /src

import MenuToppen from '@/components/MenuToppen.vue';
import HeroBil from '@/components/HeroBil.vue';
import KompeTancer from '@/components/KompeTancer.vue';
import OmMig from '../components/OmMig.vue';
import CvCv from '../components/CvCv.vue';
import KontaktMig from '../components/KontaktMig.vue';
import FooterFooter from '@/components/FooterFooter.vue';


export default {
  name: 'HomeView',
  components: {
    MenuToppen,
    HeroBil,
    KompeTancer,
    OmMig,
    CvCv,
    KontaktMig,
    FooterFooter
},
 }
</script>

<style lang="scss">  
                @import "@/scss/colors";

  
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  
  }

  section {
    margin-bottom: 10px;
  }

  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(
          to right,
          $red3,
          $black1 50%,
          $red3,
      );
    
    top: 0;
    left: 0;
    width: 100%;
    }

</style>
