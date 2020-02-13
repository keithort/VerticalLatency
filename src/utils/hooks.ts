import * as React from 'react'

const useWindowWidth = () => {
  const [width, setWidth] = React.useState<number>(window.innerWidth)
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return width
}

export { useWindowWidth }
