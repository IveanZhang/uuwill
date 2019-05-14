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
                title: '三亚7日自由行（5钻）',
                describe: '长假期享惠，早订减百，超人气度假型酒店任选，用慢旅行征服朋友圈',
                img: require("../../assets/images/product/200e0l000000cz418DE5A_C_750_420_Q90.jpg"),
                price: '2068起',
                navigation: {
                    url: "ProductDetail",
                    opt: {
                        id: 1,
                        title: '三亚7日自由行（5钻）',
                        img: [
                            {
                                url: require("../../assets/images/product/200e0l000000cz418DE5A_C_750_420_Q90.jpg")
                            },
                            {
                                url: require("../../assets/images/product/300b0a0000004o5nm86B2_C_750_420_Q90.jpg")
                            },
                        ], 
                        price: '2068',
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