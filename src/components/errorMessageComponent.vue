<!-- v-if="status.visible" -->
  <template>
    <div  v-bind:class="{visible: status.visible}" :style="{ 'background-color': status.type }" class="error">
      {{status.message}}
    <div class="close" v-on:click="close">X</div>
    </div>
  </template>


<script>
import store from '.././store/index.js'

export default {
  name: 'errorMessageComponent',
  props: ['status'],
  data () {
    return {
      errorMessage: 'Error:'
    }
  },
  created: function () {
    console.log('errorMessage created');
  },
  methods: {
    close: function () {
      store.state.status.visible = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
