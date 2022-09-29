import { Box } from '@chakra-ui/react'
import React from 'react'
import f from "../../staticsFiles/LogoDesign/f.png"
import a from "../../staticsFiles/frontpage/a.png"
import s from "../../staticsFiles/LogoDesign/s.png"
import h from "../../staticsFiles/LogoDesign/h.png"
import i from "../../staticsFiles/LogoDesign/i.png"
import o from "../../staticsFiles/LogoDesign/o.png"
import n from "../../staticsFiles/LogoDesign/n.png"
import styles from "./navbar.module.css"
const Logo = () => {
  return (
    <Box className={styles.logo}>
        <ul>
            <li><img src={f} alt="" /></li>
            <li><img src={a} alt="" /></li>
            <li><img src={s} alt="" /></li>
            <li><img src={h} alt="" /></li>
            <li><img src={i} alt="" /></li>
            <li><img src={o} alt="" /></li>
            <li><img src={n} alt="" /></li>
        </ul>

    </Box>
  )
}

export default Logo