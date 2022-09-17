function isPalindrome(word) {
  let len = Math.floor(word.length / 2);

  for (let i = 0; i < len; i++) {
    if (word[i] !== word[word.length - i - 1]) {
      return false;
    }
  }

  return true;
}

(() => {
  // Colocar a palavra que deseja verificar se é palíndromo
  let word = "arara";

  if(isPalindrome(word)) {
    console.log(`A palavra ${word} é um palíndromo`);
  } else {
    console.log(`A palavra ${word} não é um palíndromo`);
  }
})();
