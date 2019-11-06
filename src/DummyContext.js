import React from 'react'
import dummystore from './dummy-store'

const DummyContext = React.createContext({
    data: dummystore,
    folders: dummystore.folders,
    notes: dummystore.notes
})

export default DummyContext;