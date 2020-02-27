import * as React from 'react'
import { LocationProvider } from '@reach/router'

import { Layout } from '../components/Layout'

export default (props: any) => {
  React.useEffect(() => {
    window.scrollTo({ behavior: 'smooth', left: 0, top: 0 })
  }, [props.location])

  return (
    <LocationProvider>
      {({ location }) => (
        <Layout currentLocation={location.pathname} {...props}>
          {props.children}
        </Layout>
      )}
    </LocationProvider>
  )
}
