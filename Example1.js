class Example1 extends Phaser.Scene {
	constructor() {
		super({key:"Example1"});
	}

	preload(){
		this.load.image('Saitama', 'assets/saitama_face.jpg');
	}

	create(){
		// Text
		this.text = this.add.text(10,0, "Use ASDF to move around.", {font: "14px Impact"});
		this.text = this.add.text(10,15, "Press P to check gravity.", {font: "14px Impact"});
		this.text = this.add.text(10,30, "Press 2 to switch to Example2.", {font: "14px Impact"});
		this.text = this.add.text(10,45, "Click anywhere to move the image.", {font: "14px Impact"});

		// Image
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

		// keyup: On any key pressed
		this.input.keyboard.on('keyup', function(e){
			// Now we'll switch between different scenes on key 2 or key 3 pressed.
			if(e.key == "2"){
				this.scene.start("Example2");
			}
		}, this);
	}

	update(delta){
		if(this.key_A.isDown)
			this.image.x--;
	}

}