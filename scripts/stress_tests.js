import http from 'k6/http';
import { check } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 100 }, // Нагрузка растёт до 100 пользователей за 30 секунд
    { duration: '1m', target: 500 },  // Затем до 500 пользователей за 1 минуту
    { duration: '30s', target: 1000 }, // И до 1000 пользователей за 30 секунд
    { duration: '30s', target: 0 },   // Постепенное снижение нагрузки
  ],
};

export default function () {
  let res = http.get('https://test.k6.io');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}