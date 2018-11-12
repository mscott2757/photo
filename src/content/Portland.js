import { getS3Url } from './helpers';

const Portland = {
  title: 'Portland',
  photos: [
    { url: getS3Url("oregon/cherry.jpg") },
    { url: getS3Url("oregon/cherry-2.jpg") },
    { url: getS3Url("oregon/car.jpg") },
    { url: getS3Url("oregon/petersons.jpg") },
    { url: getS3Url("oregon/heart.jpg") },
    { url: getS3Url("oregon/blue-car.jpg") },
    { url: getS3Url("oregon/swings.jpg") },
    { url: getS3Url("oregon/powell-bus.jpg") },
  ]
}

export default Portland;
