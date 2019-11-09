import React from 'react'
import dummystore from './dummy-store'

const DummyContext = React.createContext({
    // data: dummystore,
    // folders: [],
    // notes: []
    deleteItem: () => {}
})

export default DummyContext;