import './App.css'
import { Helmet } from 'react-helmet'

function App() {

  return (
    <div>
      <h1>This one is for testing purpose only</h1>
      <Helmet>
        <title>Nya wala Title</title>
        {/* <link rel="icon" href="https://paconnect.dev.ibidigital.com/media/417cc314-603e-4bae-97c7-d39a775dc318/public/favicon/paconnect_favicon.ico" /> */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png?v2" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v2" />
        <link rel="icon shortcut" href="/favicon.ico?v2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v2" />
        <link rel="apple-touch-icon" sizes="16x16" href="/favicon-16x16.png?v2" />
        <meta name="apple-mobile-web-app-title" content="PAC" />
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>
    </div>
  )
}

export default App
