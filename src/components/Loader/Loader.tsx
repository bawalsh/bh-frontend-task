import React, { useState, useEffect } from 'react'

type Props = {
  message?: string
  dots?: number
  speed?: number
}

/**
 * Displays a message followed by a number of animated dots to indicate that something is loading
 * @param message - The text to display when loading (precedes the animated dots)
 * @param dots - The maximum number of dots in the loading animation
 * @param speed - The time (in ms) to wait before adding another dot when animating
 */
const Loader: React.FC<Props> = ({
  message = 'Loading',
  dots = 3,
  speed = 200,
}) => {
  const [numDots, setNumDots] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setNumDots((currentNumDots) => (currentNumDots + 1) % (dots + 1))
    }, speed)

    return () => {
      clearInterval(interval)
    }
  }, [dots, speed])

  const text = `${message} ${'.'.repeat(numDots)}`

  return <span>{text}</span>
}

export default Loader
