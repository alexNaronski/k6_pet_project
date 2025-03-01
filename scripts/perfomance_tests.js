import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 100, // 100 виртуальных пользователей
  duration: '30s', // Тест длится 30 секунд
};

export default function () {
  let res = http.get('https://test.k6.io');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 200ms': (r) => r.timings.duration < 200,
  });
  sleep(1); // Пауза между запросами
}