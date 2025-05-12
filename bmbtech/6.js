const {
  zokou
} = require("../framework/zokou");
const traduire = require("../framework/traduction");
const {
  default: axios
} = require("axios");
zokou({
  'nomCom': "bot",
  'reaction': '📡',
  'categorie': 'IA'
}, async (_0x36f69f, _0x453ade, _0x4de7f9) => {
  const {
    repondre: _0x5ed27f,
    ms: _0x2a5c1a,
    arg: _0xc12aa5
  } = _0x4de7f9;
  if (!_0xc12aa5 || !_0xc12aa5[0]) {
    return _0x5ed27f("yes buddy,🕵please say something.");
  }
  try {
    const _0x415161 = await traduire(_0xc12aa5.join(" "), {
      'to': 'en'
    });
    console.log(_0x415161);
    fetch("http://api.brainshop.ai/get?bid=177607&key=NwzhALqeO1kubFVD&uid=[uid]&msg=" + _0x415161).then(_0x22ee6d => _0x22ee6d.json()).then(_0x5269e6 => {
      const _0x5b2a00 = _0x5269e6.cnt;
      console.log(_0x5b2a00);
      traduire(_0x5b2a00, {
        'to': 'en'
      }).then(_0xc3c3bf => {
        _0x5ed27f(_0xc3c3bf);
      })["catch"](_0x11053d => {
        console.error("Error when translating into French :", _0x11053d);
        _0x5ed27f("Error when translating into French");
      });
    })["catch"](_0x219f35 => {
      console.error("Error requesting BrainShop :", _0x219f35);
      _0x5ed27f("Error requesting BrainShop");
    });
  } catch (_0x237482) {
    _0x5ed27f("oops an error : " + _0x237482);
  }
});
zokou({
  'nomCom': 'ai',
  'reaction': '📡',
  'categorie': 'IA'
}, async (_0x33e9c5, _0x1dcddb, _0x5dff43) => {
  const {
    repondre: _0x345a32,
    arg: _0x2aab57,
    ms: _0x562a2b
  } = _0x5dff43;
  try {
    if (!_0x2aab57 || _0x2aab57.length === 0) {
      return _0x345a32("Please enter the necessary information to generate the image.");
    }
    const _0x282c45 = _0x2aab57.join(" ");
    const _0x1dc002 = await axios.get("https://photooxy.com/effect/create-image?q=" + _0x282c45);
    const _0x37f736 = _0x1dc002.data;
    if (_0x37f736.status == 200) {
      const _0x72756b = _0x37f736.result;
      _0x1dcddb.sendMessage(_0x33e9c5, {
        'image': {
          'url': _0x72756b
        },
        'caption': "*powered by Spark-X*"
      }, {
        'quoted': _0x562a2b
      });
    } else {
      _0x345a32("Error during image generation.");
    }
  } catch (_0x1b6ed2) {
    console.error("Erreur:", _0x1b6ed2.message || "Une erreur s'est produite");
    _0x345a32("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': "gpt1",
  'reaction': '📡',
  'categorie': 'IA'
}, async (_0x277da3, _0x1e32f9, _0xe9e040) => {
  const {
    repondre: _0x4062d4,
    arg: _0x4c5388,
    ms: _0x5ac778
  } = _0xe9e040;
  try {
    if (!_0x4c5388 || _0x4c5388.length === 0) {
      return _0x4062d4("Please ask a me any thing.");
    }
    const _0x303243 = _0x4c5388.join(" ");
    const _0x5e4ba9 = await axios.get("https://api.ibrahimadams.us.kg/api/ai/gpt4?q=" + _0x303243 + "&apikey=abutech");
    const _0x1c67aa = _0x5e4ba9.data;
    if (_0x1c67aa) {
      _0x4062d4(_0x1c67aa.result);
    } else {
      _0x4062d4("Error during response generation.");
    }
  } catch (_0x1f74f6) {
    console.error("Erreur:", _0x1f74f6.message || "Une erreur s'est produite");
    _0x4062d4("Oops, an error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "gpt8",
  'reaction': '🤔',
  'categorie': 'IA'
}, async (_0x18d296, _0x5caff0, _0x3e6db9) => {
  const {
    repondre: _0x3bb690,
    arg: _0x332e74,
    ms: _0x647a18
  } = _0x3e6db9;
  try {
    if (!_0x332e74 || _0x332e74.length === 0) {
      return _0x3bb690("Please ask a question.");
    }
    const _0x10b7ec = _0x332e74.join(" ");
    const _0x39f4c1 = await axios.get("https://api.ibrahimadams.us.kg/api/ai/gpt4?q=" + _0x10b7ec + "&apikey=abutech");
    const _0x17d072 = _0x39f4c1.data;
    if (_0x17d072) {
      _0x3bb690(_0x17d072.result);
    } else {
      _0x3bb690("Error during response generation.");
    }
  } catch (_0x147562) {
    console.error("Erreur:", _0x147562.message || "Une erreur s'est produite");
    _0x3bb690("Oops, an error occurred while processing your request.");
  }
});
