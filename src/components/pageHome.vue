<template>
<div class="">
  <div class="header">
    <div class="grid-container">
      <!-- <header> -->
        <div class="grid-x grid-margin-x">
          <h1 class="small-12 medium-7 cell">Nachtlieferdienst für Berlin</h1>
          <div class="auto cell"></div>
          <p class="small-12 medium-6 cell">Von 23 Uhr bis 3 Uhr morgens musst du nicht mehr trocken liegen wie ein Fisch. Wir liefern dir alles, was du für eine Feier brauchst direkt an die Haustür.</p>
          <div class="auto cell"></div>
          <div class="small-12 medium-6 cell">
            <a class="button button--primary" href="">Bestellen</a>
            <a class="button button--secondary" href="">Stöbern</a>
          </div>
        </div>
      <!-- </header> -->
    </div>
  </div>
  <div class="grid-container">
    <!-- <div class="grid-x grid-margin-x"> -->
      <flickity ref="flickity" :options="flickityOptions">
        <div class="small-12 medium-6 large-4 cell carousel-cell">
          <productBox />
        </div>
        <div class="small-12 medium-6 large-4 cell carousel-cell">
          <productBox />
        </div>
        <div class="small-12 medium-6 large-4 cell carousel-cell">
          <productBox />
        </div>
      </flickity>
    <!-- </div> -->
  </div>
  <div class="grid-x">
      <a style="margin: 0 auto;" class="button button--primary" href="#">Alle Produkte</a>
  </div>
  <!-- <flickity ref="flickity" :options="flickityOptions">
    <div class="carousel-cell">1</div>
    <div class="carousel-cell">2</div>
    <div class="carousel-cell">3</div>
    <div class="carousel-cell">4</div>
    <div class="carousel-cell">5</div>
  </flickity> -->
</div>
</template>

<script type="text/javascript">
import productBox from '@/components/productBox.vue'
import flickity from 'vue-flickity'

export default {
  name: 'pageHome',
  components: {
    productBox: productBox,
    flickity: flickity
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js 2 App',
      product: {},
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: false,
        resize: false,
        contain: false,
        groupCell: 3,
        watchCSS: true
      }
    }
  },
  created: function () {
    console.log('Home');
  }
}

</script>

<style>
  .header {
    width: 100%;

    background-color: #222;
    min-height: 70vh;

    display: flex;
    align-items: center;
    margin-bottom: 4rem;
  }

  header {

  }
</style>
