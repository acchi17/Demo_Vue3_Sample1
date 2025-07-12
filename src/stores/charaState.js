import { defineStore } from 'pinia'

export const useCharacterStore = defineStore('character', {
  state: () => ({
    selectedCharacter: null
  }),
  
  actions: {
    selectCharacter(character) {
      if (this.selectedCharacter) {
        this.selectedCharacter.setSelected(false)
      }
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
