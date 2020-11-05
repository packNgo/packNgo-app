import React from 'react'
import axios from 'axios'

function HikingApiGetConditionsById() {
    const [state, setState] = React.useState<{ loading: Boolean, error?: string, data?: any }>({
        loading: true
    })
    React.useEffect(() => {
        if (!state.data && state.loading) {
            axios.get(`http://localhost:4000/hiking/trailsConditions?ids=7011192,7004682`)
                .then(resp => {
                    setState({ loading: false, data: resp.data.data.data.HikingProject })
                })
                .catch(err => {
                    setState({ loading: false, error: err.message })
                })
        }
    })

    if (state.loading) return <div>Loading....</div>
    if (state.error) return <div>{state.error}</div>
    return (
        <div>
            {Object.keys(state?.data).map((item: any) => {
                if (item !== "success") {
                    return (
                        <div key={state.data[item].id}>
                            <ul>
                                <li>{state.data[item].conditionStatus}</li>
                                <li>{state.data[item].name}</li>
                            </ul>
                        </div>
                    )
                }
            }
            )}
        </div>
    )
}

export default HikingApiGetConditionsById
