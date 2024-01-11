function EraserTool(){
    this.name = "eraserTool";
	this.icon = "assets/eraserTool.jpg";

	//draws the eraser to the screen 
	this.draw = function(){
		//only draw when mouse is clicked
		if(mouseIsPressed){
            ellipse(mouseX,mouseY,100);
			//fill is set to white to not be affected by the colour palette
            fill(255);
            stroke(255);
		}
	};
}