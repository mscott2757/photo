import Current from './Current';
import NewYork from './NewYork';
import Chicago from './Chicago';
import { Tokyo, Kyoto, Osaka } from './Japan';
import { SanFrancisco, Berkeley, LosAngeles } from './California';
import Paris from './Paris';
import Taiwan from './Taiwan';
import Portraits from './Portraits';
import Landscapes from './Landscapes';

export const CURRENT = 'current';

export const Accounts = [
  { className: "fa-instagram", url: "https://www.instagram.com/masonchan_/" },
  { className: "fa-facebook", url: "https://www.facebook.com/profile.php?id=100000034912802" },
  { className: "fa-github", url: "https://github.com/mscott2757/" },
  { className: "fa-spotify", url: "https://open.spotify.com/user/122383669" },
];

const PhotoContent = [
  { id: CURRENT, gallery: Current },
  { id: 'sf', gallery: SanFrancisco },
  { id: 'berkeley', gallery: Berkeley },
  { id: 'la', gallery: LosAngeles },
  { id: 'nyc', gallery: NewYork },
  { id: 'chicago', gallery: Chicago },
  { id: 'taiwan', gallery: Taiwan },
  { id: 'paris', gallery: Paris },
  { id: 'tokyo', gallery: Tokyo },
  { id: 'kyoto', gallery: Kyoto },
  { id: 'osaka', gallery: Osaka },
  { id: 'portraits', gallery: Portraits },
  { id: 'landscapes', gallery: Landscapes }
];

export default PhotoContent
