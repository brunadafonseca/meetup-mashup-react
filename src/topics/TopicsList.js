import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './TopicsList.css'

class TopicsList extends PureComponent {
  static propTypes = {
    topics: PropTypes.arrayOf(PropTypes.shape({
      topic: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired
    }))
  }

  render() {
    return (
      <div class='top-ten'>
        <h1>Topics Top 10</h1>
        <ol>
          { this.props.topics.map(topic => (<li>{ topic.topic } ({ topic.count })</li>)) }
        </ol>
      </div>
    )
  }
}

const mapStateToProps = ({ topics }) => ({ topics })

export default connect(mapStateToProps)(TopicsList)
