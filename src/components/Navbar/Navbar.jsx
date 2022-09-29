import { Box } from '@chakra-ui/react'
import React from 'react'
import Contents from './Contents'
import Endbox from './Endbox'
import Logo from './Logo'
import styles from "./navbar.module.css"
const Navbar = () => {
  return (
    <Box className={styles.navbarbox}>
<Contents/>        
<Logo/>
<Endbox/>
    </Box>
  )
}

export default Navbar