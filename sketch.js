const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5;
var b1,b2,b3,b4,b5,b6,b7,b8;
var bx1,bx2,bx3,bx4,bx5,bx6;
var bo1,bo2,bo3,bo4,bo5,bo6,bo7;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);

  b1 = new Box(800,100,70,70);
  b2 = new Box(800,100,70,70);
  b3 = new Box(800,100,70,70);
  b4 = new Box(800,100,70,70);
  b5 = new Box(800,100,70,70);
  b6 = new Box(800,100,70,70);
  b7 = new Box(800,100,70,70);
  b8 = new Box(800,100,70,70);

  bx1 = new Box(700,100,70,70);
  bx2 = new Box(700,100,70,70);
  bx3 = new Box(700,100,70,70);
  bx4 = new Box(700,100,70,70);
  bx5 = new Box(700,100,70,70);
  bx6 = new Box(700,100,70,70);

  bo1 = new Box(600,100,70,70);
  bo2 = new Box(600,100,70,70);
  bo3 = new Box(600,100,70,70);
  bo4 = new Box(600,100,70,70);
  bo5 = new Box(600,100,70,70);
  bo6 = new Box(600,100,70,70);
  bo7 = new Box(600,100,70,70);

}

function draw() {
  background(bg);

  Engine.update(engine);

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();

  bx1.display();
  bx2.display();
  bx3.display();
  bx4.display();
  bx5.display();
  bx6.display();

  bo1.display();
  bo2.display();
  bo3.display();
  bo4.display();
  bo5.display();
  bo6.display();
  bo7.display();

  hero.display();

  rope.display();

  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y:mouseY});
}
