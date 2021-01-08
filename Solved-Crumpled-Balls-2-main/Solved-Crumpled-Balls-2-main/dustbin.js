class dustbin{

	constructor(x,y,width,height){
		var options = {
			isStatic:true
		}

		this.body = Bodies.rectangle(x,y,width,height,options);
		this.image = loadImage("dustbingreen.png")
		this.width = width;
		this.height = height;
		//Not to add inside the world as it might make the paper rest on the dustbin
		// World.add(world,this.body);
		
	}

	display(){
		imageMode(CENTER);
		image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
	}
}