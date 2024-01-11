/*
	1. plot out a shape as a series of vertices
		*Add a button switching between
		creating new vertices and editing
		*Click the canvas to add a vertex
		* don't draw right away add vertex to
		an array the draw but don't save to canvas
	2. Edit the vertices using a mouse drag
		*if editing is on
		*highlight the location of the vertices
		*when mouse pressed is near vertex (using the dist)
		update the vertex x and y with the mouseX and mouseY

	3. confirm the final shape
*/
function EditShapeTool() {
    this.name = "EditShapeTool";
    this.icon = "assets/vertexTool.jpg";
	
	var finishButton;
	
	var editMode = false
	var array = [[],[]];

	loadPixels();
	//Finish button that finishes the shape and resets the array.
	finishButton = createButton('Finish Shape');
	finishButton.mousePressed(function(){
		editMode = false;
		loadPixels();
		array =	 [[],[]];
		this.draw;
	})

	this.mousePressOnCanvas = function(c) {
		/*detects if mousepressed is on the canvas or not. If it is on
		the canvas then draws the line and if not does not draw the line
		*/
        this.canvasContainer = select('#content')
        var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
        c.parent("content");
        background(255);

		 if (mouseX > c.elt.offsetLeft &&
                mouseX < (c.elt.offsetLeft + c.width) &&
                mouseY > c.elt.offsetTop &&
                mouseY < (c.elt.offsetTop + c.height)) 
			{
                return true;
            }
            return false;
	}

	this.draw = function() {
		updatePixels();
		this.shape(array);
	}

	//constructor function of the shape itself to use different array.
	this.shape = function (array) {
		if(mouseIsPressed && this.mousePressOnCanvas(canvas)){
			//pushes each mouse location 
			if(!editMode){
				array.push({
					x: mouseX,
					y: mouseY
				});
			}
			else{
				for (var i = 0; i < array.length; i++){
					if(dist(
							array[i].x, array[i].y,
							mouseX, mouseY) < 15){
								array[i].x = mouseX;
								array[i].y = mouseY
							}
				}
			}
		}

		beginShape();
			for (var i = 0; i < array.length; i++){
				vertex(array[i].x, array[i].y);
				//whenever edit shape button is pressed to draw the red circles.
				if(editMode){
					fill('red');
					ellipse(array[i].x, array[i].y,10);
					noFill();
				}
			}
		endShape();
	}
	//gets rid of the options tool is changed.
	this.unselectTool = function() {
		updatePixels();
		//clear options
		select(".options").html("");
	};

	this.populateOptions = function() {
        select(".options").html(
            "<button id='Shape'>Edit Shape</button>");
			
        //click handler
        select("#Shape").mouseClicked(function(){
            var button = select("#" + this.elt.id);
            if (editMode && !this.mousePressOnCanvas) {
                editMode = false;
                
                button.html('Edit Shape');
            } else {
                editMode = true;
				mousePressOnCanvas = false;
                button.html('Add Vertices');
            }
        });
    }
}