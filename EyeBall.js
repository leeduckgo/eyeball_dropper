class EyeBall {

	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.vx = random(-2, 2);
		this.vy = random(-2, 2);
		this.g = 0.2;
		this.life = 200;
		this.img = loadImage("eye_ball_trans.png");
		this.fillColor = color(200, 50, 150);
	}

	display() {
		noStroke();
		// fill(this.fillColor);
		// ellipse(this.x, this.y, 20, 20);
		image(
			this.img, 
			this.x-0.1 * this.img.width, 
			this.y- 0.1 * this.img.height, 
			0.1 * this.img.width, 
			0.1 * this.img.height
		);
	}

	update() {
		this.vy = this.vy + this.g;
		this.y = this.y + this.vy;
		this.x = this.x + this.vx;
		this.life = this.life - 1;
		if (this.y > height) {
			this.vy = -0.9 * this.vy
			this.y = height;
		}
	}

	flash() {
		this.fillColor = color(random(255), random(255), random(255), this.life);
	}
}