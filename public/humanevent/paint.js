function Paint(p) {

  var ppos = p.copy();
  var pos = p.copy();
  var vel = createVector(0, 0);
  var force = createVector(0, 0);;

  var maxSpeed = 2.8;
  var perception = 5;
  var bound = 60;
  var boundForceFactor = 0.16;
  var noiseScale = 100.0;
  var noiseInfluence = 1 / 20.0;

  var dropRate = 0.004;
  var dropRange = 40;
  var dropAlpha = 150;
  var drawAlpha = 50;
  var drawColor = color(0, 0, 0, drawAlpha);
  var drawWeight = 1;
  var count = 0;
  var maxCount = 100;

  this.update = function () {
    ppos = pos.copy();
    force.mult(0);

    // Add pixels force
    var target = createVector(0, 0);
    var count = 0;
    for (var i = -floor(perception / 2); i < perception / 2; i++) {
      for (var j = -floor(perception / 2); j < perception / 2; j++) {
        if (i == 0 && j == 0)
          continue;
        var x = floor(pos.x + i);
        var y = floor(pos.y + j);
        if (x <= img.width - 1 && x >= 0 && y < img.height - 1 && y >= 0) {
          var c = fget(x, y);
          var b = brightness(c);
          b = 1 - b / 100.0;
          var p = createVector(i, j);
          target.add(p.normalize().copy().mult(b).div(p.mag()));
          count++;
        }
      }
    }
    if (count != 0) {
      force.add(target.div(count));
    }

    // Add noise force
    var n = noise(pos.x / noiseScale, pos.y / noiseScale, z);
    n = map(n, 0, 1, 0, 5 * TWO_PI);
    var p = p5.Vector.fromAngle(n);
    if (force.mag() < 0.01)
      force.add(p.mult(noiseInfluence * 5));
    else
      force.add(p.mult(noiseInfluence));

    // Add bound force
    var boundForce = createVector(0, 0);
    if (pos.x < bound) {
      boundForce.x = (bound - pos.x) / bound;
    }
    if (pos.x > width - bound) {
      boundForce.x = (pos.x - width) / bound;
    }
    if (pos.y < bound) {
      boundForce.y = (bound - pos.y) / bound;
    }
    if (pos.y > height - bound) {
      boundForce.y = (pos.y - height) / bound;
    }
    force.add(boundForce.mult(boundForceFactor));


    vel.add(force);
    vel.mult(0.9999);
    if (vel.mag() > maxSpeed) {
      vel.mult(maxSpeed / vel.mag());
    }

    pos.add(vel);
    if (pos.x > width || pos.x < 0 || pos.y > height || pos.y < 0) {
      this.reset();
    }

  }

  this.reset = function () {
    img.updatePixels();
    img.loadPixels();

    count = 0;
    //maxCount = 200;
    var hasFound = false;
    while (!hasFound) {
      pos.x = random(1) * width;
      pos.y = random(1) * height;
      var c = fget(floor(pos.x), floor(pos.y));
      var b = brightness(c);
      if (b < 35)
        hasFound = true;
    }
    drawColor = fget(floor(pos.x), floor(pos.y));
    drawColor.setAlpha(drawAlpha);
    ppos = pos.copy();
    vel.mult(0);
  }

  this.show = function () {
    count++;
    if (count > maxCount)
      this.reset();
    stroke(drawColor);
    strokeWeight(drawWeight);
    if (force.mag() > 0.1 && random(1) < dropRate) {
      drawColor.setAlpha(dropAlpha);
      stroke(drawColor);
      var boldWeight = drawWeight + random(5);
      strokeWeight(boldWeight);
      drawColor.setAlpha(drawAlpha);
    }
    line(ppos.x, ppos.y, pos.x, pos.y);

    this.fadeLineFromImg(ppos.x, ppos.y, pos.x, pos.y);
  }

  /* Fade the pixels of the line */
  this.fadeLineFromImg = function (x1, y1, x2, y2) {
    var xOffset = floor(abs(x1 - x2));
    var yOffset = floor(abs(y1 - y2));
    var step = xOffset < yOffset ? yOffset : xOffset;
    for (var i = 0; i < step; i++) {
      var x = floor(x1 + (x2 - x1) * i / step);
      var y = floor(y1 + (y2 - y1) * i / step);
      var originColor = fget(x, y);

      var r = red(originColor);
      var g = green(originColor);
      var b = blue(originColor);

      originColor.setRed(r + 50 > 255 ? 255 : r + 50);
      originColor.setGreen(g + 50 > 255 ? 255 : g + 50);
      originColor.setBlue(b + 50 > 255 ? 255 : b + 50);

      fset(x, y, originColor);

    }
  }

}