function HelperFunctions() {

	//Jquery click events. Notice that there is no this. at the
	//start we don't need to do that here because the event will
	//be added to the button and doesn't 'belong' to the object

	//event handler for the clear button event. Clears the screen
	select("#clearButton").mouseClicked(function() {
		background(255, 255, 255);
		//call loadPixels to update the drawing state
		//this is needed for the mirror tool
		loadPixels();
	});

	//event handler for the save image button. saves the canvas to the
	//local file system.
	select("#saveImageButton").mouseClicked(function() {
		saveCanvas("myPicture", "jpg");
	});
    
	//event handler that will load the image to the canvas by choosing a file name of image.jpg
    select("#loadImageButton").mouseClicked(function(){
        loadImage('assets/image.jpg', img => {
            image(img,0,0, canvasContainer.size().width,canvasContainer.size().height);
          });
    })

	//event handler that will change the stroke width on the pencil or line tool as they both depend on strokeWeight being determined
	select("#Size").mouseClicked(function(){
		var x = document.getElementById("myNumber").value;
		//whatever value is inputted will change the stroke weight to that value 
		strokeWeight(x)
	})

}