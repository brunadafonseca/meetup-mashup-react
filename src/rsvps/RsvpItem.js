import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export const rsvpShape = PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    memberName: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired
})

class RsvpItem extends PureComponent {
  static propTypes = {
    ...rsvpShape.isRequired
  }

  render() {
    const { eventName, memberName, photo } = this.props

    return (
      <div>
        <h3>{ eventName }</h3>
        <p>{ memberName } is joining this event!</p>
        <img src={ photo } alt="member"/>
      </div>
    )
  }
}

export default RsvpItem
