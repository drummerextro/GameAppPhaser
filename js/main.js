var game = new Phaser.Game(640,360, Phaser.AUTO);
                                      /*AUTO allows paser to pick if the browser supports webGL or default back to Canvas*/
var GameState = {
  preload: function(){

  },
  create: function(){

  },
  update: function(){
}
};

game.state.add('GameState', GameState);
game.state.start('GameState');
