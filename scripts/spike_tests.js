import http from 'k6/http';
import { check } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 10 }, // Нагрузка 10 пользователей
    { duration: '10s', target: 500 }, // Резкий скачок до 500 пользователей
    { duration: '10s', target: 10 },  // Снижение нагрузки обратно до 10
  ],
};

export default function () {
  let res = http.get('https://test.k6.io');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}