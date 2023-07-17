// Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.

// const sqrt = (arr) => {
//     return arr.map(el => el * el)
// }
//
// console.log(sqrt([1, 2, 3, 0, 4, 5, 6]))

// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

// const checkArr = (arr) => {
//     return arr.filter(el => el > 0)
// }
//
// console.log(checkArr([1, 2, 3, 0, 4, 5, 6]))

// Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.

// const checkArr = (arr) => {
//     return arr.filter(el => el >= 0)
// }
//
// console.log(checkArr([1, 2, -3, 0, 4, -5, 6]))

// Дан массив с числами. Оставьте в нем только отрицательные числа.

// const checkArr = (arr) => {
//     return arr.filter(el => el < 0)
// }
//
// console.log(checkArr([1, 2, -3, 0, 4, 5, -6]))

// Дан массив с числами. Оставьте в нем только четные числа.

// const checkArr = (arr) => {
//     return arr.filter(el => el > 0)
// }
//
// console.log(checkArr([1, -2, 3, 0, 4, -5, 6]))

// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

// const checkStr = (arr) => {
//     return arr.filter(item => item.length > 5 )
// }
//
// console.log(checkStr(['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun', 'even']))

// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.

// let numbers = [1, 2, -3, 0, -4, 5, -6];
// let result = 0;
//
// for (let i = 0; i < numbers.length; ++i) {
//     if (numbers[i] < 0) {
//         result += numbers[i];
//     }
// }
//
// console.log(result)

// const arr1 = [1,2,3,4]
// const arr2 = ['a','b','c','d']
//
// console.log([...arr1 , ...arr2])

// const arr1 = [2, 3, 4, 5]
// const arr2 = 'hello world'
//
// console.log([...arr1 , arr2])

// const arr1 = [2, 3, 4, 5]
// const arr2 = 'hello world'
//
// console.log([...arr1 , ...arr2])

// const arr1 = [2, 3, 4, 5]
// const arr2 = 'hello world'
//
// console.log([...arr1 , ...arr2 , ...arr1])