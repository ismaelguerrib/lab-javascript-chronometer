class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    var minute = this.currentTime / 60;
    return Math.floor(minute);
  }
  getSeconds() {
    var seconds = this.currentTime % 60;
    return seconds;
  }
  twoDigitsNumber(v) {
    var vToString = v + "";
    if (vToString.length == 1) {
      return 0 + vToString;
    } else {
      return vToString;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    clearInterval(this.currentTime);
  }
  splitClick() {}
}
