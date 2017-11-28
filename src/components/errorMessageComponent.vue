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

.close {
  width: 10rem;
}
.error {
  position: fixed;
  width: 100%;
  height: 0rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: red;
  transition: 0.2s ease-in-out;
  opacity: 0;
}

.visible {
  height: 2rem;
  opacity: 1;
}
</style>
