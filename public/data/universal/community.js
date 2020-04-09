const fs = require("fs");

function convert2Json(dst, data) {
  fs.writeFile(dst, JSON.stringify(data), (err, res) => {});
}

const dst = `${__dirname}/community.json`;

const data = {
    "block":{
        "root":{
            "id":"root",
            "type":"Root",
            "data":{"title":"建云社区"},
            "childBlocks":[
                {
                    "id":"banner",
                    "type":"Banner",
                    "data":{
                        "title":"建云社区",
                        "desc":"荟萃群英，共享精彩",
                        "bgUrl":"//yun.ccb.com/1106/img/community_banner_background.png",
                        "mbgUrl":"/images/universal/community.png",
                        "btn1Title":"",
                        "btn1Icon":"default",
                        "btn1Link":"",
                        "btn2Title":"",
                        "btn2Icon":"",
                        "btn2Link":""
                    },
                    "childBlocks":[]
                },{
                    "id":"zbyquoiwv5",
                    "type":"RawHtml",
                    "data":{
                        "mod":"rawHtml",
                        "title":"HTML内容",
                        "content":"<style>\n\t.bg_banner {\n\t\tbackground-image: url(\"//yun.ccb.com/common/images/assist/banner.png\");\n\t\tbackground-repeat: no-repeat;\n\t\tbackgound-position: center;\n\t\tbackground-size:cover;\n\t}</style>\n\n<div class=\"ccb_i_center_a\">\n  <p class=\"ccb_lxwm_pa\">您可以发送邮件至ccbcloud_support.zh@ccb.com寻求帮助，我们专业的工程师团队将为您提供优质的技术服务。</p>\n</div>",
                        "mcontent": "<div class=\"community-section \"> <div class=\"area\"> <h2 class=\"community-section-title\">云社区</h2> <div class=\"community-section-container\"> <div class=\"community-section-col\"> <img src=\"https://yun.ccb.com/1106/img/cloud_1.png\" alt=\"\"> <p class=\"community-section-col-title\">热门快讯</p> <!-- <p class=\"community-section-col-desc\">将重要数据备份至建行云，无需进行存储用量规划，弹性扩充数据备份空间，保证极端情况下的数据安全。将重要数据备份至建行云，无需进行存储用量规划，弹性扩充数据备份空间，保证极端情况下的数据安全。</p> --> <p class=\"community-section-col-desc\">将重要数据备份至建行云，无需进行存储用量规划，弹性扩充数据备份空间，保证极端情况下的数据安全。将重要数据备份至建行云，无需进...</p> </div> <div class=\"community-section-col\"> <img src=\"https://yun.ccb.com/1106/img/cloud_2.png\" alt=\"\"> <p class=\"community-section-col-title\">博客</p> <p class=\"community-section-col-desc\">将重要数据备份至建行云，无需进行存储用量规划，弹性扩充数据备份空间，保证极端情况下的数据安全。</p> </div> <div class=\"community-section-col\"> <img src=\"../1106/img/cloud_3.png\" alt=\"\"> <p class=\"community-section-col-title\">论坛</p> <p class=\"community-section-col-desc\">将重要数据备份至建行云，无需进行存储用量规划，弹性扩充数据备份空间，保证极端情况下的数据安全。</p> </div> </div> </div> </div> <div class=\"community-connect\"> <div class=\"area\"> <p class=\"community-connect-title\">社区名称征集</p> <p class=\"community-connect-mail\">如果您有更好的创意，请发送邮件至ccbcloud.zh@ccb.com</p> </div> </div>"
                    }
                }
            ]
        }
    }
}

convert2Json(dst, data);