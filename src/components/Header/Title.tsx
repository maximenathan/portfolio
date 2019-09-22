import React from 'react'
import { Box } from 'rebass'
import { useSpring, useTransition, animated } from 'react-spring'

interface TitleProps {
  title: string
  hasScrolled: boolean
}

interface AnimatedTitle {
  text: string
  key: number
}

const Title = ({ title, hasScrolled }: TitleProps) => {
  const animation = useSpring({ color: hasScrolled ? 'indianred' : 'black' })
  const transitions = useTransition(title, null, {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-40px,0)' },
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const AnimatedTitle = (): any =>
    transitions.map(({ item, props, key }) => (
      <animated.div key={key} style={props}>
        {item}
      </animated.div>
    ))

  return (
    <Box>
      <animated.div style={animation}>
        <AnimatedTitle />
      </animated.div>
    </Box>
  )
}

export default Title
