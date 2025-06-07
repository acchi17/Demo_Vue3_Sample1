<template>
  <div id="app">
    <CharaList class="left" />
    <GameStage class="right" />
  </div>
</template>

<script>
import CharaList from './components/CharaList.vue'
import GameStage from './components/GameStage.vue'

export default {
  name: 'App',
  components: {
    CharaList,
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
  display: flex;
}

.left {
  width: 200px;
  background: #f0f0f0;
}

.right {
  flex: 1;
  background: #fff;
}
</style>
