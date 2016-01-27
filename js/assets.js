/* Each asset is organized by type
Each asset has struture:
  name : string,
  path : path-string,
  width : int @optional,
  height : int @optional,
  frames : int @optional,
  frames_per_row : int @optional
*/

JumpPunch.ASSETS = {
  // asset path must be a valid game.load.[x] method
  SPRITESHEET : {
    PLAYER : {
      name : 'player',
      path : 'assets/graphics/players_100x96.png',
      width : 100,
      height : 96,
      frames : 18,
      frames_per_row : 9 // split spritesheet by player/row
    }
  },

  IMAGE : {
    BG : {
      name : 'bg',
      path : 'assets/graphics/bg_900x600.jpg',
      width : 900,
      height : 600
    }
  }
};
