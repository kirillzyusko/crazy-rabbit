import React, { PureComponent } from 'react';
import Svg, { G } from 'react-native-svg';
import Button from './../components/menu/button.native';
import Arrow from './../components/menu/arrow.native';
import {height, width} from "../engine/constants";

class Menu extends PureComponent {
    componentDidMount() {
        console.log('12432432');
    }

    onClickHandler = (id) => {
        console.log(id);
    };

    render() {
        return (
            <Svg height={height} width={width}>
                    {/*<Button onClick={this.onClickHandler} id={0} title={'Start'} />
                    <Button onClick={this.onClickHandler} id={1} title={'Choose a hero'} />
                    <Button onClick={this.onClickHandler} id={2} title={'Exit'} />*/}
                    <Arrow isLeft={true}/>
                    <Arrow/>
            </Svg>
        )
    }
}

export default Menu;