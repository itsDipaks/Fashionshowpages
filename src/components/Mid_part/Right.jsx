import React from 'react'
import offer from "../../staticsFiles/frontpage/NavaratriOffer.png"
import curv from "../../staticsFiles/frontpage/Vectorcurv.png"
import styles from "./Middlepart.module.css"
const Right = () => {
  return (
    <div className={styles.rightdiv}>
       <h2>Navratri <br/>Offer</h2>
    <h2>Flat <br/>80% off</h2>
        <img src={curv} />
        <button>View Products</button>

    </div>
  )
}

export default Right