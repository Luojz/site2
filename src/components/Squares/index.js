import React, { useState } from 'react';
import { devide } from '../../utils/Array';
import './index.less';


export default ({ data = { list: [1, 2, 3, 4, 5, 6], count: 4 }, children: Slot }) => {
    const [rows] = useState(devide(data.list, data.count))

    return (
        <div className="squares">
            {rows.map((row, i) => (
                <div className="squares-row" key={i}>
                    {row.map((col, j) => (
                        <div className="squares-col" key={j}>
                            <Slot data={col} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}