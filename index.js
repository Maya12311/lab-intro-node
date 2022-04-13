class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  
  add(item) {
    this.length++
    this.items.push(item)
    let sortedArray = this.items.sort((a,b) => a - b)
    return sortedArray
  }

  get(pos) {
    if(pos > this.items.length){
      throw new Error('OutOfBounds');
    } else{
      return this.items[pos]
    }
  }

  max(items) {
    if(this.items.length === 0)
      throw new Error('EmptySortedList');
      else
      return Math.max(...this.items)
  }

  min(items) {
    if(this.items.length === 0)
    throw new Error('EmptySortedList')
    else
    return Math.min(...this.items)
  }

  sum() {
    if(this.items.length === 0){
   return 0
    }else{const sumCount = this.items.reduce(function(accumulator, currentValue){
      return accumulator + currentValue
    }) 
      return sumCount
  } 
  }

  avg() {
    if(this.items.length === 0)
    throw new Error('EmptySortedList') 
      let totalSum = this.sum()
      return totalSum / this.items.length
    

}

}

module.exports = SortedList;