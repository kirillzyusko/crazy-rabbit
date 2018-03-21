import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import Svg, { G, Path } from 'react-native-svg';
import {blockScalability, height, heightOfArrow, width, widthOfArrow, widthOfHero} from "../../engine/constants/engine";

class Arrow extends PureComponent {
    render() {
        const { isLeft } = this.props;
        return (
            <Svg width={isLeft ? widthOfArrow : widthOfArrow*2} height={heightOfArrow} >
                <G rotation={0} transform={{scale: `${isLeft ? '-' : ''}0.4, 0.4`}} translateX={200} translateY={0}>
                    <Path
                        d="M40.916,226.923V7.24c0-2.834,1.651-5.404,4.224-6.587c2.576-1.174,5.6-0.741,7.747,1.102l137.837,108.023c1.585,1.366,2.492,3.345,2.521,5.438c0.024,2.006-0.882,4.083-2.438,5.465L52.974,232.328c-2.135,1.902-5.179,2.365-7.779,1.2C42.594,232.357,40.916,229.769,40.916,226.923z"
                    />
                </G>
            </Svg>
        )
    }
}

Arrow.defaultProps = {
  isLeft: false
};

Arrow.propTypes = {
    isLeft: PropTypes.bool,
    onClick: PropTypes.func
};

export default Arrow;
