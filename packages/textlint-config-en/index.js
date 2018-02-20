module.exports = {
  rules: {
    'incremental-headers': true,
    'max-comma': {
      max: 3
    },
    'common-misspellings': {
      ignore: []
    },
    rousseau: {
      ignoreTypes: ['sentence:uppercase', 'sentence:start'],
      showLevels: ['suggestion', 'warning', 'error']
    },
    'no-dead-link': {
      checkRelative: false,
      ignore: ['https://badge.fury.io/js/**/*'],
      baseURI: null
    },
    'write-good': {
      passive: false,
      thereIs: false
    }
  }
}
