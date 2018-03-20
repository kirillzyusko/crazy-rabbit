import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import Menu from './containers/menu.native';
import Gallery from './containers/gallery.native';
import Canvas from './containers/canvas.native';
import Game from './containers/game.native';

type Props = {};
class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                        {/*<Game/>*/}
                        {/*<Menu/>*/}
                        <Gallery/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

export default App;



