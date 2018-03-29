import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { generate as UID } from 'shortid';
import { buttonHeight, height } from '../../engine/constants/engine';

class ButtonContainer extends PureComponent {
  render() {
    const countOfChildren = this.props.children.length;
    const startPositionByHeight = height / countOfChildren - buttonHeight / 2;
    return (
      this.props.children.map((child, index) =>
        React.cloneElement(child, { key: index, id: index, startPosition: startPositionByHeight }))
    );
  }
}

ButtonContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({}))
};

export default ButtonContainer;
