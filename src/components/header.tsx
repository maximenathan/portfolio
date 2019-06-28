import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const AppBar = styled(MuiAppBar)``

// tslint:disable-next-line: interface-name
interface Props {
  title: string
}

const StyledHeader = styled.header`
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)
  position: sticky;
      top: 0;
    left: auto;
    right: 0;
  height: 64px;
      width: 100%;
    display: flex;
    z-index: 1100;
    box-sizing: border-box;
    flex-shrink: 0;
    flex-direction: column;
  background: #1abc9c;
`

const Header = (props: Props) => (
  <StyledHeader>
    <Typography>{props.title}</Typography>
  </StyledHeader>
)

// const Header  =(props: Props) => (
//   <AppBar color="default">
//     <Toolbar>
//       <Typography>{props.title} Photos</Typography>
//     </Toolbar>
//   </AppBar>
// )

export default Header
