import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 50, // 50 виртуальных пользователей
  duration: '1h', // Тест длится 1 час
};

export default function () {
  let res = http.get('https://test.k6.io');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}