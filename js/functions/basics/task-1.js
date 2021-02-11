/* Создать функцию, которая выводит в консоль строчку в формате
'символ - код' для кодов в диапазоне 78000 - 78030 (все пары в диапазоне).
Используйте String.prototype.fromCodePoint(). */



function createMessage() {
	const startOfInterval = 78000;
    const endOfInterval = 78030;
    
    for (let i = startOfInterval; i <= endOfInterval; i++) {
        const symbol = String.fromCodePoint(i);
        const message = `${symbol} - ${i}`;

        console.log(message);
    }
}

createMessage();