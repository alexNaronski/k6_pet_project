import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 100 }, // Постепенное увеличение нагрузки
    { duration: '1m', target: 500 },  // Пиковая нагрузка
    { duration: '30s', target: 0 },   // Постепенное снижение нагрузки
  ],
};

export default function () {
  let res = http.get('https://test.k6.io');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });
  sleep(1); // Пауза между запросами
}