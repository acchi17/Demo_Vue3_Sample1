import CharaBase from './CharaBase';

/**
 * Red character class
 */
export default class RedChara extends CharaBase {
  constructor() {
    super('Red');
    this.color = 'red';
    this.jumpHeight = 100;
  }
}
