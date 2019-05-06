import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text
} from 'react-native';
import { Carousel, List } from '@ant-design/react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Item = List.Item;
const Brief = Item.Brief;

export default class ProductDetailScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.navigation.getParam('id'),
            title: this.props.navigation.getParam('title'),
            banner: this.props.navigation.getParam('img'),
            price: this.props.navigation.getParam('price'),
            features: [
                {
                    url: require('../../assets/images/icons/bill.png'),
                    text: '可用电子凭证'
                },
                {
                    url: require('../../assets/images/icons/clipboard.png'),
                    text: '当天即可出票'
                },
                {
                    url: require('../../assets/images/icons/refund.png'),
                    text: '有条件退改'
                },
                {
                    url: require('../../assets/images/icons/team.png'),
                    text: '适合成人，儿童，老年'
                },
                {
                    url: require('../../assets/images/icons/clock.png'),
                    text: '建议8小时'
                },
                {
                    url: require('../../assets/images/icons/global.png'),
                    text: '英语服务'
                }
            ]
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

    randerFeatures() {
        return this.state.features.map((item, index) => {
            return (
                <View key={index} style={[styles.center, { width: '33.33%' }]}>
                    <Image style={[{ width: 30, height: 30 }, styles.margin10]} source={item.url} resizeMode={'cover'} />
                    <Text style={[styles.textGrey, styles.smText]}>{item.text}</Text>
                </View>
            );
        })
    }

    render() {
        return (
            <ScrollView
                style={styles.wrapperContainer}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.wrapper}>
                    <Carousel
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
                    <List>
                        <Item arrow="horizontal" onPress={() => { }}>
                            <View style={styles.row}>
                                <Text style={styles.textGrey}>领券</Text>
                                <Text style={styles.marginLeft10} numberOfLines={1} >满199减5，满599减15，满1099减35</Text>
                            </View>
                        </Item>
                    </List>
                    <List>
                        <Item arrow="horizontal" onPress={() => { }}>
                            <View style={styles.row}>
                                <Text style={styles.textGrey}>促销</Text>
                                <Text style={styles.highlightTag}>免单</Text>
                                <Text style={styles.marginLeft10} numberOfLines={1}>下单即送一次免单机会，高达20%的命中率</Text>
                            </View>
                        </Item>
                    </List>
                    <List>
                        <Item arrow="horizontal" onPress={() => { }}>
                            <View style={styles.row}>
                                <Text style={styles.textGrey}>促销</Text>
                                <Text style={styles.marginLeft10} numberOfLines={1}> ✅退该保障 ✅入园保障 ✅如实描述保障</Text>
                            </View>
                        </Item>
                    </List>
                </View>

                <View style={styles.wrapper}>
                    <View style={styles.container}>
                        <Text style={[styles.marginLeft10, styles.textGrey]}>∙ 限时特惠，超值低价 </Text>
                        <Text style={[styles.marginLeft10, styles.marginTop10, styles.textGrey]}>∙ 官方直签，比官网预定便宜20%</Text>
                        <Text style={[styles.marginLeft10, styles.marginTop10, styles.textGrey]}>∙ 下单即宗电子版中文园区地图、独家游玩攻略</Text>
                    </View>
                </View>

                <View style={styles.wrapper}>
                    <View style={[styles.row, styles.flexWrap, styles.center]}>
                        {this.randerFeatures()}
                    </View>
                </View>
            </ScrollView >
        );
    }
}
const styles = StyleSheet.create({
    wrapperContainer: {
        flex: 1,
        backgroundColor: '#efefef'
    },
    wrapper: {
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    flexWrap: {
        flexWrap: 'wrap',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        margin: 15,
    },
    containerHorizontal: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 280,
    },
    margin10: {
        margin: 10
    },
    marginLeft10: {
        marginLeft: 10
    },
    marginTop10: {
        marginTop: 10
    },
    smText: {
        fontSize: 12
    },
    row: {
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
    highlightTag: {
        marginLeft: 7,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'red',
        color: 'red',
        padding: 2,
        fontSize: 12
    }
});