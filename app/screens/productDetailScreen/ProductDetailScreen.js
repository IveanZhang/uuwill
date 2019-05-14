import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text
} from 'react-native';
import { Carousel, List, Tabs } from '@ant-design/react-native';

const Item = List.Item;

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
            ],
            tab: [
                { title: '产品介绍' },
                { title: '购前必读' },
                { title: '退改说明' },
            ],
            tabContent: {
                productProd:[
                    {
                        type: 'Text',
                        style: 'highlight',
                        text: '产品亮点',
                    },
                    {
                        type: 'Text',
                        style: 'content',
                        text: '1. 专业导游讲解',
                    },
                    {
                        type: 'Text',
                        style: 'content',
                        text: '2. 包含午餐和免费酒店接送服务',
                    },
                    {
                        type: 'Text',
                        style: 'content',
                        text: '3. 近距离感受大瀑布壮观之美',
                    },
                    {
                        type: 'Text',
                        style: 'highlight',
                        text: '4. 时间有限旅行者首选行程',
                    },
                    {
                        type: 'Image',
                        url: 'https://images.unsplash.com/photo-1550890798-715900ac1489?ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
                        style: ''
                    },
                ],
                beforeOrder:[
                    {
                        type: 'Text',
                        style: 'title',
                        text: '使用方法',
                    },
                    {
                        type: 'Text',
                        style: 'content',
                        text: '请携带电子版预定确认单（Voucher）和护照，直接前往指定地点，即可使用。',
                    },
                    {
                        type: 'Text',
                        style: 'highlighttitle',
                        text: '出发时间：10：00（酒店接送时间会用于出发时间30-60分钟，取决于酒店位置）',
                    },
                    {
                        type: 'Text',
                        style: 'content',
                        text: '酒店接送：请提前至少一天指点确认单上面活动公司的联系电话，确认具体的接送时间和地址',
                    },
                    {
                        type: 'Text',
                        style: 'highlighttitle',
                        text: '具体产品信息一律以Voucher（电子确认函为准）',
                    },
                ],
                statement:[
                    {
                        type: 'Text',
                        style: 'title',
                        text: '年龄政策',
                    },
                    {
                        type: 'Text',
                        style: 'content',
                        text: '1. 13-64岁，请按照成人价格预定；65-110岁，请按老人价格预定；12岁（含）以下儿童，请按儿童价购买',
                    },
                    {
                        type: 'Text',
                        style: 'highlighttitle',
                        text: '2. 儿童必须与至少一名成人同行，不能单独预定。',
                    },
                ]
            }
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

    renderProductProd(){
        return this.state.tabContent.productProd.map((item, index) => {
            return item.type === 'Text' ? 
                item.style === 'highlight' ? 
                    (<Text key={index} style={[styles.highlight, styles.marginTop10]}>{item.text}</Text>) : 
                item.style === 'title' ?
                    (<Text key={index} style={[styles.contentTitle, styles.marginTop10]}>{item.text}</Text>) :
                    (<Text key={index} style={[styles.textGrey, styles.marginTop5]}>{item.text}</Text>)
            :   item.type === 'Image' ?
                    (<Image key={index} style={[styles.carousel, styles.marginTop5]} source={{url: item.url}}></Image>) :
                    (<View></View>)
        });
    }

    renderBeforeOrder(){
        return this.state.tabContent.beforeOrder.map((item, index) => {
            return item.type === 'Text' ? 
                item.style === 'highlight' ? 
                    (<Text key={index} style={[styles.highlight, styles.marginTop10]}>{item.text}</Text>) : 
                item.style === 'title' ?
                    (<Text key={index} style={[styles.contentTitle, styles.marginTop10]}>{item.text}</Text>) :
                    (<Text key={index} style={[styles.textGrey, styles.marginTop5]}>{item.text}</Text>)
            :   item.type === 'Image' ?
                    (<Image key={index} style={[styles.carousel, styles.marginTop5]} source={{url: item.url}}></Image>) :
                    (<View></View>)
        });
    }

    renderStatement(){
        return this.state.tabContent.statement.map((item, index) => {
            return item.type === 'Text' ? 
                item.style === 'highlight' ? 
                    (<Text key={index} style={[styles.highlight, styles.marginTop10]}>{item.text}</Text>) : 
                item.style === 'title' ?
                    (<Text key={index} style={[styles.contentTitle, styles.marginTop10]}>{item.text}</Text>) :
                    (<Text key={index} style={[styles.textGrey, styles.marginTop5]}>{item.text}</Text>)
            :   item.type === 'Image' ?
                    (<Image key={index} style={[styles.carousel, styles.marginTop5]} source={{url: item.url}}></Image>) :
                    (<View></View>)
        });
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
                            <Text style={styles.price}>¥{this.state.price}</Text>
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

                <View style={styles.wrapper}>
                    <View style={styles.container}>
                        <Tabs tabs={this.state.tab}>
                            <View style={styles.tabs}>
                                {this.renderProductProd()}
                            </View>
                            <View style={styles.tabs}>
                                {this.renderBeforeOrder()}
                            </View>
                            <View style={styles.tabs}>
                                {this.renderStatement()}
                            </View>
                        </Tabs>
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
        flex: 1,
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
    marginTop5: {
        marginTop: 5
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
    },
    highlight: {
        color: 'red',
        padding: 2,
        fontSize: 14
    },
    tabs: {
        backgroundColor: '#fff',
    },
    contentTitle: {
        fontSize: 18,
        fontWeight: '700',
    }
});