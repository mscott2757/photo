import { getS3Url } from './helpers';

const Landscapes = {
  title: "Landscapes",
  photos: [
    { url: getS3Url("sf/richmond.jpg") },
    { url: getS3Url("sf/bernal-fog.jpg") },
    { url: getS3Url("sf/sutro.jpg") },
    { url: getS3Url("oregon/water.jpg") },
    { url: getS3Url("tam/empty.jpg") },
    { url: getS3Url("tam/road.jpg") },
    { url: getS3Url("sf/bernal.jpg") },
    { url: getS3Url("sf/ocean.jpg") },
  ],
}

export default Landscapes;
