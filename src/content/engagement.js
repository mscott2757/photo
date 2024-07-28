import { getS3Url } from "./helpers";

const names = [
  "bernal-fuji-3.jpg",
  "bernal-9.jpg",
  "bernal-fuji-4.jpg",
  "bernal-17.jpg",
  "bernal-5.jpg",
  "bernal-fuji-2.jpg",
  "bernal-fuji-5.jpg",
  "bernal-fuji-6.jpg",
  "bernal-fuji-7.jpg",
  "bernal-fuji-8.jpg",
];
export const ireneSteven = {
  title: "Irene & Steven / Bernal Heights - San Francisco, CA",
  photos: names.map((name) => ({ url: getS3Url(`irene-steven/${name}`) })),
};
