import React from 'react'
import styled from 'styled-components'

import GithubIcon from './github'
import LinkedinIcon from './linkedin'
import MailIcon from './mail'

const FooterWrapper = styled.footer`
  padding: 10px;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const IconsWrapper = styled.div`
  display: flex;
`

const Wrapper = styled.div`
  width: 10px;
  margin: 5px;
`

const Footer = () => {
  return (
    <FooterWrapper>
      {`© ${new Date().getFullYear()}, Connect with me `}
      <IconsWrapper>
        <Wrapper>
          <a href={'https://github.com/maximenathan'}>
            <GithubIcon />
          </a>
        </Wrapper>
        <Wrapper>
          <a href={'https://www.linkedin.com/in/maxime-soufflet-031b73143/'}>
            <LinkedinIcon />
          </a>
        </Wrapper>
        <Wrapper>
          <a href={'mailto:maximenathan@gmail.com'}>
            <MailIcon />
          </a>
        </Wrapper>
      </IconsWrapper>
    </FooterWrapper>
  )
}

export default Footer
