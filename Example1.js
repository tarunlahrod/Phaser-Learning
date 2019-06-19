class Example1 extends Phaser.Scene {
	constructor() {
		super({key:"Example1"});
	}

	preload(){
		this.load.image('Saitama', 'assets/saitama_face.jpg');
	}

	create(){
		this.image = this.add.image(400, 300, 'Saitama');

		// for input from keyboard
		//keyup_D = on D key pressed
		this.input.keyboard.on('keyup_D', function(event){
			this.image.x += 10;
		}, this);

		this.input.keyboard.on('keyup_A', function(event){
			this.image.x -= 10;
		}, this);

		this.input.keyboard.on('keyup_W', function(event){
			this.image.y -= 10;
		}, this);

		this.input.keyboard.on('keyup_S', function(event){
			this.image.y += 10;
		}, this);

		// Another way of binding a key
		this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);


		this.input.on('pointerdown', function(event){
			this.image.x = event.x;
			this.image.y = event.y;
		}, this);

		this.input.keyboard.on('keyup_P', function(event){
			var physicsImage = this.physics.add.image(this.image.x, this.image.y, "Saitama");
			physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-100, 100), -300);
		}, this);
	}

	update(delta){
		if(this.key_A.isDown)
			this.image.x--;
	}

}