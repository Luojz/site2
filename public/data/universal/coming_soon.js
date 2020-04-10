const fs = require("fs");

function convert2Json(dst, data) {
  fs.writeFile(dst, JSON.stringify(data), (err, res) => {});
}

const dst = `${__dirname}/coming_soon.json`;

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
                        "mbgUrl":"/images/banner/coming_soon.png",
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
                        "mcontent": `
<style>
.comming_soon {
    padding: .56rem .62rem .2rem .62rem;
    font-family: PingFangSC-Regular;
    font-size: .32rem;
    color: #222;
    letter-spacing: 0;
}

.comming_soon>div {
    margin: .44rem auto;
    width: 3.28rem;
    height: 3.35rem;
    background-image: url(/images/universal/coming_soon_1.png);
    background-size: cover;
}
</style>

<div class="comming_soon">
    <p></p>
    <div></div>
</div>
                        `
                    }
                }
            ]
        }
    }
}

convert2Json(dst, data);