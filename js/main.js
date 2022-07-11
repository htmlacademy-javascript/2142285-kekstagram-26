function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    if(min >= max){
        console.log('ошибка')
    } else {
    return Math.floor(Math.random() * (max - min + 1)) + min};
}
    // функцию нашла на https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random



    function getLenghtCount(string, lenght) {
      if (string.length > lenght){
        return false;
        } else {
        return true
          }
    }
   //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length

