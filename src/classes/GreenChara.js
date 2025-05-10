import CharaBase from './CharaBase';

/**
 * 緑キャラクタークラス
 */
export default class GreenChara extends CharaBase {
  constructor() {
    super('Green');
    this.color = 'green';
    this.jumpHeight = 150;
  }
}
