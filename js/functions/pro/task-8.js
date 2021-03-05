/* Memoization. Создать функцию fiboMemo для вычисления чисел Фибоначчи 
по формуле F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2.
Функция должна хранить те значения, которые она уже вычисляла.
Используя методы console.time(), console.timeEnd() или performance.now()
определите время вычисления функции fibo и функции fiboMemo. */


function fibo(n) {

    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibo(n-1) + fibo(n-2);
    }
}

function memoiz(fun) {
    let cache = {};

    return function(n) {
        if (n in cache) {
            console.log('Взято из кэша!');
            return cache[n];
        } else {
            console.log('Вычислено!');
            let result = fun(n);
            cache[n] = result;
            return result;
        }
    }
}

const fiboMemo = memoiz(fibo);

console.time('fibo');
console.log(fibo(10));
console.timeEnd('fibo');
console.time('fibo');
console.log(fibo(10));
console.timeEnd('fibo');

console.time('fiboMemo');
console.log(fiboMemo(10));
console.timeEnd('fiboMemo');
console.time('fiboMemo');
console.log(fiboMemo(10));
console.timeEnd('fiboMemo');

console.time('fiboMemo');
console.log(fiboMemo(3));
console.timeEnd('fiboMemo');

console.time('fiboMemo');
console.log(fiboMemo(3));
console.timeEnd('fiboMemo');

console.time('fibo');
console.log(fibo(3));
console.timeEnd('fibo');

console.time('fiboMemo');
console.log(fiboMemo(3));
console.timeEnd('fiboMemo');

console.time('fiboMemo');
console.log(fiboMemo(4));
console.timeEnd('fiboMemo');