import React from 'react'

import styles from './Altimeter.module.css'

const n = (string) =>
  Math.floor(Math.random() * 4) + string + '|'

const now = new Date()
const minutes = now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes()
const hoursAndMinutes = now.getHours() + ':' + minutes

const Altimeter = () =>
  <h1 className={ styles.root }>
    {
      '    ' +
      `{${hoursAndMinutes}}` + '§' +
      n('a') +
      n('l') +
      n('t') +
      n('i') +
      n('m') +
      n('e') +
      n('t') +
      n('e') +
      n('r') +
      '1'
    }<span className={styles.highlight}>[26°c [17°c[</span>
  </h1>

export default Altimeter
