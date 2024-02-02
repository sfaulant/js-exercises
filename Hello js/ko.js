const longestString = param => {
  const words = param.split(' ');
  let longestWord = '';
  let longestWordsArray = [];
  for (let i = 0; i < words.length; i++) {
   if (words[i].length > longestWord.length) {
    longestWord = words[i];
    longestWordsArray = [words[i]];
   } else if (words[i].length === longestWord.length) {
    longestWordsArray.push(words[i]);
   }
  }
  if (longestWordsArray.length > 1) {
    return longestWordsArray.toString(' ');
  } else {
    return longestWord;
  }
}

console.log(longestString('My Hobby is Bobby'));