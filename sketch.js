// HAPPINESS is a STARRY NIGHT

// Five main colors of the life cycle of a star
var colorList = ['OrangeRed', 'Gold', 'White', 'LightCyan', 'DodgerBlue'];
var iterator = 0;

function preload() {

}



function setup() {

  createCanvas(windowWidth, windowHeight);
  background("MidnightBlue");
  frameRate(24);

}



function draw() {

// Text
  push();
    fill('White');
    stroke('MidnightBlue');
    strokeWeight(2);
    textStyle(BOLD);
    textSize(20);
    textAlign(CENTER,CENTER);
    text('HAPPINESS is a STARRY NIGHT', windowWidth/2, windowHeight/2);
  pop();
  push();
    fill('White');
    stroke('MidnightBlue');
    strokeWeight(2);
    textSize(15);
    textAlign(CENTER,CENTER);
    text('- click to see the stars of Tatooine -', windowWidth/2, (windowHeight/2) + 25);
  pop();

// Flashing stars
  push();
    // var index = floor(random() * colorList.length);
    // var colorHex = colorList[index];
    //
    // fill(color(colorHex));
    // noStroke();
    //
    // var s = random() * width;
    // var t = random() * height;
    // var v = random() * 3;
    // square(s, t, v);
  pop();

// Moon cycle

  // for(var x = 150; x < (windowWidth-50); x+=220) {
	//    for(var y = 150; y < (windowHeight-50); y+=220) {
  // 	ellipse(x, y, 150);
  //   noStroke();
  //   noFill();
  //
  //     if (mouseIsPressed) {
  //       var index = floor(random() * colorList.length);
  //       var colorHex = colorList[index];
  //       fill(color(colorHex));
  //       noStroke();
  //     } else {
  //       noFill();
  //       }
  //
  //   }
  // }


  for(var x = 100; x < (windowWidth-50); x+=155) {
	   for(var y = 100; y < (windowHeight-50); y+=165) {


      if (mouseIsPressed) {
        var index = floor(random() * colorList.length);
        var colorHex = colorList[index];

        fill(color(colorHex));
        noStroke();

        var s = random() * width;
        var t = random() * height;
        var v = random() * 3;
        square(s, t, v);


        ellipse(x, y, 150);
        fill(color(colorHex));
        noStroke();
      } else {
        var index = floor(random() * colorList.length);
        var colorHex = colorList[index];

        fill(color(colorHex));
        noStroke();

        var s = random() * width;
        var t = random() * height;
        var v = random() * 3;
        square(s, t, v);

        }

      }
  }


}
