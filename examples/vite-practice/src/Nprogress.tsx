import nprogress from 'nprogress'
import * as React from 'react'

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
