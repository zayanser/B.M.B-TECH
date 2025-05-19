const {
  zokou
} = require(__dirname + "/../framework/zokou");
const os = require('os');
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(0x200e);
const readmore = more.repeat(0xfa1);
zokou({
  'nomCom': "menu2",
  'categorie': "Menu"
}, async (_0x2ac2b6, _0x293965, _0x212382) => {
  let {
    ms: _0x49631a,
    repondre: _0x55dc25,
    prefixe: _0x2f4c8b,
    nomAuteurMessage: _0x4d3542,
    mybotpic: _0x50605f
  } = _0x212382;
  let {
    cm: _0x26a362
  } = require(__dirname + "/../framework//zokou");
  var _0x1b29f3 = {};
  var _0x43de04 = "public";
  if (s.MODE.toLocaleLowerCase() != "yes") {
    _0x43de04 = 'private';
  }
  _0x26a362.map(async (_0x5b9aa6, _0x545a56) => {
    if (!_0x1b29f3[_0x5b9aa6.categorie]) {
      _0x1b29f3[_0x5b9aa6.categorie] = [];
    }
    _0x1b29f3[_0x5b9aa6.categorie].push(_0x5b9aa6.nomCom);
  });
  moment.tz.setDefault("Etc/GMT");
  const _0x9397f7 = moment().format("DD/MM/YYYY");
  let _0x4a7b33 = "\n╭━━══• *" + s.BOT + "* •══━━••⊷ ❂\n┃⊛╭━━══••══━━••⊷ \n┃⊛│◆ User: " + s.OWNER_NAME + "\n┃⊛│◆ Prefix : [ " + s.PREFIXE + " ] \n┃⊛│◆ Mode : *" + _0x43de04 + "*\n┃⊛│◆ Storage  : 𝟴/𝟭𝟯𝟮 𝗚𝗕\n┃⊛│◆ Date  : *" + _0x9397f7 + "* \n┃⊛│◆ Platform : " + os.platform() + "\n┃⊛│◆ Mastermind : Marisel\n┃⊛│◆ Commands: " + _0x26a362.length + "\n┃⊛╰════────════◆\n╰════─────════◆◆◆\n" + readmore;
  let _0x263744 = "*𝐁.𝐌.𝐁-𝐗𝐌𝐃 CMD'S* ";
  for (const _0x51f9d7 in _0x1b29f3) {
    _0x263744 += "\n╭━━━❂ *" + _0x51f9d7 + "* ❂⁠⁠⁠⁠━━─••\n║┊╭━━══••══━━••⊷ \n║┊┊ ";
    for (const _0x520b03 of _0x1b29f3[_0x51f9d7]) {
      _0x263744 += "          \n║┊◆  *" + _0x520b03 + '*';
    }
    _0x263744 += "\n║┊╰━━══••══━━••⊷  \n╰════────════◆◆◆";
  }
  _0x263744 += "\n> *Made By 𝙱.𝙼.𝙱-𝚇𝙼𝙳*\n\n";
  var _0x420620 = _0x50605f();
  if (_0x420620.match(/\.(mp4|gif)$/i)) {
    try {
      _0x293965.sendMessage(_0x2ac2b6, {
        'video': {
          'url': _0x420620
        },
        'caption': _0x4a7b33 + _0x263744,
        'footer': "Je suis *𝙱.𝙼.𝙱-𝚇𝙼𝙳*, déveloper Marisel",
        'gifPlayback': true
      }, {
        'quoted': _0x49631a
      });
    } catch (_0x5cce20) {
      console.log("🥵🥵 Menu erreur " + _0x5cce20);
      _0x55dc25("🥵🥵 Menu erreur " + _0x5cce20);
    }
  } else {
    if (_0x420620.match(/\.(jpeg|png|jpg)$/i)) {
      try {
        _0x293965.sendMessage(_0x2ac2b6, {
          'image': {
            'url': _0x420620
          },
          'caption': _0x4a7b33 + _0x263744,
          'footer': "Je suis *Luckymd*, déveloper 𝙱.𝙼.𝙱-𝚇𝙼𝙳"
        }, {
          'quoted': _0x49631a
        });
      } catch (_0x20f5fe) {
        console.log("🥵🥵 Menu erreur " + _0x20f5fe);
        _0x55dc25("🥵🥵 Menu erreur " + _0x20f5fe);
      }
    } else {
      _0x55dc25(_0x4a7b33 + _0x263744);
    }
  }
});
