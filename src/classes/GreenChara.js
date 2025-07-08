import CharaBase from './CharaBase';

/**
 * Green character class
 */
export default class GreenChara extends CharaBase {
  constructor() {
    super('Green');
    this.color = 'green';
    this.jumpHeight = 150;
    this.jumpHeightMin = 0;
    this.jumpHeightMax = 300;
  }
}
