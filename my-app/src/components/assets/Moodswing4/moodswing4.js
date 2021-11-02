/* eslint-disable */
//        MM   MM      SSSSS
//        M  M  M     SSS
//        M     M        SSS
//        M     M     SSSSS

let mic, fft;
let data = {}; // Global object to hold results from the loadJSON call
let mobject = [];
let src = [];
let mobjects = [];
let cnv;
// if not starting in server write: getAudioContext().resume() in console


class Mobject {
  constructor(id, src, xax, yax, wpix, hpix, freqmin, freqmax) {
    this.id = id;
    this.src = src;
    this.xax = xax;
    this.yax = yax;
    this.wpix = wpix;
    this.hpix = hpix;
    this.freqmin = freqmin;
    this.freqmax = freqmax;
    this.freq = false;
    this.hide = false;

  }
  toggleHide() {

    this.hide = true;
  }

  reset() {
    this.hide = false;
  }

  show() {
    if ((this.hide == true) && (this.freq == true)) {
      image(this.src, this.xax, this.yax, this.wpix, this.hpix);
    }
  }

}


// function centerCanvas() {
//   let x = (windowWidth - width) / 2;
//   let y = (windowHeight - height) / 2;
//   cnv.position(x, y);
// }


function preload() {
  data = loadJSON('../assets/moodswing4/database.json');
}

function setup() {
  // cnv = createCanvas(windowWidth, windowHeight);
  // centerCanvas();
  createCanvas(922, 910);

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  //noCursor();

  for (let i = 0; i < 84; i++) {
    id = data.moodswing[i].id;
    xax = data.moodswing[i].position.x;
    yax = data.moodswing[i].position.y;
    wpix = data.moodswing[i].size.width;
    hpix = data.moodswing[i].size.height;
    freqmin = data.moodswing[i].freq.freqmin;
    freqmax = data.moodswing[i].freq.freqmax;
    src = loadImage("../assets/moodswing4/visuals/part" + i + ".png");
    // moodswingRatio = data.moodswing[i].size.height / data.moodswing[i].size.width

    let m = new Mobject(id, src, xax, yax, wpix, hpix, freqmin, freqmax);
    mobjects.push(m);
  }

}

function windowResized() {
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  let spectrum = fft.analyze();
  let freqvalue = fft.getEnergy(10, 210);
  //print(freqvalue);
  for (i = 0; i < 84; i++) {
    if ((freqvalue <= mobjects[i].freqmax) && (freqvalue >= mobjects[i].freqmin)) {
      mobjects[i].freq = true;
      mobjects[i].show();

    }
  }

  for (i = 0; i < 18; i++) {
    if (key == '2') {
      mobjects[i].toggleHide();
    }
  }
  for (i = 18; i < 36; i++) {
    if (key == '3') {
      mobjects[i].toggleHide();
    }
  }
  for (i = 0; i < 36; i++) {
    if (key == 'Q') {
      mobjects[i].toggleHide();
    }
  }
  for (i = 40; i < 58; i++) {
    if (key == '4') {
      mobjects[i].toggleHide();
    }
  }
  for (i = 59; i < 77; i++) {
    if (key == '5') {
      mobjects[i].toggleHide();
    }
  }


  for (i = 77; i < 81; i++) {
    if (key == '0') {
      mobjects[i].toggleHide();
    }
  }
  for (i = 81; i < 84; i++) {
    if (key == '6') {
      mobjects[i].toggleHide();
    }
  }

  for (i = 0; i < 84; i++) {
    if (key == '1') {
      mobjects[i].reset();
    }
  }

}