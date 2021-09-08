class rope{
	constructor(body1,body2, pointA, pointB)
	{
		this.pointA=pointA
		this.pointB=pointB
	
		var options={
			bodyA:body1,//bob
			bodyB:body2,//roof
			pointB:{x:pointA, y:pointB}//roof points
		}
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		//var pointA=this.rope.bodyA.position;
		//var pointB=this.rope.bodyB.position;

		strokeWeight(2);
		line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x+this.pointA,this.rope.bodyB.position.y+this.pointB)

		
	}

}