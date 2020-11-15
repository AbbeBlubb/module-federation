import React from 'react'


function Footer(props) {
  return (
    <footer className="box">
      <div>
        Remote footer<br/>
        Fetched name is {props.name}
      </div>
    </footer>
  )
}

export default Footer
