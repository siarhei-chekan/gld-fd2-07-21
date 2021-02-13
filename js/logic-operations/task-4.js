/* Объявите переменную month и проинициализируйте ее числом от 1 до 12.
Вычислите время года и выведите его в консоль. */

let month;
month = 9;
let season;

if ( (month === 12) || (month === 1) || (month === 2)) {

    season = "Winter";
    console.log(season);

} else if ( (month === 3) || (month === 4) || (month === 5) ) {

    season = "Spring";
    console.log(season);

} else if ( (month === 6) || (month === 7) || (month === 8) ) {

    season = "Summer";
    console.log(season);

} else if ( (month === 9) || (month === 10) || (month === 11) ) {

    season = "Autumn";
    console.log(season);

}