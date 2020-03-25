import recommend from './bussiness/recommend/mock'
import recommend from './bussiness/recommend/mock'
import recommend from './bussiness/recommend/mock'
import recommend from './bussiness/recommend/mock'

const data = {
    "block": {
        "root": {
            "id": "root",
            "type": "Root",
            "data": {
                title: '首页'
            },
            "childBlocks": [
                {
                    "type": "Banner",
                    "data": {
                        title: null,
                        desc: null,
                        noBgUrl: null,
                        column: null,
                        list: [
                            {
                                iconUrl: '',
                                miconUrl: '',
                                bgTopVal: '',
                                bgBotVal: '',
                                title: '',
                                desc: '',
                                cardUrl: '',
                                btnTitle: '',
                                btnLink: ''
                            }
                        ],
                        bgUrl: null,
                        mbgUrl: null,
                    },
                    childBlocks: []
                },
                {
                    id: '',
                    "type": "Recommend",
                    "data": {
                        column: null,
                        title: '我们的推荐',
                        desc: '建行云产品系列，祝你上云无忧，轻松运行',
                        list: [
                            {
                                iconUrl: '//yun.ccb.com/common/images/recommend_products1.png',
                                title: '云服务器',
                                desc: '',
                                cardUrl: '//yun.ccb.com/product/cvm',
                                button: ''
                            }
                        ],
                        bgUrl: null,
                        mbgUrl: null,
                    }
                },
                {
                    id: '',
                    "type": "ProductPanel",
                    "data": {
                        column: 5,
                        "content": {
                            list: [
                                {
                                    id: '',
                                    slug: '',
                                    title: '计算',
                                    iconUrl: '//yun.ccb.com/common/images/index/midIcon/icon_%E8%AE%A1%E7%AE%97_normal.png',
                                    iconHoverUrl: '//yun.ccb.com/common/images/index/midIcon/icon_blue_%E8%AE%A1%E7%AE%97.png',
                                    children: [
                                        {
                                            id: '',
                                            slug: '',
                                            title: '云服务器',
                                            titleLink: '',
                                            desc: ''
                                        }
                                    ]
                                }
                            ],
                            title: '',
                            mTitle: '',
                            mTitleLink: ''
                        }
                    }
                },
                {
                    id: '',
                    "type": "MyTrade",
                    "data": {
                        column: null,
                        title: '',
                        desc: '',
                        list: [
                            {
                                iconUrl: '',
                                title: '',
                                desc: '',
                                cardUrl: ''
                            }
                        ],
                        bgUrl: '',
                        noBgUrl: '',
                        mbgUrl: ''
                    }
                },
                {
                    id: '',
                    "type": "TabsIndustry",
                    "data": {
                        tabs: [
                            {
                                parentId: '',
                                title: '',
                                iconUrl: '',
                                hoverIconUrl: '',
                                cardUrl: '',
                                id: '',
                                key: '',
                                parentTitle: ''
                            }
                        ],
                        title: '',
                        desc: '',
                        theme: 'TabsIndustry'
                    },
                    childBlocks: [
                        {
                            id: '',
                            type: 'Container',
                            data: {},
                            childBlocks: [
                                {
                                    id: '',
                                    type: 'FrameWorkIntro',
                                    data: {
                                        title: null,
                                        desc: null,
                                        column: null,
                                        list: [
                                            {
                                                needHoverAnimation: false,
                                                iconUrl: '',
                                                title: '',
                                                desc: ''
                                            }
                                        ],
                                        bgUrl: null
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "MyNatural",
                    "data": {
                        column: null,
                        title: '',
                        desc: '',
                        list: [
                            {
                                iconUrl: '',
                                title: '',
                                cardUrl: '',
                            }
                        ],
                        bgUrl: null,
                        mbgUrl: null
                    }
                }
            ]
        }
    }
}