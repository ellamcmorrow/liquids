var movers=[];
var liquids=[];

function setup(){
	createCanvas(800,800);
	background(105,105,105);

  //var Liquid=function(x,y,w,h,c,r,g,b,o)
  liquids[0] = new Liquid(0,500,800,400,0.5,255,179,71);
//pink
  liquids[1]= new Liquid(0,200,800,100,0.3,240,0,255);
//yellow
  liquids[2]= new Liquid(0,300,800,200,0.5,254,213,0);

  //var Mover =function(x,y,vx,vy,ax,ay,mr,g,b,o)
  movers[0] = new Mover(100,100,2,3,1,1,40,253,202,150);

  //var Mover =function(x,y,vx,vy,ax,ay,m,r,g,b,o)
  movers[1] = new Mover(400,200,2,3,0.8,0.9,100,253,253,150);

  movers[2] = new Mover(800,100,1.5,2.5,1,0.5,70,253,175,253);

}

function draw(){
	background(105,105,105);
//display three liquids
for(i=0; i<liquids.length;i++){
	liquids[i].display();
}
//nested forloop 
for(x=0; x<movers.length;x++){
	for(i=0; i<liquids.length;i++){
		if(liquids[i].contains(movers[x])){
			console.log("Mover"+x+ "Is in the liquid")
			var dragForce=liquids[i].calculateDrag(movers[x]);
			movers[x].applyForce(dragForce);
		}
		


		movers[x].update();
		movers[x].display();
		movers[x].checkEdges();
	}
}

}





