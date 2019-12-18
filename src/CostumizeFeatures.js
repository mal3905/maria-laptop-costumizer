import React from 'react';
import slugify from 'slugify'
import FinalCostumize from './FinalCostumize'


function CostumizeFeatures(props) {

    return (
        Object.keys(props.features).map((feature, idx) => {

            const featureHash = feature + '-' + idx;

            return (

                <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                {props.features[feature].map((item, id) => {
                    const itemHash = slugify(JSON.stringify(item))

                    return (
                        <FinalCostumize
                        selected = {props.selected}
                        updateFeature={props.updateFeature}
                        feature={feature}
                        item={item}
                        itemHash={itemHash}
                        key={id}
                        />
                        
                    )
                })}
              </fieldset>

            )
            })
    )
}

export default CostumizeFeatures; 