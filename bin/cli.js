// createAt 2020-04-12 自动化打包部署
const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

const params = process.argv.slice(2)
const last = '2020-04-01T00:00:00.000Z'
const lapse = 1000 * 5
const raw = `${__dirname}/../tmp` // 存放物料包路径
const separator = '\n'


function modify(src, last) {
    const filepaths = []
    const handle = (src) => fs.readdirSync(src)
        .forEach(filename => {
            const filepath = path.resolve(src, filename)
            const stat = fs.statSync(filepath)
            if (stat.isFile()) {
                if (new Date(stat.mtime) > new Date(last)) {    
                    const type = stat.mtimeMs > stat.birthtimeMs + lapse ? '~' : '+'
                    filepaths.push({filepath, type})
                }
            } else {
                handle(filepath)
            }
        })
    handle(src)
    return filepaths
}


function pack(params) {
    const content = params.map(src => {
        const commands = []
        modify(src, last)
            .forEach(({filepath, type}) => {
                if (type !== '-') {
                    commands.push(`cp -rf ${filepath} ${filepath.replace('/', raw)}`)
                }
            })
        return commands.join(separator)
    }).join(separator)
    fs.writeFileSync(`${raw}/pack.sh`, content)
}


function deploy(params, last) {
    const content = params.map(src => {
        const commands = []
        modify(src, last)
            .forEach(({filepath, type}) => {
                switch (type) {
                    case '+':
                        commands.push(`cp -rf ${filepath.replace('/', raw)} ${filepath}`)
                        break
                    case '~':
                        commands.push(`mv ${filepath} ${filepath}_bak`)
                        commands.push(`cp -rf ${filepath.replace('/', raw)} ${filepath}`)
                        break
                    case '-':
                        commands.push(`mv ${filepath} ${filepath}_bak`)
                        break
                    default:
                        break
                }
            })
        return commands.join(separator)
    }).join(separator)
    fs.writeFileSync(`${raw}/deploy.sh`, content)
}

// 命令行参数 追踪文件
function run(params) {
    mkdirp(raw , err => {
        if (err) {
            console.error(err)
        } else {
            pack(params, last)
            deploy(params, last)
        }
    })
}


run(params)