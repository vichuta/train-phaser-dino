import Phaser from 'phaser'

class PlayScene extends Phaser.Scene {
  // get ค่าความสูงของเกม
  get gameHeight() {
    return this.game.config.height as number
  }

  constructor() {
    super('PlayScene')
  }

  create() {
    this.createEnvironment() // add ground
    this.createPlayer() // add Dino
  }

  createPlayer() {
    // add Dino
    this.physics.add.sprite(0, this.gameHeight, 'dino-idle').setOrigin(0, 1)
  }

  createEnvironment() {
    // add ground
    this.add
      .tileSprite(0, this.gameHeight as number, 88, 26, 'ground')
      .setOrigin(0, 1)
  }
}

export default PlayScene
