<template>
  <div 
    class="character"
    :class="{ 'jumping': character.isJumping }"
    :style="characterStyle"
    @dblclick="character.jump()"
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
      characterStyle: {
        '--jump-height': `${this.character.jumpHeight}px`
      }
    };
  }
}
</script>

<style scoped>
.character {
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: transform 0.5s;
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
</style>
