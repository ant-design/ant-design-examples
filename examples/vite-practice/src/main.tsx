import { Skeleton } from 'antd'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import routes from '~react-pages'
import NProgress from './Nprogress'

import Provider from './Privader'
import 'normalize.css'
import 'antd/dist/reset.css'

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  return <Suspense fallback={<Skeleton active />}>{useRoutes(routes)}</Suspense>
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NProgress />
    <Provider>
      <Router basename={import.meta.env.BASE_URL}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
)
