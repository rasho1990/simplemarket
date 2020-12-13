import React from 'react';
import { Rating } from 'semantic-ui-react'
const Rates = ({rate}) => {
    return  <Rating icon='heart' disabled defaultRating={rate} maxRating={5} size="large" />
    
}
export default Rates;