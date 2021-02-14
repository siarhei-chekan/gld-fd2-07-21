/* Создать функцию-конструктор Tune(title, artist) для создания объектов с публичными свойствами title, artist 
и методом concat(). 
Метод должен возвращать конкатенацию значений свойств title и artist.
Создать несколько объектов. Вызвать их метод concat().*/

function Tune(title, artist) {
    this.title = title;
    this.artist = artist;

    this.concat = function() {
        return this.title + this.artist;
    };
}

const music = new Tune('The Best Song', 'Micle Jackson');
const myMusic = new Tune('Good Song', 'Madonna');

console.log(music.concat());
console.log(myMusic.concat());