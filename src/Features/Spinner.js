/** @format */

import React from "react";
import {DotLoader} from 'react-spinners'
import styles from "../styles/Spinner.module.css";

function Spinner() {
  return (
    <div className={styles.LdnSpinner}>
      <DotLoader color="#aeaba7" speedMultiplier={2} size={20} />
    </div>
  );
}

export default Spinner;
