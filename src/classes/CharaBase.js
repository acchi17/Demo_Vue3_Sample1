/**
 * キャラクターの基底クラス
 */
export default class CharaBase {
  /**
   * @param {string} name - キャラクター名
   */
  constructor(name) {
    this.name = name;
    this.isJumping = false;
    this.color = '';
    this.jumpHeight = 0;
  }

  /**
   * ジャンプアクションを実行
   */
  jump() {
    if (this.isJumping) return;
    
    this.isJumping = true;
    
    // ジャンプアニメーション完了後にフラグをリセット
    setTimeout(() => {
      this.isJumping = false;
    }, 500);
  }
}
