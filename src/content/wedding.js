import { getS3Url } from "./helpers";

export const rileySteph = {
  title: "Riley & Steph / Del Popolo - San Francisco, CA",
  photos: [
    { url: getS3Url("riley-steph-2/riley-steph-9.jpg") },
    { url: getS3Url("riley-steph-2/riley-steph-1.jpg") },
    { url: getS3Url("riley-steph-2/riley-steph-3.jpg") },
    { url: getS3Url("riley-steph-2/riley-steph-2.jpg") },
    { url: getS3Url("riley-steph-2/riley-steph-4.jpg") },
    { url: getS3Url("riley-steph-2/riley-steph-6.jpg") },
    { url: getS3Url("riley-steph-2/riley-steph-7.jpg") },
    { url: getS3Url("riley-steph-2/riley-steph-8.jpg") },
    { url: getS3Url("riley-steph-2/riley-steph-0.jpg") },
    { url: getS3Url("riley-steph-2/riley-steph-5.jpg") },
    { url: getS3Url("riley-steph-2/riley-steph-10.jpg") },
    { url: getS3Url("riley-steph-2/riley-steph-12.jpg") },
  ],
};

const ireneStevenNames = [
  "irene-steven-hill-15.jpg",
  "irene-steven-hill-18.jpg",
  "irene-steven-contextual-3.jpg",
  "irene-steven-ceremony-121.jpg",
  "irene-steven-ceremony-123.jpg",
  "irene-steven-ceremony-122.jpg",
  "irene-steven-contextual-24.jpg",
  "irene-steven-film.jpg",
  "steven-getting-ready-13.jpg",
  "irene-steven-bridal-party-117.jpg",
  "irene-steven-cocktail-hour-35.jpg",
  "irene-steve-reception-4.jpg",
];

export const ireneStevenWedding = {
  title: "Irene & Steven / Olympia's Valley Estate - Petaluma, CA",
  photos: ireneStevenNames.map((name) => ({
    url: getS3Url(`irene-steven-wedding-2/${name}`),
  })),
};
