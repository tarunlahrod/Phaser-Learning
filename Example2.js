class Example2 extends Phaser.Scene {
	constructor(){
		super({key: "Example2"});
	}

	create(){
		this.text = this.add.text(0,0, "Welcome to Example2!", {font: "40px Impact"});
		
		var tween = this.tweens.add({
			targets: this.text, 
			x: 200,
			y: 250,
			duration: 2000,
			ease: 'Elastic',
			easeParams: [1.5, 0.5],
			delay: 1000,
			onComplete: function(src, tgt){
				tgt[0].x = 0;
				tgt[0].y = 0;
				tgt[0].setColor("Cyan");
			}
		}, this);

		this.key_1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
		this.key_3 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);

		this.text = this.add.text(10,50, "Press 1 to switch to Example1.", {font: "14px Impact"});
		this.text = this.add.text(10,65, "Press 3 to switch to Example3.", {font: "14px Impact"});



	}

	update(delta){
		if(this.key_1.isDown)
			this.scene.start("Example1");

		if(this.key_3.isDown)
			this.scene.start("Example3");
	}
}