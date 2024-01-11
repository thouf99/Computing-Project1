For the Project I have chosen the drawing application project and will be working on my own to make the developments possible.
The drawing application allows users to draw and create unique shape and add colour to them.

Some of the tool that have been added:
- Edit shape tool
- Eraser tool
- Load image tool
- Star trail tool
- Pencil or line tool Width adjustment

Edit shape tool:
located in EditShapeTool.js
- when the mouse is clicked or dragged on the canvas draws a line from each point of the mouse to the next
- when the edit shape button is pressed, allows full manipulation of the shape and changes the buttons name to add vertices
    and turns edit mode to true
- when add vertices button is pressed to turn edit mode to false and allows more lines to be added to the shape from the last mouse pressed
    location.
- Finish button finishes the shape to the canvas and allows another shape to be drawn.
- To download the image you have to select another tool to save the image to the canvas!!

Eraser tool:
located in eraserTool.js
- When mouse is pressed on the canvas to continuously erase from the location of the mouse

Load Image button:
Located in helperFunctions.js
- Loads the image that is in the folder called assets and is named image.jpg
- Loads the image to the size of the canvas

Star trail tool:
Located in starTrailTool.js
- when mouse is pressed to continuously draw the star with a fill that has been selected.

Pencil or line tool Width adjustment:
Located in helperFunctions.js
- the default of the width will always be set to 2.
- whenever the there is an input and the "accept" button is pressed to change the strokeWeight to that value.