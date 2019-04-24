import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Image
} from 'react-native';
import { Carousel, Grid } from '@ant-design/react-native';
import { IvaGrid } from '../../components/grid';
import { ArticleList } from '../../components/articleList';
import data from '../../data/raw/home';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: '全球智能商盟平台'.toUpperCase(),
    };

    constructor(props) {
        super(props);
        this.state = {
            banner: data.banner.data,
            services: data.services.data,
            detailList: data.detailList.data,
            articleList: data.articleList.data
        }
    }

    onPress(url, opt) {
        this.props.navigation.navigate(url, opt);
    }

    renderBanner() {
        return this.state.banner.map((item, index) => {
            return (
                <View
                    style={[styles.containerHorizontal]} key={index}
                >
                    <Image style={item.style} source={item.url} resizeMode={'cover'} />
                </View>);
        });
    }

    render() {
        const outlineData = this.state.services.map(item => ({
            icon: <Image style={styles.services} source={{ url: item.url }} resizeMode={'cover'} />,
            navigation: item.navigation,
            text: item.text,
        }));
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

                    <View>
                        <Grid data={outlineData} columnNum={4} hasLine={false} onPress={(el, index) => { this.onPress(el.navigation.url, el.navigation.opt) }} />
                    </View>

                    <IvaGrid data={this.state.detailList} onPress={(url, opt) => { this.onPress(url, opt) }} />
                    <ArticleList data={this.state.articleList} onPress={(url, opt) => { this.onPress(url, opt) }} />
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
        height: 220,
    },
    services: {
        alignSelf: 'center',
        height: 40,
        width: 40,
    },
    text: {
        color: '#fff',
        fontSize: 36,
    },
});