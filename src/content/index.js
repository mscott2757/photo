import Current from './Current';
import NewYork from './NewYork';
import Chicago from './Chicago';
import Portland from './Portland';
import { Tokyo, Kyoto, Osaka } from './Japan';
import { SanFrancisco, Berkeley, LosAngeles, Oakland } from './California';
import Paris from './Paris';
import Taiwan from './Taiwan';
import { HongKong } from './HongKong';
import Portraits from './Portraits';
import Landscapes from './Landscapes';
import Grad from './Grad';

export const CURRENT = 'current';

export const Accounts = [
  { className: "fa-instagram", url: "https://www.instagram.com/masonchan_/" },
  { className: "fa-facebook", url: "https://www.facebook.com/profile.php?id=100000034912802" },
  { className: "fa-spotify", url: "https://open.spotify.com/user/122383669" },
];

export const PhotoContent = {
  [CURRENT]: Current,
  'sf': SanFrancisco,
  'berkeley': Berkeley,
  'la': LosAngeles,
  'oakland': Oakland,
  'nyc': NewYork,
  'chicago': Chicago,
  'pdx': Portland,
  'taiwan': Taiwan,
  'paris': Paris,
  'tokyo': Tokyo,
  'kyoto': Kyoto,
  'osaka': Osaka,
  'portraits': Portraits,
  'landscapes': Landscapes,
  'grad': Grad,
  'hk': HongKong,
};

export const NavLinks = [
  { name: 'The Current Issue', path: '/current' },
  { name: 'Hong Kong', path: '/hk' },
  {
    name: 'California', id: 'california', dropdownLinks: [
      { name: 'San Francisco', path: '/sf' },
      { name: 'Los Angeles',   path: '/la' },
    ]
  },
  {
    name: 'Japan', id: 'japan', dropdownLinks: [
      { name: 'Tokyo', path: '/tokyo' },
      { name: 'Kyoto', path: '/kyoto' },
      { name: 'Osaka', path: '/osaka' },
    ]
  },
  { name: 'Taiwan',     path: '/taiwan' },
  { name: 'Portraits',  path: '/portraits' },
  { name: 'Landscapes', path: '/landscapes' },
  {
    name: 'Archive', id: 'archive', dropdownLinks: [
      { name: 'Berkeley',      path: '/berkeley' },
      { name: 'New York',   path: '/nyc' },
      { name: 'Chicago',    path: '/chicago' },
      { name: 'Oakland',       path: '/oakland' },
      { name: 'Portland', path: '/pdx' },
      { name: 'Paris',      path: '/paris' },
      { name: 'Grad',      path: '/grad' },
    ]
  },
];
