var config = {
  type: Phaser.AUTO,
  scale:{
  mode: Phaser.Scale.FIT,
  autoCenter: Phaser.Scale.CENTER_ALL
      },
     width: 800,
     height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);
                                      /*AUTO allows phaser to pick if the browser supports webGL or default back to Canvas*/
function preload()
  {
    this.load.image("bg", "assets/images/background.png");
    this.load.image("chicken", "assets/images/chicken.png");
    this.load.image("horse", "assets/images/horse.png");
    this.load.image("sheep", 'assets/images/sheep.png');
    this.load.image("pig", "assets/images/pig.png");
    this.load.image("arrow", "assets/images/arrow.png")
    this.load.image("arrow2", "assets/images/arrow.png")
  }

function create()
  {

    var background = this.add.sprite(400, 270, 'bg');
    //var chicken = this.add.sprite(400, 220, "chicken");
    var pig = this.add.sprite(400, 352, "pig");
  //var sheep = this.add.sprite(400, 200, "sheep");

//  chicken.setDisplaySize(300, 300);
  pig.setDisplaySize(200, 200);


//right arrow
var rightArrow = this.add.sprite(650, 330, "arrow");
rightArrow.setDisplaySize(150, 150);

//left arrow
var leftArrow = this.add.sprite(150, 330, "arrow2");
leftArrow.setDisplaySize(150, 150);
leftArrow.flipX = true;
  }

function update()
  {
    //calls every second like input and stuff
  }

//PHASER 2 CE OLD code (deprecated)
//game.state.add('GameState', GameState);
//game.state.start('GameState');
