import React from 'react'

import styles from './Altimeter.module.css'

const º = (string) =>
  Math.floor(Math.random() * 4) + string + '|'

const now = new Date()
const minutes = now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes()
const hoursAndMinutes = now.getHours() / 2 + ':' + minutes

const Altimeter = () =>
  <h1 className={ styles.root }>
    {
      '    ' +
      `{${hoursAndMinutes}}` + '§' +
      º('a') +
      º('l') +
      º('t') +
      º('i') +
      º('m') +
      º('e') +
      º('t') +
      º('e') +
      º('r') +
      Math.floor(Math.random() * 4)
    }<span className={styles.highlight}>[26°c [17°c[</span>
  </h1>

export default Altimeter
