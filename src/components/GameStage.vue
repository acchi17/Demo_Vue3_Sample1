<template>
  <div class="game-stage">
    <CharaView 
      :character="redCharacter"
      class="red-character"
    />
    <CharaView 
      :character="greenCharacter"
      class="green-character"
    />
  </div>
</template>

<script>
import CharaView from './CharaView.vue'
import RedChara from '../classes/RedChara'
import GreenChara from '../classes/GreenChara'

export default {
  name: 'GameStage',
  components: {
    CharaView
  },
  data() {
    return {
      redCharacter: new RedChara(),
      greenCharacter: new GreenChara()
    }
  }
}
</script>

<style scoped>
.game-stage {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  background-color: #f5f5f5;
}

.red-character,
.green-character {
  margin: 0 50px; /* キャラクター間の間隔 */
}
</style>
