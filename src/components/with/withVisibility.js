import { withStateHandlers } from 'recompose';

export const withVisibility = withStateHandlers(
  {
    visible: false,
  },
  {
    onToggle: ({ visible }) => () => ({ visible: !visible }),
  },
);
