<template>
  <div 
    ref="stage" 
    class="game-stage"
    @dragenter="handleDragEnter"
    @dragleave="handleDragLeave"
  >
    <div 
      class="drop-area"
      :class="{'is-dragging': isDragging}"
      @drop="handleDrop"
      @dragover.prevent
    />
    <CharaView 
      v-for="character in characters"
      :key="character.id"
      :character="character"
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
      characters: [],
      dragCounter: 0,
      isDragging: false
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
    handleDragEnter() {
      this.dragCounter++;
      this.isDragging = true;
    },
    handleDragLeave() {
      this.dragCounter--;
      if (this.dragCounter === 0) {
        this.isDragging = false;
      }
    },
    handleDrop(event) {
      this.dragCounter = 0;
      this.isDragging = false;

      const charaType = event.dataTransfer.getData('charaType');
      let newChara;
      if (charaType === 'red') {
        newChara = new RedChara();
      } else if (charaType === 'green') {
        newChara = new GreenChara();
      }
      newChara.position.x = event.clientX;
      newChara.position.y = 400;
      this.characters.push(newChara);
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
  background-color: #f5f5f5;
}

.drop-area {
  position: relative;
  margin-top: 400px;
  width: 100%;
  height: 50px;
  transition: background-color 0.3s;
}

.drop-area.is-dragging {
  background-color: rgba(0, 255, 0, 0.2);
}
</style>
