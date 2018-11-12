import { getS3Url } from './helpers';

const NewYork = {
  title: "New York",
  photos: [
    { url: getS3Url("nyc/fifty-seven.jpg") },
    { url: getS3Url("nyc/soho-crossing.jpg") },
    { url: getS3Url("nyc/soho-foot.jpg") },
    { url: getS3Url("nyc/soho-woman.jpg") },
    { url: getS3Url("nyc/subway-woman.jpg") },
    { url: getS3Url("nyc/greenwich.jpg") },
    { url: getS3Url("nyc/couple.jpg") }
  ]
}

export default NewYork;
