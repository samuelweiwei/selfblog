/**
 * @param {number[]} numbers The array of numbers.
 * @param {number} sum The required target sum.
 * @return {number[]} An array of 2 indices. The indices of the two elements whose sum is equal to sum.
 */
function findTwoSum(numbers, sum) {
    // Your code goes here
    for(var i=0;i<numbers.length;i++){
        const num = numbers.indexOf(sum-numbers[i]);
        if ((num !== -1) && (num !== i))
            return [i, num];
    }
    return null;
}

function removeProperty(obj, prop) {
    if (Object.hasOwn(obj, prop)){
        delete obj[prop];
        console.dir(obj);
        return true;
      }   
      return false;
  }

  class Song {
    name;
    nextSong;
    
    constructor(name) {
      this.name = name;
    }
    
    /**
     * @return {boolean} true if the playlist is repeating, false if not.
     */
    isInRepeatingPlaylist() {
      // Your code goes here
      let song = this.name;
      let next = this.nextSong.name;
      while ((song !== null) && (next !== null)){
        if (song.name === next.name)
            return true;
        song = this.nextSong.name;
        next = this.nextSong?.nextSong.name;
      }
      return false;

    }
  }
  
  function appendChildren(decorateDiv) {
    var allDivs = [...document.getElementsByTagName("div")];
    allDivs = allDivs.slice(0, allDivs.length);
    for (var i = 0; i < allDivs.length; i++) {
      var newDiv = document.createElement("div");
      decorateDiv(newDiv);
      allDivs[i].appendChild(newDiv);
    }
  }
  
  // Example case. 
  document.body.innerHTML = `
  <div id="a">
    <div id="b">
    </div>
  </div>`;
  
  //appendChildren(function(div) {});
  console.log(document.body.innerHTML);