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
                title: '岁末清扫有它们，体验大不同',
                describe: '更轻松、更美好的大扫除攻略',
                price: '9.9元起',
            },
            {
                title: '新年一点红，幸运一整年',
                describe: '那些让你“红”运当头的好物',
                price: '9.9元起',
            },
        ]
    }
};

export default data;