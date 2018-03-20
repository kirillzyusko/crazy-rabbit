import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { G, Path } from 'react-native-svg';
import {blockScalability} from "../../engine/constants/engine";

class Arrow extends PureComponent {
    render() {
        const { isLeft } = this.props;
        return (
            <G rotation={isLeft ? -90 : 90} transform={{scale: blockScalability}} translateX={100} translateY={isLeft ? 200 : 0}>
                <Path
                    onPress={() => this.props.onClick(isLeft)}
                    d="M413.1,327.3l-1.8-2.1l-136-156.5c-4.6-5.3-11.5-8.6-19.2-8.6c-7.7,0-14.6,3.4-19.2,8.6L101,324.9l-2.3,2.6  C97,330,96,333,96,336.2c0,8.7,7.4,15.8,16.6,15.8v0h286.8v0c9.2,0,16.6-7.1,16.6-15.8C416,332.9,414.9,329.8,413.1,327.3z"
                />
            </G>
        )
    }
}

Arrow.defaultProps = {
  isLeft: false
};

Arrow.propTypes = {
    isLeft: PropTypes.bool,
    onClick: PropTypes.func.isRequired
};

export default Arrow;
