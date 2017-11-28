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
            <a class="button button--primary">Bestellen</a>
            <a class="button button--secondary">Stöbern</a>
          </div>
        </div>
      <!-- </header> -->
    </div>
  </div>
  <div class="grid-container">
    <div class="grid-x grid-margin-x">
      <div class="small-12 medium-4 cell">
        <productBox />
      </div>
      <div class="small-12 medium-4 cell">
        <productBox />
      </div>
      <div class="small-12 medium-4 cell">
        <productBox />
      </div>
    </div>
  </div>
  <div class="">
    <a href="#">Alle Produkte</a>
  </div>
</div>

</template>

<script type="text/javascript">
import productBox from '@/components/productBox.vue'

export default {
  name: 'pageHome',
  components: {
    productBox: productBox
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js 2 App',
      product: {}
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
