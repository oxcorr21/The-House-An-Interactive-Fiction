// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let hallway = new Room('hallway', 'It is dark, and scary.');
let dark = new Room('dark room', 'It is dark.');
let lamp = new Item('lamp', 'golden, and very tarnished.');
let closet = new Room('dark closet', 'dusty, and covered in cobwebs.');
let key = new Item('key', 'rusty, old and dusty. ');
let bathroom = new Room('dirty bathroom', 'leaking dusty.');
let airVents = new Room('rusty air vents', 'very dusty covered in cobwebs and smells like dead animals.');
let deadRat = new Item('dead rat', 'smells bad and flyes all over');
let bed = new Item('bed', 'old smelly sheets stains all over');
let dresser = new Item('broken dresser', 'old dirty clothes in the dresser');
let toothBrush = new Item('old tooth brush', 'thooth brush is all dusty and yellow');
let ratDroppings = new Item('rat droppings', 'smells bad all dryed up and spread every where');
let medicine = new Item('expired medicine', 'pills spilled everywhere');
let shoes = new Item('old worn out shoes', 'spiders crawling inside the shoes');
let rubberDuck = new Item('yellow rubber duck', 'paint falling off all yellow and dirty and smells like old water');

bathroom.addItem(rubberDuck);
closet.addItem(shoes);
bathroom.addItem(medicine);
closet.addItem(ratDroppings);
bathroom.addItem(toothBrush);
dark.addItem(dresser);
dark.addItem(bed);
closet.addItem(deadRat);
dark.addItem(airVents);
dark.addItem(bathroom);
dark.addItem(key);
dark.addItem(closet);
dark.addItem(lamp);
hallway.addItem(dark);

player.move(hallway);
