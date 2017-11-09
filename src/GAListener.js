import { Component } from 'react';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';

ReactGA.initialize('UA-109516063-1');

class GAListener extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
    this.sendPageView(this.context.router.history.location);
    this.context.router.history.listen(this.sendPageView);
  }

  sendPageView(location) {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }

  render() {
    return this.props.children;
  }
}

export default GAListener;
