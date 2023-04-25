import React from 'react'
import style from "./FilterButton.module.scss"

const filterButton = ({ name, index, items, setNumberPage, task}) => {
  return (
    <div>
      <div>
        <input 
          onClick={() => {
            setNumberPage(1);
            task(items);
          }} 
          className={style.inputStyle} 
          type="radio" 
          name={name} 
          id={`${name}-${index}`}
        />
        <label 
          for={`${name}-${index}`}
          >
          {items}
        </label>
      </div>
    </div>
  )
}

export default filterButton
