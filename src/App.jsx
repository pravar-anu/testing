import './App.css'
import { Helmet } from 'react-helmet'

function App() {

  return (
    <div>
      <h1>This one is for testing</h1>
      <Helmet>
        <title>Nya wala Title</title>
        <link rel="icon" type='image/x-icon' href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
      </Helmet>
    </div>
  )
}

export default App
