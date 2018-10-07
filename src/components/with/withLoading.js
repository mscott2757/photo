import { withStateHandlers } from 'recompose';

export const withLoading = withStateHandlers(
  { loading: true },
  {
    hideLoader: ({ loading }) => () => ({ loading: !loading }),
  }
);
