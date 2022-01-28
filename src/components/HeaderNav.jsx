
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
// for styling
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { useTheme } from '../utils/Functions/theme'
// import fade-in keyframe
import { fadeIn } from '../utils/style/keyframes'
// import logo & language flags
import logo from '../assets/logos/mark_logo.png'
import logoFR from '../assets/icons/frenchflag.png'
import logoUK from '../assets/icons/ukflag.png'
// import Hamburger Navigation component
import BurgerNav from './BurgerNav'

/**
 * CSS for the component using styled.components
 */
const HEADER = styled.header`
  animation: ${fadeIn} 1s both ease-in-out;
  max-width: 1920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1;
  background: ${({ theme }) => (theme === 'light' ? `${colors.secondary}` : `${colors.mainBackgroundDarkMode}`)};
  padding-top: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .8);

  @media screen and (min-width: 600px) {
    padding: 1rem 0rem;
    height: 5rem;
  }
`;

const Image = styled.img`
  animation: ${fadeIn} 3s both ease-in-out;
  width: clamp(10rem, 13vw, 14rem);
`;

const NavGroup = styled.nav`
  width: 100%;
  padding: 0rem 1.563rem;

  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: 0rem 1.563rem;
    }
`;

const LinkGroup = styled.div`
  display: none;

  @media screen and (min-width: 601px) {
    display: flex;
    align-items: center;
    }
`;

const LanguageButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  img {
    animation: ${fadeIn} 3s both ease-in-out;
    width: 1.5rem;
  }
`;

const LINK = styled(NavLink)`
  text-decoration: none;
  padding: 0vw 1.5vw;
  cursor: pointer;  
  font-family: 'Vladimir', 'comfortaa';
  font-weight: 500;
  color: ${colors.tertiary};
  font-size: clamp(2rem, 2vw, 2.5rem);
    &.${(props) => props.activeClassName} {
      color: ${colors.primary};
        }
    &:hover {
      color: ${colors.primary};
      text-decoration: underline;
`;

/**
 * Renders Header on each page
 * @function Header
 * @param {boolean} language (state)
 * @param {function} toggleLanguage: to set state
 * @param {object} siteText: either FR/EN
 * @returns {JSX}
 */
const Header = ( { language, toggleLanguage, siteText }) => {

  const { home, about } = siteText.header
  const { theme } = useTheme()

  return (
    <HEADER theme={theme}>
      <NavGroup>
          <LINK to="/"><Image src={logo} alt="logo"></Image></LINK>
          <LinkGroup>
            <LINK activeClassName="active" exact to="/">{home}</LINK>
            <LINK activeClassName="active" to="/about">{about}</LINK>
            <LanguageButton onClick={() => toggleLanguage(!language)}>{language? <img src={logoUK} alt="Change to English"/> : <img src={logoFR} alt="Changement en Français"/>}</LanguageButton> 
          </LinkGroup>
            <BurgerNav language={language} toggleLanguage={toggleLanguage} />
      </NavGroup>
    </HEADER>
    )
}

export default Header

// Prototypes
Header.propTypes = {
  language: PropTypes.bool.isRequired,
  toggleLanguage: PropTypes.func.isRequired,
}