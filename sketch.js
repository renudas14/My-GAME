var GameState=1

function preload(){}

function setup(){
createCanvas (400,400);
}

function draw(){
  if(GameState === 1 ){
    form=new Form ()
    form.display();
  }
}