
import React from 'react'
import find from "../../staticsFiles/FINDYOURPERFECT.png"
import circlevector from "../../staticsFiles/Ellipsecircular.png"
import styles from "./Middlepart.module.css"
import bag from "../../staticsFiles/bag.png"
import p01 from "../../staticsFiles/01.png"
import { Progress } from '@chakra-ui/react'
const Left = () => {
  return (
    <div className={styles.leftbox}>
    <img src={circlevector} alt="" />
    <img src={find} alt="" />

    <h2>New Arrivals</h2>

    <button>Shop Now <img src={bag} alt="" /></button>


    <img src={p01}/>
    <Progress value={50} size='xs' colorScheme='orange' />
    </div>
  )
}

export default Left