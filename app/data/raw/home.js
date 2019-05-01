const data = {
    banner: {
        data: [
            {
                name: "banner1",
                style: {
                    alignSelf: 'center',
                    height: 220,
                    width: '100%',
                },
                url: require('../../assets/images/banner1.jpg')
            },
            {
                name: "banner2",
                style: {
                    alignSelf: 'center',
                    height: 220,
                    width: '100%',
                },
                url: require('../../assets/images/banner2.jpg')
            }
        ]
    },
    services: {
        data: [
            {
                url: 'http://www.uuwill.cn/Public/b/ly_b.png',
                text: '旅游',
                navigation: {
                    url: "Service",
                    opt: {
                        title: "旅游",
                        img: require("../../assets/images/travel.jpg")
                    }
                }
            },
            {
                url: 'http://www.uuwill.cn/Public/b/jy_b.png',
                text: '教育',
                navigation: {
                    url: "Service",
                    opt: {
                        title: "教育",
                        img: require("../../assets/images/education.jpg")
                    }
                }
            },
            {
                url: 'http://www.uuwill.cn/Public/b/wh_b.png',
                text: '文化',
                navigation: {
                    url: "Service",
                    opt: {
                        title: "文化",
                        img: require("../../assets/images/culture.jpg")
                    }
                }
            },
            {
                url: 'http://www.uuwill.cn/Public/b/qz_b.png',
                text: '签证',
                navigation: {
                    url: "Service",
                    opt: {
                        title: "签证",
                        img: require("../../assets/images/visa.jpg")
                    }
                }
            },
            {
                url: 'http://www.uuwill.cn/Public/b/jr.png',
                text: '金融'
            },
            {
                url: 'http://www.uuwill.cn/Public/b/jk.png',
                text: '健康'
            },
            {
                url: 'http://www.uuwill.cn/Public/b/ym.png',
                text: '移民'
            },
            {
                url: 'http://www.uuwill.cn/Public/b/dc.png',
                text: '地产'
            }
        ]
    },
    detailList: {
        data: [
            {
                title: '海外旅行',
                subTitle: '多国特色签证',
                img: 'https://gw.alipayobjects.com/zos/rmsportal/PbwAYwivCOtoisJPLiEl.png',
                navigation: {
                    url: "Projects",
                    opt: {
                        title: "海外旅行",
                        img: require("../../assets/images/visa.jpg")
                    }
                }
            },
            {
                title: '出国留学',
                subTitle: '全方位留学服务',
                img: 'https://gw.alipayobjects.com/zos/rmsportal/XvALZKsUSusBoNElpsQR.png',
                navigation: {
                    url: "Projects",
                    opt: {
                        title: "出国留学",
                        img: require("../../assets/images/visa.jpg")
                    }
                }
            },
            {
                title: '商务出行',
                subTitle: '出国工作安心无忧',
                img: 'https://gw.alipayobjects.com/zos/rmsportal/diNCydCwLYULFkNYLwQv.png',
                navigation: {
                    url: "Projects",
                    opt: {
                        title: "商务出行",
                        img: require("../../assets/images/visa.jpg")
                    }
                }
            },
            {
                title: '资产配置',
                subTitle: '基金联接境内外',
                img: 'https://gw.alipayobjects.com/zos/rmsportal/aFOMxoVVxuuNKemENjNQ.png',
                navigation: {
                    url: "Projects",
                    opt: {
                        title: "资产配置",
                        img: require("../../assets/images/visa.jpg")
                    }
                }
            }
        ]
    },
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
    }
};

export default data;