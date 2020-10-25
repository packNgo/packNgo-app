import React from 'react'
import axios from 'axios'

function HikingApiGetTrails() {
    const [state, setState] = React.useState<{ loading: boolean, error?: string, data?: any }>({
        loading: true
    })
    React.useEffect(() => {
        if (!state.data && state.loading) {
            axios.get('http://localhost:4000/hiking/trails?lat=40.0274&lon=-105.2519')
                .then(resp => {
                    setState({ loading: false, data: resp.data.data.data.HikingProject.trails })
                })
                .catch(err => {
                    setState({ loading: false, error: err.message })
                })
        }
    })

    if (state.loading) return <div>Loading....</div>
    if (state.error) return <div>{state.error}</div>
    console.log(state.data)

    return (<div>
        {state?.data?.map((item: any) => (
            <div key={item.id}>
                <p>{item.summary}</p>
                <p>{item.name}</p>
            </div>
        ))}
    </div>)
}

export default HikingApiGetTrails;