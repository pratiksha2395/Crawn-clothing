import React from 'react'
import {SpinnerContainer, SpinnerOverlay} from './spinner.styles'

const WithSpinner = WrappedComponenet =>{ 
    const Spinner = ({isLoading, ...otherProps}) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ): (
        <WrappedComponenet {...otherProps}></WrappedComponenet>
    )
}
return Spinner;
}

export default WithSpinner;