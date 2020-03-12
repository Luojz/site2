const fs = require('fs')

function convert2Json(dst, data) {
    fs.writeFile(dst, JSON.stringify(data), (err, res) => {})
}

const dst = './website.json'

const data = {
    block: {
        root: {
            id: 'root',
            type: 'Root',
            data: {
                title: '网站-建行云'
            },
            childBlocks: [
                {
                    id: 'banner',
                    type: 'Banner',
                    data: {
                        title: '网站解决方案',
                        desc: '安全建站，弹性扩容，轻松应对每一次',
                        bgUrl: '',
                        btn1Title: '服务咨询',
                        btn1Icon: 'default',
                        btn1Link: '',
                        btn2Title: '服务咨询',
                        btn2Icon: 'default',
                        btn2Link: '',
                    },
                    childBlocks: []
                },
                {
                    id: '',
                    type: 'ProtocolHTML',
                    data: {
                        mod: 'protocolHTML',
                        title: '方案简介',
                        content: '建行云根据不同的网站规模需求提供'
                    }
                },
                {
                    id: '',
                    type: 'CaseSituation',
                    data: {
                        column: null,
                        mod: 'caseSituation',
                        title: null,
                        list: [
                            {
                                iconUrl: '',
                                title: '域名注册',
                                desc: '完成网站域名选购'
                            }
                        ]
                    }
                },
                {
                    id: '',
                    type: 'TabsIndustry',
                    data: {
                        mod: 'tabsIndustry',
                        title: '方案架构',
                        desc: '',
                        theme: 'TabsIndustry',
                        tabs: [
                            {
                                id: '',
                                key: '',
                                parentId: 'default_root',
                                parentTitle: '空',
                                title: '小型网站',
                                scene_title: '',
                                scene_desc: '',
                                iconUrl: '',
                            }
                        ]
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
                                        title: '架构介绍',
                                        content: '日均访问量高于'
                                    }
                                },
                                {
                                    id: '',
                                    type: 'FrameWorkCloud',
                                    data: {
                                        column: null,
                                        title: '产品推荐',
                                        desc: null,
                                        list: [
                                            {
                                                iconUrl: '',
                                                title: '私有网络',
                                                moreUrl: ''
                                            }
                                        ]
                                    }
                                },
                                {
                                    id: '',
                                    type: 'FrameWorkConfig',
                                    data: {
                                        column: null,
                                        title: '推荐配置',
                                        desc: null,
                                        list: [
                                            {
                                                title: '云服务器',
                                                desc: '4C8G, 100MB'
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        // {
                        //     id: '',
                        //     type: 'Container',
                        //     data: {},
                        //     childBlocks: [
                        //         {
                        //             id: '',
                        //             type: 'FrameWorkIntro',
                        //             data: {
                        //                 title: '架构介绍',
                        //                 content: '日均访问量低于1000'
                        //             }
                        //         },
                        //         {
                        //             id: '',
                        //             type: 'FrameWorkCloud',
                        //             data: {
                        //                 column: null,
                        //                 title: '产品推荐',
                        //                 desc: null,
                        //                 list: [
                        //                     {

                        //                     }
                        //                 ]
                        //             }
                        //         }
                        //     ]
                        // }
                    ]
                },
                {
                    id: '',
                    type: 'BussinessChallenge',
                    data: {
                        column: null,
                        mod: 'bussinessChallenge',
                        title: '业务挑战',
                        desc: null,
                        list: [
                            {
                                iconUrl: '',
                                title: '安全挑战日益严峻',
                                desc: '缺乏专业的安全团队和安全策略'
                            }
                        ]
                    }
                },
                {
                    id: '',
                    type: 'PlatformAdv',
                    data: {
                        column: null,
                        mod: 'platformAdv',
                        title: '业务挑战',
                        desc: null,
                        list: [
                            {
                                iconUrl: '',
                                title: '安全挑战日益严峻',
                                desc: '缺乏专业的安全团队和安全策略'
                            }
                        ]
                    }
                },
            ]
        }
    }
}

convert2Json(dst, data)