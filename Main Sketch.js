// create an array for the Bouncer to go into
let eye_balls = [];

function setup() {
	createCanvas(1600, 500);
}

function draw() {
	background(0);
	stroke(255);
	
	// go through the full array and update and display each Bouncer
	for (let i = 0; i < eye_balls.length; i++) {
			eye_balls[i].update();
			eye_balls[i].display();
	}

}

function mousePressed() {
	// when the mouse is pressed, add a new Bouncer to the array
		eye_balls.push(new EyeBall(mouseX, mouseY));
}