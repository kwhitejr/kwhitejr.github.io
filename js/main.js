// create single global variable of type Object
// Constant variables are ALL CAPS. Can be accessed and should not be set.

window.JumpPunch = {
  // input static global variables
  ASSETS : {},

  STAGE : {
    WIDTH : 900,
    HEIGHT : 600
  },

  STAGE_ID : 'game', //div in index.html to render this game

  STATES : {
    BOOT : 'Boot',
    GAME : 'Game'
  }
};

// load Phaser on window load
// avoid magic numbers: give everything context
window.onload = function () {
  JumpPunch.game = new Phaser.Game( JumpPunch.STAGE.WIDTH, JumpPunch.STAGE.HEIGHT, Phaser.AUTO, JumpPunch.STAGE_ID );
  JumpPunch.game.state.add( JumpPunch.STATES.BOOT, JumpPunch.Boot );
  JumpPunch.game.state.add( JumpPunch.STATES.GAME, JumpPunch.Game );
  JumpPunch.game.state.start(JumpPunch.STATES.BOOT);
};