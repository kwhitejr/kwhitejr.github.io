JumpPunch.Boot = function () {

};

JumpPunch.Boot.prototype.preload = function () {
  //will preload all assets
  //using functional and declarative programming, not imperatives!
  // `boot.js` will run functions for every asset declared in `assets.js`

  // autoLoad each asset by type
  Object.keys(JumpPunch.ASSETS).forEach(function(type) {
    for (var asset in JumpPunch.ASSETS[type]) {
      JumpPunch.game.load[ type.toLowerCase() ](
        JumpPunch.ASSETS[type][ asset ].name,
        JumpPunch.ASSETS[type][ asset ].path,
        JumpPunch.ASSETS[type][ asset ].width,
        JumpPunch.ASSETS[type][ asset ].height,
        JumpPunch.ASSETS[type][ asset ].frames
      );
    }
  });
};

JumpPunch.Boot.prototype.create = function () {
  // switch to game state
  this.state.start( JumpPunch.STATES.GAME );
};