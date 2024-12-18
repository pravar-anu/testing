import './App.css'
import { Helmet } from 'react-helmet'

function App() {

  return (
    <div>
      <h1>This one is for testing</h1>
      <Helmet>
        <title>Nya Title</title>
        <link rel="icon" type='img/ico' href="/icons/favicon.ico" />
      </Helmet>
    </div>
  )
}

export default App
