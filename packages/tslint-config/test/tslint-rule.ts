class Example {
  private index: number
  private options: { [name: string]: any }

  constructor (options?: { [name: string]: any }) {
    // "no-string-literal": false
    this['options'] = options
  }
}

// "object-literal-key-quotes": false
const current = {
  b: 'b',
  c: 'c',
  // "object-literal-sort-keys": false
  a: 'a'
}
function getNext (iterable: { [key: string]: any }, currentKey: string) {
  const keys = Object.keys(iterable)
  for (let i = 0; i < keys.length; i++) {
    // "no-shadowed-variable": false
    const current = iterable[keys[i]]
    if (current === currentKey && keys.length > i + 1) {
      return iterable[keys[i + 1]]
    }
  }
  return ''
}

// "max-classes-per-file": [true, 2]
class MoreClass {
  public f: () => void
  constructor (callback?: () => void) {
    const f = callback
      ? callback
      : // "only-arrow-functions": false
        function () {
          // nothing to do
        }
  }
}
