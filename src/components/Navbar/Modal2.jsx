// import React from  "react";

// import styles from "./navbar.module.css";

// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   FormHelperText,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure,
//   Box,
//   Button,
//   ButtonGroup,
//   Image,
//   Input,
//   Stack,
//   Text,
// } from "@chakra-ui/react";
// import girlimgmodal from "../../staticsFiles/frontpage/girlloginpng.png";

// const Modal2 = ({state}) => {

// const {isOpen, onOpen, onClose} = useDisclosure();


//   return (


//     <>
//     <Modal
//       blockScrollOnMount={false}
//       size="xl"
//       isOpen={isOpen}
//       onClose={onClose}
//     >
//       <ModalOverlay />
//       <ModalContent className={styles.my1}>
//         <ModalCloseButton />
//         <ModalBody className={styles.my}>
//           <Box className={styles.mainboxmodal}>
//             <Box>
//               <Image src={girlimgmodal} />
//             </Box>



//             <Box className={styles.rightside}>
//               <Text>User Registrta</Text>
//               <FormControl>
//                 <FormLabel className={styles.lables}  htmlFor="email">Enter Username</FormLabel>
//                 <Input
//                   id="email"
//                   type="email"
//                   className={styles.inputs}
//                   placeholder="Username or jjjjjjjjjjjjjemail"
//                 />
//                 <FormLabel   className={styles.lables} htmlFor="email">Enter Password</FormLabel>
//                 <Input
//                   id="email"
//                   className={styles.inputs}
//                   type="email"
//                   placeholder="**************"
//                 />
//               </FormControl>
//               <Text>Forgot Password </Text>
//               <Box className={styles.btnstack}>
//                 <Button colorScheme="pink" variant="solid" >
//                   Login ➝
//                 </Button>
//                 <Button colorScheme="Tomato" variant="solid">
//                   Create Account
//                 </Button>
//               </Box>
//             </Box>
//           </Box>
//         </ModalBody>
//       </ModalContent>
//     </Modal>
//   </>



//   )
// }

// export default Modal2