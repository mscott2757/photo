import { getS3Url } from "./helpers";

const names = [
  "monterey.jpg",
  "22.jpg",
  "strawb.jpg",
  "garden.jpg",
  "ueno.jpg",
  "ueno-crossing.jpg",
  "grand-army.jpg",
  "packing.jpg",
  "palisades.jpg",
];

const Current = {
  title: "Recently",
  photos: names.map((name) => ({
    url: getS3Url(`top-2/${name}`),
  })),
};

export default Current;
