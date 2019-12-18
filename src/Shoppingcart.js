import React from 'react'
import Total from './Total'
import ShoppingItems from './ShoppingItems'


function Shoppingcart(props) {

    return (
        <section className="main__summary">
            <h2>Your cart</h2>

            { Object.keys(props.selected).map((feature, idx) => {

                const featureHash = feature + '-' + idx;
                const selectedOption = props.selected[feature];


                return (
                    <ShoppingItems
                        featureHash={featureHash}
                        selectedOption={selectedOption}
                        feature={feature}
                        key={idx}
                    />
                )}

            )}


            <Total
            selected={props.selected}
            />

          </section>


    )
}

export default Shoppingcart; 