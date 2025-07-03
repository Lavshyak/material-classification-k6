import http, {StructuredRequestBody} from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 60,
  duration: '30s',
};

const binFile = open('C:\\CodeProjects\\NET\\MaterialClassification\\data\\materials_under_microscope\\denimfabric-1A\\denimfabric-1A_9.jpg', 'b');

export default function() : void {
  const body:StructuredRequestBody = {}
  body["formFile"] = http.file(binFile, 'denimfabric-1A_9.jpg')
  let res = http.post('http://localhost:5269/Classification/ClassifySync', body);
  check(res, { "status is 200": (res) => res.status === 200 });
  sleep(1);
}
