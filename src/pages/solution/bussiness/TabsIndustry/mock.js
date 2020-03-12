export default {
  data: {
    mod: "tabsIndustry",
    title: "方案架构",
    desc: "",
    theme: "TabsIndustry",
    tabs: [
      {
        id: "",
        key: "",
        parentId: "default_root",
        parentTitle: "空",
        title: "小型网站",
        scene_title: "",
        scene_desc: "",
        iconUrl: ""
      }
    ]
  },
  childBolock: [
    {
      id: "",
      type: "Container",
      data: {},
      childBlocks: [
        {
          id: "",
          type: "FrameWorkIntro",
          data: {
            title: "架构介绍",
            content: "日均访问量高于"
          }
        },
        {
          id: "",
          type: "FrameWorkCloud",
          data: {
            column: null,
            title: "产品推荐",
            desc: null,
            list: [
              {
                iconUrl: "",
                title: "私有网络",
                moreUrl: ""
              }
            ]
          }
        },
        {
          id: "",
          type: "FrameWorkConfig",
          data: {
            column: null,
            title: "推荐配置",
            desc: null,
            list: [
              {
                title: "云服务器",
                desc: "4C8G, 100MB"
              }
            ]
          }
        }
      ]
    }
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
};
