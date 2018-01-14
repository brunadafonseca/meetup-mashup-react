import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RsvpItem, {rsvpShape } from './RsvpItem'
import { connect } from 'react-redux'
import './RsvpList.css'

class RsvpList extends PureComponent {
  static propTypes = {
    rsvps: PropTypes.arrayOf(rsvpShape).isRequired
  }

  renderRsvp = (rsvp) => (
    <li>
      <RsvpItem
        eventName={ rsvp.event.event_name }
        memberName={ rsvp.member.member_name }
        photo={ rsvp.member.photo }
      />
    </li>
  )

  render() {
    return (
      <ul class='rsvps-list'>
        {this.props.rsvps.map(this.renderRsvp.bind(this))}
      </ul>
    )
  }
}

const mapStateToProps = ({ rsvps }) => ({ rsvps })

export default connect(mapStateToProps)(RsvpList)
