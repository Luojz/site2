const path = require('path')
const fs = require('fs')

const root = path.resolve(`${__dirname}/../src`)
const params = process.argv.slice(2)

const query = (params) => new Promise((resolve, reject) => fs.readFile(`${root}/${params.join('/')}.js`, 'utf8', (err, str) => {
    if (err) {
        reject(err)
    } else {
        const usages = str.split(/\/\*|\*\//).filter(s => s.includes('* Usages:'))
        resolve(usages)
    }
}))


query(params).then(usages => usages.forEach(usage => console.log(usage)))


module.exports = query