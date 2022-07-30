const { name } = require("browser-sync");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
    if(min>=max){
    throw new Error;
  }
  return Math.floor(Math.random()*(max-min+1)+min);
}
// функцию нашла на https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getLengthCount(string, length) {
  return string.length > length;
}
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length"
const getRandomArrayElement = (elements) => {
  return elements[getRandomInt(0, elements.length - 1)];
};
const descriptions = [`на природе`, `дома`, `на отдыхе`, `гуляю`];

const name = [`Марта`, `Кира`, `Вася`, `Гена`, `Аксинья`, `Вероника`, `Егор`];
const messsages = [`Всё отлично!`,
`В целом всё неплохо. Но не всё.`,
`Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`,
`Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`,
`Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`,
`Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`];

const comments =(id)=>({
  id:getRandomInt(1,25),
  avstar:`img/avatar-${getRandomInt(1,6)}.svg`,
  message:getRandomArrayElement(messsages),
  name:getRandomArrayElement(name)
  })

const makePhoto =(id)=>({
  id,
  url:`photos/${id}.jpg1`,
  likes:getRandomInt(15,200),
  description:getRandomArrayElement(descriptions),
  comment: comments()
  });

const makePhotos =(count)=>{
  const photos =[];
for (let i = 1; i <= count; i++) {
 photos.push(makePhoto(i));
}
return photos
}

const allMakePhotos = Array.from({length: 25}, makePhotos)

