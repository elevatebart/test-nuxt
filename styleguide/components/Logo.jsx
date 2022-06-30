import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'rsg-components/Styled'

const styles = ({ fontFamily, color }) => ({
  logo: {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    fontFamily: fontFamily.base,
    fontSize: 18,
    fontWeight: 'normal'
  },
  image: {
    width: '2.5em',
    marginLeft: '-0.5em'
  }
})

export function LogoRenderer ({ classes, children }) {
  return (
    <h1 className={classes.logo}>
      <svg
        fill="none"
        viewBox="0 0 176 176"
        xmlns="http://www.w3.org/2000/svg"
        width="176"
        height="176"
      >
        <path
          d="M108.93 137.18L131.11 159.36C139.07 167.32 151.96 167.32 159.92 159.36C167.88 151.4 167.88 138.51 159.92 130.55L132.99 103.62C125.03 95.6604 112.14 95.6604 104.18 103.62L60.1602 147.64"
          stroke="#f15a27"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="20"
        />
        <path
          d="M28.19 115.73L15.97 127.95C8.01 135.91 8.01 148.8 15.97 156.76L18.8 159.53L19.12 159.85C27.08 167.81 39.97 167.81 47.93 159.85L60.15 147.63"
          stroke="#f15a27"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="20"
        />
        <path
          d="M28.1902 115.73L72.2102 71.71C80.1702 63.75 80.1702 50.86 72.2102 42.9L45.2702 15.97C37.3102 8.01 24.4202 8.01 16.4602 15.97C8.50023 23.93 8.50023 36.82 16.4602 44.78L38.6402 66.96"
          stroke="#f15a27"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="20"
        />
        <path
          d="M141.689 57.6893C153.608 57.6893 163.269 48.0276 163.269 36.1093C163.269 24.191 153.608 14.5293 141.689 14.5293C129.771 14.5293 120.109 24.191 120.109 36.1093C120.109 48.0276 129.771 57.6893 141.689 57.6893Z"
          stroke="#f15a27"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="20"
        />
      </svg>
      {children}
    </h1>
  )
}

LogoRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
}

export default Styled(styles)(LogoRenderer)