<template>
  <div id="app">
    <GameStage />
  </div>
</template>

<script>
import GameStage from './components/GameStage.vue'

export default {
  name: 'App',
  components: {
    GameStage
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
