import React from 'react'

import PropTypes from 'prop-types'

import './feature-card2.css'

const FeatureCard2 = (props) => {
  return (
    <div className={`feature-card2-feature-card ${props.rootClassName} `}>
      <div className="feature-card2-container">
        <div className="feature-card2-container1">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="feature-card2-image"
          />
          <h2 className="feature-card2-text">{props.title}</h2>
          <span className="feature-card2-text1">{props.description}</span>
        </div>
      </div>
    </div>
  )
}

FeatureCard2.defaultProps = {
  imageAlt: 'image',
  title: 'Lorem ipsum',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.',
  rootClassName: '',
}

FeatureCard2.propTypes = {
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FeatureCard2
