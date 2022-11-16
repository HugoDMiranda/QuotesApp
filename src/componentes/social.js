import React from "react";
import '../hojas-de-estilo/social.css'

function Social(props) {
  return(
    <div >
      <a href={props.link}
        target='_blank' rel="noreferrer"
        className={props.icons}
         >
      </a>
    </div>
  )
}

export default Social;