// Получаем аргумент из командной строки
const input = process.argv[2];
if (!input || typeof input !== 'string') {
  console.error("Передайте масив як строку: node sum.js \"[1, 2, [3, 4, [5]], 6]\"");
  process.exit(1);
}
let data;
try {
  data = JSON.parse(input);
} catch (error) {
  console.error("Виникла помилка при парсингу вхідних даних:", error);
  process.exit(1);
}
function sum(arr) {
  return arr.reduce((acc, el) => {
    if (Array.isArray(el)) {
      return acc + sum(el);
    } else if (typeof el === 'number') {
      return acc + el;
    } else {
      return acc;
    }
  }, 0);
}

const result = sum(data);
console.log("Сума:", result);
