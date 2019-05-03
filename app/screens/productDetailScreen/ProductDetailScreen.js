import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text
} from 'react-native';
import { Carousel, Grid } from '@ant-design/react-native';


export default class ProductDetailScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.navigation.getParam('id'),
            title: this.props.navigation.getParam('title'),
            banner: this.props.navigation.getParam('img'),
            price: this.props.navigation.getParam('price')
        }
    }

    renderBanner() {
        return this.state.banner.map((item, index) => {
            return (
                <View
                    style={[styles.containerHorizontal]} key={index}
                >
                    <Image style={styles.carousel} source={item.url} resizeMode={'cover'} />
                </View>);
        });
    }

    render() {
        return (
            <ScrollView
                style={{ flex: 1 }}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <Carousel
                        style={styles.wrapper}
                        selectedIndex={0}
                        autoplay
                        infinite
                        afterChange={this.onHorizontalSelectedIndexChange}
                    >
                        {this.renderBanner()}
                    </Carousel>

                    <View >
                        <Text style={styles.title}>{this.state.title}</Text>
                    </View>

                    <View style={styles.row}>
                        <View>
                            <Text style={styles.price}>{this.state.price}</Text>
                        </View>
                        <View>
                            <Text style={styles.textGrey}>总销量：10k+</Text>
                        </View>
                    </View>
                </View>
            </ScrollView >
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
    },
    containerHorizontal: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 280,
    },
    row:{
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    carousel: {
        alignSelf: 'center',
        height: 280,
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        margin: 20
    },
    price: {
        fontSize: 20,
        color: 'red'
    },
    textGrey: {
        color: '#777'
    },

});