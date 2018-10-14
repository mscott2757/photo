import { mapProps } from 'recompose';
import { ASPECT_RATIOS } from './../../constants';

export const withDimensions = mapProps(({ aspect, ...rest }) => ({
  ...ASPECT_RATIOS[aspect],
  ...rest,
}));
