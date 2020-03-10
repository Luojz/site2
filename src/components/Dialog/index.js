import React, { useState, useEffect } from 'react'
import './index.less'


export default ({ data, Slot, handleChoose = (choose = 'cancel') => { console.log(choose) } }) => {
    const [open, setOpen] = useState(false)

    const methods = {
        confirm() {
            handleChoose('confirm')
            setOpen(false)
        },
        cancel() {
            handleChoose('cancel')
            setOpen(false)
        }
    }

    return (
        <>
            <button onClick={() => setOpen(true)}>
                <Slot name="control" slotProps={data.control || 'control'} />
            </button>
            <dialog open={open}>
                <Slot name="content" slotProps={data.content || 'content'} />
                <div className="btn-container">
                    <button className="btn-confirm" onClick={methods.confirm}>确定</button>
                    <button className="btn-cancel" onClick={methods.cancel}>取消</button>
                </div>
            </dialog>
        </>
    )
}