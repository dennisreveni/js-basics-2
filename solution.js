function isEven(number) {
    if(number === 0){ //если число четное
        return true;
    }else if(number === 1 || isNaN(number)){  //если число не четное, или функция вызвана без аргумента
        return false;
    }else if(number < 0){ //если число отрицательное, вызываем эту функцию с противоположным значением
        return isEven(-number);
    }else{ // если число больше 2, отнимаем 2 и вызываем эту функцию заново до тех пор, пока не станет 0 или
        return isEven(number-2);
    }
}

function pascal(row, col) {
    if (row<col || row===undefined || col===undefined || row<0 || col<0){ // "валидация" введенных значений
       return undefined;
    }else if (row == col || col == 0){ // первое и последнее числа равны 1 (википедия)
       return 1;
    }else{ // если все в порядке, определяем значение по формуле: n!/m!/(n-m)! (википедия)
        function factorial(n) {
            return (n!=1) ? n*factorial(n-1) : 1; // рекурсивный подсчет факториала
        }
        return factorial(row) / factorial(col) / factorial(row - col); // расчет значения
    }
}

// корень квадратный по методу Ньютона - A2=0.5 (A1 + X/A1)
function sqrt(x) { //основная функция подсчета корня квадрата
  return (sqrtIter(1, x)); 
}

function sqrtIter(guess, x) { //итерация расчета
  return isGoodEnough(guess, x) ? guess : sqrtIter(improve(guess, x), x); // Если число максимально приближено к результату, возвращаем его, иначе следующая итерация
}

function improve(guess, x) {
  return average(guess, (x / guess))
}

function average(x, y) {
  return (x + y) / 2;
}

function isGoodEnough(guess, x) {
  if (Math.abs(square(guess) - x) / x < 0.0000000000000001) {
    return true; //Если число максимально приближено к результату, возвращаем true, иначе false
  }
}

function square(x) {
  return x * x;
}

module.exports.isEven = isEven;
module.exports.pascal = pascal;
module.exports.sqrt = sqrt;
