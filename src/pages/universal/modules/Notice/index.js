import React, { useState, useEffect } from 'react'
import './index.less'
import { asyncData } from '@/plugins/axios'
import Icon from '@/components/Icon'

const categories = {
    ALL: '全部',
    PRODUCT: '产品公告',
    SERVICE: '服务公告',
}

const api = '/universal/notices.json'

const SIZE = 10

export default () => {
    const [data, setData] = useState({ list: [] })
    const [type, setType] = useState('ALL')
    const [curr, setCurr] = useState(1)
    
    useEffect(() => {
        asyncData(api).then(res => setData(res.data))
    }, [])

    const computed = {
        get list() {
            return data.list.filter(item => type === 'ALL' || item.type === type)
        },
        get pageNums() {
            return Math.ceil((this.list.length) / SIZE)
        },
    }
  
    const filters = {
        list() {
            return computed.list.filter((_, idx) => idx >= (curr - 1) * SIZE && idx < curr * SIZE)
        }
    }

    const methods = {
        prev() {
            if (curr > 1) {
                setCurr(curr - 1)
            }
        },
        next() {
            if (curr < computed.pageNums) {
                setCurr(curr + 1)
            }
        },
        handleInputChange(e) {
            const inputNum = Number(e.target.value)
            
            if (inputNum === inputNum && inputNum <= computed.pageNums && inputNum > 0) {
                setCurr(inputNum)
            } else {
                alert(inputNum)
            }
        }
    }

    return (
        <section id="notice">
            <ul className="notice-title">
                {Object.keys(categories).map(category => (
                    <li 
                        onClick={() => {
                            if (type !== category) {
                                setType(category)
                                setCurr(1)
                            }
                        }} 
                        className={type === category ? 'active' : ''}
                        key={category}
                    >{categories[category]}</li>
                ))}
            </ul>
            <ul className="notice-content">
                {filters.list().map(item => (
                        <li key={item.id} onClick={() => window.location.href = `/universal/noticeDetail?id=${item.id}`}>
                            <span className="category">【{categories[item.type] || '产品公告' }】</span>
                            <span className="content">{item.title}</span>
                        </li>
                    ))}
            </ul>
            <div className="pagination">
                <span className="prev" onClick={methods.prev}><Icon src="/icons/arrow-left.png" width=".24rem" height=".24rem" /></span>
                <span className="pageNums">
                    <input type="text" onChange={methods.handleInputChange} value={curr} />
                    <span className="slug">/</span>
                    <span>{computed.pageNums}</span>
                </span>
                <span className="next" onClick={methods.next}><Icon src="/icons/arrow-right.png" width=".24rem" height=".24rem" /></span>
            </div>
        </section>
    )
}