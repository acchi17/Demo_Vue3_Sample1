/**
 * Base class for characters
 */
export default class CharaBase {
  /**
   * @param {string} name - Character name
   */
  constructor(name) {
    this.name = name;
    this.isJumping = false;
    this.color = '';
    this.jumpHeight = 0;
  }

  /**
   * Execute jump action
   */
  jump() {
    if (this.isJumping) return;
    
    this.isJumping = true;
    
    // Reset flag after a certain period of time
    setTimeout(() => {
      this.isJumping = false;
    }, 500);
  }
}
