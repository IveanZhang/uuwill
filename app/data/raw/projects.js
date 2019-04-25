import articles from './articles';

const data = {
    articleList: {
        data: [
            {
                title: '嘉年华',
                tag: '文化',
                img: 'http://www.uuwill.cn/Public/video/20181212/5c106d097e9c8.jpg',
                navigation: {
                    url: "Topics",
                    opt: {
                        title: "嘉年华",
                        img: require("../../assets/images/culture.jpg")
                    }
                }
            },
            {
                title: '加拿大移民',
                tag: '移民',
                img: 'http://www.uuwill.cn/Public/video/20181205/5c07f07b34aa1.jpg',
                navigation: {
                    url: "Topics",
                    opt: {
                        title: "加拿大移民",
                        img: require("../../assets/images/culture.jpg")
                    }
                }
            },
            {
                title: '加拿大人工智能考察团',
                tag: '文化',
                img: 'https://cdn-images-1.medium.com/max/1600/1*PlOTeS5syDCWSrYDUb7J7w.jpeg',
                navigation: {
                    url: "Topics",
                    opt: {
                        title: "加拿大人工智能考察团",
                        img: require("../../assets/images/culture.jpg")
                    }
                }
            }
        ]
    },
    articles: articles
};

export default data;