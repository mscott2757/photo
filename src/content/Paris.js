import { getS3Url } from './helpers';

const Paris = {
  title: 'Paris',
  photos: [
    { url: getS3Url("paris/subway.jpg") },
    { url: getS3Url("paris/birhakeim.jpg") },
    { url: getS3Url("paris/accordian.jpg") },
    { url: getS3Url("paris/ladefense.jpg") },
    { url: getS3Url("paris/canal.jpg") },
    { url: getS3Url("paris/fumer.jpg") },
    { url: getS3Url("paris/canalcouple.jpg") },
    { url: getS3Url("paris/pompidou.jpg") },
  ]
}

export default Paris;
