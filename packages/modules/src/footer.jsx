import React from 'react'


function Footer(props) {
  return (
    <footer style={{ backgroundColor: "aliceblue", padding: "20px", margin: "10px 0"}}>
      <div>
        Remote footer<br/>
        Name is {props.name}
      </div>
    </footer>
  )
}

export default Footer
