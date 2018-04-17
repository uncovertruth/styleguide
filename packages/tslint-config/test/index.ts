import { EventEmitter } from 'events'
import * as fs from 'fs'

type Props = {
  text: string;
}

interface State {
  flag: boolean
}

const data = {
  buzz: undefined,
  bar: '2',
  foo: 1
}

function foo () {
  return ['hello'].map((d) => d)
}
