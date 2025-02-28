import http from 'k6/http';
import { check, sleep } from 'k6';

// Опции теста
export const options = {
  vus: 10, // Количество виртуальных пользователей
  duration: '30s', // Длительность теста
};

// Основная функция
export default function () {
  // Отправляем GET-запрос
  const res = http.get('https://test.k6.io');

  // Проверяем, что статус ответа равен 200
  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  // Пауза между запросами (1 секунда)
  sleep(1);
}