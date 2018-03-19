import React, { PureComponent } from 'react';
import {buttonHeight, height} from "../../engine/constants";

class ButtonContainer extends PureComponent {
    render() {
        const countOfChildren = this.props.children.length;
        const startPositionByHeight = height/countOfChildren - buttonHeight/2;
        return (
            this.props.children.map((child, index) => {
                return React.cloneElement(child, { key: index, id: index, startPosition: startPositionByHeight });
            })
        )
    }
}

export default ButtonContainer;