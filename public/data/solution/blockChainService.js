const fs = require("fs");

function convert2Json(dst, data) {
  fs.writeFile(dst, JSON.stringify(data), (err, res) => {});
}

const dst = `${__dirname}/blockChainService.json`;

const data = {
  block: {
    root: {
      id: "root",
      type: "Root",
      data: {
        title: "网站-建行云"
      },
      childBlocks: [
        {
          id: "banner",
          type: "Banner",
          data: {
            title: "网站解决方案",
            desc: "安全建站，弹性扩容，轻松应对每一次来访",
            bgUrl:
              "//imagecachexxfb.yun.ccb.com/static/solution/solution_banner.jpg",
            btn1Title: "服务咨询",
            btn1Icon: "default",
            btn1Link: "//yun.ccb.com/contactUs/contact_us.html",
            btn2Title: "服务咨询",
            btn2Icon: "default",
            btn2Link: ""
          },
          childBlocks: []
        },
        {
          id: "",
          type: "ProtocolHTML",
          data: {
            mod: "protocolHTML",
            title: "方案简介",
            content:
              "建行云根据不同的网站规模需求提供弹性灵活、成本可控的架构和方案，使您即刻拥有互联网门户，轻松拥抱互联网+"
          }
        },
        {
          id: "",
          type: "TabsScene",
          title: "应用场景",
          desc: "",
          theme: "TabsScene",
          data: {
            mod: "tabsScene",
            tabs: [
              {
                parentId: "default_root",
                title: "场景一",
                iconUrl: "//yun.ccb.com/solution/images/云上数据中心.png",
                scene_title: "业务上云",
                scene_desc:
                  "多类型计算服务、公有云、私有云混合云架构，支持业务快速上云",
                id: "",
                key: "",
                parentTitle: "空"
              },
              {
                parentId: "default_root",
                title: "场景二",
                iconUrl: "//yun.ccb.com/solution/images/云上数据中心.png",
                scene_title: "业务上云",
                scene_desc:
                  "多类型计算服务、公有云、私有云混合云架构，支持业务快速上云",
                id: "",
                key: "",
                parentTitle: "空"
              },
              {
                parentId: "default_root",
                title: "场景三",
                iconUrl: "//yun.ccb.com/solution/images/云上数据中心.png",
                scene_title: "业务上云",
                scene_desc:
                  "多类型计算服务、公有云、私有云混合云架构，支持业务快速上云",
                id: "",
                key: "",
                parentTitle: "空"
              },
              {
                parentId: "default_root",
                title: "场景四",
                iconUrl: "//yun.ccb.com/solution/images/云上数据中心.png",
                scene_title: "业务上云",
                scene_desc:
                  "多类型计算服务、公有云、私有云混合云架构，支持业务快速上云",
                id: "",
                key: "",
                parentTitle: "空"
              },
              {
                parentId: "default_root",
                title: "场景五",
                iconUrl: "//yun.ccb.com/solution/images/云上数据中心.png",
                scene_title: "业务上云",
                scene_desc:
                  "多类型计算服务、公有云、私有云混合云架构，支持业务快速上云",
                id: "",
                key: "",
                parentTitle: "空"
              }
            ]
          },
          childBlocks: [
            {
              id: "",
              type: "Container",
              data: {},
              childBlocks: [
                {
                  id: "",
                  type: "RawHtml",
                  data: {
                    title: "",
                    content: `
业务挑战：
企业自建数据中心，成本开销大，建设周期长
软硬件维护人力成本高
安全可靠性差
业务场景复杂，建设经验不足
特点：      
提供裸金属、虚机、容器多类型计算服务
提供全方位安全服务，涵盖了制度合规安全、互联网安全、主机安全、网络安全、系统安全、业务安全、操作安全等多方面
提供私有网络、对等连接、专线接入、VPN等服务，可支持多种网络场景
提供产品专家支持及7X24小时日常运维管理服务
提供定制化的各类专项服务和解决方案，提供架构设计优化、安全及运维管理优化建议等
`
                  }
                }
              ]
            },
            {
              id: "",
              type: "Container",
              data: {},
              childBlocks: [
                {
                  id: "",
                  type: "RawHtml",
                  data: {
                    title: "",
                    content: `
业务挑战：
企业自建数据中心，成本开销大，建设周期长
软硬件维护人力成本高
安全可靠性差
业务场景复杂，建设经验不足
特点：      
提供裸金属、虚机、容器多类型计算服务
提供全方位安全服务，涵盖了制度合规安全、互联网安全、主机安全、网络安全、系统安全、业务安全、操作安全等多方面
提供私有网络、对等连接、专线接入、VPN等服务，可支持多种网络场景
提供产品专家支持及7X24小时日常运维管理服务
提供定制化的各类专项服务和解决方案，提供架构设计优化、安全及运维管理优化建议等
`
                  }
                }
              ]
            },
            {
              id: "",
              type: "Container",
              data: {},
              childBlocks: [
                {
                  id: "",
                  type: "RawHtml",
                  data: {
                    title: "",
                    content: `
业务挑战：
企业自建数据中心，成本开销大，建设周期长
软硬件维护人力成本高
安全可靠性差
业务场景复杂，建设经验不足
特点：      
提供裸金属、虚机、容器多类型计算服务
提供全方位安全服务，涵盖了制度合规安全、互联网安全、主机安全、网络安全、系统安全、业务安全、操作安全等多方面
提供私有网络、对等连接、专线接入、VPN等服务，可支持多种网络场景
提供产品专家支持及7X24小时日常运维管理服务
提供定制化的各类专项服务和解决方案，提供架构设计优化、安全及运维管理优化建议等
`
                  }
                }
              ]
            },
            {
              id: "",
              type: "Container",
              data: {},
              childBlocks: [
                {
                  id: "",
                  type: "RawHtml",
                  data: {
                    title: "",
                    content: `
业务挑战:
企业自建数据中心，成本开销大，建设周期长
软硬件维护人力成本高
安全可靠性差
业务场景复杂，建设经验不足
特点:
提供裸金属、虚机、容器多类型计算服务
提供全方位安全服务，涵盖了制度合规安全、互联网安全、主机安全、网络安全、系统安全、业务安全、操作安全等多方面
提供私有网络、对等连接、专线接入、VPN等服务，可支持多种网络场景
提供产品专家支持及7X24小时日常运维管理服务
提供定制化的各类专项服务和解决方案，提供架构设计优化、安全及运维管理优化建议等
`
                  }
                }
              ]
            },
            {
              id: "",
              type: "Container",
              data: {},
              childBlocks: [
                {
                  id: "",
                  type: "RawHtml",
                  data: {
                    title: "",
                    content: `
业务挑战：
企业自建数据中心，成本开销大，建设周期长
软硬件维护人力成本高
安全可靠性差
业务场景复杂，建设经验不足
特点：      
提供裸金属、虚机、容器多类型计算服务
提供全方位安全服务，涵盖了制度合规安全、互联网安全、主机安全、网络安全、系统安全、业务安全、操作安全等多方面
提供私有网络、对等连接、专线接入、VPN等服务，可支持多种网络场景
提供产品专家支持及7X24小时日常运维管理服务
提供定制化的各类专项服务和解决方案，提供架构设计优化、安全及运维管理优化建议等
`
                  }
                }
              ]
            }
          ]
        },
        {
          id: '',
          type: 'AboutProduct',// 参看云运维
          data: {
            column: null,
            mod: 'aboutProduct',
            title: '推荐产品',
            desc: null,
            list: [
              {
                iconUrl: '',
                title: '云监控',
                moreUrl: ''
              },
              {
                iconUrl: '',
                title: '云硬盘',
                moreUrl: ''
              },
              {
                iconUrl: '',
                title: '虚拟私有网络',
                moreUrl: ''
              }
            ]
          }
        }
      ]
    }
  }
};

convert2Json(dst, data);
