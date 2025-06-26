<template>
  <div 
    class="character"
    :class="{ 
      'jumping': character.isJumping,
      'dragging': character.isDragging,
      'selected': character.isSelected
    }"
    :style="characterStyle"
    @dblclick="character.jump()"
    @mousedown="startDrag"
    @mousemove="handleDrag"
    @mouseup="endDrag"
    @mouseleave="endDrag"
    @click="handleClick"
  >
    <div 
      class="character-icon"
      :style="{ backgroundColor: character.color }"
    ></div>
  </div>
</template>

<script>
import { useCharacterStore } from '../stores/charaState';

export default {
  name: 'CharaView',
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dragStartX: 0,
      dragStartY: 0,
      dragStartOffsetX: 0,
      dragStartOffsetY: 0
    };
  },
  setup() {
    const characterStore = useCharacterStore();
    return { characterStore };
  },
  computed: {
    characterStyle() {
      return {
        '--position-x': `${this.character.position.x}px`,
        '--position-y': `${this.character.position.y}px`,
        '--jump-height': `${this.character.jumpHeight}px`
      }
    }
  },
  methods: {
    startDrag(event) {
      if (this.character.isJumping) return;
      event.preventDefault(); // Suppressing browser default behavior

      this.dragStartX = event.clientX;
      this.dragStartY = event.clientY;
      this.dragStartOffsetX = event.clientX - this.character.position.x;
      this.dragStartOffsetY = event.clientY - this.character.position.y;

      this.character.startDrag();
    },
    
    handleDrag(event) {
      if (!this.character.isDragging) return;
      event.preventDefault(); // Suppressing browser default behavior
      
      const stage = this.$parent.$refs.stage;
      const stageRect = stage.getBoundingClientRect();

      let newX = event.clientX - this.dragStartOffsetX;
      if (newX < stageRect.left) newX = stageRect.left
      const newY = this.character.position.y;
      this.character.setPosition(newX, newY);
    },
    
    endDrag() {
      this.character.endDrag();
    },
    
    handleClick(event) {
      const moveDistance = Math.sqrt(
        Math.pow(event.clientX - this.dragStartX, 2) + 
        Math.pow(event.clientY - this.dragStartY, 2)
      );
      if (moveDistance < 2) {
        event.stopPropagation();
        this.characterStore.selectCharacter(this.character);
      }
    }
  }
}
</script>

<style scoped>
.character {
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: transform 0.5s;
  position: absolute;
  left: var(--position-x);
  top: var(--position-y);
}

.character-icon {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.jumping {
  animation: jump 0.5s ease-in-out;
}

@keyframes jump {
  0%, 100% { 
    transform: translateY(0); 
  }
  50% { 
    transform: translateY(calc(var(--jump-height) * -1));
  }
}

.dragging {
  z-index: 1000;
}

.selected {
  border: 3px solid #007bff;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
  transform: scale(1.05);
}
</style>
