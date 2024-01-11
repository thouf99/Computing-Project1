function StarTrailTool () {
  this.name = "StarTrailTool";
  this.icon = "assets/starTrailTool.jpg";

  //drawing the star to the screen
  this.draw = function() {
    //only draw when the mouse is clicked
    if(mouseIsPressed){
      //StrokeWeight set to 2 to not affect the shapes outline
      strokeWeight(2);
      stroke(255);
      beginShape()
      //adding mouseX and mouseY allows the points to be moved from the location of when the mouse is pressed
      vertex(108+mouseX,0.0+mouseY);
      vertex(141+mouseX, 70+ mouseY);
      vertex(218+mouseX, 78.3+mouseY);
      vertex(162+mouseX, 131+mouseY);
      vertex(175+mouseX, 205+mouseY);
      vertex(108+mouseX, 170+mouseY);
      vertex(41.2+mouseX, 205+mouseY);
      vertex(55+mouseX, 131+mouseY);
      vertex(1+mouseX, 78+mouseY);
      vertex(75+mouseX, 68+mouseY);
      vertex(108+mouseX, 0+mouseY);
      endShape()
    } 
  }
}