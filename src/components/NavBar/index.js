import {withRouter, Link} from 'react-router-dom'

import {NavBarContainer, TechEraLogo} from './styledComponents'

const NavBar = () => (
  <NavBarContainer>
    <Link to="/">
      <TechEraLogo
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png "
        alt="website logo"
      />
    </Link>
  </NavBarContainer>
)

export default withRouter(NavBar)
