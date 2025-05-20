<template>
  <div ref="stage" class="game-stage">
    <CharaView 
      :character="redCharacter"
    />
    <CharaView 
      :character="greenCharacter"
    />
  </div>
</template>

<script>
import CharaView from './CharaView.vue';
import RedChara from '../classes/RedChara';
import GreenChara from '../classes/GreenChara';

export default {
  name: 'GameStage',
  components: {
    CharaView
  },
  data() {
    return {
      redCharacter: new RedChara(),
      greenCharacter: new GreenChara()
    };
  },
  mounted() {
    this.setCharacterPositions();
    window.addEventListener('resize', this.setCharacterPositions);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.setCharacterPositions);
  },
  methods: {
    setCharacterPositions() {
      const stage = this.$refs.stage;
      const stageWidth = stage.offsetWidth;
      const centerX = stageWidth / 2;
      
      this.redCharacter.position.x = centerX - 100;
      this.redCharacter.position.y = 400
      this.greenCharacter.position.x = centerX + 100;
      this.greenCharacter.position.y = 400;
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
</style>
