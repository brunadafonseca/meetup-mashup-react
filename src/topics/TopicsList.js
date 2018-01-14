import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class TopicsList extends PureComponent {
  static propTypes = {
    topics: PropTypes.arrayOf(PropTypes.shape({
      topic: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired
    }))
  }

  render() {
    return (
      <div>
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
