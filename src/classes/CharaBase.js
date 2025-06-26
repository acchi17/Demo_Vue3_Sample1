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
    this.position = {
      x: 0,
      y: 0
    };
    this.isDragging = false;
    this.isSelected = false;
  }

  /**
   * Set position
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   */
  setPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
  }

  startDrag() {
    this.isDragging = true;
  }

  endDrag() {
    this.isDragging = false;
  }

  /**
   * Set selected state
   * @param {boolean} selected - Selected state
   */
  setSelected(selected) {
    this.isSelected = selected;
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
