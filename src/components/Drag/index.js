import React from 'react'
import Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Example from './example'


export default () => (
    <DndProvider backend={Backend}>
        <Example />
    </DndProvider>
)
