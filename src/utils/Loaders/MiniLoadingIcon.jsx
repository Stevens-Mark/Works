// import colors from '../style/colors'
import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'

/**
 * Keyframe for Loader component
 */
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

/**
 * CSS for the Loader component
 */
const Loader = styled.div`
  animation: ${rotate} 1s infinite linear;
  border: 0.5rem solid ${props => props.primary ? '#fff' : '#FF0000'};
  border-bottom-color: transparent;
  border-radius: 6.625rem;   
  padding: 0.938rem;
`;

/**
 * Renders a loading icon (either white or red)
 * @function LoadingIcon
 * @param {boolean} isWhite
 * @returns {JSX}
 */
const LoadingIcon= ({ isWhite }) => {
    return (
      <React.Fragment>
        {isWhite ? ( 
          <Loader primary /> ) 
        : ( 
          <Loader /> 
        )}      
      </React.Fragment>
    )
}

export default LoadingIcon

// Prototypes

LoadingIcon.propTypes = {
  isWhite: PropTypes.bool,
}

