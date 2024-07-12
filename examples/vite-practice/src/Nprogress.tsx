import * as React from 'react'
import nprogress from 'nprogress'

function Nprogress() {
  React.useLayoutEffect(() => {
    nprogress.configure({ showSpinner: false })
    nprogress.start()

    return () => {
      nprogress.done()
    }
  }, [])

  return null
}

export default Nprogress
