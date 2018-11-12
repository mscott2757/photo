import { getS3Url } from './helpers';

const Current = {
  title: 'The Current Issue',
  photos: [
    { url: getS3Url("sf/alamo.jpg") },
    { url: getS3Url("sf/hayes.jpg") },
    { url: getS3Url("sf/davidson.jpg") },
    { url: getS3Url("sf/muni-sq.jpg") },
    { url: getS3Url("sf/caltrain-sq.jpg") },
  ]
}

export default Current;
