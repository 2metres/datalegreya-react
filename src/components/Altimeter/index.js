import React from 'react'

import styles from './Altimeter.module.css'

const n = (string) =>
  Math.floor(Math.random() * 4) + string + '|'

const now = new Date()
const hoursAndMinutes = now.getHours() + ':' + now.getMinutes()

const Altimeter = () =>
  <h1 className={ styles.root }>
    {
      '   ' +
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
      '1[26°c [17°c['
    }
  </h1>

export default Altimeter
