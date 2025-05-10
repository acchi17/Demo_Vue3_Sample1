import CharaBase from './CharaBase';

/**
 * 赤キャラクタークラス
 */
export default class RedChara extends CharaBase {
  constructor() {
    super('Red');
    this.color = 'red';
    this.jumpHeight = 100;
  }
}
