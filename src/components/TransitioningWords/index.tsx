import React, { CSSProperties } from 'react'
import { useTransition, animated } from 'react-spring'

import useInterval from '../../hooks/useInterval'

interface Props {
  words: string[]
  delay?: number
}

const lifecyclesAnimation: CSSProperties = {
  //@ts-ignore
  from: { position: 'absolute', opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 },
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useIndexes = (items: any[]): [number, () => void] => {
  const [current, setCurrent] = React.useState(0)

  const nextIndex = () => {
    if (items.length > current + 1) {
      setCurrent(current + 1)
    } else {
      setCurrent(0)
    }
  }

  return [current, nextIndex]
}

const TransitioningWords = (props: Props) => {
  const { words, delay = 3000 } = props
  const [currentIndex, nextIndex] = useIndexes(words)
  const transitions = useTransition(
    [words[currentIndex]],
    null,
    lifecyclesAnimation
  )

  useInterval(() => {
    nextIndex()
  }, delay)

  return (
    <>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          {item}
        </animated.div>
      ))}
    </>
  )
}

export default TransitioningWords
