import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RsvpItem, {rsvpShape } from './RsvpItem'
import { connect } from 'react-redux'

class RsvpList extends PureComponent {
  static propTypes = {
    rsvps: PropTypes.arrayOf(rsvpShape).isRequired
  }

  renderRsvp = (rsvp) => (
    <li>
      <RsvpItem
        eventName={ this.props.eventName }
        memberName={ this.props.memberName }
        photo={ this.props.photo }
      />
    </li>
  )

  render() {
    return (
      <ul>
        {this.props.rsvps.map(this.renderRsvp.bind(this))}
      </ul>
    )
  }
}

const mapStateToProps = ({ rsvps }) => ({ rsvps })

export default connect(mapStateToProps)(RsvpList)
