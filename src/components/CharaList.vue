<template>
  <div class="chara-list">
    <div
      class="chara-item"
      draggable="true"
      @dragstart="handleDragStart('red', $event)"
    >
      <div 
        class="chara-icon red"
      ></div>
    </div>
    <div
      class="chara-item"
      draggable="true"
      @dragstart="handleDragStart('green', $event)"
    >
      <div 
        class="chara-icon green"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharaList',
  methods: {
    handleDragStart(type, event) {
      event.dataTransfer.setData('charaType', type);
    }
  }
}
</script>

<style scoped>
.chara-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  height: 100%;
  background: #f0f0f0;
  border-right: 1px solid #ccc;
}
.chara-item {
  cursor: grab;
  margin-top: 32px;
  width: 50px;
  height: 50px;
}
.chara-icon {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.chara-icon.red {
  background-color: #d32f2f;
}

.chara-icon.green {
  background-color: #388e3c;
}
</style>
