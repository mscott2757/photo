import { getS3Url } from './helpers';

const Chicago = {
  title: 'Chicago',
  photos: [
    { url: getS3Url("chicago/undercta.jpg") },
    { url: getS3Url("chicago/buildings.jpg") },
    { url: getS3Url("chicago/rails.jpg") },
    { url: getS3Url("chicago/caught.jpg") },
    { url: getS3Url("chicago/bike.jpg") },
    { url: getS3Url("chicago/cta-girl.jpg") },
    { url: getS3Url("chicago/wormhole.jpg") },
    { url: getS3Url("chicago/lincolnpark.jpg") },
  ]
}

export default Chicago;
