import { Box } from '@chakra-ui/react'
import React from 'react'
import Login from '../Login/Login'
import Left from '../Mid_part/Left'
import { Mid } from '../Mid_part/Mid'
import Right from '../Mid_part/Right'
import Navbar from '../Navbar/Navbar'
import styles from "./homepage.module.css"
const Homepage = () => {
  return (
    <Box className={styles.main_box}>
        <Navbar/>
        <Box className={styles.mainhomepage}>
       <Left/>
        <Mid/>
        <Right/>
        </Box>

    </Box>
  )
}

export default Homepage