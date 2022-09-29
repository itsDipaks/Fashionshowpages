import {
  Box,
  Button,
  ButtonGroup,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import serchbox from "../../staticsFiles/serchbar.png";
import heart from "../../staticsFiles/heart.png";
import bag from "../../staticsFiles/bag.png";
import profile from "../../staticsFiles/profile.png";
import styles from "./navbar.module.css";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import girlimgmodal from "../../staticsFiles/frontpage/girlloginpng.png";
import Modal2 from "./Modal2";
const Endbox = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
//   const {isOpen, onOpen1, onClose} = useDisclosure();
// const [state,setstate]=useState(false)
const openlogin=()=>{

}
  
  return (
    <Box className={styles.outerendbox}>
      <input type="text" placeholder="Search "  />
      <Box className={styles.bagbox}>
        <img src={heart} alt="" />
        <img onClick={onOpen} src={bag} alt="" />
        <img src={profile} alt="" />
      </Box>

      <>
        <Modal
          blockScrollOnMount={false}
          size="xl"
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent className={styles.my1}>
            <ModalCloseButton />
            <ModalBody className={styles.my}>
              <Box className={styles.mainboxmodal}>
                <Box>
                  <Image src={girlimgmodal} />
                </Box>





                <Box className={styles.rightside}>
                  <Text>User Login</Text>
                  <FormControl>
                    <FormLabel className={styles.lables}  htmlFor="email">Enter Username</FormLabel>
                    <Input
                      id="email"
                      type="email"
                      className={styles.inputs}
                      placeholder="Username or email"
                    />
                    <FormLabel   className={styles.lables} htmlFor="email">Enter Password</FormLabel>
                    <Input
                      id="email"
                      className={styles.inputs}
                      type="email"
                      placeholder="**************"
                    />
                  </FormControl>
                  <Text>Forgot Password </Text>
                  <Box className={styles.btnstack}>
                    <Button colorScheme="pink" variant="solid" onClick={openlogin}>
                      Login ➝
                    </Button>
                    <Button colorScheme="Tomato" variant="solid">
                      Create Account
                    </Button>
                  </Box>
                </Box>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>

{/* <Modal2 state={state}/> */}



      
    </Box>
  );
};

export default Endbox;
