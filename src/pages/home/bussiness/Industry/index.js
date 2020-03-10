import React, { Component } from 'react';
import IndustryPlugs from '../../../../components/Industry'; 
import Headline from '../../../../components/Headline'
import mock from './mock.js'

import './index.less';

class Industry extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }

    initIndustryCard = () => {
        const data = mock;
        if ( data["list"] ) {
            return data["list"].map((item, index)=> {
                return <a href={item["hrefUrl"]}  key={index}><IndustryPlugs key={index} data={item}/></a>
            })
        }
    }

    render() { 
        return ( 
            <div className = 'bussiness-industry' style={{backgroundImage: `url(${mock.bgImg})`}}>
                 <Headline data={mock}/>
                 <div className='industry-table'>
                     {this.initIndustryCard()}
                 </div>
            </div>
         );
    }
}
 
export default Industry;