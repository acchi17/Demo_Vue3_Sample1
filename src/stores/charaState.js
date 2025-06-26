import { defineStore } from 'pinia'

export const useCharacterStore = defineStore('character', {
  state: () => ({
    selectedCharacter: null
  }),
  
  actions: {
    selectCharacter(character) {
      // 前の選択を解除
      if (this.selectedCharacter) {
        this.selectedCharacter.setSelected(false)
      }
      // 新しいキャラクターを選択
      this.selectedCharacter = character
      character.setSelected(true)
    },
    
    clearSelection() {
      if (this.selectedCharacter) {
        this.selectedCharacter.setSelected(false)
        this.selectedCharacter = null
      }
    }
  }
})
