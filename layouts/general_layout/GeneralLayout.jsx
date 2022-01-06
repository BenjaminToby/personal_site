import React, { Fragment } from 'react'
import GeneralHeader from './GeneralHeader'

const GeneralLayout = ({children}) => {
    return (
        <Fragment>
            <GeneralHeader/>
            {children}
        </Fragment>
    )
}

export default GeneralLayout
