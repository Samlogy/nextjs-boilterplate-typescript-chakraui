import { useEffect, useState } from 'react'

const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: undefined,
    height: undefined
  })
  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return dimensions
}

export default useWindowDimensions
