class Example3 extends Phaser.Scene{
	constructor(){
		super({key: "Example3"});
	}

	preload(){
		this.load.audio('test', ['assets/LsTheme.mp3']);
		this.load.image('pic', 'assets/l_picture.jpg');
	}

	create(){

		// Text
		this.text = this.add.text(10,10, "Press 1 to switch to Example1.", {font: "14px Impact"});
		this.text = this.add.text(10,25, "Press 2 to switch to Example2.", {font: "14px Impact"});
		this.text = this.add.text(500,10, "Press L to start/stop the loop.", {font: "14px Impact"});
		this.text = this.add.text(500,25, "Press P to play/pause.", {font: "14px Impact"});

		// Image
		this.image = this.add.image(400, 300, 'pic');

		// Audio
		this.soundFX = this.sound.add("test", {loop: true});
		this.soundFX.play();
		// this.soundFX.rate = 0.5;

		this.input.keyboard.on("keydown_L", function(e){
			this.soundFX.loop = !this.soundFX.loop;
			if(this.soundFX.loop)
				this.soundFX.play();
		}, this);

		this.input.keyboard.on("keydown_P", function(e){
			if(this.soundFX.isPlaying)
				this.soundFX.pause();
			else
				this.soundFX.resume();
		},this);
	
	// keyup: On any key pressed
		this.input.keyboard.on('keyup', function(e){
			// Now we'll switch between different scenes on key 2 or key 3 pressed.
			if(e.key == "1"){
				this.soundFX.stop();
				this.scene.start("Example1");
			}

			if(e.key == "2"){
				this.soundFX.stop();
				this.scene.start("Example2");
			}
		}, this);

	}
}