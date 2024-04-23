import React from 'react'

import PropTypes from 'prop-types'

import './feature-card21.css'

const FeatureCard21 = (props) => {
  return (
    <div className={`feature-card21-feature-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt2}
        src={props.imageSrc2}
        className="feature-card21-image"
      />
      <div className="feature-card21-container">
        <h2 className="feature-card21-text">{props.title}</h2>
        <span className="feature-card21-text1">{props.description}</span>
      </div>
    </div>
  )
}

FeatureCard21.defaultProps = {
  rootClassName: '',
  imageAlt2: 'image',
  description: 'Get membership card to save your points',
  imageSrc1: '90a2fecb-33b4-4eea-8dfa-900dc47894c7',
  imageAlt: 'image',
  imageAlt1: 'image',
  title: 'Membership card',
  imageSrc2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

FeatureCard21.propTypes = {
  rootClassName: PropTypes.string,
  imageAlt2: PropTypes.string,
  description: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt1: PropTypes.string,
  title: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default FeatureCard21
