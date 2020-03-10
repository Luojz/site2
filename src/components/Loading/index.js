import React from 'react'
import Mask from '../Mask'
import patterns from './patterns'
import './index.less'


export default ({ show, pattern }) => <Mask show={show}>{patterns[pattern]}</Mask>