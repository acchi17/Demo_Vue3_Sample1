<template>
  <div v-if="characterStore.selectedCharacter" class="chara-param">
    <label class="jump-height-label">Jump Height</label>
    <div class="jump-height-item">
      <input 
        id="jumpHeight"
        type="number" 
        :min="jumpHeightLimits.min" 
        :max="jumpHeightLimits.max" 
        :step="5"
        :value="characterStore.selectedCharacter.jumpHeight"
        @input="updateJumpHeight"
        class="jump-height-input"
      />
      <span class="jump-height-unit">px</span>
    </div>
  </div>
</template>

<script>
import { useCharacterStore } from '../stores/charaState';

export default {
  name: 'CharaParam',
  setup() {
    const characterStore = useCharacterStore();
    return { characterStore };
  },
  computed: {
    jumpHeightLimits() {
      return this.characterStore.selectedCharacter?.getJumpHeightLimits() || {
        min: 0, 
        max: 200
      };
    }
  },
  methods: {
    updateJumpHeight(event) {
      const value = parseInt(event.target.value);
      if (this.characterStore.selectedCharacter) {
        this.characterStore.selectedCharacter.setJumpHeight(value);
      }
    }
  }
}
</script>

<style scoped>
.chara-param {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: #f0f0f0;
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
}

.jump-height-label {
  font-size: 16px;
  font-weight: 500;
  color: #6c757d;
}

.jump-height-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  gap: 4px;
}

.jump-height-input {
  width: 80px;
  padding: 4px 8px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
  background: white;
}

.jump-height-unit {
  font-size: 16px;
  color: #6c757d;
  margin-left: 4px;
}

.jump-height-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.jump-height-input::-webkit-outer-spin-button,
.jump-height-input::-webkit-inner-spin-button {
  -webkit-appearance: auto;
  margin: 0;
}

.jump-height-input[type=number] {
  -moz-appearance: textfield;
}
</style>
