import CharaBase from './CharaBase';

/**
 * Red character class
 */
export default class RedChara extends CharaBase {
  constructor() {
    super('Red');
    this.color = 'red';
    this.jumpHeight = 100;
    this.jumpHeightMin = 0;
    this.jumpHeightMax = 200;
  }
}
