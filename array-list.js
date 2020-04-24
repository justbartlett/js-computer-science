// array list
// usual javascript array
// insert and delete can be super expensive (the shifting)
// e.g. you have 1,000,000 items, and you insert at position 500,000, then 500,000 has to shift over
// but lookups are super fast

class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(val) {
    this.data[this.length] = value;
    this.length++;
  }
  pop() {
    const ans = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return ans;
  }
  get(index) {
    return this.data[index];
  }
  delete(index) {
    const ans = this.data[index];
    this._collapseTo(index);
    return ans;
  }
  _collapseTo(index) {
    // if you delete index 4 shift everything back up one
    for (let i=index; i<this.length; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
  
}