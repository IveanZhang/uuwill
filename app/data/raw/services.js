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
                title: '日本大阪+京都+东京8日7晚自由行',
                describe: '【专车专导|含机场接送+3天中文司导包车游】古城大阪城·岚山嵯峨野·京都古寺祈福·东京晴空塔·台场高达 | 蟹道乐&鳗鱼饭·醉美和服·迪士尼玩趣',
                img: require("../../assets/images/product/300p0f00000079324A941_C_750_420_Q90.jpg"),
                price: '10262起',
                navigation: {
                    url: "ProductDetail",
                    opt: {
                        id: 2,
                        title: '日本大阪+京都+东京8日7晚自由行',
                        img: [
                            {
                                url: require("../../assets/images/product/300p0f00000079324A941_C_750_420_Q90.jpg")
                            },
                            {
                                urlLink: "https://dimg03.c-ctrip.com/images/fd/tg/g2/M0A/88/47/CghzgVWwueeAD47DADZFmoNTjAw127_C_750_420_Q90.jpg"
                            },
                        ],
                        price: '10262',
                    }
                }
            },
        ]
    }
};

export default data;