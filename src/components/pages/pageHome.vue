<template>
<div class="">
  <div class="header header--image">
    <div class="grid-container">
      <!-- <header> -->
        <div class="grid-x grid-margin-x">
          <h1 class="small-12 medium-7 cell">Nachtlieferdienst für Berlin</h1>
          <div class="auto cell"></div>
          <p class="small-12 medium-6 cell">Von 23 Uhr bis 3 Uhr morgens musst du nicht mehr trocken liegen wie ein Fisch. Wir liefern dir alles, was du für eine Feier brauchst direkt an die Haustür.</p>
          <div class="auto cell"></div>
          <div class="small-12 medium-6 cell">
            <a class="button button--primary button--margin" href="">Bestellen</a>
            <a class="button button--secondary" href="">Stöbern</a>
          </div>
        </div>
      <!-- </header> -->
    </div>
  </div>
  <div class="grid-container slider">
    <!-- <div class="grid-x grid-margin-x"> -->
      <flickity ref="flickity" :options="flickityOptions">
        <div class="carousel-cell">

            <productBox />

        </div>
        <div class="carousel-cell">
          <productBox />
        </div>
        <div class="carousel-cell">
          <productBox />
        </div>
        <div class="carousel-cell">
          <productBox />
        </div>
        <div class="carousel-cell">
          <productBox />
        </div>
      </flickity>
    <!-- </div> -->
  </div>
  <div class="grid-x">
      <a style="margin: 0 auto 7rem auto;" class="button button--primary" href="#">Alle Produkte ansehen</a>
  </div>

  <div class="rec">
    <div class="grid-container textCenter">
      <div style="margin: 0 0 -1rem 0" class="neonSign__wrapper">
        <img class="neonSign" width="200px" src="../../assets/neon-place-needle.png" alt="">
        <img class="neonSign--off" width="200px" src="../../assets/neon-place-needle-off.png" alt="">
      </div>
      <h2>JEDERZEIT WISSEN, WO DIE WARE STECKT</h2>
      <div class="grid-x">
        <div style="margin: 0 auto 5rem auto;" class="small-12 medium-8 medium-offset-2 cell">
          <p>Sobald du etwas bestellt hast, kannst du direkt schauen, wo deine Bestellung gerade ist, und zwar live auf einer Karte mit Minutenangabe. Wenn deine Bestellung da ist werden wir dich kurz anrufen damit die Feier weiter gehen kann. </p>
        </div>
      </div>
    </div>
  </div>
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
        accessibility: true,
        initialIndex: 3,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true,
        resize: false,
        contain: true,
        groupCell: 3,
        watchCSS: false
      }
    }
  },
  created: function () {
    console.log('Home');
  }
}

</script>

<style>

</style>
