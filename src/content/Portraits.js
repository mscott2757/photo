import { getS3Url } from './helpers';

const Portraits = {
  title: "Portraits",
  photos: [
    { url: getS3Url('sf/w-davidson.jpg') },
    { url: getS3Url('sf/w-davidson-2.jpg') },
    { url: getS3Url('kyoto/bamboo-waves.jpg') },
    { url: getS3Url('osaka/castle-waves.jpg') },
    { url: getS3Url('berkeley/sunny.jpg') },
    { url: getS3Url("tam/sunny.jpg") },
    { url: getS3Url("tam/estell.jpg") },
  ],
}

export default Portraits;
