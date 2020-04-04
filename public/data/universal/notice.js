const fs = require("fs");

function convert2Json(dst, data) {
  fs.writeFile(dst, JSON.stringify(data), (err, res) => {});
}

const dst = `${__dirname}/notice.json`;

const data = {
    "block":{
        "root":{
            "id":"root",
            "type":"Root",
            "data":{"title":"敬请期待"},
            "childBlocks":[
                {
                    "id":"banner",
                    "type":"Banner",
                    "data":{
                        "title":"敬请期待",
                        "desc":"更多精彩内容内侧中…",
                        "bgUrl":"//yun.ccb.com/1106/img/ccb_i_banner_k.png",
                        "mbgUrl":"//yun.ccb.com/1106/img/ccb_i_banner_k.png",
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
                        mcontent: `
                            <iframe src="https://yun.ccb.com/notice/notice.html"></iframe>
                        `
                    }
                }
            ]
        }
    }
}

convert2Json(dst, data);