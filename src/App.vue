<template>
  <div id="app">
    <div class="left">
      <CharaList />
      <CharaParam />
    </div>
    <GameStage class="right" />
  </div>
</template>

<script>
import CharaList from './components/CharaList.vue'
import CharaParam from './components/CharaParam.vue'
import GameStage from './components/GameStage.vue'

export default {
  name: 'App',
  components: {
    CharaList,
    CharaParam,
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
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.right {
  flex: 1;
  background: #fff;
}
</style>
