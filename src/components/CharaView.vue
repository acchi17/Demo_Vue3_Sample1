<template>
  <div 
    class="character"
    :class="{ 
      'jumping': character.isJumping,
      'dragging': character.isDragging 
    }"
    :style="characterStyle"
    @dblclick="character.jump()"
    @mousedown="startDrag"
    @mousemove="handleDrag"
    @mouseup="endDrag"
    @mouseleave="endDrag"
  >
    <div 
      class="character-icon"
      :style="{ backgroundColor: character.color }"
    ></div>
  </div>
</template>

<script>
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
      dragStartY: 0
    };
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

      this.character.startDrag();
      this.dragStartX = event.clientX - this.character.position.x;
      this.dragStartY = event.clientY - this.character.position.y;
    },
    
    handleDrag(event) {
      if (!this.character.isDragging) return;
      event.preventDefault(); // Suppressing browser default behavior

      const newX = event.clientX - this.dragStartX;
      const newY = this.character.position.y;
      this.character.setPosition(newX, newY);
    },
    
    endDrag() {
      this.character.endDrag();
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

.character.dragging {
  transition: none;
  z-index: 1000;
}
</style>
