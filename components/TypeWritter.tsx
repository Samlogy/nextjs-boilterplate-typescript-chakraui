import React, { useState, useCallback, useEffect } from 'react'

const TypeWritter = props => {
  const { loop, speed, delay, words } = props
  const [counter, setCounter] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  const handleTyping = useCallback(() => {
    const index = loop ? counter % words.length : counter
    const fullWord = words[index]

    if (isDeleting) {
      setTypingSpeed(speed / 2)
      setText(fullWord.substring(0, text.length - 1))
      if (text === '') {
        setIsDeleting(false)
        setCounter(counter + 1)
      }
    } else {
      setTypingSpeed(speed)
      setText(fullWord.substring(0, text.length + 1))
      if (text === fullWord) {
        if (!loop && counter >= words.length - 1) {
          return
        }
        setIsDeleting(true)
        setTypingSpeed(delay)
      }
    }
  }, [counter, delay, isDeleting, loop, speed, text, words])

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping()
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [handleTyping, typingSpeed])

  return (
    <span>
      <span>{text}</span>
      <span className="blinking-cursor">|</span>
    </span>
  )
}

export default TypeWritter
