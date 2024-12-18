import './App.css'
import { Helmet } from 'react-helmet'

function App() {

  return (
    <div>
      <h1>This one is for testing</h1>
      <Helmet>
        <title>Nya wala Title</title>
        <link rel="icon" type='image/x-icon' href="/icons/hola/favicon.ico" />
      </Helmet>
    </div>
  )
}

export default App
