import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './RsvpItem.css'

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
    return (
      <div class='rsvp-item'>
        <div class='picture'>
          {this.props.photo && <img src={ this.props.photo} alt="member"/> }
        </div>
        <div class='names'>
          <h3>{ this.props.eventName }</h3>
          <p>{ this.props.memberName } is joining this event!</p>
        </div>
      </div>
    )
  }
}

export default RsvpItem
