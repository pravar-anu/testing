import './App.css'
import { Helmet } from 'react-helmet'

function App() {

  return (
    <div>
      <h1>This one is for testing purpose only</h1>
      <Helmet>
        <title>Nya wala Title</title>
        <link rel="icon" type='image/x-icon' href="%PUBLIC_URL%/icons/favicon.ico"/>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="%PUBLIC_URL%/icons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="%PUBLIC_URL%/icons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="%PUBLIC_URL%/icons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="%PUBLIC_URL%/icons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="%PUBLIC_URL%/icons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="%PUBLIC_URL%/icons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="%PUBLIC_URL%/icons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="%PUBLIC_URL%/icons/apple-icon-152x152.png"
        />

<link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="%PUBLIC_URL%/icons/android-icon-192x192.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="%PUBLIC_URL%/icons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href="%PUBLIC_URL%/icons/favicon-96x96.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="%PUBLIC_URL%/icons/favicon-16x16.png"
    />
      </Helmet>
    </div>
  )
}

export default App
