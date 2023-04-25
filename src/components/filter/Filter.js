import React from "react";
import styles from "./Filter.module.scss";
import Status from "./Status";

function Filter({ setStatus, setNumberPage, setGender, setSpecies }) {

  let clear = () => {
    setStatus(""); 
    setNumberPage(""); 
    setGender("");
    setSpecies("");
    window.location.reload(false);
  }
  return (
    <div className={styles.container}>
      <div className={styles.titleFilter}>Filter</div>
      <div className={styles.clearIcon} onClick={clear}>Clear</div>
      <div className={styles.wrapper}>
        <div className={styles.accordion}>
          <Status setStatus={setStatus} setNumberPage={setNumberPage} />
        </div>
      </div>
    </div>
  );
}

export default Filter;
