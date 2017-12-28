import React from 'react'

class Bio extends React.Component {
  render() {
    return (
      <p>
        Written by <strong>Kyle Mathews</strong> who lives and works in San
        Francisco building useful things.{' '}
        <a href="https://twitter.com/kylemathews">
          You should follow him on Twitter
        </a>
      </p>
    )
  }
}

export default Bio
