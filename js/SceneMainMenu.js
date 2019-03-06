class SceneMainMenu extends Phaser.Scene {
  constructor(){
    super({ key: "SceneMainMenu"});
  }

  preload(){
    this.load.image("sprBtnPlay", "content/sprites/sprBtnPlay.png");
    this.load.image("sprBtnPlayHover", "content/sprites/sprBtnPlayHover.png");
    this.load.image("sprBtnPlayDown", "content/sprites/sprBtnPlayDown.png");
    this.load.image("sprBtnRestart", "content/sprites/sprBtnRestart.png");
    this.load.image("sprBtnRestartHover", "content/sprites/sprBtnRestartHover.png");
    this.load.image("sprBtnRestartDown", "content/sprites/sprBtnRestartDown.png");

    this.load.audio("sndBtnOver", "content/audio/sndBtnOver.wav");
    this.load.audio("sndBtnDown", "content/audio/sndBtnDown.wav");    
  }

  create() {
    this.scene.start("SceneMain");
  }
}
