import React from 'react'
import Template from '../Template'

const Attributions = () => {
    return ( 
        <Template title="Attributions">
            <div class="row mt-4">
                <iframe
                    id="igem-attribution-form"
                    src="https://attributions.igem.org?team=Stanford&year=2023"
                >
                </iframe>
            </div>

        </Template>
    )
}

export default Attributions