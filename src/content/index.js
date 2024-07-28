import Current from "./Current";
import NewYork from "./NewYork";
import Chicago from "./Chicago";
import Portland from "./Portland";
import { Tokyo, Kyoto, Osaka } from "./Japan";
import { SanFrancisco, Berkeley, LosAngeles, Oakland } from "./California";
import Paris from "./Paris";
import Taiwan from "./Taiwan";
import { HongKong } from "./HongKong";
import Portraits from "./Portraits";
import Landscapes from "./Landscapes";
import Grad from "./Grad";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export const CURRENT = "current";

export const Accounts = [
  { icon: faInstagram, url: "https://www.instagram.com/masonchan_/" },
  { icon: faEnvelope, url: "mailto:mscott2757@gmail.com" },
];

export const PhotoContent = {
  [CURRENT]: Current,
  sf: SanFrancisco,
  berkeley: Berkeley,
  la: LosAngeles,
  oakland: Oakland,
  nyc: NewYork,
  chicago: Chicago,
  pdx: Portland,
  taiwan: Taiwan,
  paris: Paris,
  tokyo: Tokyo,
  kyoto: Kyoto,
  osaka: Osaka,
  portraits: Portraits,
  landscapes: Landscapes,
  grad: Grad,
  hk: HongKong,
};

export const NavLinks = [
  { name: "The Current Issue", id: "current" },
  {
    name: "Work",
    id: "work",
    dropdownLinks: [{ name: "Landscapes", id: "landscapes" }],
  },
  {
    name: "Personal",
    id: "personal",
    dropdownLinks: [
      { name: "Hong Kong", id: "hk" },
      {
        name: "California",
        id: "california",
        dropdownLinks: [
          { name: "San Francisco", id: "sf" },
          { name: "Los Angeles", id: "la" },
        ],
      },
      {
        name: "Japan",
        id: "japan",
        dropdownLinks: [
          { name: "Tokyo", id: "tokyo" },
          { name: "Kyoto", id: "kyoto" },
          { name: "Osaka", id: "osaka" },
        ],
      },
      { name: "Taiwan", id: "taiwan" },
      { name: "Portraits", id: "portraits" },
      {
        name: "Archive",
        id: "archive",
        dropdownLinks: [
          { name: "Berkeley", id: "berkeley" },
          { name: "New York", id: "nyc" },
          { name: "Chicago", id: "chicago" },
          { name: "Oakland", id: "oakland" },
          { name: "Portland", id: "pdx" },
          { name: "Paris", id: "paris" },
          { name: "Grad", id: "grad" },
        ],
      },
    ],
  },
];
