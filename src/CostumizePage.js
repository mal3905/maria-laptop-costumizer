import React from 'react'

import CostumizeFeatures from './CostumizeFeatures'

function CostumizePage(props) {

    return (
        
        <form className="main__form">
        <h2>Customize your laptop</h2>
        <CostumizeFeatures
        selected={props.selected}
        updateFeature={props.updateFeature}
        features={props.features}
        />
      </form>


    )
}

export default CostumizePage