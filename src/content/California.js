import { getS3Url } from './helpers';

export const SanFrancisco = {
  title: "San Francisco",
  photos: [
    { url: getS3Url("sf/dogpatch.jpg") },
    { url: getS3Url("sf/potrero.jpg") },
    { url: getS3Url("sf/22nd.jpg") },
    { url: getS3Url("sf/caltrain-2.jpg") },
    { url: getS3Url("sf/caltrain.jpg") },
    { url: getS3Url("sf/muniman.jpg") },
    { url: getS3Url("sf/bart.jpg") },
    { url: getS3Url("sf/muni-night.jpg") },
    { url: getS3Url("sf/civic.jpg") },
    { url: getS3Url("sf/market.jpg") },
    { url: getS3Url("sf/muni.jpg") },
  ]
}

export const Berkeley = {
  title: "Berkeley",
  photos: [
    { url: getS3Url('berkeley/arinells.jpg') },
    { url: getS3Url('berkeley/durant.jpg') },
    { url: getS3Url('berkeley/college.jpg') },
    { url: getS3Url('berkeley/channing.jpg') },
    { url: getS3Url('berkeley/parking.jpg') },
  ]
}

export const LosAngeles = {
  title: "Los Angeles",
  photos: [
    { url: getS3Url("la/highland.jpg") },
    { url: getS3Url("la/red.jpg") },
    { url: getS3Url("la/hollywood.jpg") },
    { url: getS3Url("la/arts-district.jpg") },
    { url: getS3Url("la/alhambra.jpg") },
    { url: getS3Url("la/santa-monica.jpg") },
    { url: getS3Url("la/venice-skate-3.jpg") },
    { url: getS3Url("la/venice-skate.jpg") },
    { url: getS3Url("la/echo.jpg") },
    { url: getS3Url("la/silverlake.jpg") },
  ]
}

export const Oakland = {
  title: "Oakland",
  photos: [
    { url: getS3Url("oakland/empty.jpg") },
    { url: getS3Url("oakland/bart.jpg") },
    { url: getS3Url("oakland/19th.jpg") },
    { url: getS3Url("oakland/15th.jpg") },
    { url: getS3Url("oakland/telegraph.jpg") },
  ]
}
