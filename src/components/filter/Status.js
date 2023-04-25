import React from 'react'
import styles from "./Status.module.scss"
import { useState } from 'react'
import FilterButton from "./button/FilterButton"

const Status = ({ setStatus, setNumberPage }) => {
  const [selected, setSelected] = useState(null);
  let i;
  let status = ["Alive", "Dead", "Unknown"]
  const toggle = () => {
    if(selected === i) { 
      return setSelected(null)
    }

    setSelected(i)
  }

  function isOpen(){
    return selected === i ? "-" : "+";
  }

  function checkedOptionISOpen(){
    return selected === i ? styles.optionButtonShow : styles.optionButton;
  }
  
  return (
    <div className={styles.item}>
      <div className={styles.title} onClick={(i) => toggle(i)}>
        <div>Status</div>
        <span>{isOpen()}</span>
      </div>
      <div className={checkedOptionISOpen()}>
        {status.map((items, index) =>(
        <FilterButton key={index} name="status" index={index} items={items} setNumberPage={setNumberPage} task={setStatus}/>
        ))}
      </div>
    </div>
  )
}

export default Status
