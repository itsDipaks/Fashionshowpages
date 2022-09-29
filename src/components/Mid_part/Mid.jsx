import React from 'react'
import backellips from "../../staticsFiles/frontpage/Backellips.png"
import styles from "./Middlepart.module.css"
import girlsimg from "../../staticsFiles/frontpage/girl.png"
import backvect from "../../staticsFiles/frontpage/backcolorellip.png"
import girl2 from "../../staticsFiles/frontpage/girl2.png"
export const Mid = () => {
  return (
    <div className={styles.midpart}>
    
        {/* <img src={backellips} alt="" /> */}
        <img src={backvect} alt="" />
        {/* <img src={girlsimg} alt="" /> */}
        <img src={girl2} alt="" />
    </div>
  )
}
