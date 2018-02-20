module.exports = {
  rules: {
    'incremental-headers': true,
    'ja-no-weak-phrase': true,
    'max-ten': {
      max: 3
    },
    'no-doubled-conjunction': true,
    'no-doubled-conjunctive-particle-ga': true,
    'no-doubled-joshi': {
      min_interval: 1
    },
    'no-double-negative-ja': true,
    'no-hankaku-kana': true,
    'no-nfd': true,
    'no-mix-dearu-desumasu': true,
    'preset-jtf-style': {
      '2.1.5.カタカナ': true,
      '2.1.6.カタカナの長音': true,
      '2.2.2.算用数字と漢数字の使い分け': false,
      '3.1.1.全角文字と半角文字の間': false,
      '3.1.2.全角文字どうし': false,
      '3.3.かっこ類と隣接する文字の間のスペースの有無': false,
      '4.2.1.感嘆符(！)': false,
      '4.2.2.疑問符(？)': false,
      '4.2.5.波線(〜)': false,
      '4.2.6.ハイフン(-)': false,
      '4.2.7.コロン(：)': false,
      '4.3.1.丸かっこ（）': false,
      '4.3.2.大かっこ［］': false
    },
    'no-dead-link': {
      checkRelative: false,
      baseURI: null
    },
    'sentence-length': {
      max: 100
    }
  }
}
