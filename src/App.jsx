import './App.css'
import { Helmet } from 'react-helmet'

function App() {

  return (
    <div>
      <h1>This one is for testing purpose only</h1>
      <Helmet>
        <title>Nya wala Title</title>
        {/* <link rel="icon" href="https://paconnect.dev.ibidigital.com/media/417cc314-603e-4bae-97c7-d39a775dc318/public/favicon/paconnect_favicon.ico" /> */}
        {/* <link rel="icon" type="image/png" href="%PUBLIC_URL%/assets/favicon-96x96.png" sizes="96x96" /> */}
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
        <link rel="icon" href="/assets/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
        {/* <meta name="apple-mobile-web-app-title" content="MyWebSite" /> */}
        <link rel="manifest" href="/assets/site.webmanifest" />
        {/* <link rel="apple-touch-icon" href="https://paconnect.dev.ibidigital.com/media/417cc314-603e-4bae-97c7-d39a775dc318/public/client_logo/PA Connect logo.svg" /> */}
        {/* <link rel="icon" type='image/x-icon' href="%PUBLIC_URL%/icons/favicon.ico?v=2"/>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="%PUBLIC_URL%/icons/apple-icon-57x57.png?v=2"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="%PUBLIC_URL%/icons/apple-icon-60x60.png?v=2"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="%PUBLIC_URL%/icons/apple-icon-72x72.png?v=2"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="%PUBLIC_URL%/icons/apple-icon-76x76.png?v=2"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="%PUBLIC_URL%/icons/apple-icon-114x114.png?v=2"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="%PUBLIC_URL%/icons/apple-icon-120x120.png?v=2"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="%PUBLIC_URL%/icons/apple-icon-144x144.png?v=2"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="%PUBLIC_URL%/icons/apple-icon-152x152.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="%PUBLIC_URL%/icons/android-icon-192x192.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="%PUBLIC_URL%/icons/favicon-32x32.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="%PUBLIC_URL%/icons/favicon-96x96.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="%PUBLIC_URL%/icons/favicon-16x16.png?v=2"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> */}
      </Helmet>
    </div>
  )
}

export default App
