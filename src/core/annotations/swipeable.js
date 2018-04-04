import React from 'react';
import PropTypes from 'prop-types';
import GestureRecognizer from 'react-native-swipe-gestures';

// todo: or better by even emitter and send it to Child props?
const Swipeable = (Child) => {
  class Swipeable extends React.Component {
    render() {
      return (
        <GestureRecognizer onSwipeUp={this.props.onSwipeUp}>
          <Child {...this.props} />
        </GestureRecognizer>
      );
    }
  }

  Swipeable.propTypes = {
    onSwipeUp: PropTypes.func.isRequired
  };

  return Swipeable;
};

export default Swipeable;
