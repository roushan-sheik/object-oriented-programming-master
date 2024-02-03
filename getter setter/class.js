  class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    console.log(this);
  }
  //NOTE - Setter
  set width(newWidth) {
    this._width = newWidth;
  }
  set height(newHeight) {
    this._height = newHeight;
  }
  //NOTE -  Getter
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
}

const rect = new Rectangle(0, 0);

console.log(rect.width);
console.log(rect.height);
