import React from 'react'

//import { fetchWithCacheProxy } from "infrastructure-remote/Fetch" // Make this a dynamic import

function Footer() {
  //fetchWithCacheProxy();

  return (
    <footer style={{ backgroundColor: "aliceblue", padding: "20px", margin: "10px 0"}}>
      <div>
        Remote footer<br/>
        Fetch from remote proxy module
      </div>
    </footer>
  )
}

export default Footer
