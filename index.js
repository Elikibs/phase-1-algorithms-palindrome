function isPalindrome(word) {
  const wordLength = word.length;
  for (i=0; i < (wordLength/2); i++){
    if(word[i] !== word[wordLength-1-i]){
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
  Get word length
  Use for loop to initialize the "array like character set of words"
  Check if a letter at a particular index is same with a letter from "same" index backwards
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
