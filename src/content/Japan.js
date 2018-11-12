import { getS3Url } from './helpers';

export const Kyoto = {
  title: "Kyoto",
  photos: [
    { url: getS3Url('kyoto/station.jpg'),          },
    { url: getS3Url('kyoto/old-men.jpg'),          },
    { url: getS3Url('kyoto/old-couple.jpg'),       },
    { url: getS3Url('kyoto/train.jpg'),            },
    { url: getS3Url('kyoto/kyoto-station.jpg'),    },
    { url: getS3Url('kyoto/train-couple.jpg'),     },
    { url: getS3Url('kyoto/arashiyama.jpg'),       },
    { url: getS3Url('kyoto/tourists.jpg'),         },
    { url: getS3Url('kyoto/street.jpg'),           },
    { url: getS3Url('kyoto/kyoto-lights.jpg'),     },
    { url: getS3Url('kyoto/pontocho-lights.jpg'),  },
    { url: getS3Url('kyoto/pontocho.jpg'),         },
  ]
}

export const Tokyo = {
  title: 'Tokyo',
  photos: [
    { url: getS3Url("tokyo/couple.jpg"),          },
    { url: getS3Url("tokyo/harajuku.jpg"),        },
    { url: getS3Url("tokyo/shinagawa.jpg"),       },
    { url: getS3Url("tokyo/old-woman.jpg"),       },
    { url: getS3Url("tokyo/akihabara.jpg"),       },
    { url: getS3Url("tokyo/ueno.jpg"),            },
    { url: getS3Url("tokyo/shinjuku.jpg"),        },
    { url: getS3Url("tokyo/man-subway.jpg"),      },
    { url: getS3Url("tokyo/kita.jpg"),            },
    { url: getS3Url("tokyo/subway.jpg"),          },
    { url: getS3Url("tokyo/shibuya.jpg"),         },
    { url: getS3Url("tokyo/shinjuku-night.jpg"),  },
  ]
}

export const Osaka = {
  title: "Osaka",
  photos: [
   { url: getS3Url('osaka/taxi.jpg'),           },
   { url: getS3Url('osaka/child-park.jpg'),     },
   { url: getS3Url('osaka/bird-woman.jpg'),     },
   { url: getS3Url('osaka/castle-taxi.jpg'),    },
   { url: getS3Url('osaka/castle-couple.jpg'),  },
   { url: getS3Url('osaka/umeda-park.jpg'),     },
   { url: getS3Url('osaka/umeda-alley.jpg'),    },
   { url: getS3Url('osaka/umeda-alley2.jpg'),   },
   { url: getS3Url('osaka/subway2.jpg'),        },
   { url: getS3Url('osaka/station.jpg'),        },
   { url: getS3Url('osaka/subway.jpg'),         },
   { url: getS3Url('osaka/subway-woman.jpg'),   },
   { url: getS3Url('osaka/dot-lights.jpg'),     },
   { url: getS3Url('osaka/dot-lights2.jpg'),    },
   { url: getS3Url('osaka/asahi.jpg'),          },
  ]
}
