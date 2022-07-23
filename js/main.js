function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if(min>max){
    throw new Error
  }
    return Math.floor(Math.random()*(max-min+1)+min)
  }
    // функцию нашла на https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getLenghtCount(string, length) {
      return string.length > length
    }
    //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length


