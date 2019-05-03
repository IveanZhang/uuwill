const data = {
    articleList: {
        data: [
            {
                title: '嘉年华',
                tag: '文化',
                img: require("../../assets/images/carnival.jpg"),
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
                img: require("../../assets/images/canada.jpg"),
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
                img: require("../../assets/images/ai.jpg"),
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
    detailList: {
        data: [
            {
                title: '[即将涨价] 洛杉矶好莱坞环球影城1日电子门票（不用可退、立即出手、赠超值礼包）',
                describe: '更轻松、更美好的大扫除攻略',
                img: require("../../assets/images/culture.jpg"),
                price: '9.9元起',
                navigation: {
                    url: "ProductDetail",
                    opt: {
                        id: 1,
                        title: '[即将涨价] 洛杉矶好莱坞环球影城1日电子门票（不用可退、立即出手、赠超值礼包）',
                        img: [
                            {
                                url: require("../../assets/images/culture.jpg")
                            },
                            {
                                url: require("../../assets/images/estate.jpg")
                            },
                        ], 
                        price: '9.9元起',
                    }
                }
            },
            {
                title: '新年一点红，幸运一整年',
                describe: '那些让你“红”运当头的好物',
                img: require("../../assets/images/culture.jpg"),
                price: '9.9元起',
                navigation: {
                    url: "ProductDetail",
                    opt: {
                        id: 2,
                        title: '新年一点红，幸运一整年',
                        img: [
                            {
                                url: require("../../assets/images/culture.jpg")
                            },
                            {
                                url: require("../../assets/images/estate.jpg")
                            },
                        ],
                        price: '9.9元起',
                    }
                }
            },
        ]
    }
};

export default data;