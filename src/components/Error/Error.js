import React from 'react'
import {connect} from 'react-redux'

export default function Error(props) {
  
  const {error} = props;

  return (
    <div>
      <div>
        {error}
      </div>
    </div>
  )
}

const mapStateToProps = ({error}) => ({
  error
})

connect(mapStateToProps, null)(Error);