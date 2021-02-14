/* Создайте конструкцию, с помощью которой сразу выполниться выше реализованная функция conc. 
Используйте IIFE. */



(function conc() {
    const a = 1;
    const b = 1;
    const result = a.toString() + b.toString();
    const message = `result = ${result}`;

    console.log(message);
})();