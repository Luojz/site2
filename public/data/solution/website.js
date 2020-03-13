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
                        desc: '安全建站，弹性扩容，轻松应对每一次来访',
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
                        content: '建行云根据不同的网站规模需求提供弹性灵活、成本可控的架构和方案，使您即刻拥有互联网门户，轻松拥抱互联网+'
                    }
                },
                {
                    id: '',
                    type: 'CaseSituation',
                    data: {
                        column: null,
                        mod: 'caseSituation',
                        title: '应用场景',
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
                                            },
                                            {
                                                iconUrl: '',
                                                title: '云服务器',
                                                moreUrl: ''
                                            },
                                            {
                                                iconUrl: '',
                                                title: '文件存储',
                                                moreUrl: ''
                                            },
                                            {
                                                iconUrl: '',
                                                title: '云硬盘',
                                                moreUrl: ''
                                            },
                                            {
                                                iconUrl: '',
                                                title: '云数据库Mysql',
                                                moreUrl: ''
                                            },
                                            {
                                                iconUrl: '',
                                                title: '龙御',
                                                moreUrl: ''
                                            },
                                            {
                                                iconUrl: '',
                                                title: '龙卫士',
                                                moreUrl: ''
                                            },
                                            {
                                                iconUrl: '',
                                                title: '弹性负载均衡',
                                                moreUrl: ''
                                            },
                                            {
                                                iconUrl: '',
                                                title: 'NAT网关',
                                                moreUrl: ''
                                            },
                                            {
                                                iconUrl: '',
                                                title: '云数据库Redis',
                                                moreUrl: ''
                                            },
                                            {
                                                iconUrl: '',
                                                title: '对象存储',
                                                moreUrl: ''
                                            },
                                            {
                                                iconUrl: '',
                                                title: 'CDN服务',
                                                moreUrl: ''
                                            },
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
                                                title: '云服务器16台',
                                                desc: '4C8G, 100G系统盘，500G数据盘'
                                            },
                                            {
                                                title: '云数据库3套',
                                                desc: 'MYSQL4C16G 500G数据空间\nRedis 4C16G 48G数据空间'
                                            },
                                            {
                                                title: '其他配置',
                                                desc: '公网IP2个，ELB2台，NAT网关1台，VPN网关1台，专线网关1台，文件存储1T，对象存储5T，50M公网带宽，200Mb CDN带宽'
                                            },
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
                                desc: '缺乏专业的安全团队和安全策略，难以应付不断增长的安全威胁'
                            },
                            {
                                iconUrl: '',
                                title: '弹性不足',
                                desc: '难以应付可能出现的突发大量入访流量'
                            },
                        ]
                    }
                },
                {
                    id: '',
                    type: 'PlatformAdv',
                    data: {
                        column: null,
                        mod: 'platformAdv',
                        title: '平台优势',
                        desc: null,
                        list: [
                            {
                                iconUrl: '',
                                title: '安全可靠',
                                desc: '从主机安全到流量清洗，建行云确保您的网站稳定对外服务'
                            },
                            {
                                iconUrl: '',
                                title: '弹性扩展',
                                desc: '快速扩展计算、存储、网络资源以应对交易洪峰；并随时释放多余资源，以降低运营成本'
                            }
                        ]
                    }
                },
            ]
        }
    }
}

convert2Json(dst, data)