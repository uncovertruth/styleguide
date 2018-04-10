import { EventEmitter } from 'events'
import * as fs from 'fs'

type Props = {
  text: string;
}

interface State {
  flag: boolean
}
