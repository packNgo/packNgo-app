import React from 'react';
import axios from 'axios';
//  lat=40.0274&lon=-105.2519&maxDistance=10
// let fetchedData = await axios.get('https://wordsapiv1.p.mashape.com/words/example',


function App() {
  const [state, setState] = React.useState<{ loading: boolean, error?: string, data?: any }>({
    loading: true
  })

  React.useEffect(() => {
    // const data = async () => {

    if (!state.data && state.loading) {
      axios.get('http://localhost:4000/hiking/trails?lat=40.0274&lon=-105.2519')
        .then(resp => {
          setState({ loading: false, data: resp.data.data.data })
        })
        .catch(err => {
          setState({ loading: false, error: err.message })
        })
    }
  })

  // let fetchedData = await axios.get('http://localhost:4000/hiking/trails?lat=40.0274&lon=-105.2519')
  //   // , {
  //   // params: {
  //   //   lat: 40.0274,
  //   //   lon: -105.2519
  //   // }
  //   // })
  //   .then(res => {
  //     console.log(res)
  //     console.log(fetchedData)
  //     console.log("Outpot : : data -> fetchedData", fetchedData)
  //   })
  //   .catch(err => {
  //     console.log('Error motek')
  //     console.log(err)
  //   })
  // }
  // data()
  // })

  if (state.loading) return <div>Loading</div>

  if (state.error) return <div>{state.error}</div>

  console.log(state.data)
  return <div>done</div>

}

export default App;
