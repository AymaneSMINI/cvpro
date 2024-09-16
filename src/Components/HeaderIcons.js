import React from 'react'
import { Admin } from '@rsuite/icons';
import PageIcon from '@rsuite/icons/Page';
import EditIcon from '@rsuite/icons/Edit';
import { IconButton } from "rsuite";
import styles from './styles.module.css'


const Header = ({name}) => {  
    const firstIconBgColor = name === "My data" ? "#2a60e7" : "grey";
    const secondIconBgColor = name === "Contents" ? "#2a60e7" : "grey";
    const thirdIconBgColor = name === "Templates" ? "#2a60e7" : "grey";
  return (
    <div>
      <h1 className={styles.head}>{ name }</h1>
      <div>
        <div className={styles.icons}>
            <IconButton href='/mydata' icon={<Admin style={{ fontSize: '24px'}}/>} style = {{color :'white',backgroundColor : firstIconBgColor }}/>
            <div className={styles.line}></div>
            <IconButton href='/contents' icon={<PageIcon style={{ fontSize: '24px'}}/>}  style = {{color :'white',backgroundColor : secondIconBgColor  }} />
            <div></div>
            <IconButton href='/templates' icon={<EditIcon style={{ fontSize: '24px'}}/>} style = {{color :'white',backgroundColor : thirdIconBgColor, }} />
        </div>
      </div>
    </div>
  )
}

export default Header;