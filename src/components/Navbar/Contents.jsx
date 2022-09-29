import {Box} from "@chakra-ui/react";
import React from "react";
import styles from "./navbar.module.css";
const Contents = () => {
  return (
    <Box className={styles.content_box}>
      <ul>
        <li>Home</li>
        <li>Male</li>
        <li>Women</li>
        <li>Lifestyle</li>
        <li>Beauty</li>
      </ul>
    </Box>
  );
};

export default Contents;
