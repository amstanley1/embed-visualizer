'use strict';

var React = require('react');
var Moment = require('moment');
var SimpleMarkdown = require('simple-markdown');
var hljs = require('highlight.js');
var Twemoji = require('twemoji');
var Ajv = require('ajv');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Moment__default = /*#__PURE__*/_interopDefaultLegacy(Moment);
var SimpleMarkdown__default = /*#__PURE__*/_interopDefaultLegacy(SimpleMarkdown);
var hljs__default = /*#__PURE__*/_interopDefaultLegacy(hljs);
var Twemoji__default = /*#__PURE__*/_interopDefaultLegacy(Twemoji);
var Ajv__default = /*#__PURE__*/_interopDefaultLegacy(Ajv);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var Emoji = {
  people: [{
    names: ["grinning"],
    surrogates: "😀"
  }, {
    names: ["grimacing"],
    surrogates: "😬"
  }, {
    names: ["grin"],
    surrogates: "😁"
  }, {
    names: ["joy"],
    surrogates: "😂"
  }, {
    names: ["smiley"],
    surrogates: "😃"
  }, {
    names: ["smile"],
    surrogates: "😄"
  }, {
    names: ["sweat_smile"],
    surrogates: "😅"
  }, {
    names: ["laughing", "satisfied"],
    surrogates: "😆"
  }, {
    names: ["innocent"],
    surrogates: "😇"
  }, {
    names: ["wink"],
    surrogates: "😉"
  }, {
    names: ["blush"],
    surrogates: "😊"
  }, {
    names: ["slight_smile", "slightly_smiling_face"],
    surrogates: "🙂"
  }, {
    names: ["upside_down", "upside_down_face"],
    surrogates: "🙃"
  }, {
    names: ["relaxed"],
    surrogates: "☺"
  }, {
    names: ["yum"],
    surrogates: "😋"
  }, {
    names: ["relieved"],
    surrogates: "😌"
  }, {
    names: ["heart_eyes"],
    surrogates: "😍"
  }, {
    names: ["kissing_heart"],
    surrogates: "😘"
  }, {
    names: ["kissing"],
    surrogates: "😗"
  }, {
    names: ["kissing_smiling_eyes"],
    surrogates: "😙"
  }, {
    names: ["kissing_closed_eyes"],
    surrogates: "😚"
  }, {
    names: ["stuck_out_tongue_winking_eye"],
    surrogates: "😜"
  }, {
    names: ["stuck_out_tongue_closed_eyes"],
    surrogates: "😝"
  }, {
    names: ["stuck_out_tongue"],
    surrogates: "😛"
  }, {
    names: ["money_mouth", "money_mouth_face"],
    surrogates: "🤑"
  }, {
    names: ["nerd", "nerd_face"],
    surrogates: "🤓"
  }, {
    names: ["sunglasses"],
    surrogates: "😎"
  }, {
    names: ["hugging", "hugging_face"],
    surrogates: "🤗"
  }, {
    names: ["smirk"],
    surrogates: "😏"
  }, {
    names: ["no_mouth"],
    surrogates: "😶"
  }, {
    names: ["neutral_face"],
    surrogates: "😐"
  }, {
    names: ["expressionless"],
    surrogates: "😑"
  }, {
    names: ["unamused"],
    surrogates: "😒"
  }, {
    names: ["rolling_eyes", "face_with_rolling_eyes"],
    surrogates: "🙄"
  }, {
    names: ["thinking", "thinking_face"],
    surrogates: "🤔"
  }, {
    names: ["flushed"],
    surrogates: "😳"
  }, {
    names: ["disappointed"],
    surrogates: "😞"
  }, {
    names: ["worried"],
    surrogates: "😟"
  }, {
    names: ["angry"],
    surrogates: "😠"
  }, {
    names: ["rage"],
    surrogates: "😡"
  }, {
    names: ["pensive"],
    surrogates: "😔"
  }, {
    names: ["confused"],
    surrogates: "😕"
  }, {
    names: ["slight_frown", "slightly_frowning_face"],
    surrogates: "🙁"
  }, {
    names: ["frowning2", "white_frowning_face"],
    surrogates: "☹"
  }, {
    names: ["persevere"],
    surrogates: "😣"
  }, {
    names: ["confounded"],
    surrogates: "😖"
  }, {
    names: ["tired_face"],
    surrogates: "😫"
  }, {
    names: ["weary"],
    surrogates: "😩"
  }, {
    names: ["triumph"],
    surrogates: "😤"
  }, {
    names: ["open_mouth"],
    surrogates: "😮"
  }, {
    names: ["scream"],
    surrogates: "😱"
  }, {
    names: ["fearful"],
    surrogates: "😨"
  }, {
    names: ["cold_sweat"],
    surrogates: "😰"
  }, {
    names: ["hushed"],
    surrogates: "😯"
  }, {
    names: ["frowning"],
    surrogates: "😦"
  }, {
    names: ["anguished"],
    surrogates: "😧"
  }, {
    names: ["cry"],
    surrogates: "😢"
  }, {
    names: ["disappointed_relieved"],
    surrogates: "😥"
  }, {
    names: ["sleepy"],
    surrogates: "😪"
  }, {
    names: ["sweat"],
    surrogates: "😓"
  }, {
    names: ["sob"],
    surrogates: "😭"
  }, {
    names: ["dizzy_face"],
    surrogates: "😵"
  }, {
    names: ["astonished"],
    surrogates: "😲"
  }, {
    names: ["zipper_mouth", "zipper_mouth_face"],
    surrogates: "🤐"
  }, {
    names: ["mask"],
    surrogates: "😷"
  }, {
    names: ["thermometer_face", "face_with_thermometer"],
    surrogates: "🤒"
  }, {
    names: ["head_bandage", "face_with_head_bandage"],
    surrogates: "🤕"
  }, {
    names: ["sleeping"],
    surrogates: "😴"
  }, {
    names: ["zzz"],
    surrogates: "💤"
  }, {
    names: ["poop", "shit", "hankey", "poo"],
    surrogates: "💩"
  }, {
    names: ["smiling_imp"],
    surrogates: "😈"
  }, {
    names: ["imp"],
    surrogates: "👿"
  }, {
    names: ["japanese_ogre"],
    surrogates: "👹"
  }, {
    names: ["japanese_goblin"],
    surrogates: "👺"
  }, {
    names: ["skull", "skeleton"],
    surrogates: "💀"
  }, {
    names: ["ghost"],
    surrogates: "👻"
  }, {
    names: ["alien"],
    surrogates: "👽"
  }, {
    names: ["robot", "robot_face"],
    surrogates: "🤖"
  }, {
    names: ["smiley_cat"],
    surrogates: "😺"
  }, {
    names: ["smile_cat"],
    surrogates: "😸"
  }, {
    names: ["joy_cat"],
    surrogates: "😹"
  }, {
    names: ["heart_eyes_cat"],
    surrogates: "😻"
  }, {
    names: ["smirk_cat"],
    surrogates: "😼"
  }, {
    names: ["kissing_cat"],
    surrogates: "😽"
  }, {
    names: ["scream_cat"],
    surrogates: "🙀"
  }, {
    names: ["crying_cat_face"],
    surrogates: "😿"
  }, {
    names: ["pouting_cat"],
    surrogates: "😾"
  }, {
    names: ["raised_hands"],
    surrogates: "🙌",
    hasDiversity: !0
  }, {
    names: ["clap"],
    surrogates: "👏",
    hasDiversity: !0
  }, {
    names: ["wave"],
    surrogates: "👋",
    hasDiversity: !0
  }, {
    names: ["thumbsup", "+1", "thumbup"],
    surrogates: "👍",
    hasDiversity: !0
  }, {
    names: ["thumbsdown", "-1", "thumbdown"],
    surrogates: "👎",
    hasDiversity: !0
  }, {
    names: ["punch"],
    surrogates: "👊",
    hasDiversity: !0
  }, {
    names: ["fist"],
    surrogates: "✊",
    hasDiversity: !0
  }, {
    names: ["v"],
    surrogates: "✌",
    hasDiversity: !0
  }, {
    names: ["ok_hand"],
    surrogates: "👌",
    hasDiversity: !0
  }, {
    names: ["raised_hand"],
    surrogates: "✋",
    hasDiversity: !0
  }, {
    names: ["open_hands"],
    surrogates: "👐",
    hasDiversity: !0
  }, {
    names: ["muscle"],
    surrogates: "💪",
    hasDiversity: !0
  }, {
    names: ["pray"],
    surrogates: "🙏",
    hasDiversity: !0
  }, {
    names: ["point_up"],
    surrogates: "☝",
    hasDiversity: !0
  }, {
    names: ["point_up_2"],
    surrogates: "👆",
    hasDiversity: !0
  }, {
    names: ["point_down"],
    surrogates: "👇",
    hasDiversity: !0
  }, {
    names: ["point_left"],
    surrogates: "👈",
    hasDiversity: !0
  }, {
    names: ["point_right"],
    surrogates: "👉",
    hasDiversity: !0
  }, {
    names: ["middle_finger", "reversed_hand_with_middle_finger_extended"],
    surrogates: "🖕",
    hasDiversity: !0
  }, {
    names: ["hand_splayed", "raised_hand_with_fingers_splayed"],
    surrogates: "🖐",
    hasDiversity: !0
  }, {
    names: ["metal", "sign_of_the_horns"],
    surrogates: "🤘",
    hasDiversity: !0
  }, {
    names: ["vulcan", "raised_hand_with_part_between_middle_and_ring_fingers"],
    surrogates: "🖖",
    hasDiversity: !0
  }, {
    names: ["writing_hand"],
    surrogates: "✍",
    hasDiversity: !0
  }, {
    names: ["nail_care"],
    surrogates: "💅",
    hasDiversity: !0
  }, {
    names: ["lips"],
    surrogates: "👄"
  }, {
    names: ["tongue"],
    surrogates: "👅"
  }, {
    names: ["ear"],
    surrogates: "👂",
    hasDiversity: !0
  }, {
    names: ["nose"],
    surrogates: "👃",
    hasDiversity: !0
  }, {
    names: ["eye"],
    surrogates: "👁"
  }, {
    names: ["eyes"],
    surrogates: "👀"
  }, {
    names: ["bust_in_silhouette"],
    surrogates: "👤"
  }, {
    names: ["busts_in_silhouette"],
    surrogates: "👥"
  }, {
    names: ["speaking_head", "speaking_head_in_silhouette"],
    surrogates: "🗣"
  }, {
    names: ["baby"],
    surrogates: "👶",
    hasDiversity: !0
  }, {
    names: ["boy"],
    surrogates: "👦",
    hasDiversity: !0
  }, {
    names: ["girl"],
    surrogates: "👧",
    hasDiversity: !0
  }, {
    names: ["man"],
    surrogates: "👨",
    hasDiversity: !0
  }, {
    names: ["woman"],
    surrogates: "👩",
    hasDiversity: !0
  }, {
    names: ["person_with_blond_hair"],
    surrogates: "👱",
    hasDiversity: !0
  }, {
    names: ["older_man"],
    surrogates: "👴",
    hasDiversity: !0
  }, {
    names: ["older_woman", "grandma"],
    surrogates: "👵",
    hasDiversity: !0
  }, {
    names: ["man_with_gua_pi_mao"],
    surrogates: "👲",
    hasDiversity: !0
  }, {
    names: ["man_with_turban"],
    surrogates: "👳",
    hasDiversity: !0
  }, {
    names: ["cop"],
    surrogates: "👮",
    hasDiversity: !0
  }, {
    names: ["construction_worker"],
    surrogates: "👷",
    hasDiversity: !0
  }, {
    names: ["guardsman"],
    surrogates: "💂",
    hasDiversity: !0
  }, {
    names: ["spy", "sleuth_or_spy"],
    surrogates: "🕵",
    hasDiversity: !0
  }, {
    names: ["santa"],
    surrogates: "🎅",
    hasDiversity: !0
  }, {
    names: ["angel"],
    surrogates: "👼",
    hasDiversity: !0
  }, {
    names: ["princess"],
    surrogates: "👸",
    hasDiversity: !0
  }, {
    names: ["bride_with_veil"],
    surrogates: "👰",
    hasDiversity: !0
  }, {
    names: ["walking"],
    surrogates: "🚶",
    hasDiversity: !0
  }, {
    names: ["runner"],
    surrogates: "🏃",
    hasDiversity: !0
  }, {
    names: ["dancer"],
    surrogates: "💃",
    hasDiversity: !0
  }, {
    names: ["dancers"],
    surrogates: "👯",
    hasDiversity: !0
  }, {
    names: ["couple"],
    surrogates: "👫",
    hasDiversity: !0
  }, {
    names: ["two_men_holding_hands"],
    surrogates: "👬",
    hasDiversity: !0
  }, {
    names: ["two_women_holding_hands"],
    surrogates: "👭",
    hasDiversity: !0
  }, {
    names: ["bow"],
    surrogates: "🙇",
    hasDiversity: !0
  }, {
    names: ["information_desk_person"],
    surrogates: "💁",
    hasDiversity: !0
  }, {
    names: ["no_good"],
    surrogates: "🙅",
    hasDiversity: !0
  }, {
    names: ["ok_woman"],
    surrogates: "🙆",
    hasDiversity: !0
  }, {
    names: ["raising_hand"],
    surrogates: "🙋",
    hasDiversity: !0
  }, {
    names: ["person_with_pouting_face"],
    surrogates: "🙎",
    hasDiversity: !0
  }, {
    names: ["person_frowning"],
    surrogates: "🙍",
    hasDiversity: !0
  }, {
    names: ["haircut"],
    surrogates: "💇",
    hasDiversity: !0
  }, {
    names: ["massage"],
    surrogates: "💆",
    hasDiversity: !0
  }, {
    names: ["couple_with_heart"],
    surrogates: "💑"
  }, {
    names: ["couple_ww", "couple_with_heart_ww"],
    surrogates: "👩‍❤️‍👩"
  }, {
    names: ["couple_mm", "couple_with_heart_mm"],
    surrogates: "👨‍❤️‍👨"
  }, {
    names: ["couplekiss"],
    surrogates: "💏"
  }, {
    names: ["kiss_ww", "couplekiss_ww"],
    surrogates: "👩‍❤️‍💋‍👩"
  }, {
    names: ["kiss_mm", "couplekiss_mm"],
    surrogates: "👨‍❤️‍💋‍👨"
  }, {
    names: ["family"],
    surrogates: "👪",
    hasDiversity: !0
  }, {
    names: ["family_mwg"],
    surrogates: "👨‍👩‍👧"
  }, {
    names: ["family_mwgb"],
    surrogates: "👨‍👩‍👧‍👦"
  }, {
    names: ["family_mwbb"],
    surrogates: "👨‍👩‍👦‍👦"
  }, {
    names: ["family_mwgg"],
    surrogates: "👨‍👩‍👧‍👧"
  }, {
    names: ["family_wwb"],
    surrogates: "👩‍👩‍👦"
  }, {
    names: ["family_wwg"],
    surrogates: "👩‍👩‍👧"
  }, {
    names: ["family_wwgb"],
    surrogates: "👩‍👩‍👧‍👦"
  }, {
    names: ["family_wwbb"],
    surrogates: "👩‍👩‍👦‍👦"
  }, {
    names: ["family_wwgg"],
    surrogates: "👩‍👩‍👧‍👧"
  }, {
    names: ["family_mmb"],
    surrogates: "👨‍👨‍👦"
  }, {
    names: ["family_mmg"],
    surrogates: "👨‍👨‍👧"
  }, {
    names: ["family_mmgb"],
    surrogates: "👨‍👨‍👧‍👦"
  }, {
    names: ["family_mmbb"],
    surrogates: "👨‍👨‍👦‍👦"
  }, {
    names: ["family_mmgg"],
    surrogates: "👨‍👨‍👧‍👧"
  }, {
    names: ["womans_clothes"],
    surrogates: "👚"
  }, {
    names: ["shirt"],
    surrogates: "👕"
  }, {
    names: ["jeans"],
    surrogates: "👖"
  }, {
    names: ["necktie"],
    surrogates: "👔"
  }, {
    names: ["dress"],
    surrogates: "👗"
  }, {
    names: ["bikini"],
    surrogates: "👙"
  }, {
    names: ["kimono"],
    surrogates: "👘"
  }, {
    names: ["lipstick"],
    surrogates: "💄"
  }, {
    names: ["kiss"],
    surrogates: "💋"
  }, {
    names: ["footprints"],
    surrogates: "👣"
  }, {
    names: ["high_heel"],
    surrogates: "👠"
  }, {
    names: ["sandal"],
    surrogates: "👡"
  }, {
    names: ["boot"],
    surrogates: "👢"
  }, {
    names: ["mans_shoe"],
    surrogates: "👞"
  }, {
    names: ["athletic_shoe"],
    surrogates: "👟"
  }, {
    names: ["womans_hat"],
    surrogates: "👒"
  }, {
    names: ["tophat"],
    surrogates: "🎩"
  }, {
    names: ["helmet_with_cross", "helmet_with_white_cross"],
    surrogates: "⛑"
  }, {
    names: ["mortar_board"],
    surrogates: "🎓"
  }, {
    names: ["crown"],
    surrogates: "👑"
  }, {
    names: ["school_satchel"],
    surrogates: "🎒"
  }, {
    names: ["pouch"],
    surrogates: "👝"
  }, {
    names: ["purse"],
    surrogates: "👛"
  }, {
    names: ["handbag"],
    surrogates: "👜"
  }, {
    names: ["briefcase"],
    surrogates: "💼"
  }, {
    names: ["eyeglasses"],
    surrogates: "👓"
  }, {
    names: ["dark_sunglasses"],
    surrogates: "🕶"
  }, {
    names: ["ring"],
    surrogates: "💍"
  }, {
    names: ["closed_umbrella"],
    surrogates: "🌂"
  }, {
    names: ["cowboy", "face_with_cowboy_hat"],
    surrogates: "🤠"
  }, {
    names: ["clown", "clown_face"],
    surrogates: "🤡"
  }, {
    names: ["nauseated_face", "sick"],
    surrogates: "🤢"
  }, {
    names: ["rofl", "rolling_on_the_floor_laughing"],
    surrogates: "🤣"
  }, {
    names: ["drooling_face", "drool"],
    surrogates: "🤤"
  }, {
    names: ["lying_face", "liar"],
    surrogates: "🤥"
  }, {
    names: ["sneezing_face", "sneeze"],
    surrogates: "🤧"
  }, {
    names: ["prince"],
    surrogates: "🤴",
    hasDiversity: !0
  }, {
    names: ["man_in_tuxedo"],
    surrogates: "🤵",
    hasDiversity: !0
  }, {
    names: ["mrs_claus", "mother_christmas"],
    surrogates: "🤶",
    hasDiversity: !0
  }, {
    names: ["face_palm", "facepalm"],
    surrogates: "🤦",
    hasDiversity: !0
  }, {
    names: ["shrug"],
    surrogates: "🤷",
    hasDiversity: !0
  }, {
    names: ["pregnant_woman", "expecting_woman"],
    surrogates: "🤰",
    hasDiversity: !0
  }, {
    names: ["selfie"],
    surrogates: "🤳",
    hasDiversity: !0
  }, {
    names: ["man_dancing", "male_dancer"],
    surrogates: "🕺",
    hasDiversity: !0
  }, {
    names: ["call_me", "call_me_hand"],
    surrogates: "🤙",
    hasDiversity: !0
  }, {
    names: ["raised_back_of_hand", "back_of_hand"],
    surrogates: "🤚",
    hasDiversity: !0
  }, {
    names: ["left_facing_fist", "left_fist"],
    surrogates: "🤛",
    hasDiversity: !0
  }, {
    names: ["right_facing_fist", "right_fist"],
    surrogates: "🤜",
    hasDiversity: !0
  }, {
    names: ["handshake", "shaking_hands"],
    surrogates: "🤝",
    hasDiversity: !0
  }, {
    names: ["fingers_crossed", "hand_with_index_and_middle_finger_crossed"],
    surrogates: "🤞",
    hasDiversity: !0
  }],
  nature: [{
    names: ["dog"],
    surrogates: "🐶"
  }, {
    names: ["cat"],
    surrogates: "🐱"
  }, {
    names: ["mouse"],
    surrogates: "🐭"
  }, {
    names: ["hamster"],
    surrogates: "🐹"
  }, {
    names: ["rabbit"],
    surrogates: "🐰"
  }, {
    names: ["bear"],
    surrogates: "🐻"
  }, {
    names: ["panda_face"],
    surrogates: "🐼"
  }, {
    names: ["koala"],
    surrogates: "🐨"
  }, {
    names: ["tiger"],
    surrogates: "🐯"
  }, {
    names: ["lion_face", "lion"],
    surrogates: "🦁"
  }, {
    names: ["cow"],
    surrogates: "🐮"
  }, {
    names: ["pig"],
    surrogates: "🐷"
  }, {
    names: ["pig_nose"],
    surrogates: "🐽"
  }, {
    names: ["frog"],
    surrogates: "🐸"
  }, {
    names: ["octopus"],
    surrogates: "🐙"
  }, {
    names: ["monkey_face"],
    surrogates: "🐵"
  }, {
    names: ["see_no_evil"],
    surrogates: "🙈"
  }, {
    names: ["hear_no_evil"],
    surrogates: "🙉"
  }, {
    names: ["speak_no_evil"],
    surrogates: "🙊"
  }, {
    names: ["monkey"],
    surrogates: "🐒"
  }, {
    names: ["chicken"],
    surrogates: "🐔"
  }, {
    names: ["penguin"],
    surrogates: "🐧"
  }, {
    names: ["bird"],
    surrogates: "🐦"
  }, {
    names: ["baby_chick"],
    surrogates: "🐤"
  }, {
    names: ["hatching_chick"],
    surrogates: "🐣"
  }, {
    names: ["hatched_chick"],
    surrogates: "🐥"
  }, {
    names: ["wolf"],
    surrogates: "🐺"
  }, {
    names: ["boar"],
    surrogates: "🐗"
  }, {
    names: ["horse"],
    surrogates: "🐴"
  }, {
    names: ["unicorn", "unicorn_face"],
    surrogates: "🦄"
  }, {
    names: ["bee"],
    surrogates: "🐝"
  }, {
    names: ["bug"],
    surrogates: "🐛"
  }, {
    names: ["snail"],
    surrogates: "🐌"
  }, {
    names: ["beetle"],
    surrogates: "🐞"
  }, {
    names: ["ant"],
    surrogates: "🐜"
  }, {
    names: ["spider"],
    surrogates: "🕷"
  }, {
    names: ["scorpion"],
    surrogates: "🦂"
  }, {
    names: ["crab"],
    surrogates: "🦀"
  }, {
    names: ["snake"],
    surrogates: "🐍"
  }, {
    names: ["turtle"],
    surrogates: "🐢"
  }, {
    names: ["tropical_fish"],
    surrogates: "🐠"
  }, {
    names: ["fish"],
    surrogates: "🐟"
  }, {
    names: ["blowfish"],
    surrogates: "🐡"
  }, {
    names: ["dolphin"],
    surrogates: "🐬"
  }, {
    names: ["whale"],
    surrogates: "🐳"
  }, {
    names: ["whale2"],
    surrogates: "🐋"
  }, {
    names: ["crocodile"],
    surrogates: "🐊"
  }, {
    names: ["leopard"],
    surrogates: "🐆"
  }, {
    names: ["tiger2"],
    surrogates: "🐅"
  }, {
    names: ["water_buffalo"],
    surrogates: "🐃"
  }, {
    names: ["ox"],
    surrogates: "🐂"
  }, {
    names: ["cow2"],
    surrogates: "🐄"
  }, {
    names: ["dromedary_camel"],
    surrogates: "🐪"
  }, {
    names: ["camel"],
    surrogates: "🐫"
  }, {
    names: ["elephant"],
    surrogates: "🐘"
  }, {
    names: ["goat"],
    surrogates: "🐐"
  }, {
    names: ["ram"],
    surrogates: "🐏"
  }, {
    names: ["sheep"],
    surrogates: "🐑"
  }, {
    names: ["racehorse"],
    surrogates: "🐎"
  }, {
    names: ["pig2"],
    surrogates: "🐖"
  }, {
    names: ["rat"],
    surrogates: "🐀"
  }, {
    names: ["mouse2"],
    surrogates: "🐁"
  }, {
    names: ["rooster"],
    surrogates: "🐓"
  }, {
    names: ["turkey"],
    surrogates: "🦃"
  }, {
    names: ["dove", "dove_of_peace"],
    surrogates: "🕊"
  }, {
    names: ["dog2"],
    surrogates: "🐕"
  }, {
    names: ["poodle"],
    surrogates: "🐩"
  }, {
    names: ["cat2"],
    surrogates: "🐈"
  }, {
    names: ["rabbit2"],
    surrogates: "🐇"
  }, {
    names: ["chipmunk"],
    surrogates: "🐿"
  }, {
    names: ["feet", "paw_prints"],
    surrogates: "🐾"
  }, {
    names: ["dragon"],
    surrogates: "🐉"
  }, {
    names: ["dragon_face"],
    surrogates: "🐲"
  }, {
    names: ["cactus"],
    surrogates: "🌵"
  }, {
    names: ["christmas_tree"],
    surrogates: "🎄"
  }, {
    names: ["evergreen_tree"],
    surrogates: "🌲"
  }, {
    names: ["deciduous_tree"],
    surrogates: "🌳"
  }, {
    names: ["palm_tree"],
    surrogates: "🌴"
  }, {
    names: ["seedling"],
    surrogates: "🌱"
  }, {
    names: ["herb"],
    surrogates: "🌿"
  }, {
    names: ["shamrock"],
    surrogates: "☘"
  }, {
    names: ["four_leaf_clover"],
    surrogates: "🍀"
  }, {
    names: ["bamboo"],
    surrogates: "🎍"
  }, {
    names: ["tanabata_tree"],
    surrogates: "🎋"
  }, {
    names: ["leaves"],
    surrogates: "🍃"
  }, {
    names: ["fallen_leaf"],
    surrogates: "🍂"
  }, {
    names: ["maple_leaf"],
    surrogates: "🍁"
  }, {
    names: ["ear_of_rice"],
    surrogates: "🌾"
  }, {
    names: ["hibiscus"],
    surrogates: "🌺"
  }, {
    names: ["sunflower"],
    surrogates: "🌻"
  }, {
    names: ["rose"],
    surrogates: "🌹"
  }, {
    names: ["tulip"],
    surrogates: "🌷"
  }, {
    names: ["blossom"],
    surrogates: "🌼"
  }, {
    names: ["cherry_blossom"],
    surrogates: "🌸"
  }, {
    names: ["bouquet"],
    surrogates: "💐"
  }, {
    names: ["mushroom"],
    surrogates: "🍄"
  }, {
    names: ["chestnut"],
    surrogates: "🌰"
  }, {
    names: ["jack_o_lantern"],
    surrogates: "🎃"
  }, {
    names: ["shell"],
    surrogates: "🐚"
  }, {
    names: ["spider_web"],
    surrogates: "🕸"
  }, {
    names: ["earth_americas"],
    surrogates: "🌎"
  }, {
    names: ["earth_africa"],
    surrogates: "🌍"
  }, {
    names: ["earth_asia"],
    surrogates: "🌏"
  }, {
    names: ["full_moon"],
    surrogates: "🌕"
  }, {
    names: ["waning_gibbous_moon"],
    surrogates: "🌖"
  }, {
    names: ["last_quarter_moon"],
    surrogates: "🌗"
  }, {
    names: ["waning_crescent_moon"],
    surrogates: "🌘"
  }, {
    names: ["new_moon"],
    surrogates: "🌑"
  }, {
    names: ["waxing_crescent_moon"],
    surrogates: "🌒"
  }, {
    names: ["first_quarter_moon"],
    surrogates: "🌓"
  }, {
    names: ["waxing_gibbous_moon"],
    surrogates: "🌔"
  }, {
    names: ["new_moon_with_face"],
    surrogates: "🌚"
  }, {
    names: ["full_moon_with_face"],
    surrogates: "🌝"
  }, {
    names: ["first_quarter_moon_with_face"],
    surrogates: "🌛"
  }, {
    names: ["last_quarter_moon_with_face"],
    surrogates: "🌜"
  }, {
    names: ["sun_with_face"],
    surrogates: "🌞"
  }, {
    names: ["crescent_moon"],
    surrogates: "🌙"
  }, {
    names: ["star"],
    surrogates: "⭐"
  }, {
    names: ["star2"],
    surrogates: "🌟"
  }, {
    names: ["dizzy"],
    surrogates: "💫"
  }, {
    names: ["sparkles"],
    surrogates: "✨"
  }, {
    names: ["comet"],
    surrogates: "☄"
  }, {
    names: ["sunny"],
    surrogates: "☀"
  }, {
    names: ["white_sun_small_cloud", "white_sun_with_small_cloud"],
    surrogates: "🌤"
  }, {
    names: ["partly_sunny"],
    surrogates: "⛅"
  }, {
    names: ["white_sun_cloud", "white_sun_behind_cloud"],
    surrogates: "🌥"
  }, {
    names: ["white_sun_rain_cloud", "white_sun_behind_cloud_with_rain"],
    surrogates: "🌦"
  }, {
    names: ["cloud"],
    surrogates: "☁"
  }, {
    names: ["cloud_rain", "cloud_with_rain"],
    surrogates: "🌧"
  }, {
    names: ["thunder_cloud_rain", "thunder_cloud_and_rain"],
    surrogates: "⛈"
  }, {
    names: ["cloud_lightning", "cloud_with_lightning"],
    surrogates: "🌩"
  }, {
    names: ["zap"],
    surrogates: "⚡"
  }, {
    names: ["fire", "flame"],
    surrogates: "🔥"
  }, {
    names: ["boom"],
    surrogates: "💥"
  }, {
    names: ["snowflake"],
    surrogates: "❄"
  }, {
    names: ["cloud_snow", "cloud_with_snow"],
    surrogates: "🌨"
  }, {
    names: ["snowman2"],
    surrogates: "☃"
  }, {
    names: ["snowman"],
    surrogates: "⛄"
  }, {
    names: ["wind_blowing_face"],
    surrogates: "🌬"
  }, {
    names: ["dash"],
    surrogates: "💨"
  }, {
    names: ["cloud_tornado", "cloud_with_tornado"],
    surrogates: "🌪"
  }, {
    names: ["fog"],
    surrogates: "🌫"
  }, {
    names: ["umbrella2"],
    surrogates: "☂"
  }, {
    names: ["umbrella"],
    surrogates: "☔"
  }, {
    names: ["droplet"],
    surrogates: "💧"
  }, {
    names: ["sweat_drops"],
    surrogates: "💦"
  }, {
    names: ["ocean"],
    surrogates: "🌊"
  }, {
    names: ["eagle"],
    surrogates: "🦅"
  }, {
    names: ["duck"],
    surrogates: "🦆"
  }, {
    names: ["bat"],
    surrogates: "🦇"
  }, {
    names: ["shark"],
    surrogates: "🦈"
  }, {
    names: ["owl"],
    surrogates: "🦉"
  }, {
    names: ["fox", "fox_face"],
    surrogates: "🦊"
  }, {
    names: ["butterfly"],
    surrogates: "🦋"
  }, {
    names: ["deer"],
    surrogates: "🦌"
  }, {
    names: ["gorilla"],
    surrogates: "🦍"
  }, {
    names: ["lizard"],
    surrogates: "🦎"
  }, {
    names: ["rhino", "rhinoceros"],
    surrogates: "🦏"
  }, {
    names: ["wilted_rose", "wilted_flower"],
    surrogates: "🥀"
  }, {
    names: ["shrimp"],
    surrogates: "🦐"
  }, {
    names: ["squid"],
    surrogates: "🦑"
  }],
  food: [{
    names: ["green_apple"],
    surrogates: "🍏"
  }, {
    names: ["apple"],
    surrogates: "🍎"
  }, {
    names: ["pear"],
    surrogates: "🍐"
  }, {
    names: ["tangerine"],
    surrogates: "🍊"
  }, {
    names: ["lemon"],
    surrogates: "🍋"
  }, {
    names: ["banana"],
    surrogates: "🍌"
  }, {
    names: ["watermelon"],
    surrogates: "🍉"
  }, {
    names: ["grapes"],
    surrogates: "🍇"
  }, {
    names: ["strawberry"],
    surrogates: "🍓"
  }, {
    names: ["melon"],
    surrogates: "🍈"
  }, {
    names: ["cherries"],
    surrogates: "🍒"
  }, {
    names: ["peach"],
    surrogates: "🍑"
  }, {
    names: ["pineapple"],
    surrogates: "🍍"
  }, {
    names: ["tomato"],
    surrogates: "🍅"
  }, {
    names: ["eggplant"],
    surrogates: "🍆"
  }, {
    names: ["hot_pepper"],
    surrogates: "🌶"
  }, {
    names: ["corn"],
    surrogates: "🌽"
  }, {
    names: ["sweet_potato"],
    surrogates: "🍠"
  }, {
    names: ["honey_pot"],
    surrogates: "🍯"
  }, {
    names: ["bread"],
    surrogates: "🍞"
  }, {
    names: ["cheese", "cheese_wedge"],
    surrogates: "🧀"
  }, {
    names: ["poultry_leg"],
    surrogates: "🍗"
  }, {
    names: ["meat_on_bone"],
    surrogates: "🍖"
  }, {
    names: ["fried_shrimp"],
    surrogates: "🍤"
  }, {
    names: ["cooking"],
    surrogates: "🍳"
  }, {
    names: ["hamburger"],
    surrogates: "🍔"
  }, {
    names: ["fries"],
    surrogates: "🍟"
  }, {
    names: ["hotdog", "hot_dog"],
    surrogates: "🌭"
  }, {
    names: ["pizza"],
    surrogates: "🍕"
  }, {
    names: ["spaghetti"],
    surrogates: "🍝"
  }, {
    names: ["taco"],
    surrogates: "🌮"
  }, {
    names: ["burrito"],
    surrogates: "🌯"
  }, {
    names: ["ramen"],
    surrogates: "🍜"
  }, {
    names: ["stew"],
    surrogates: "🍲"
  }, {
    names: ["fish_cake"],
    surrogates: "🍥"
  }, {
    names: ["sushi"],
    surrogates: "🍣"
  }, {
    names: ["bento"],
    surrogates: "🍱"
  }, {
    names: ["curry"],
    surrogates: "🍛"
  }, {
    names: ["rice_ball"],
    surrogates: "🍙"
  }, {
    names: ["rice"],
    surrogates: "🍚"
  }, {
    names: ["rice_cracker"],
    surrogates: "🍘"
  }, {
    names: ["oden"],
    surrogates: "🍢"
  }, {
    names: ["dango"],
    surrogates: "🍡"
  }, {
    names: ["shaved_ice"],
    surrogates: "🍧"
  }, {
    names: ["ice_cream"],
    surrogates: "🍨"
  }, {
    names: ["icecream"],
    surrogates: "🍦"
  }, {
    names: ["cake"],
    surrogates: "🍰"
  }, {
    names: ["birthday"],
    surrogates: "🎂"
  }, {
    names: ["custard", "pudding", "flan"],
    surrogates: "🍮"
  }, {
    names: ["candy"],
    surrogates: "🍬"
  }, {
    names: ["lollipop"],
    surrogates: "🍭"
  }, {
    names: ["chocolate_bar"],
    surrogates: "🍫"
  }, {
    names: ["popcorn"],
    surrogates: "🍿"
  }, {
    names: ["doughnut"],
    surrogates: "🍩"
  }, {
    names: ["cookie"],
    surrogates: "🍪"
  }, {
    names: ["beer"],
    surrogates: "🍺"
  }, {
    names: ["beers"],
    surrogates: "🍻"
  }, {
    names: ["wine_glass"],
    surrogates: "🍷"
  }, {
    names: ["cocktail"],
    surrogates: "🍸"
  }, {
    names: ["tropical_drink"],
    surrogates: "🍹"
  }, {
    names: ["champagne", "bottle_with_popping_cork"],
    surrogates: "🍾"
  }, {
    names: ["sake"],
    surrogates: "🍶"
  }, {
    names: ["tea"],
    surrogates: "🍵"
  }, {
    names: ["coffee"],
    surrogates: "☕"
  }, {
    names: ["baby_bottle"],
    surrogates: "🍼"
  }, {
    names: ["fork_and_knife"],
    surrogates: "🍴"
  }, {
    names: ["fork_knife_plate", "fork_and_knife_with_plate"],
    surrogates: "🍽"
  }, {
    names: ["croissant"],
    surrogates: "🥐"
  }, {
    names: ["avocado"],
    surrogates: "🥑"
  }, {
    names: ["cucumber"],
    surrogates: "🥒"
  }, {
    names: ["bacon"],
    surrogates: "🥓"
  }, {
    names: ["potato"],
    surrogates: "🥔"
  }, {
    names: ["carrot"],
    surrogates: "🥕"
  }, {
    names: ["french_bread", "baguette_bread"],
    surrogates: "🥖"
  }, {
    names: ["salad", "green_salad"],
    surrogates: "🥗"
  }, {
    names: ["shallow_pan_of_food", "paella"],
    surrogates: "🥘"
  }, {
    names: ["stuffed_flatbread", "stuffed_pita"],
    surrogates: "🥙"
  }, {
    names: ["champagne_glass", "clinking_glass"],
    surrogates: "🥂"
  }, {
    names: ["tumbler_glass", "whisky"],
    surrogates: "🥃"
  }, {
    names: ["spoon"],
    surrogates: "🥄"
  }, {
    names: ["egg"],
    surrogates: "🥚"
  }, {
    names: ["milk", "glass_of_milk"],
    surrogates: "🥛"
  }, {
    names: ["peanuts", "shelled_peanut"],
    surrogates: "🥜"
  }, {
    names: ["kiwi", "kiwifruit"],
    surrogates: "🥝"
  }, {
    names: ["pancakes"],
    surrogates: "🥞"
  }],
  activity: [{
    names: ["soccer"],
    surrogates: "⚽"
  }, {
    names: ["basketball"],
    surrogates: "🏀"
  }, {
    names: ["football"],
    surrogates: "🏈"
  }, {
    names: ["baseball"],
    surrogates: "⚾"
  }, {
    names: ["tennis"],
    surrogates: "🎾"
  }, {
    names: ["volleyball"],
    surrogates: "🏐"
  }, {
    names: ["rugby_football"],
    surrogates: "🏉"
  }, {
    names: ["8ball"],
    surrogates: "🎱"
  }, {
    names: ["golf"],
    surrogates: "⛳"
  }, {
    names: ["golfer"],
    surrogates: "🏌",
    hasDiversity: !0
  }, {
    names: ["ping_pong", "table_tennis"],
    surrogates: "🏓"
  }, {
    names: ["badminton"],
    surrogates: "🏸"
  }, {
    names: ["hockey"],
    surrogates: "🏒"
  }, {
    names: ["field_hockey"],
    surrogates: "🏑"
  }, {
    names: ["cricket", "cricket_bat_ball"],
    surrogates: "🏏"
  }, {
    names: ["ski"],
    surrogates: "🎿"
  }, {
    names: ["skier"],
    surrogates: "⛷",
    hasDiversity: !0
  }, {
    names: ["snowboarder"],
    surrogates: "🏂",
    hasDiversity: !0
  }, {
    names: ["ice_skate"],
    surrogates: "⛸"
  }, {
    names: ["bow_and_arrow", "archery"],
    surrogates: "🏹"
  }, {
    names: ["fishing_pole_and_fish"],
    surrogates: "🎣"
  }, {
    names: ["rowboat"],
    surrogates: "🚣",
    hasDiversity: !0
  }, {
    names: ["swimmer"],
    surrogates: "🏊",
    hasDiversity: !0
  }, {
    names: ["surfer"],
    surrogates: "🏄",
    hasDiversity: !0
  }, {
    names: ["bath"],
    surrogates: "🛀",
    hasDiversity: !0
  }, {
    names: ["basketball_player", "person_with_ball"],
    surrogates: "⛹",
    hasDiversity: !0
  }, {
    names: ["lifter", "weight_lifter"],
    surrogates: "🏋",
    hasDiversity: !0
  }, {
    names: ["bicyclist"],
    surrogates: "🚴",
    hasDiversity: !0
  }, {
    names: ["mountain_bicyclist"],
    surrogates: "🚵",
    hasDiversity: !0
  }, {
    names: ["horse_racing"],
    surrogates: "🏇",
    hasDiversity: !0
  }, {
    names: ["levitate", "man_in_business_suit_levitating"],
    surrogates: "🕴",
    hasDiversity: !0
  }, {
    names: ["trophy"],
    surrogates: "🏆"
  }, {
    names: ["running_shirt_with_sash"],
    surrogates: "🎽"
  }, {
    names: ["medal", "sports_medal"],
    surrogates: "🏅"
  }, {
    names: ["military_medal"],
    surrogates: "🎖"
  }, {
    names: ["reminder_ribbon"],
    surrogates: "🎗"
  }, {
    names: ["rosette"],
    surrogates: "🏵"
  }, {
    names: ["ticket"],
    surrogates: "🎫"
  }, {
    names: ["tickets", "admission_tickets"],
    surrogates: "🎟"
  }, {
    names: ["performing_arts"],
    surrogates: "🎭"
  }, {
    names: ["art"],
    surrogates: "🎨"
  }, {
    names: ["circus_tent"],
    surrogates: "🎪"
  }, {
    names: ["microphone"],
    surrogates: "🎤"
  }, {
    names: ["headphones"],
    surrogates: "🎧"
  }, {
    names: ["musical_score"],
    surrogates: "🎼"
  }, {
    names: ["musical_keyboard"],
    surrogates: "🎹"
  }, {
    names: ["saxophone"],
    surrogates: "🎷"
  }, {
    names: ["trumpet"],
    surrogates: "🎺"
  }, {
    names: ["guitar"],
    surrogates: "🎸"
  }, {
    names: ["violin"],
    surrogates: "🎻"
  }, {
    names: ["clapper"],
    surrogates: "🎬"
  }, {
    names: ["video_game"],
    surrogates: "🎮"
  }, {
    names: ["space_invader"],
    surrogates: "👾"
  }, {
    names: ["dart"],
    surrogates: "🎯"
  }, {
    names: ["game_die"],
    surrogates: "🎲"
  }, {
    names: ["slot_machine"],
    surrogates: "🎰"
  }, {
    names: ["bowling"],
    surrogates: "🎳"
  }, {
    names: ["cartwheel", "person_doing_cartwheel"],
    surrogates: "🤸",
    hasDiversity: !0
  }, {
    names: ["juggling", "juggler"],
    surrogates: "🤹",
    hasDiversity: !0
  }, {
    names: ["wrestlers", "wrestling"],
    surrogates: "🤼",
    hasDiversity: !0
  }, {
    names: ["boxing_glove", "boxing_gloves"],
    surrogates: "🥊"
  }, {
    names: ["martial_arts_uniform", "karate_uniform"],
    surrogates: "🥋"
  }, {
    names: ["water_polo"],
    surrogates: "🤽",
    hasDiversity: !0
  }, {
    names: ["handball"],
    surrogates: "🤾",
    hasDiversity: !0
  }, {
    names: ["goal", "goal_net"],
    surrogates: "🥅"
  }, {
    names: ["fencer", "fencing"],
    surrogates: "🤺"
  }, {
    names: ["first_place", "first_place_medal"],
    surrogates: "🥇"
  }, {
    names: ["second_place", "second_place_medal"],
    surrogates: "🥈"
  }, {
    names: ["third_place", "third_place_medal"],
    surrogates: "🥉"
  }, {
    names: ["drum", "drum_with_drumsticks"],
    surrogates: "🥁"
  }],
  travel: [{
    names: ["red_car"],
    surrogates: "🚗"
  }, {
    names: ["taxi"],
    surrogates: "🚕"
  }, {
    names: ["blue_car"],
    surrogates: "🚙"
  }, {
    names: ["bus"],
    surrogates: "🚌"
  }, {
    names: ["trolleybus"],
    surrogates: "🚎"
  }, {
    names: ["race_car", "racing_car"],
    surrogates: "🏎"
  }, {
    names: ["police_car"],
    surrogates: "🚓"
  }, {
    names: ["ambulance"],
    surrogates: "🚑"
  }, {
    names: ["fire_engine"],
    surrogates: "🚒"
  }, {
    names: ["minibus"],
    surrogates: "🚐"
  }, {
    names: ["truck"],
    surrogates: "🚚"
  }, {
    names: ["articulated_lorry"],
    surrogates: "🚛"
  }, {
    names: ["tractor"],
    surrogates: "🚜"
  }, {
    names: ["motorcycle", "racing_motorcycle"],
    surrogates: "🏍"
  }, {
    names: ["bike"],
    surrogates: "🚲"
  }, {
    names: ["rotating_light"],
    surrogates: "🚨"
  }, {
    names: ["oncoming_police_car"],
    surrogates: "🚔"
  }, {
    names: ["oncoming_bus"],
    surrogates: "🚍"
  }, {
    names: ["oncoming_automobile"],
    surrogates: "🚘"
  }, {
    names: ["oncoming_taxi"],
    surrogates: "🚖"
  }, {
    names: ["aerial_tramway"],
    surrogates: "🚡"
  }, {
    names: ["mountain_cableway"],
    surrogates: "🚠"
  }, {
    names: ["suspension_railway"],
    surrogates: "🚟"
  }, {
    names: ["railway_car"],
    surrogates: "🚃"
  }, {
    names: ["train"],
    surrogates: "🚋"
  }, {
    names: ["monorail"],
    surrogates: "🚝"
  }, {
    names: ["bullettrain_side"],
    surrogates: "🚄"
  }, {
    names: ["bullettrain_front"],
    surrogates: "🚅"
  }, {
    names: ["light_rail"],
    surrogates: "🚈"
  }, {
    names: ["mountain_railway"],
    surrogates: "🚞"
  }, {
    names: ["steam_locomotive"],
    surrogates: "🚂"
  }, {
    names: ["train2"],
    surrogates: "🚆"
  }, {
    names: ["metro"],
    surrogates: "🚇"
  }, {
    names: ["tram"],
    surrogates: "🚊"
  }, {
    names: ["station"],
    surrogates: "🚉"
  }, {
    names: ["helicopter"],
    surrogates: "🚁"
  }, {
    names: ["airplane_small", "small_airplane"],
    surrogates: "🛩"
  }, {
    names: ["airplane"],
    surrogates: "✈"
  }, {
    names: ["airplane_departure"],
    surrogates: "🛫"
  }, {
    names: ["airplane_arriving"],
    surrogates: "🛬"
  }, {
    names: ["sailboat"],
    surrogates: "⛵"
  }, {
    names: ["motorboat"],
    surrogates: "🛥"
  }, {
    names: ["speedboat"],
    surrogates: "🚤"
  }, {
    names: ["ferry"],
    surrogates: "⛴"
  }, {
    names: ["cruise_ship", "passenger_ship"],
    surrogates: "🛳"
  }, {
    names: ["rocket"],
    surrogates: "🚀"
  }, {
    names: ["satellite_orbital"],
    surrogates: "🛰"
  }, {
    names: ["seat"],
    surrogates: "💺"
  }, {
    names: ["anchor"],
    surrogates: "⚓"
  }, {
    names: ["construction"],
    surrogates: "🚧"
  }, {
    names: ["fuelpump"],
    surrogates: "⛽"
  }, {
    names: ["busstop"],
    surrogates: "🚏"
  }, {
    names: ["vertical_traffic_light"],
    surrogates: "🚦"
  }, {
    names: ["traffic_light"],
    surrogates: "🚥"
  }, {
    names: ["checkered_flag"],
    surrogates: "🏁"
  }, {
    names: ["ship"],
    surrogates: "🚢"
  }, {
    names: ["ferris_wheel"],
    surrogates: "🎡"
  }, {
    names: ["roller_coaster"],
    surrogates: "🎢"
  }, {
    names: ["carousel_horse"],
    surrogates: "🎠"
  }, {
    names: ["construction_site", "building_construction"],
    surrogates: "🏗"
  }, {
    names: ["foggy"],
    surrogates: "🌁"
  }, {
    names: ["tokyo_tower"],
    surrogates: "🗼"
  }, {
    names: ["factory"],
    surrogates: "🏭"
  }, {
    names: ["fountain"],
    surrogates: "⛲"
  }, {
    names: ["rice_scene"],
    surrogates: "🎑"
  }, {
    names: ["mountain"],
    surrogates: "⛰"
  }, {
    names: ["mountain_snow", "snow_capped_mountain"],
    surrogates: "🏔"
  }, {
    names: ["mount_fuji"],
    surrogates: "🗻"
  }, {
    names: ["volcano"],
    surrogates: "🌋"
  }, {
    names: ["japan"],
    surrogates: "🗾"
  }, {
    names: ["camping"],
    surrogates: "🏕"
  }, {
    names: ["tent"],
    surrogates: "⛺"
  }, {
    names: ["park", "national_park"],
    surrogates: "🏞"
  }, {
    names: ["motorway"],
    surrogates: "🛣"
  }, {
    names: ["railway_track", "railroad_track"],
    surrogates: "🛤"
  }, {
    names: ["sunrise"],
    surrogates: "🌅"
  }, {
    names: ["sunrise_over_mountains"],
    surrogates: "🌄"
  }, {
    names: ["desert"],
    surrogates: "🏜"
  }, {
    names: ["beach", "beach_with_umbrella"],
    surrogates: "🏖"
  }, {
    names: ["island", "desert_island"],
    surrogates: "🏝"
  }, {
    names: ["city_sunset", "city_sunrise"],
    surrogates: "🌇"
  }, {
    names: ["city_dusk"],
    surrogates: "🌆"
  }, {
    names: ["cityscape"],
    surrogates: "🏙"
  }, {
    names: ["night_with_stars"],
    surrogates: "🌃"
  }, {
    names: ["bridge_at_night"],
    surrogates: "🌉"
  }, {
    names: ["milky_way"],
    surrogates: "🌌"
  }, {
    names: ["stars"],
    surrogates: "🌠"
  }, {
    names: ["sparkler"],
    surrogates: "🎇"
  }, {
    names: ["fireworks"],
    surrogates: "🎆"
  }, {
    names: ["rainbow"],
    surrogates: "🌈"
  }, {
    names: ["homes", "house_buildings"],
    surrogates: "🏘"
  }, {
    names: ["european_castle"],
    surrogates: "🏰"
  }, {
    names: ["japanese_castle"],
    surrogates: "🏯"
  }, {
    names: ["stadium"],
    surrogates: "🏟"
  }, {
    names: ["statue_of_liberty"],
    surrogates: "🗽"
  }, {
    names: ["house"],
    surrogates: "🏠"
  }, {
    names: ["house_with_garden"],
    surrogates: "🏡"
  }, {
    names: ["house_abandoned", "derelict_house_building"],
    surrogates: "🏚"
  }, {
    names: ["office"],
    surrogates: "🏢"
  }, {
    names: ["department_store"],
    surrogates: "🏬"
  }, {
    names: ["post_office"],
    surrogates: "🏣"
  }, {
    names: ["european_post_office"],
    surrogates: "🏤"
  }, {
    names: ["hospital"],
    surrogates: "🏥"
  }, {
    names: ["bank"],
    surrogates: "🏦"
  }, {
    names: ["hotel"],
    surrogates: "🏨"
  }, {
    names: ["convenience_store"],
    surrogates: "🏪"
  }, {
    names: ["school"],
    surrogates: "🏫"
  }, {
    names: ["love_hotel"],
    surrogates: "🏩"
  }, {
    names: ["wedding"],
    surrogates: "💒"
  }, {
    names: ["classical_building"],
    surrogates: "🏛"
  }, {
    names: ["church"],
    surrogates: "⛪"
  }, {
    names: ["mosque"],
    surrogates: "🕌"
  }, {
    names: ["synagogue"],
    surrogates: "🕍"
  }, {
    names: ["kaaba"],
    surrogates: "🕋"
  }, {
    names: ["shinto_shrine"],
    surrogates: "⛩"
  }, {
    names: ["scooter"],
    surrogates: "🛴"
  }, {
    names: ["motor_scooter", "motorbike"],
    surrogates: "🛵"
  }, {
    names: ["canoe", "kayak"],
    surrogates: "🛶"
  }],
  objects: [{
    names: ["watch"],
    surrogates: "⌚"
  }, {
    names: ["iphone"],
    surrogates: "📱"
  }, {
    names: ["calling"],
    surrogates: "📲"
  }, {
    names: ["computer"],
    surrogates: "💻"
  }, {
    names: ["keyboard"],
    surrogates: "⌨"
  }, {
    names: ["desktop", "desktop_computer"],
    surrogates: "🖥"
  }, {
    names: ["printer"],
    surrogates: "🖨"
  }, {
    names: ["mouse_three_button", "three_button_mouse"],
    surrogates: "🖱"
  }, {
    names: ["trackball"],
    surrogates: "🖲"
  }, {
    names: ["joystick"],
    surrogates: "🕹"
  }, {
    names: ["compression"],
    surrogates: "🗜"
  }, {
    names: ["minidisc"],
    surrogates: "💽"
  }, {
    names: ["floppy_disk"],
    surrogates: "💾"
  }, {
    names: ["cd"],
    surrogates: "💿"
  }, {
    names: ["dvd"],
    surrogates: "📀"
  }, {
    names: ["vhs"],
    surrogates: "📼"
  }, {
    names: ["camera"],
    surrogates: "📷"
  }, {
    names: ["camera_with_flash"],
    surrogates: "📸"
  }, {
    names: ["video_camera"],
    surrogates: "📹"
  }, {
    names: ["movie_camera"],
    surrogates: "🎥"
  }, {
    names: ["projector", "film_projector"],
    surrogates: "📽"
  }, {
    names: ["film_frames"],
    surrogates: "🎞"
  }, {
    names: ["telephone_receiver"],
    surrogates: "📞"
  }, {
    names: ["telephone"],
    surrogates: "☎"
  }, {
    names: ["pager"],
    surrogates: "📟"
  }, {
    names: ["fax"],
    surrogates: "📠"
  }, {
    names: ["tv"],
    surrogates: "📺"
  }, {
    names: ["radio"],
    surrogates: "📻"
  }, {
    names: ["microphone2", "studio_microphone"],
    surrogates: "🎙"
  }, {
    names: ["level_slider"],
    surrogates: "🎚"
  }, {
    names: ["control_knobs"],
    surrogates: "🎛"
  }, {
    names: ["stopwatch"],
    surrogates: "⏱"
  }, {
    names: ["timer", "timer_clock"],
    surrogates: "⏲"
  }, {
    names: ["alarm_clock"],
    surrogates: "⏰"
  }, {
    names: ["clock", "mantlepiece_clock"],
    surrogates: "🕰"
  }, {
    names: ["hourglass_flowing_sand"],
    surrogates: "⏳"
  }, {
    names: ["hourglass"],
    surrogates: "⌛"
  }, {
    names: ["satellite"],
    surrogates: "📡"
  }, {
    names: ["battery"],
    surrogates: "🔋"
  }, {
    names: ["electric_plug"],
    surrogates: "🔌"
  }, {
    names: ["bulb"],
    surrogates: "💡"
  }, {
    names: ["flashlight"],
    surrogates: "🔦"
  }, {
    names: ["candle"],
    surrogates: "🕯"
  }, {
    names: ["wastebasket"],
    surrogates: "🗑"
  }, {
    names: ["oil", "oil_drum"],
    surrogates: "🛢"
  }, {
    names: ["money_with_wings"],
    surrogates: "💸"
  }, {
    names: ["dollar"],
    surrogates: "💵"
  }, {
    names: ["yen"],
    surrogates: "💴"
  }, {
    names: ["euro"],
    surrogates: "💶"
  }, {
    names: ["pound"],
    surrogates: "💷"
  }, {
    names: ["moneybag"],
    surrogates: "💰"
  }, {
    names: ["credit_card"],
    surrogates: "💳"
  }, {
    names: ["gem"],
    surrogates: "💎"
  }, {
    names: ["scales"],
    surrogates: "⚖"
  }, {
    names: ["wrench"],
    surrogates: "🔧"
  }, {
    names: ["hammer"],
    surrogates: "🔨"
  }, {
    names: ["hammer_pick", "hammer_and_pick"],
    surrogates: "⚒"
  }, {
    names: ["tools", "hammer_and_wrench"],
    surrogates: "🛠"
  }, {
    names: ["pick"],
    surrogates: "⛏"
  }, {
    names: ["nut_and_bolt"],
    surrogates: "🔩"
  }, {
    names: ["gear"],
    surrogates: "⚙"
  }, {
    names: ["chains"],
    surrogates: "⛓"
  }, {
    names: ["gun"],
    surrogates: "🔫"
  }, {
    names: ["bomb"],
    surrogates: "💣"
  }, {
    names: ["knife"],
    surrogates: "🔪"
  }, {
    names: ["dagger", "dagger_knife"],
    surrogates: "🗡"
  }, {
    names: ["crossed_swords"],
    surrogates: "⚔"
  }, {
    names: ["shield"],
    surrogates: "🛡"
  }, {
    names: ["smoking"],
    surrogates: "🚬"
  }, {
    names: ["skull_crossbones", "skull_and_crossbones"],
    surrogates: "☠"
  }, {
    names: ["coffin"],
    surrogates: "⚰"
  }, {
    names: ["urn", "funeral_urn"],
    surrogates: "⚱"
  }, {
    names: ["amphora"],
    surrogates: "🏺"
  }, {
    names: ["crystal_ball"],
    surrogates: "🔮"
  }, {
    names: ["prayer_beads"],
    surrogates: "📿"
  }, {
    names: ["barber"],
    surrogates: "💈"
  }, {
    names: ["alembic"],
    surrogates: "⚗"
  }, {
    names: ["telescope"],
    surrogates: "🔭"
  }, {
    names: ["microscope"],
    surrogates: "🔬"
  }, {
    names: ["hole"],
    surrogates: "🕳"
  }, {
    names: ["pill"],
    surrogates: "💊"
  }, {
    names: ["syringe"],
    surrogates: "💉"
  }, {
    names: ["thermometer"],
    surrogates: "🌡"
  }, {
    names: ["label"],
    surrogates: "🏷"
  }, {
    names: ["bookmark"],
    surrogates: "🔖"
  }, {
    names: ["toilet"],
    surrogates: "🚽"
  }, {
    names: ["shower"],
    surrogates: "🚿"
  }, {
    names: ["bathtub"],
    surrogates: "🛁"
  }, {
    names: ["key"],
    surrogates: "🔑"
  }, {
    names: ["key2", "old_key"],
    surrogates: "🗝"
  }, {
    names: ["couch", "couch_and_lamp"],
    surrogates: "🛋"
  }, {
    names: ["sleeping_accommodation"],
    surrogates: "🛌",
    hasDiversity: !0
  }, {
    names: ["bed"],
    surrogates: "🛏"
  }, {
    names: ["door"],
    surrogates: "🚪"
  }, {
    names: ["bellhop", "bellhop_bell"],
    surrogates: "🛎"
  }, {
    names: ["frame_photo", "frame_with_picture"],
    surrogates: "🖼"
  }, {
    names: ["map", "world_map"],
    surrogates: "🗺"
  }, {
    names: ["beach_umbrella", "umbrella_on_ground"],
    surrogates: "⛱"
  }, {
    names: ["moyai"],
    surrogates: "🗿"
  }, {
    names: ["shopping_bags"],
    surrogates: "🛍"
  }, {
    names: ["balloon"],
    surrogates: "🎈"
  }, {
    names: ["flags"],
    surrogates: "🎏"
  }, {
    names: ["ribbon"],
    surrogates: "🎀"
  }, {
    names: ["gift"],
    surrogates: "🎁"
  }, {
    names: ["confetti_ball"],
    surrogates: "🎊"
  }, {
    names: ["tada"],
    surrogates: "🎉"
  }, {
    names: ["dolls"],
    surrogates: "🎎"
  }, {
    names: ["wind_chime"],
    surrogates: "🎐"
  }, {
    names: ["crossed_flags"],
    surrogates: "🎌"
  }, {
    names: ["izakaya_lantern"],
    surrogates: "🏮"
  }, {
    names: ["envelope"],
    surrogates: "✉"
  }, {
    names: ["envelope_with_arrow"],
    surrogates: "📩"
  }, {
    names: ["incoming_envelope"],
    surrogates: "📨"
  }, {
    names: ["e_mail", "email"],
    surrogates: "📧"
  }, {
    names: ["love_letter"],
    surrogates: "💌"
  }, {
    names: ["postbox"],
    surrogates: "📮"
  }, {
    names: ["mailbox_closed"],
    surrogates: "📪"
  }, {
    names: ["mailbox"],
    surrogates: "📫"
  }, {
    names: ["mailbox_with_mail"],
    surrogates: "📬"
  }, {
    names: ["mailbox_with_no_mail"],
    surrogates: "📭"
  }, {
    names: ["package"],
    surrogates: "📦"
  }, {
    names: ["postal_horn"],
    surrogates: "📯"
  }, {
    names: ["inbox_tray"],
    surrogates: "📥"
  }, {
    names: ["outbox_tray"],
    surrogates: "📤"
  }, {
    names: ["scroll"],
    surrogates: "📜"
  }, {
    names: ["page_with_curl"],
    surrogates: "📃"
  }, {
    names: ["bookmark_tabs"],
    surrogates: "📑"
  }, {
    names: ["bar_chart"],
    surrogates: "📊"
  }, {
    names: ["chart_with_upwards_trend"],
    surrogates: "📈"
  }, {
    names: ["chart_with_downwards_trend"],
    surrogates: "📉"
  }, {
    names: ["page_facing_up"],
    surrogates: "📄"
  }, {
    names: ["date"],
    surrogates: "📅"
  }, {
    names: ["calendar"],
    surrogates: "📆"
  }, {
    names: ["calendar_spiral", "spiral_calendar_pad"],
    surrogates: "🗓"
  }, {
    names: ["card_index"],
    surrogates: "📇"
  }, {
    names: ["card_box", "card_file_box"],
    surrogates: "🗃"
  }, {
    names: ["ballot_box", "ballot_box_with_ballot"],
    surrogates: "🗳"
  }, {
    names: ["file_cabinet"],
    surrogates: "🗄"
  }, {
    names: ["clipboard"],
    surrogates: "📋"
  }, {
    names: ["notepad_spiral", "spiral_note_pad"],
    surrogates: "🗒"
  }, {
    names: ["file_folder"],
    surrogates: "📁"
  }, {
    names: ["open_file_folder"],
    surrogates: "📂"
  }, {
    names: ["dividers", "card_index_dividers"],
    surrogates: "🗂"
  }, {
    names: ["newspaper2", "rolled_up_newspaper"],
    surrogates: "🗞"
  }, {
    names: ["newspaper"],
    surrogates: "📰"
  }, {
    names: ["notebook"],
    surrogates: "📓"
  }, {
    names: ["closed_book"],
    surrogates: "📕"
  }, {
    names: ["green_book"],
    surrogates: "📗"
  }, {
    names: ["blue_book"],
    surrogates: "📘"
  }, {
    names: ["orange_book"],
    surrogates: "📙"
  }, {
    names: ["notebook_with_decorative_cover"],
    surrogates: "📔"
  }, {
    names: ["ledger"],
    surrogates: "📒"
  }, {
    names: ["books"],
    surrogates: "📚"
  }, {
    names: ["book"],
    surrogates: "📖"
  }, {
    names: ["link"],
    surrogates: "🔗"
  }, {
    names: ["paperclip"],
    surrogates: "📎"
  }, {
    names: ["paperclips", "linked_paperclips"],
    surrogates: "🖇"
  }, {
    names: ["scissors"],
    surrogates: "✂"
  }, {
    names: ["triangular_ruler"],
    surrogates: "📐"
  }, {
    names: ["straight_ruler"],
    surrogates: "📏"
  }, {
    names: ["pushpin"],
    surrogates: "📌"
  }, {
    names: ["round_pushpin"],
    surrogates: "📍"
  }, {
    names: ["triangular_flag_on_post"],
    surrogates: "🚩"
  }, {
    names: ["flag_white"],
    surrogates: "🏳"
  }, {
    names: ["flag_black"],
    surrogates: "🏴"
  }, {
    names: ["closed_lock_with_key"],
    surrogates: "🔐"
  }, {
    names: ["lock"],
    surrogates: "🔒"
  }, {
    names: ["unlock"],
    surrogates: "🔓"
  }, {
    names: ["lock_with_ink_pen"],
    surrogates: "🔏"
  }, {
    names: ["pen_ballpoint", "lower_left_ballpoint_pen"],
    surrogates: "🖊"
  }, {
    names: ["pen_fountain", "lower_left_fountain_pen"],
    surrogates: "🖋"
  }, {
    names: ["black_nib"],
    surrogates: "✒"
  }, {
    names: ["pencil"],
    surrogates: "📝"
  }, {
    names: ["pencil2"],
    surrogates: "✏"
  }, {
    names: ["crayon", "lower_left_crayon"],
    surrogates: "🖍"
  }, {
    names: ["paintbrush", "lower_left_paintbrush"],
    surrogates: "🖌"
  }, {
    names: ["mag"],
    surrogates: "🔍"
  }, {
    names: ["mag_right"],
    surrogates: "🔎"
  }, {
    names: ["shopping_cart", "shopping_trolley"],
    surrogates: "🛒"
  }],
  symbols: [{
    names: ["100"],
    surrogates: "💯"
  }, {
    names: ["1234"],
    surrogates: "🔢"
  }, {
    names: ["heart"],
    surrogates: "❤"
  }, {
    names: ["yellow_heart"],
    surrogates: "💛"
  }, {
    names: ["green_heart"],
    surrogates: "💚"
  }, {
    names: ["blue_heart"],
    surrogates: "💙"
  }, {
    names: ["purple_heart"],
    surrogates: "💜"
  }, {
    names: ["broken_heart"],
    surrogates: "💔"
  }, {
    names: ["heart_exclamation", "heavy_heart_exclamation_mark_ornament"],
    surrogates: "❣"
  }, {
    names: ["two_hearts"],
    surrogates: "💕"
  }, {
    names: ["revolving_hearts"],
    surrogates: "💞"
  }, {
    names: ["heartbeat"],
    surrogates: "💓"
  }, {
    names: ["heartpulse"],
    surrogates: "💗"
  }, {
    names: ["sparkling_heart"],
    surrogates: "💖"
  }, {
    names: ["cupid"],
    surrogates: "💘"
  }, {
    names: ["gift_heart"],
    surrogates: "💝"
  }, {
    names: ["heart_decoration"],
    surrogates: "💟"
  }, {
    names: ["peace", "peace_symbol"],
    surrogates: "☮"
  }, {
    names: ["cross", "latin_cross"],
    surrogates: "✝"
  }, {
    names: ["star_and_crescent"],
    surrogates: "☪"
  }, {
    names: ["om_symbol"],
    surrogates: "🕉"
  }, {
    names: ["wheel_of_dharma"],
    surrogates: "☸"
  }, {
    names: ["star_of_david"],
    surrogates: "✡"
  }, {
    names: ["six_pointed_star"],
    surrogates: "🔯"
  }, {
    names: ["menorah"],
    surrogates: "🕎"
  }, {
    names: ["yin_yang"],
    surrogates: "☯"
  }, {
    names: ["orthodox_cross"],
    surrogates: "☦"
  }, {
    names: ["place_of_worship", "worship_symbol"],
    surrogates: "🛐"
  }, {
    names: ["ophiuchus"],
    surrogates: "⛎"
  }, {
    names: ["aries"],
    surrogates: "♈"
  }, {
    names: ["taurus"],
    surrogates: "♉"
  }, {
    names: ["gemini"],
    surrogates: "♊"
  }, {
    names: ["cancer"],
    surrogates: "♋"
  }, {
    names: ["leo"],
    surrogates: "♌"
  }, {
    names: ["virgo"],
    surrogates: "♍"
  }, {
    names: ["libra"],
    surrogates: "♎"
  }, {
    names: ["scorpius"],
    surrogates: "♏"
  }, {
    names: ["sagittarius"],
    surrogates: "♐"
  }, {
    names: ["capricorn"],
    surrogates: "♑"
  }, {
    names: ["aquarius"],
    surrogates: "♒"
  }, {
    names: ["pisces"],
    surrogates: "♓"
  }, {
    names: ["id"],
    surrogates: "🆔"
  }, {
    names: ["atom", "atom_symbol"],
    surrogates: "⚛"
  }, {
    names: ["u7a7a"],
    surrogates: "🈳"
  }, {
    names: ["u5272"],
    surrogates: "🈹"
  }, {
    names: ["radioactive", "radioactive_sign"],
    surrogates: "☢"
  }, {
    names: ["biohazard", "biohazard_sign"],
    surrogates: "☣"
  }, {
    names: ["mobile_phone_off"],
    surrogates: "📴"
  }, {
    names: ["vibration_mode"],
    surrogates: "📳"
  }, {
    names: ["u6709"],
    surrogates: "🈶"
  }, {
    names: ["u7121"],
    surrogates: "🈚"
  }, {
    names: ["u7533"],
    surrogates: "🈸"
  }, {
    names: ["u55b6"],
    surrogates: "🈺"
  }, {
    names: ["u6708"],
    surrogates: "🈷"
  }, {
    names: ["eight_pointed_black_star"],
    surrogates: "✴"
  }, {
    names: ["vs"],
    surrogates: "🆚"
  }, {
    names: ["accept"],
    surrogates: "🉑"
  }, {
    names: ["white_flower"],
    surrogates: "💮"
  }, {
    names: ["ideograph_advantage"],
    surrogates: "🉐"
  }, {
    names: ["secret"],
    surrogates: "㊙"
  }, {
    names: ["congratulations"],
    surrogates: "㊗"
  }, {
    names: ["u5408"],
    surrogates: "🈴"
  }, {
    names: ["u6e80"],
    surrogates: "🈵"
  }, {
    names: ["u7981"],
    surrogates: "🈲"
  }, {
    names: ["a"],
    surrogates: "🅰"
  }, {
    names: ["b"],
    surrogates: "🅱"
  }, {
    names: ["ab"],
    surrogates: "🆎"
  }, {
    names: ["cl"],
    surrogates: "🆑"
  }, {
    names: ["o2"],
    surrogates: "🅾"
  }, {
    names: ["sos"],
    surrogates: "🆘"
  }, {
    names: ["no_entry"],
    surrogates: "⛔"
  }, {
    names: ["name_badge"],
    surrogates: "📛"
  }, {
    names: ["no_entry_sign"],
    surrogates: "🚫"
  }, {
    names: ["x"],
    surrogates: "❌"
  }, {
    names: ["o"],
    surrogates: "⭕"
  }, {
    names: ["anger"],
    surrogates: "💢"
  }, {
    names: ["hotsprings"],
    surrogates: "♨"
  }, {
    names: ["no_pedestrians"],
    surrogates: "🚷"
  }, {
    names: ["do_not_litter"],
    surrogates: "🚯"
  }, {
    names: ["no_bicycles"],
    surrogates: "🚳"
  }, {
    names: ["non_potable_water"],
    surrogates: "🚱"
  }, {
    names: ["underage"],
    surrogates: "🔞"
  }, {
    names: ["no_mobile_phones"],
    surrogates: "📵"
  }, {
    names: ["exclamation"],
    surrogates: "❗"
  }, {
    names: ["grey_exclamation"],
    surrogates: "❕"
  }, {
    names: ["question"],
    surrogates: "❓"
  }, {
    names: ["grey_question"],
    surrogates: "❔"
  }, {
    names: ["bangbang"],
    surrogates: "‼"
  }, {
    names: ["interrobang"],
    surrogates: "⁉"
  }, {
    names: ["low_brightness"],
    surrogates: "🔅"
  }, {
    names: ["high_brightness"],
    surrogates: "🔆"
  }, {
    names: ["trident"],
    surrogates: "🔱"
  }, {
    names: ["fleur_de_lis"],
    surrogates: "⚜"
  }, {
    names: ["part_alternation_mark"],
    surrogates: "〽"
  }, {
    names: ["warning"],
    surrogates: "⚠"
  }, {
    names: ["children_crossing"],
    surrogates: "🚸"
  }, {
    names: ["beginner"],
    surrogates: "🔰"
  }, {
    names: ["recycle"],
    surrogates: "♻"
  }, {
    names: ["u6307"],
    surrogates: "🈯"
  }, {
    names: ["chart"],
    surrogates: "💹"
  }, {
    names: ["sparkle"],
    surrogates: "❇"
  }, {
    names: ["eight_spoked_asterisk"],
    surrogates: "✳"
  }, {
    names: ["negative_squared_cross_mark"],
    surrogates: "❎"
  }, {
    names: ["white_check_mark"],
    surrogates: "✅"
  }, {
    names: ["diamond_shape_with_a_dot_inside"],
    surrogates: "💠"
  }, {
    names: ["cyclone"],
    surrogates: "🌀"
  }, {
    names: ["loop"],
    surrogates: "➿"
  }, {
    names: ["globe_with_meridians"],
    surrogates: "🌐"
  }, {
    names: ["m"],
    surrogates: "Ⓜ"
  }, {
    names: ["atm"],
    surrogates: "🏧"
  }, {
    names: ["sa"],
    surrogates: "🈂"
  }, {
    names: ["passport_control"],
    surrogates: "🛂"
  }, {
    names: ["customs"],
    surrogates: "🛃"
  }, {
    names: ["baggage_claim"],
    surrogates: "🛄"
  }, {
    names: ["left_luggage"],
    surrogates: "🛅"
  }, {
    names: ["wheelchair"],
    surrogates: "♿"
  }, {
    names: ["no_smoking"],
    surrogates: "🚭"
  }, {
    names: ["wc"],
    surrogates: "🚾"
  }, {
    names: ["parking"],
    surrogates: "🅿"
  }, {
    names: ["potable_water"],
    surrogates: "🚰"
  }, {
    names: ["mens"],
    surrogates: "🚹"
  }, {
    names: ["womens"],
    surrogates: "🚺"
  }, {
    names: ["baby_symbol"],
    surrogates: "🚼"
  }, {
    names: ["restroom"],
    surrogates: "🚻"
  }, {
    names: ["put_litter_in_its_place"],
    surrogates: "🚮"
  }, {
    names: ["cinema"],
    surrogates: "🎦"
  }, {
    names: ["signal_strength"],
    surrogates: "📶"
  }, {
    names: ["koko"],
    surrogates: "🈁"
  }, {
    names: ["ng"],
    surrogates: "🆖"
  }, {
    names: ["ok"],
    surrogates: "🆗"
  }, {
    names: ["up"],
    surrogates: "🆙"
  }, {
    names: ["cool"],
    surrogates: "🆒"
  }, {
    names: ["new"],
    surrogates: "🆕"
  }, {
    names: ["free"],
    surrogates: "🆓"
  }, {
    names: ["zero"],
    surrogates: "0⃣"
  }, {
    names: ["one"],
    surrogates: "1⃣"
  }, {
    names: ["two"],
    surrogates: "2⃣"
  }, {
    names: ["three"],
    surrogates: "3⃣"
  }, {
    names: ["four"],
    surrogates: "4⃣"
  }, {
    names: ["five"],
    surrogates: "5⃣"
  }, {
    names: ["six"],
    surrogates: "6⃣"
  }, {
    names: ["seven"],
    surrogates: "7⃣"
  }, {
    names: ["eight"],
    surrogates: "8⃣"
  }, {
    names: ["nine"],
    surrogates: "9⃣"
  }, {
    names: ["keycap_ten"],
    surrogates: "🔟"
  }, {
    names: ["arrow_forward"],
    surrogates: "▶"
  }, {
    names: ["pause_button", "double_vertical_bar"],
    surrogates: "⏸"
  }, {
    names: ["play_pause"],
    surrogates: "⏯"
  }, {
    names: ["stop_button"],
    surrogates: "⏹"
  }, {
    names: ["record_button"],
    surrogates: "⏺"
  }, {
    names: ["track_next", "next_track"],
    surrogates: "⏭"
  }, {
    names: ["track_previous", "previous_track"],
    surrogates: "⏮"
  }, {
    names: ["fast_forward"],
    surrogates: "⏩"
  }, {
    names: ["rewind"],
    surrogates: "⏪"
  }, {
    names: ["twisted_rightwards_arrows"],
    surrogates: "🔀"
  }, {
    names: ["repeat"],
    surrogates: "🔁"
  }, {
    names: ["repeat_one"],
    surrogates: "🔂"
  }, {
    names: ["arrow_backward"],
    surrogates: "◀"
  }, {
    names: ["arrow_up_small"],
    surrogates: "🔼"
  }, {
    names: ["arrow_down_small"],
    surrogates: "🔽"
  }, {
    names: ["arrow_double_up"],
    surrogates: "⏫"
  }, {
    names: ["arrow_double_down"],
    surrogates: "⏬"
  }, {
    names: ["arrow_right"],
    surrogates: "➡"
  }, {
    names: ["arrow_left"],
    surrogates: "⬅"
  }, {
    names: ["arrow_up"],
    surrogates: "⬆"
  }, {
    names: ["arrow_down"],
    surrogates: "⬇"
  }, {
    names: ["arrow_upper_right"],
    surrogates: "↗"
  }, {
    names: ["arrow_lower_right"],
    surrogates: "↘"
  }, {
    names: ["arrow_lower_left"],
    surrogates: "↙"
  }, {
    names: ["arrow_upper_left"],
    surrogates: "↖"
  }, {
    names: ["arrow_up_down"],
    surrogates: "↕"
  }, {
    names: ["left_right_arrow"],
    surrogates: "↔"
  }, {
    names: ["arrows_counterclockwise"],
    surrogates: "🔄"
  }, {
    names: ["arrow_right_hook"],
    surrogates: "↪"
  }, {
    names: ["leftwards_arrow_with_hook"],
    surrogates: "↩"
  }, {
    names: ["arrow_heading_up"],
    surrogates: "⤴"
  }, {
    names: ["arrow_heading_down"],
    surrogates: "⤵"
  }, {
    names: ["hash"],
    surrogates: "#⃣"
  }, {
    names: ["asterisk", "keycap_asterisk"],
    surrogates: "*⃣"
  }, {
    names: ["information_source"],
    surrogates: "ℹ"
  }, {
    names: ["abc"],
    surrogates: "🔤"
  }, {
    names: ["abcd"],
    surrogates: "🔡"
  }, {
    names: ["capital_abcd"],
    surrogates: "🔠"
  }, {
    names: ["symbols"],
    surrogates: "🔣"
  }, {
    names: ["musical_note"],
    surrogates: "🎵"
  }, {
    names: ["notes"],
    surrogates: "🎶"
  }, {
    names: ["wavy_dash"],
    surrogates: "〰"
  }, {
    names: ["curly_loop"],
    surrogates: "➰"
  }, {
    names: ["heavy_check_mark"],
    surrogates: "✔"
  }, {
    names: ["arrows_clockwise"],
    surrogates: "🔃"
  }, {
    names: ["heavy_plus_sign"],
    surrogates: "➕"
  }, {
    names: ["heavy_minus_sign"],
    surrogates: "➖"
  }, {
    names: ["heavy_division_sign"],
    surrogates: "➗"
  }, {
    names: ["heavy_multiplication_x"],
    surrogates: "✖"
  }, {
    names: ["heavy_dollar_sign"],
    surrogates: "💲"
  }, {
    names: ["currency_exchange"],
    surrogates: "💱"
  }, {
    names: ["copyright"],
    surrogates: "©"
  }, {
    names: ["registered"],
    surrogates: "®"
  }, {
    names: ["tm"],
    surrogates: "™"
  }, {
    names: ["end"],
    surrogates: "🔚"
  }, {
    names: ["back"],
    surrogates: "🔙"
  }, {
    names: ["on"],
    surrogates: "🔛"
  }, {
    names: ["top"],
    surrogates: "🔝"
  }, {
    names: ["soon"],
    surrogates: "🔜"
  }, {
    names: ["ballot_box_with_check"],
    surrogates: "☑"
  }, {
    names: ["radio_button"],
    surrogates: "🔘"
  }, {
    names: ["white_circle"],
    surrogates: "⚪"
  }, {
    names: ["black_circle"],
    surrogates: "⚫"
  }, {
    names: ["red_circle"],
    surrogates: "🔴"
  }, {
    names: ["large_blue_circle"],
    surrogates: "🔵"
  }, {
    names: ["small_orange_diamond"],
    surrogates: "🔸"
  }, {
    names: ["small_blue_diamond"],
    surrogates: "🔹"
  }, {
    names: ["large_orange_diamond"],
    surrogates: "🔶"
  }, {
    names: ["large_blue_diamond"],
    surrogates: "🔷"
  }, {
    names: ["small_red_triangle"],
    surrogates: "🔺"
  }, {
    names: ["black_small_square"],
    surrogates: "▪"
  }, {
    names: ["white_small_square"],
    surrogates: "▫"
  }, {
    names: ["black_large_square"],
    surrogates: "⬛"
  }, {
    names: ["white_large_square"],
    surrogates: "⬜"
  }, {
    names: ["small_red_triangle_down"],
    surrogates: "🔻"
  }, {
    names: ["black_medium_square"],
    surrogates: "◼"
  }, {
    names: ["white_medium_square"],
    surrogates: "◻"
  }, {
    names: ["black_medium_small_square"],
    surrogates: "◾"
  }, {
    names: ["white_medium_small_square"],
    surrogates: "◽"
  }, {
    names: ["black_square_button"],
    surrogates: "🔲"
  }, {
    names: ["white_square_button"],
    surrogates: "🔳"
  }, {
    names: ["speaker"],
    surrogates: "🔈"
  }, {
    names: ["sound"],
    surrogates: "🔉"
  }, {
    names: ["loud_sound"],
    surrogates: "🔊"
  }, {
    names: ["mute"],
    surrogates: "🔇"
  }, {
    names: ["mega"],
    surrogates: "📣"
  }, {
    names: ["loudspeaker"],
    surrogates: "📢"
  }, {
    names: ["bell"],
    surrogates: "🔔"
  }, {
    names: ["no_bell"],
    surrogates: "🔕"
  }, {
    names: ["black_joker"],
    surrogates: "🃏"
  }, {
    names: ["mahjong"],
    surrogates: "🀄"
  }, {
    names: ["spades"],
    surrogates: "♠"
  }, {
    names: ["clubs"],
    surrogates: "♣"
  }, {
    names: ["hearts"],
    surrogates: "♥"
  }, {
    names: ["diamonds"],
    surrogates: "♦"
  }, {
    names: ["flower_playing_cards"],
    surrogates: "🎴"
  }, {
    names: ["thought_balloon"],
    surrogates: "💭"
  }, {
    names: ["anger_right", "right_anger_bubble"],
    surrogates: "🗯"
  }, {
    names: ["speech_balloon"],
    surrogates: "💬"
  }, {
    names: ["clock1"],
    surrogates: "🕐"
  }, {
    names: ["clock2"],
    surrogates: "🕑"
  }, {
    names: ["clock3"],
    surrogates: "🕒"
  }, {
    names: ["clock4"],
    surrogates: "🕓"
  }, {
    names: ["clock5"],
    surrogates: "🕔"
  }, {
    names: ["clock6"],
    surrogates: "🕕"
  }, {
    names: ["clock7"],
    surrogates: "🕖"
  }, {
    names: ["clock8"],
    surrogates: "🕗"
  }, {
    names: ["clock9"],
    surrogates: "🕘"
  }, {
    names: ["clock10"],
    surrogates: "🕙"
  }, {
    names: ["clock11"],
    surrogates: "🕚"
  }, {
    names: ["clock12"],
    surrogates: "🕛"
  }, {
    names: ["clock130"],
    surrogates: "🕜"
  }, {
    names: ["clock230"],
    surrogates: "🕝"
  }, {
    names: ["clock330"],
    surrogates: "🕞"
  }, {
    names: ["clock430"],
    surrogates: "🕟"
  }, {
    names: ["clock530"],
    surrogates: "🕠"
  }, {
    names: ["clock630"],
    surrogates: "🕡"
  }, {
    names: ["clock730"],
    surrogates: "🕢"
  }, {
    names: ["clock830"],
    surrogates: "🕣"
  }, {
    names: ["clock930"],
    surrogates: "🕤"
  }, {
    names: ["clock1030"],
    surrogates: "🕥"
  }, {
    names: ["clock1130"],
    surrogates: "🕦"
  }, {
    names: ["clock1230"],
    surrogates: "🕧"
  }, {
    names: ["eye_in_speech_bubble"],
    surrogates: "👁‍🗨"
  }, {
    names: ["speech_left", "left_speech_bubble"],
    surrogates: "🗨"
  }, {
    names: ["eject", "eject_symbol"],
    surrogates: "⏏"
  }, {
    names: ["black_heart"],
    surrogates: "🖤"
  }, {
    names: ["octagonal_sign", "stop_sign"],
    surrogates: "🛑"
  }, {
    names: ["regional_indicator_z"],
    surrogates: "🇿"
  }, {
    names: ["regional_indicator_y"],
    surrogates: "🇾"
  }, {
    names: ["regional_indicator_x"],
    surrogates: "🇽"
  }, {
    names: ["regional_indicator_w"],
    surrogates: "🇼"
  }, {
    names: ["regional_indicator_v"],
    surrogates: "🇻"
  }, {
    names: ["regional_indicator_u"],
    surrogates: "🇺"
  }, {
    names: ["regional_indicator_t"],
    surrogates: "🇹"
  }, {
    names: ["regional_indicator_s"],
    surrogates: "🇸"
  }, {
    names: ["regional_indicator_r"],
    surrogates: "🇷"
  }, {
    names: ["regional_indicator_q"],
    surrogates: "🇶"
  }, {
    names: ["regional_indicator_p"],
    surrogates: "🇵"
  }, {
    names: ["regional_indicator_o"],
    surrogates: "🇴"
  }, {
    names: ["regional_indicator_n"],
    surrogates: "🇳"
  }, {
    names: ["regional_indicator_m"],
    surrogates: "🇲"
  }, {
    names: ["regional_indicator_l"],
    surrogates: "🇱"
  }, {
    names: ["regional_indicator_k"],
    surrogates: "🇰"
  }, {
    names: ["regional_indicator_j"],
    surrogates: "🇯"
  }, {
    names: ["regional_indicator_i"],
    surrogates: "🇮"
  }, {
    names: ["regional_indicator_h"],
    surrogates: "🇭"
  }, {
    names: ["regional_indicator_g"],
    surrogates: "🇬"
  }, {
    names: ["regional_indicator_f"],
    surrogates: "🇫"
  }, {
    names: ["regional_indicator_e"],
    surrogates: "🇪"
  }, {
    names: ["regional_indicator_d"],
    surrogates: "🇩"
  }, {
    names: ["regional_indicator_c"],
    surrogates: "🇨"
  }, {
    names: ["regional_indicator_b"],
    surrogates: "🇧"
  }, {
    names: ["regional_indicator_a"],
    surrogates: "🇦"
  }],
  flags: [{
    names: ["flag_ac"],
    surrogates: "🇦🇨"
  }, {
    names: ["flag_af"],
    surrogates: "🇦🇫"
  }, {
    names: ["flag_al"],
    surrogates: "🇦🇱"
  }, {
    names: ["flag_dz"],
    surrogates: "🇩🇿"
  }, {
    names: ["flag_ad"],
    surrogates: "🇦🇩"
  }, {
    names: ["flag_ao"],
    surrogates: "🇦🇴"
  }, {
    names: ["flag_ai"],
    surrogates: "🇦🇮"
  }, {
    names: ["flag_ag"],
    surrogates: "🇦🇬"
  }, {
    names: ["flag_ar"],
    surrogates: "🇦🇷"
  }, {
    names: ["flag_am"],
    surrogates: "🇦🇲"
  }, {
    names: ["flag_aw"],
    surrogates: "🇦🇼"
  }, {
    names: ["flag_au"],
    surrogates: "🇦🇺"
  }, {
    names: ["flag_at"],
    surrogates: "🇦🇹"
  }, {
    names: ["flag_az"],
    surrogates: "🇦🇿"
  }, {
    names: ["flag_bs"],
    surrogates: "🇧🇸"
  }, {
    names: ["flag_bh"],
    surrogates: "🇧🇭"
  }, {
    names: ["flag_bd"],
    surrogates: "🇧🇩"
  }, {
    names: ["flag_bb"],
    surrogates: "🇧🇧"
  }, {
    names: ["flag_by"],
    surrogates: "🇧🇾"
  }, {
    names: ["flag_be"],
    surrogates: "🇧🇪"
  }, {
    names: ["flag_bz"],
    surrogates: "🇧🇿"
  }, {
    names: ["flag_bj"],
    surrogates: "🇧🇯"
  }, {
    names: ["flag_bm"],
    surrogates: "🇧🇲"
  }, {
    names: ["flag_bt"],
    surrogates: "🇧🇹"
  }, {
    names: ["flag_bo"],
    surrogates: "🇧🇴"
  }, {
    names: ["flag_ba"],
    surrogates: "🇧🇦"
  }, {
    names: ["flag_bw"],
    surrogates: "🇧🇼"
  }, {
    names: ["flag_br"],
    surrogates: "🇧🇷"
  }, {
    names: ["flag_bn"],
    surrogates: "🇧🇳"
  }, {
    names: ["flag_bg"],
    surrogates: "🇧🇬"
  }, {
    names: ["flag_bf"],
    surrogates: "🇧🇫"
  }, {
    names: ["flag_bi"],
    surrogates: "🇧🇮"
  }, {
    names: ["flag_cv"],
    surrogates: "🇨🇻"
  }, {
    names: ["flag_kh"],
    surrogates: "🇰🇭"
  }, {
    names: ["flag_cm"],
    surrogates: "🇨🇲"
  }, {
    names: ["flag_ca"],
    surrogates: "🇨🇦"
  }, {
    names: ["flag_ky"],
    surrogates: "🇰🇾"
  }, {
    names: ["flag_cf"],
    surrogates: "🇨🇫"
  }, {
    names: ["flag_td"],
    surrogates: "🇹🇩"
  }, {
    names: ["flag_cl"],
    surrogates: "🇨🇱"
  }, {
    names: ["flag_cn"],
    surrogates: "🇨🇳"
  }, {
    names: ["flag_co"],
    surrogates: "🇨🇴"
  }, {
    names: ["flag_km"],
    surrogates: "🇰🇲"
  }, {
    names: ["flag_cg"],
    surrogates: "🇨🇬"
  }, {
    names: ["flag_cd"],
    surrogates: "🇨🇩"
  }, {
    names: ["flag_cr"],
    surrogates: "🇨🇷"
  }, {
    names: ["flag_hr"],
    surrogates: "🇭🇷"
  }, {
    names: ["flag_cu"],
    surrogates: "🇨🇺"
  }, {
    names: ["flag_cy"],
    surrogates: "🇨🇾"
  }, {
    names: ["flag_cz"],
    surrogates: "🇨🇿"
  }, {
    names: ["flag_dk"],
    surrogates: "🇩🇰"
  }, {
    names: ["flag_dj"],
    surrogates: "🇩🇯"
  }, {
    names: ["flag_dm"],
    surrogates: "🇩🇲"
  }, {
    names: ["flag_do"],
    surrogates: "🇩🇴"
  }, {
    names: ["flag_ec"],
    surrogates: "🇪🇨"
  }, {
    names: ["flag_eg"],
    surrogates: "🇪🇬"
  }, {
    names: ["flag_sv"],
    surrogates: "🇸🇻"
  }, {
    names: ["flag_gq"],
    surrogates: "🇬🇶"
  }, {
    names: ["flag_er"],
    surrogates: "🇪🇷"
  }, {
    names: ["flag_ee"],
    surrogates: "🇪🇪"
  }, {
    names: ["flag_et"],
    surrogates: "🇪🇹"
  }, {
    names: ["flag_fk"],
    surrogates: "🇫🇰"
  }, {
    names: ["flag_fo"],
    surrogates: "🇫🇴"
  }, {
    names: ["flag_fj"],
    surrogates: "🇫🇯"
  }, {
    names: ["flag_fi"],
    surrogates: "🇫🇮"
  }, {
    names: ["flag_fr"],
    surrogates: "🇫🇷"
  }, {
    names: ["flag_pf"],
    surrogates: "🇵🇫"
  }, {
    names: ["flag_ga"],
    surrogates: "🇬🇦"
  }, {
    names: ["flag_gm"],
    surrogates: "🇬🇲"
  }, {
    names: ["flag_ge"],
    surrogates: "🇬🇪"
  }, {
    names: ["flag_de"],
    surrogates: "🇩🇪"
  }, {
    names: ["flag_gh"],
    surrogates: "🇬🇭"
  }, {
    names: ["flag_gi"],
    surrogates: "🇬🇮"
  }, {
    names: ["flag_gr"],
    surrogates: "🇬🇷"
  }, {
    names: ["flag_gl"],
    surrogates: "🇬🇱"
  }, {
    names: ["flag_gd"],
    surrogates: "🇬🇩"
  }, {
    names: ["flag_gu"],
    surrogates: "🇬🇺"
  }, {
    names: ["flag_gt"],
    surrogates: "🇬🇹"
  }, {
    names: ["flag_gn"],
    surrogates: "🇬🇳"
  }, {
    names: ["flag_gw"],
    surrogates: "🇬🇼"
  }, {
    names: ["flag_gy"],
    surrogates: "🇬🇾"
  }, {
    names: ["flag_ht"],
    surrogates: "🇭🇹"
  }, {
    names: ["flag_hn"],
    surrogates: "🇭🇳"
  }, {
    names: ["flag_hk"],
    surrogates: "🇭🇰"
  }, {
    names: ["flag_hu"],
    surrogates: "🇭🇺"
  }, {
    names: ["flag_is"],
    surrogates: "🇮🇸"
  }, {
    names: ["flag_in"],
    surrogates: "🇮🇳"
  }, {
    names: ["flag_id"],
    surrogates: "🇮🇩"
  }, {
    names: ["flag_ir"],
    surrogates: "🇮🇷"
  }, {
    names: ["flag_iq"],
    surrogates: "🇮🇶"
  }, {
    names: ["flag_ie"],
    surrogates: "🇮🇪"
  }, {
    names: ["flag_il"],
    surrogates: "🇮🇱"
  }, {
    names: ["flag_it"],
    surrogates: "🇮🇹"
  }, {
    names: ["flag_ci"],
    surrogates: "🇨🇮"
  }, {
    names: ["flag_jm"],
    surrogates: "🇯🇲"
  }, {
    names: ["flag_jp"],
    surrogates: "🇯🇵"
  }, {
    names: ["flag_je"],
    surrogates: "🇯🇪"
  }, {
    names: ["flag_jo"],
    surrogates: "🇯🇴"
  }, {
    names: ["flag_kz"],
    surrogates: "🇰🇿"
  }, {
    names: ["flag_ke"],
    surrogates: "🇰🇪"
  }, {
    names: ["flag_ki"],
    surrogates: "🇰🇮"
  }, {
    names: ["flag_xk"],
    surrogates: "🇽🇰"
  }, {
    names: ["flag_kw"],
    surrogates: "🇰🇼"
  }, {
    names: ["flag_kg"],
    surrogates: "🇰🇬"
  }, {
    names: ["flag_la"],
    surrogates: "🇱🇦"
  }, {
    names: ["flag_lv"],
    surrogates: "🇱🇻"
  }, {
    names: ["flag_lb"],
    surrogates: "🇱🇧"
  }, {
    names: ["flag_ls"],
    surrogates: "🇱🇸"
  }, {
    names: ["flag_lr"],
    surrogates: "🇱🇷"
  }, {
    names: ["flag_ly"],
    surrogates: "🇱🇾"
  }, {
    names: ["flag_li"],
    surrogates: "🇱🇮"
  }, {
    names: ["flag_lt"],
    surrogates: "🇱🇹"
  }, {
    names: ["flag_lu"],
    surrogates: "🇱🇺"
  }, {
    names: ["flag_mo"],
    surrogates: "🇲🇴"
  }, {
    names: ["flag_mk"],
    surrogates: "🇲🇰"
  }, {
    names: ["flag_mg"],
    surrogates: "🇲🇬"
  }, {
    names: ["flag_mw"],
    surrogates: "🇲🇼"
  }, {
    names: ["flag_my"],
    surrogates: "🇲🇾"
  }, {
    names: ["flag_mv"],
    surrogates: "🇲🇻"
  }, {
    names: ["flag_ml"],
    surrogates: "🇲🇱"
  }, {
    names: ["flag_mt"],
    surrogates: "🇲🇹"
  }, {
    names: ["flag_mh"],
    surrogates: "🇲🇭"
  }, {
    names: ["flag_mr"],
    surrogates: "🇲🇷"
  }, {
    names: ["flag_mu"],
    surrogates: "🇲🇺"
  }, {
    names: ["flag_mx"],
    surrogates: "🇲🇽"
  }, {
    names: ["flag_fm"],
    surrogates: "🇫🇲"
  }, {
    names: ["flag_md"],
    surrogates: "🇲🇩"
  }, {
    names: ["flag_mc"],
    surrogates: "🇲🇨"
  }, {
    names: ["flag_mn"],
    surrogates: "🇲🇳"
  }, {
    names: ["flag_me"],
    surrogates: "🇲🇪"
  }, {
    names: ["flag_ms"],
    surrogates: "🇲🇸"
  }, {
    names: ["flag_ma"],
    surrogates: "🇲🇦"
  }, {
    names: ["flag_mz"],
    surrogates: "🇲🇿"
  }, {
    names: ["flag_mm"],
    surrogates: "🇲🇲"
  }, {
    names: ["flag_na"],
    surrogates: "🇳🇦"
  }, {
    names: ["flag_nr"],
    surrogates: "🇳🇷"
  }, {
    names: ["flag_np"],
    surrogates: "🇳🇵"
  }, {
    names: ["flag_nl"],
    surrogates: "🇳🇱"
  }, {
    names: ["flag_nc"],
    surrogates: "🇳🇨"
  }, {
    names: ["flag_nz"],
    surrogates: "🇳🇿"
  }, {
    names: ["flag_ni"],
    surrogates: "🇳🇮"
  }, {
    names: ["flag_ne"],
    surrogates: "🇳🇪"
  }, {
    names: ["flag_ng"],
    surrogates: "🇳🇬"
  }, {
    names: ["flag_nu"],
    surrogates: "🇳🇺"
  }, {
    names: ["flag_kp"],
    surrogates: "🇰🇵"
  }, {
    names: ["flag_no"],
    surrogates: "🇳🇴"
  }, {
    names: ["flag_om"],
    surrogates: "🇴🇲"
  }, {
    names: ["flag_pk"],
    surrogates: "🇵🇰"
  }, {
    names: ["flag_pw"],
    surrogates: "🇵🇼"
  }, {
    names: ["flag_ps"],
    surrogates: "🇵🇸"
  }, {
    names: ["flag_pa"],
    surrogates: "🇵🇦"
  }, {
    names: ["flag_pg"],
    surrogates: "🇵🇬"
  }, {
    names: ["flag_py"],
    surrogates: "🇵🇾"
  }, {
    names: ["flag_pe"],
    surrogates: "🇵🇪"
  }, {
    names: ["flag_ph"],
    surrogates: "🇵🇭"
  }, {
    names: ["flag_pl"],
    surrogates: "🇵🇱"
  }, {
    names: ["flag_pt"],
    surrogates: "🇵🇹"
  }, {
    names: ["flag_pr"],
    surrogates: "🇵🇷"
  }, {
    names: ["flag_qa"],
    surrogates: "🇶🇦"
  }, {
    names: ["flag_ro"],
    surrogates: "🇷🇴"
  }, {
    names: ["flag_ru"],
    surrogates: "🇷🇺"
  }, {
    names: ["flag_rw"],
    surrogates: "🇷🇼"
  }, {
    names: ["flag_sh"],
    surrogates: "🇸🇭"
  }, {
    names: ["flag_kn"],
    surrogates: "🇰🇳"
  }, {
    names: ["flag_lc"],
    surrogates: "🇱🇨"
  }, {
    names: ["flag_vc"],
    surrogates: "🇻🇨"
  }, {
    names: ["flag_ws"],
    surrogates: "🇼🇸"
  }, {
    names: ["flag_sm"],
    surrogates: "🇸🇲"
  }, {
    names: ["flag_st"],
    surrogates: "🇸🇹"
  }, {
    names: ["flag_sa"],
    surrogates: "🇸🇦"
  }, {
    names: ["flag_sn"],
    surrogates: "🇸🇳"
  }, {
    names: ["flag_rs"],
    surrogates: "🇷🇸"
  }, {
    names: ["flag_sc"],
    surrogates: "🇸🇨"
  }, {
    names: ["flag_sl"],
    surrogates: "🇸🇱"
  }, {
    names: ["flag_sg"],
    surrogates: "🇸🇬"
  }, {
    names: ["flag_sk"],
    surrogates: "🇸🇰"
  }, {
    names: ["flag_si"],
    surrogates: "🇸🇮"
  }, {
    names: ["flag_sb"],
    surrogates: "🇸🇧"
  }, {
    names: ["flag_so"],
    surrogates: "🇸🇴"
  }, {
    names: ["flag_za"],
    surrogates: "🇿🇦"
  }, {
    names: ["flag_kr"],
    surrogates: "🇰🇷"
  }, {
    names: ["flag_es"],
    surrogates: "🇪🇸"
  }, {
    names: ["flag_lk"],
    surrogates: "🇱🇰"
  }, {
    names: ["flag_sd"],
    surrogates: "🇸🇩"
  }, {
    names: ["flag_sr"],
    surrogates: "🇸🇷"
  }, {
    names: ["flag_sz"],
    surrogates: "🇸🇿"
  }, {
    names: ["flag_se"],
    surrogates: "🇸🇪"
  }, {
    names: ["flag_ch"],
    surrogates: "🇨🇭"
  }, {
    names: ["flag_sy"],
    surrogates: "🇸🇾"
  }, {
    names: ["flag_tw"],
    surrogates: "🇹🇼"
  }, {
    names: ["flag_tj"],
    surrogates: "🇹🇯"
  }, {
    names: ["flag_tz"],
    surrogates: "🇹🇿"
  }, {
    names: ["flag_th"],
    surrogates: "🇹🇭"
  }, {
    names: ["flag_tl"],
    surrogates: "🇹🇱"
  }, {
    names: ["flag_tg"],
    surrogates: "🇹🇬"
  }, {
    names: ["flag_to"],
    surrogates: "🇹🇴"
  }, {
    names: ["flag_tt"],
    surrogates: "🇹🇹"
  }, {
    names: ["flag_tn"],
    surrogates: "🇹🇳"
  }, {
    names: ["flag_tr"],
    surrogates: "🇹🇷"
  }, {
    names: ["flag_tm"],
    surrogates: "🇹🇲"
  }, {
    names: ["flag_tv"],
    surrogates: "🇹🇻"
  }, {
    names: ["flag_ug"],
    surrogates: "🇺🇬"
  }, {
    names: ["flag_ua"],
    surrogates: "🇺🇦"
  }, {
    names: ["flag_ae"],
    surrogates: "🇦🇪"
  }, {
    names: ["flag_gb"],
    surrogates: "🇬🇧"
  }, {
    names: ["flag_us"],
    surrogates: "🇺🇸"
  }, {
    names: ["flag_vi"],
    surrogates: "🇻🇮"
  }, {
    names: ["flag_uy"],
    surrogates: "🇺🇾"
  }, {
    names: ["flag_uz"],
    surrogates: "🇺🇿"
  }, {
    names: ["flag_vu"],
    surrogates: "🇻🇺"
  }, {
    names: ["flag_va"],
    surrogates: "🇻🇦"
  }, {
    names: ["flag_ve"],
    surrogates: "🇻🇪"
  }, {
    names: ["flag_vn"],
    surrogates: "🇻🇳"
  }, {
    names: ["flag_wf"],
    surrogates: "🇼🇫"
  }, {
    names: ["flag_eh"],
    surrogates: "🇪🇭"
  }, {
    names: ["flag_ye"],
    surrogates: "🇾🇪"
  }, {
    names: ["flag_zm"],
    surrogates: "🇿🇲"
  }, {
    names: ["flag_zw"],
    surrogates: "🇿🇼"
  }, {
    names: ["flag_re"],
    surrogates: "🇷🇪"
  }, {
    names: ["flag_ax"],
    surrogates: "🇦🇽"
  }, {
    names: ["flag_ta"],
    surrogates: "🇹🇦"
  }, {
    names: ["flag_io"],
    surrogates: "🇮🇴"
  }, {
    names: ["flag_bq"],
    surrogates: "🇧🇶"
  }, {
    names: ["flag_cx"],
    surrogates: "🇨🇽"
  }, {
    names: ["flag_cc"],
    surrogates: "🇨🇨"
  }, {
    names: ["flag_gg"],
    surrogates: "🇬🇬"
  }, {
    names: ["flag_im"],
    surrogates: "🇮🇲"
  }, {
    names: ["flag_yt"],
    surrogates: "🇾🇹"
  }, {
    names: ["flag_nf"],
    surrogates: "🇳🇫"
  }, {
    names: ["flag_pn"],
    surrogates: "🇵🇳"
  }, {
    names: ["flag_bl"],
    surrogates: "🇧🇱"
  }, {
    names: ["flag_pm"],
    surrogates: "🇵🇲"
  }, {
    names: ["flag_gs"],
    surrogates: "🇬🇸"
  }, {
    names: ["flag_tk"],
    surrogates: "🇹🇰"
  }, {
    names: ["flag_bv"],
    surrogates: "🇧🇻"
  }, {
    names: ["flag_hm"],
    surrogates: "🇭🇲"
  }, {
    names: ["flag_sj"],
    surrogates: "🇸🇯"
  }, {
    names: ["flag_um"],
    surrogates: "🇺🇲"
  }, {
    names: ["flag_ic"],
    surrogates: "🇮🇨"
  }, {
    names: ["flag_ea"],
    surrogates: "🇪🇦"
  }, {
    names: ["flag_cp"],
    surrogates: "🇨🇵"
  }, {
    names: ["flag_dg"],
    surrogates: "🇩🇬"
  }, {
    names: ["flag_as"],
    surrogates: "🇦🇸"
  }, {
    names: ["flag_aq"],
    surrogates: "🇦🇶"
  }, {
    names: ["flag_vg"],
    surrogates: "🇻🇬"
  }, {
    names: ["flag_ck"],
    surrogates: "🇨🇰"
  }, {
    names: ["flag_cw"],
    surrogates: "🇨🇼"
  }, {
    names: ["flag_eu"],
    surrogates: "🇪🇺"
  }, {
    names: ["flag_gf"],
    surrogates: "🇬🇫"
  }, {
    names: ["flag_tf"],
    surrogates: "🇹🇫"
  }, {
    names: ["flag_gp"],
    surrogates: "🇬🇵"
  }, {
    names: ["flag_mq"],
    surrogates: "🇲🇶"
  }, {
    names: ["flag_mp"],
    surrogates: "🇲🇵"
  }, {
    names: ["flag_sx"],
    surrogates: "🇸🇽"
  }, {
    names: ["flag_ss"],
    surrogates: "🇸🇸"
  }, {
    names: ["flag_tc"],
    surrogates: "🇹🇨"
  }, {
    names: ["flag_mf"],
    surrogates: "🇲🇫"
  }, {
    names: ["gay_pride_flag", "rainbow_flag"],
    surrogates: "🏳️‍🌈"
  }]
};

// although it's not 1:1 since the client js is minified
// and also is transformed into some tricky code
// names are weird and sometimes missing, as i'm not sure
// what all of these are doing exactly.

function flattenAst(node, parent) {
  if (Array.isArray(node)) {
    for (var n = 0; n < node.length; n++) {
      node[n] = flattenAst(node[n], parent);
    }

    return node;
  }

  if (node.content != null) {
    node.content = flattenAst(node.content, node);
  }

  if (parent != null && node.type === parent.type) {
    return node.content;
  }

  return node;
}

function astToString(node) {
  function inner(node) {
    var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    if (Array.isArray(node)) {
      node.forEach(function (subNode) {
        return astToString(subNode);
      });
    } else if (typeof node.content === 'string') {
      result.push(node.content);
    } else if (node.content != null) {
      astToString(node.content);
    }

    return result;
  }

  return inner(node).join('');
}

function parserFor(rules, returnAst) {
  var parser = SimpleMarkdown__default['default'].parserFor(rules);
  var renderer = SimpleMarkdown__default['default'].reactFor(SimpleMarkdown__default['default'].ruleOutput(rules, 'react'));
  return function () {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var inline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var transform = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    if (!inline) {
      input += '\n\n';
    }

    var ast = parser(input, _objectSpread2({
      inline: inline
    }, state));
    ast = flattenAst(ast);

    if (transform) {
      ast = transform(ast);
    }

    if (returnAst) {
      return ast;
    }

    return renderer(ast);
  };
}

function omit(object, excluded) {
  return Object.keys(object).reduce(function (result, key) {
    if (excluded.indexOf(key) === -1) {
      result[key] = object[key];
    }

    return result;
  }, {});
} // emoji stuff


var getEmoteURL = function getEmoteURL(emote) {
  return "".concat(location.protocol, "//cdn.discordapp.com/emojis/").concat(emote.id, ".png");
};

function getEmojiURL(surrogate) {
  if (['™', '©', '®'].indexOf(surrogate) > -1) {
    return '';
  }

  try {
    // we could link to discord's cdn, but there's a lot of these
    // and i'd like to minimize the amount of data we need directly from them
    return "https://twemoji.maxcdn.com/2/svg/".concat(Twemoji__default['default'].convert.toCodePoint(surrogate), ".svg");
  } catch (error) {
    return '';
  }
} // emoji lookup tables


var DIVERSITY_SURROGATES = ['🏻', '🏼', '🏽', '🏾', '🏿'];
var NAME_TO_EMOJI = {};
var EMOJI_TO_NAME = {};
Object.keys(Emoji).forEach(function (category) {
  Emoji[category].forEach(function (emoji) {
    EMOJI_TO_NAME[emoji.surrogates] = emoji.names[0] || '';
    emoji.names.forEach(function (name) {
      NAME_TO_EMOJI[name] = emoji.surrogates;
      DIVERSITY_SURROGATES.forEach(function (d, i) {
        NAME_TO_EMOJI["".concat(name, "::skin-tone-").concat(i + 1)] = emoji.surrogates.concat(d);
      });
    });
    DIVERSITY_SURROGATES.forEach(function (d, i) {
      var surrogates = emoji.surrogates.concat(d);
      var name = emoji.names[0] || '';
      EMOJI_TO_NAME[surrogates] = "".concat(name, "::skin-tone-").concat(i + 1);
    });
  });
});
var EMOJI_NAME_AND_DIVERSITY_RE = /^:([^\s:]+?(?:::skin\-tone\-\d)?):/;

function convertNameToSurrogate(name) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  // what is t for?
  return NAME_TO_EMOJI.hasOwnProperty(name) ? NAME_TO_EMOJI[name] : t;
}

function convertSurrogateToName(surrogate) {
  var colons = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  // what is n for?
  var a = n;

  if (EMOJI_TO_NAME.hasOwnProperty(surrogate)) {
    a = EMOJI_TO_NAME[surrogate];
  }

  return colons ? ":".concat(a, ":") : a;
}

var escape = function escape(str) {
  return str.replace(/[\-\[\]\/\{}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
};

var replacer = function () {
  var surrogates = Object.keys(EMOJI_TO_NAME).sort(function (surrogate) {
    return -surrogate.length;
  }).map(function (surrogate) {
    return escape(surrogate);
  }).join('|');
  return new RegExp('(' + surrogates + ')', 'g');
}();

function translateSurrogatesToInlineEmoji(surrogates) {
  return surrogates.replace(replacer, function (_, match) {
    return convertSurrogateToName(match);
  });
} // i am not sure why are these rules split like this.


var baseRules = {
  newline: SimpleMarkdown__default['default'].defaultRules.newline,
  paragraph: SimpleMarkdown__default['default'].defaultRules.paragraph,
  escape: SimpleMarkdown__default['default'].defaultRules.escape,
  link: SimpleMarkdown__default['default'].defaultRules.link,
  autolink: _objectSpread2(_objectSpread2({}, SimpleMarkdown__default['default'].defaultRules.autolink), {}, {
    match: SimpleMarkdown__default['default'].inlineRegex(/^<(https?:\/\/[^ >]+)>/)
  }),
  url: SimpleMarkdown__default['default'].defaultRules.url,
  strong: SimpleMarkdown__default['default'].defaultRules.strong,
  em: SimpleMarkdown__default['default'].defaultRules.em,
  u: SimpleMarkdown__default['default'].defaultRules.u,
  br: SimpleMarkdown__default['default'].defaultRules.br,
  inlineCode: SimpleMarkdown__default['default'].defaultRules.inlineCode,
  emoticon: {
    order: SimpleMarkdown__default['default'].defaultRules.text.order,
    match: function match(source) {
      return /^(¯\\_\(ツ\)_\/¯)/.exec(source);
    },
    parse: function parse(capture) {
      return {
        type: 'text',
        content: capture[1]
      };
    }
  },
  codeBlock: {
    order: SimpleMarkdown__default['default'].defaultRules.codeBlock.order,
    match: function match(source) {
      return /^```(([A-z0-9\-]+?)\n+)?\n*([^]+?)\n*```/.exec(source);
    },
    parse: function parse(capture) {
      return {
        lang: (capture[2] || '').trim(),
        content: capture[3] || ''
      };
    }
  },
  emoji: {
    order: SimpleMarkdown__default['default'].defaultRules.text.order,
    match: function match(source) {
      return EMOJI_NAME_AND_DIVERSITY_RE.exec(source);
    },
    parse: function parse(capture) {
      var match = capture[0];
      var name = capture[1];
      var surrogate = convertNameToSurrogate(name);
      return surrogate ? {
        name: ":".concat(name, ":"),
        surrogate: surrogate,
        src: getEmojiURL(surrogate)
      } : {
        type: 'text',
        content: match
      };
    },
    react: function react(node, recurseOutput, state) {
      return node.src ? /*#__PURE__*/React__default['default'].createElement("img", {
        draggable: false,
        className: "emoji ".concat(node.jumboable ? 'jumboable' : ''),
        alt: node.surrogate,
        title: node.name,
        src: node.src,
        key: state.key
      }) : /*#__PURE__*/React__default['default'].createElement("span", {
        key: state.key
      }, node.surrogate);
    }
  },
  customEmoji: {
    order: SimpleMarkdown__default['default'].defaultRules.text.order,
    match: function match(source) {
      return /^<:(\w+):(\d+)>/.exec(source);
    },
    parse: function parse(capture) {
      var name = capture[1];
      var id = capture[2];
      return {
        emojiId: id,
        // NOTE: we never actually try to fetch the emote
        // so checking if colons are required (for 'name') is not
        // something we can do to begin with
        name: name,
        src: getEmoteURL({
          id: id
        })
      };
    },
    react: function react(node, recurseOutput, state) {
      return /*#__PURE__*/React__default['default'].createElement("img", {
        draggable: false,
        className: "emoji ".concat(node.jumboable ? 'jumboable' : ''),
        alt: "<:".concat(node.name, ":").concat(node.id, ">"),
        title: node.name,
        src: node.src,
        key: state.key
      });
    }
  },
  text: _objectSpread2(_objectSpread2({}, SimpleMarkdown__default['default'].defaultRules.text), {}, {
    parse: function parse(capture, recurseParse, state) {
      return state.nested ? {
        content: capture[0]
      } : recurseParse(translateSurrogatesToInlineEmoji(capture[0]), _objectSpread2(_objectSpread2({}, state), {}, {
        nested: true
      }));
    }
  }),
  s: {
    order: SimpleMarkdown__default['default'].defaultRules.u.order,
    match: SimpleMarkdown__default['default'].inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
    parse: SimpleMarkdown__default['default'].defaultRules.u.parse
  }
};

function createRules(r) {
  var paragraph = r.paragraph;
  var url = r.url;
  var link = r.link;
  var codeBlock = r.codeBlock;
  var inlineCode = r.inlineCode;
  return _objectSpread2(_objectSpread2({}, r), {}, {
    s: {
      order: r.u.order,
      match: SimpleMarkdown__default['default'].inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
      parse: r.u.parse,
      react: function react(node, recurseOutput, state) {
        return /*#__PURE__*/React__default['default'].createElement("s", {
          key: state.key
        }, recurseOutput(node.content, state));
      }
    },
    paragraph: _objectSpread2(_objectSpread2({}, paragraph), {}, {
      react: function react(node, recurseOutput, state) {
        return /*#__PURE__*/React__default['default'].createElement("p", {
          key: state.key
        }, recurseOutput(node.content, state));
      }
    }),
    url: _objectSpread2(_objectSpread2({}, url), {}, {
      match: SimpleMarkdown__default['default'].inlineRegex(/^((https?|steam):\/\/[^\s<]+[^<.,:;"')\]\s])/)
    }),
    link: _objectSpread2(_objectSpread2({}, link), {}, {
      react: function react(node, recurseOutput, state) {
        // this contains some special casing for invites (?)
        // or something like that.
        // we don't really bother here
        var children = recurseOutput(node.content, state);
        var title = node.title || astToString(node.content);
        return /*#__PURE__*/React__default['default'].createElement("a", {
          title: title,
          href: SimpleMarkdown__default['default'].sanitizeUrl(node.target),
          target: "_blank",
          rel: "noreferrer",
          key: state.key
        }, children);
      }
    }),
    inlineCode: _objectSpread2(_objectSpread2({}, inlineCode), {}, {
      react: function react(node, recurseOutput, state) {
        return /*#__PURE__*/React__default['default'].createElement("code", {
          className: "inline",
          key: state.key
        }, node.content);
      }
    }),
    codeBlock: _objectSpread2(_objectSpread2({}, codeBlock), {}, {
      react: function react(node, recurseOutput, state) {
        if (node.lang && hljs__default['default'].getLanguage(node.lang) != null) {
          var highlightedBlock = hljs__default['default'].highlight(node.lang, node.content, true);
          return /*#__PURE__*/React__default['default'].createElement("pre", {
            key: state.key
          }, /*#__PURE__*/React__default['default'].createElement("code", {
            className: "hljs ".concat(highlightedBlock.language),
            dangerouslySetInnerHTML: {
              __html: highlightedBlock.value
            }
          }));
        }

        return /*#__PURE__*/React__default['default'].createElement("pre", {
          key: state.key
        }, /*#__PURE__*/React__default['default'].createElement("code", {
          className: "hljs"
        }, node.content));
      }
    })
  });
}

var rulesWithoutMaskedLinks = createRules(_objectSpread2(_objectSpread2({}, baseRules), {}, {
  link: _objectSpread2(_objectSpread2({}, baseRules.link), {}, {
    match: function match() {
      return null;
    }
  })
})); // used in:
//  message content (non-webhook mode)

parserFor(rulesWithoutMaskedLinks); // used in:
//  message content (webhook mode)
//  embed description
//  embed field values

var parseAllowLinks = parserFor(createRules(baseRules)); // used in:
//  embed title (obviously)
//  embed field names

var parseEmbedTitle = parserFor(omit(rulesWithoutMaskedLinks, ['codeBlock', 'br', 'mention', 'channel', 'roleMention'])); // used in:

function extractRGB(i) {
  return {
    r: i >> 16 & 0xFF,
    g: i >> 8 & 0xFF,
    b: i & 0xFF
  };
}

function combineRGB(r, g, b) {
  return r << 16 | g << 8 | b;
}

var _excluded = ["children"];

var Link = function Link(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React__default['default'].createElement("a", _extends({
    target: "_blank",
    rel: "noreferrer"
  }, props), children);
};

var EmbedColorPill = function EmbedColorPill(_ref2) {
  var color = _ref2.color;
  var computed;

  if (color) {
    var c = extractRGB(color);
    computed = "rgba(".concat(c.r, ",").concat(c.g, ",").concat(c.b, ",1)");
  }

  var style = {
    backgroundColor: computed !== undefined ? computed : ''
  };
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "embed-color-pill",
    style: style
  });
};

var EmbedTitle = function EmbedTitle(_ref3) {
  var title = _ref3.title,
      url = _ref3.url;

  if (!title) {
    return null;
  }

  var computed = /*#__PURE__*/React__default['default'].createElement("div", {
    className: "embed-title"
  }, parseEmbedTitle(title));

  if (url) {
    computed = /*#__PURE__*/React__default['default'].createElement(Link, {
      href: url,
      className: "embed-title"
    }, parseEmbedTitle(title));
  }

  return computed;
};

var EmbedDescription = function EmbedDescription(_ref4) {
  var content = _ref4.content;

  if (!content) {
    return null;
  }

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "embed-description markup"
  }, parseAllowLinks(content));
};

var EmbedAuthor = function EmbedAuthor(_ref5) {
  var name = _ref5.name,
      url = _ref5.url,
      icon_url = _ref5.icon_url;

  if (!name) {
    return null;
  }

  var authorName;

  if (name) {
    authorName = /*#__PURE__*/React__default['default'].createElement("span", {
      className: "embed-author-name"
    }, name);

    if (url) {
      authorName = /*#__PURE__*/React__default['default'].createElement(Link, {
        href: url,
        className: "embed-author-name"
      }, name);
    }
  }

  var authorIcon = icon_url ? /*#__PURE__*/React__default['default'].createElement("img", {
    src: icon_url,
    role: "presentation",
    className: "embed-author-icon"
  }) : null;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "embed-author"
  }, authorIcon, authorName);
};

var EmbedField = function EmbedField(_ref6) {
  var name = _ref6.name,
      value = _ref6.value,
      inline = _ref6.inline;

  if (!name && !value) {
    return null;
  }

  var cls = 'embed-field' + (inline ? ' embed-field-inline' : '');
  var fieldName = name ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "embed-field-name"
  }, parseEmbedTitle(name)) : null;
  var fieldValue = value ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "embed-field-value markup"
  }, value) : null;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: cls
  }, fieldName, fieldValue);
};

var EmbedThumbnail = function EmbedThumbnail(_ref7) {
  var url = _ref7.url;

  if (!url) {
    return null;
  }

  return /*#__PURE__*/React__default['default'].createElement("img", {
    src: url,
    role: "presentation",
    className: "embed-rich-thumb",
    style: {
      maxWidth: 80,
      maxHeight: 80
    }
  });
};

var EmbedImage = function EmbedImage(_ref8) {
  var url = _ref8.url;

  if (!url) {
    return null;
  } // NOTE: for some reason it's a link in the original DOM
  // not sure if this breaks the styling, probably does


  return /*#__PURE__*/React__default['default'].createElement("a", {
    className: "embed-thumbnail embed-thumbnail-rich"
  }, /*#__PURE__*/React__default['default'].createElement("img", {
    className: "image",
    role: "presentation",
    src: url
  }));
};

var EmbedFooter = function EmbedFooter(_ref9) {
  var timestamp = _ref9.timestamp,
      text = _ref9.text,
      icon_url = _ref9.icon_url;

  if (!text && !timestamp) {
    return null;
  } // pass null, since undefined will make moment(...) return the current date/time


  var time = Moment__default['default'](timestamp !== undefined ? timestamp : null);
  time = time.isValid() ? time.format('ddd MMM Do, YYYY [at] h:mm A') : null;
  var footerText = [text, time].filter(Boolean).join(' | ');
  var footerIcon = text && icon_url ? /*#__PURE__*/React__default['default'].createElement("img", {
    src: icon_url,
    className: "embed-footer-icon",
    role: "presentation",
    width: "20",
    height: "20"
  }) : null;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "embed-footer-wrapper"
  }, footerIcon, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "embed-footer"
  }, footerText));
};

var EmbedFields = function EmbedFields(_ref10) {
  var fields = _ref10.fields;

  if (!fields) {
    return null;
  }

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "embed-fields"
  }, fields.map(function (f, i) {
    return /*#__PURE__*/React__default['default'].createElement(EmbedField, _extends({
      key: i
    }, f));
  }));
};

var Embed = function Embed(_ref11) {
  var color = _ref11.color,
      author = _ref11.author,
      title = _ref11.title,
      url = _ref11.url,
      description = _ref11.description,
      fields = _ref11.fields,
      thumbnail = _ref11.thumbnail,
      image = _ref11.image,
      timestamp = _ref11.timestamp,
      footer = _ref11.footer;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "accessory"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "embed-wrapper"
  }, /*#__PURE__*/React__default['default'].createElement(EmbedColorPill, {
    color: color
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "embed embed-rich"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "embed-content"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "embed-content-inner"
  }, /*#__PURE__*/React__default['default'].createElement(EmbedAuthor, author), /*#__PURE__*/React__default['default'].createElement(EmbedTitle, {
    title: title,
    url: url
  }), /*#__PURE__*/React__default['default'].createElement(EmbedDescription, {
    content: description
  }), /*#__PURE__*/React__default['default'].createElement(EmbedFields, {
    fields: fields
  })), /*#__PURE__*/React__default['default'].createElement(EmbedThumbnail, thumbnail)), /*#__PURE__*/React__default['default'].createElement(EmbedImage, image), /*#__PURE__*/React__default['default'].createElement(EmbedFooter, _extends({
    timestamp: timestamp
  }, footer)))));
};

var MessageTimestamp = React__default['default'].createClass({
  displayName: "MessageTimestamp",
  getDefaultProps: function getDefaultProps() {
    return {
      compactMode: false
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    this.timer = setInterval(function () {
      return _this.tick();
    }, 1000 * 60);
  },
  componentWillUnmount: function componentWillUnmount() {
    clearInterval(this.timer);
  },
  tick: function tick() {
    this.forceUpdate();
  },
  render: function render() {
    var compactMode = this.props.compactMode;
    var m = Moment__default['default']();
    var computed = compactMode ? m.format('LT') : m.calendar();
    return /*#__PURE__*/React__default['default'].createElement("span", {
      className: "timestamp"
    }, computed);
  }
}); // const MessageBody = ({ compactMode, username, content, webhookMode }) => {
//   if (compactMode) {
//     return (
//       <div className='markup'>
//         <MessageTimestamp compactMode={compactMode} />
//         <span className='username-wrapper v-btm'>
//           <strong className='user-name'>{username}</strong>
//           <span className='bot-tag'>BOT</span>
//         </span>
//         <span className='highlight-separator'> - </span>
//         <span className='message-content'>{content && parse(content, true, {}, jumboify)}</span>
//       </div>
//     );
//   } else if (content) {
//     if (webhookMode) {
//       return <div className='markup'>{parseAllowLinks(content, true, {}, jumboify)}</div>;
//     }
//     return <div className='markup'>{parse(content, true, {}, jumboify)}</div>;
//   }
//   return null;
// };

var CozyMessageHeader = function CozyMessageHeader(_ref) {
  var compactMode = _ref.compactMode,
      username = _ref.username;

  if (compactMode) {
    return null;
  }

  return /*#__PURE__*/React__default['default'].createElement("h2", {
    style: {
      lineHeight: '16px'
    }
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "username-wrapper v-btm"
  }, /*#__PURE__*/React__default['default'].createElement("strong", {
    className: "user-name"
  }, username), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "bot-tag"
  }, "BOT")), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "highlight-separator"
  }, " - "), /*#__PURE__*/React__default['default'].createElement(MessageTimestamp, {
    compactMode: compactMode
  }));
};

var Avatar = function Avatar(_ref2) {
  var compactMode = _ref2.compactMode,
      url = _ref2.url;

  if (compactMode) {
    return null;
  }

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "avatar-large animate",
    style: {
      backgroundImage: "url('".concat(url, "')")
    }
  });
};

var ErrorHeader = function ErrorHeader(_ref3) {
  var error = _ref3.error;

  if (!error) {
    return null;
  }

  return /*#__PURE__*/React__default['default'].createElement("header", {
    className: "f6 bg-red br2 pa2 br--top w-100 code pre-wrap"
  }, error);
};

var DiscordViewWrapper = function DiscordViewWrapper(_ref4) {
  var darkTheme = _ref4.darkTheme,
      children = _ref4.children;
  // yikes
  // we could actually just flatten the styling out on the respective elements,
  // but copying directly from discord is a lot easier than that
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "w-100 h-100 overflow-auto pa2 discord-view"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex-vertical whitney ".concat(darkTheme && 'theme-dark')
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "chat flex-vertical flex-spacer"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "content flex-spacer flex-horizontal"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex-spacer flex-vertical messages-wrapper"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "scroller-wrap"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "scroller messages"
  }, children)))))));
};

var DiscordView = React__default['default'].createClass({
  displayName: "DiscordView",
  getDefaultProps: function getDefaultProps() {
    return {
      // TODO: make these two configurable?
      username: 'Discord Bot',
      avatar_url: 'https://cdn.discordapp.com/embed/avatars/0.png',
      // hehe
      darkTheme: true,
      compactMode: false
    };
  },
  render: function render() {
    var _this$props = this.props,
        compactMode = _this$props.compactMode,
        darkTheme = _this$props.darkTheme;
        _this$props.webhookMode;
        var username = _this$props.username,
        avatar_url = _this$props.avatar_url,
        error = _this$props.error,
        _this$props$data = _this$props.data;
        _this$props$data.content;
        var embed = _this$props$data.embed,
        embeds = _this$props$data.embeds;
    var bgColor = darkTheme ? 'bg-discord-dark' : 'bg-discord-light';
    var cls = "w-100 h-100 br2 flex flex-column white overflow-hidden ".concat(bgColor);
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: cls
    }, /*#__PURE__*/React__default['default'].createElement(ErrorHeader, {
      error: error
    }), /*#__PURE__*/React__default['default'].createElement(DiscordViewWrapper, {
      darkTheme: darkTheme
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "message-group hide-overflow ".concat(compactMode ? 'compact' : '')
    }, /*#__PURE__*/React__default['default'].createElement(Avatar, {
      url: avatar_url,
      compactMode: compactMode
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "comment"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "message first"
    }, /*#__PURE__*/React__default['default'].createElement(CozyMessageHeader, {
      username: username,
      compactMode: compactMode
    }), embed ? /*#__PURE__*/React__default['default'].createElement(Embed, embed) : embeds && embeds.map(function (e, i) {
      return /*#__PURE__*/React__default['default'].createElement(Embed, _extends({
        key: i
      }, e));
    }))))));
  }
});

// for colors, 24-bit integer expected to be in RR GG BB order
var UINT24_MAX = Math.pow(2, 24) - 1; // iso 8601, but no support for utc offsets
// or even +00:00 for that matter, either just Z or nothing

var ISO_8601 = /^(\d{4})-(\d\d)-(\d\d)([T ](\d\d):(\d\d):(\d\d)(\.\d+)?(Z)?)?$/; // see https://discordapp.com/developers/docs/resources/channel#embed-object
// we don't check urls here, even though generally only http(s) urls work
// although there's the special attachment:// ones for uploads
// (see https://discordapp.com/developers/docs/resources/channel#using-attachments-within-embeds)
// this depends on the custom 'disallowed' and 'atLeastOneOf' keywords
// (see validation.js)
// NOTE: when disallowing properties, we have to include them as
// valid properties first. kinda stupid, but i can't think of other ways
// to prevent ajv from overriding the disallowed property error. yet, anyway.

var embedSchema = {
  'type': 'object',
  'additionalProperties': false,
  'disallowed': ['type', 'provider', 'video'],
  'minProperties': 1,
  'properties': {
    'title': {
      'type': 'string',
      'maxLength': 256,
      'trim': true
    },
    'url': {
      'type': 'string'
    },
    'description': {
      'type': 'string',
      'maxLength': 2048,
      'trim': true
    },
    'timestamp': {
      'type': 'string',
      'pattern': ISO_8601.source
    },
    'color': {
      'type': 'integer',
      'maximum': UINT24_MAX
    },
    'footer': {
      'type': 'object',
      'additionalProperties': false,
      'disallowed': ['proxy_icon_url'],
      'properties': {
        'text': {
          'type': 'string',
          'maxLength': 2048,
          'trim': true
        },
        'icon_url': {
          'type': 'string'
        },
        'proxy_icon_url': {}
      }
    },
    'image': {
      'type': 'object',
      'additionalProperties': false,
      'disallowed': ['proxy_url', 'width', 'height'],
      'properties': {
        'url': {
          'type': 'string'
        },
        'proxy_url': {},
        'width': {},
        'height': {}
      }
    },
    'thumbnail': {
      'type': 'object',
      'additionalProperties': false,
      'disallowed': ['proxy_url', 'width', 'height'],
      'properties': {
        'url': {
          'type': 'string'
        },
        'proxy_url': {},
        'width': {},
        'height': {}
      }
    },
    'author': {
      'type': 'object',
      'additionalProperties': false,
      'disallowed': ['proxy_icon_url'],
      'required': ['name'],
      'properties': {
        'name': {
          'type': 'string',
          'maxLength': 256,
          'trim': true
        },
        'url': {
          'type': 'string'
        },
        'icon_url': {
          'type': 'string'
        },
        'proxy_icon_url': {}
      }
    },
    'fields': {
      'type': 'array',
      'maxItems': 25,
      'items': {
        'type': 'object',
        'additionalProperties': false,
        'required': ['name', 'value'],
        'properties': {
          'name': {
            'type': 'string',
            'maxLength': 256,
            'trim': true
          },
          'value': {
            'type': 'string',
            'maxLength': 1024,
            'trim': true
          },
          'inline': {
            'type': 'boolean'
          }
        }
      }
    },
    'provider': {},
    'video': {},
    'type': {}
  }
}; // there's a lot of fields omitted in the bot message schema,
// and a couple in the webhook one. we are not concerned with most of them,
// our job is just to validate embeds.

var botMessageSchema = {
  'type': 'object',
  'additionalProperties': false,
  'properties': {
    'content': {
      'type': 'string',
      'maxLength': 2000,
      'trim': true
    },
    'embed': embedSchema
  },
  'atLeastOneOf': ['content', 'embed']
};
var webhookMessageSchema = {
  'type': 'object',
  'additionalProperties': false,
  'properties': {
    'username': {
      'type': 'string',
      'maxLength': 256
    },
    'avatar_url': {
      'type': 'string'
    },
    'content': {
      'type': 'string',
      'maxLength': 2000,
      'trim': true
    },
    'embeds': {
      'type': 'array',
      'maxItems': 10,
      'items': embedSchema
    },
    'tts': {
      'type': 'boolean'
    },
    'file': {}
  },
  'atLeastOneOf': ['content', 'embeds']
};

function traverseObject(object, path) {
  var result = object;

  var _iterator = _createForOfIteratorHelper(path),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var fragment = _step.value;

      if (fragment[fragment.length - 1] === ']') {
        // simple ~assumption~
        var indexStart = fragment.lastIndexOf('[');
        var indexEnd = fragment.lastIndexOf(']');
        var key = fragment.slice(0, indexStart);
        var array = result[key];

        if (array !== undefined || array !== null) {
          if (indexStart !== -1 && indexEnd !== -1) {
            var index = parseInt(fragment.slice(indexStart + 1, indexEnd), 10);
            var element = array[index];

            if (element === undefined || element === null) {
              break;
            }

            result = element;
          }
        }
      } else {
        var sub = result[fragment];
        if (sub === undefined || sub === null) break;
        result = sub;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
} // TODO: rewrite these so that we can report errors during validation instead of after?
// in these we assume the data path is always NOT at the root


var customMessages = {
  additionalProperties: function additionalProperties(data, e) {
    var result = "Unrecognized property \"".concat(e.params.additionalProperty, "\"");

    if (e.dataPath) {
      result += " in \"".concat(e.dataPath.slice(1), "\"");
    }

    return result;
  },
  minProperties: function minProperties(data, e) {
    var dataPath = e.dataPath.slice(1);

    if (e.params.limit === 1) {
      return "\"".concat(dataPath, "\" should NOT be empty");
    }

    return "\"".concat(dataPath, "\" ").concat(e.message);
  },
  maxLength: function maxLength(data, e) {
    var dataPath = e.dataPath.slice(1);
    var path = dataPath.split('.');
    var dest = traverseObject(data, path); // count full code points instead of utf-16 code units

    var length = _toConsumableArray(dest).length;

    return "\"".concat(dataPath, "\" ").concat(e.message, " (").concat(length, " currently)");
  },
  maxItems: function maxItems(data, e) {
    var dataPath = e.dataPath.slice(1);
    var path = dataPath.split('.');
    var dest = traverseObject(data, path);
    var length = dest.length;
    return "\"".concat(dataPath, "\" ").concat(e.message, " (").concat(length, " currently)");
  },
  // right now this is just being used for the timestamp
  // so we can safely assume this is all about it.
  // if we were to support more regex validators, this should
  // be a custom keyword or something.
  pattern: function pattern(data, e) {
    var dataPath = e.dataPath.slice(1);
    var path = dataPath.split('.');
    var dest = traverseObject(data, path);
    var result = "\"".concat(dataPath, "\" is not a valid timestamp.");
    var m = /^\d{4}-\d\d-\d\d(?:[T ]\d\d:\d\d:\d\d(?:\.\d+)?([+-]\d\d(?::\d\d)?)?)?$/.exec(dest);

    if (m) {
      result = "You can't specify UTC offsets in \"".concat(dataPath, "\", just Z or nothing (not even +00:00 is supported)");
    }

    return result;
  }
};

function registerKeywords(ajv) {
  var disallowed = {
    type: 'object',
    errors: true,
    compile: function compile(disallowedProperties) {
      // we're assuming disallowedProperties is an array, so
      // code below is commented out.
      // const typeString = Object.prototype.toString.call(disallowedProperties);
      // if (typeString !== '[object Array]') {
      //   throw new Error('Expected [object Array], got ' + typeString);
      // }
      function disallowOne(data) {
        var _iterator2 = _createForOfIteratorHelper(disallowedProperties),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var property = _step2.value;

            if (data[property] !== undefined) {
              disallowOne.errors = [];
              pushError(disallowOne.errors, property);
              return false;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return true;
      }

      function disallowAny(data) {
        var errors = [];

        var _iterator3 = _createForOfIteratorHelper(disallowedProperties),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var property = _step3.value;

            if (data[property] !== undefined) {
              pushError(errors, property);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        if (errors.length) {
          disallowAny.errors = errors;
        }

        return errors.length === 0;
      }

      function pushError(errors, name) {
        errors.push({
          keyword: 'disallowed',
          params: {
            propertyName: name
          },
          message: "should NOT contain \"".concat(name, "\"")
        });
      }

      return ajv._opts.allErrors ? disallowAny : disallowOne;
    }
  };
  var atLeastOneOf = {
    type: 'object',
    errors: true,
    compile: function compile(expectedProperties) {
      function inner(data) {
        for (var property in data) {
          if (expectedProperties.indexOf(property) !== -1) {
            return true;
          }
        }

        var expected = expectedProperties.map(function (property) {
          return "\"".concat(property, "\"");
        }).join(', ');
        inner.errors = [{
          keyword: 'atLeastOneOf',
          params: {
            expectedProperties: expectedProperties
          },
          message: "should contain at least one of: ".concat(expected)
        }];
        return false;
      }

      return inner;
    }
  };
  var trim = {
    type: 'string',
    errors: true,
    compile: function compile(enabled) {
      function inner(data) {
        if (data && data.trim()) {
          return true;
        }

        inner.errors = [{
          keyword: 'trim',
          params: {
            enabled: enabled
          },
          message: 'should NOT be empty'
        }];
        return false;
      }

      if (enabled) {
        return inner;
      } // pass-thru


      return function (data) {
        return true;
      };
    }
  };
  ajv.addKeyword('disallowed', disallowed);
  ajv.addKeyword('atLeastOneOf', atLeastOneOf);
  ajv.addKeyword('trim', trim);
  return ajv;
}

function stringifyErrors(data, errors, options) {
  // we expect the data to be passed as well since
  // that way we can report better errors.
  if (!errors) {
    return 'No errors';
  }

  var opt = _objectSpread2({
    separator: '\n',
    root: 'root'
  }, options);

  var text = '';

  for (var i = 0; i < errors.length; i++) {
    var error = errors[i];

    if (!error) {
      continue;
    }

    if (customMessages[error.keyword]) {
      text += customMessages[error.keyword](data, error) + opt.separator;
    } else {
      if (error.dataPath) {
        // dataPath starts with a dot, which we don't
        // want for properties on the top-level
        text += "\"".concat(error.dataPath.slice(1), "\" ").concat(error.message).concat(opt.separator);
      } else {
        text += "".concat(opt.root, " ").concat(error.message).concat(opt.separator);
      }
    }
  }

  return text.slice(0, -opt.separator.length);
}

var ajv = registerKeywords(new Ajv__default['default']({
  allErrors: true
}));
var validators = {
  regular: ajv.compile(botMessageSchema),
  webhook: ajv.compile(webhookMessageSchema)
};
var initialContent = 'this `supports` __a__ **subset** *of* ~~markdown~~ 😃 ```js\nfunction foo(bar) {\n  console.log(bar);\n}\n\nfoo(1);```';
var initialColor = Math.floor(Math.random() * 0xFFFFFF);
var initialEmbed = {
  title: 'title ~~(did you know you can have markdown here too?)~~',
  description: 'this supports [named links](https://discordapp.com) on top of the previously shown subset of markdown. ```\nyes, even code blocks```',
  url: 'https://discordapp.com',
  color: initialColor,
  timestamp: new Date().toISOString(),
  footer: {
    icon_url: 'https://cdn.discordapp.com/embed/avatars/0.png',
    text: 'footer text'
  },
  thumbnail: {
    url: 'https://cdn.discordapp.com/embed/avatars/0.png'
  },
  image: {
    url: 'https://cdn.discordapp.com/embed/avatars/0.png'
  },
  author: {
    name: 'author name',
    url: 'https://discordapp.com',
    icon_url: 'https://cdn.discordapp.com/embed/avatars/0.png'
  },
  fields: [{
    name: '🤔',
    value: 'some of these properties have certain limits...'
  }, {
    name: '😱',
    value: 'try exceeding some of them!'
  }, {
    name: '🙄',
    value: 'an informative error should show up, and this view will remain as-is until all issues are fixed'
  }, {
    name: '<:thonkang:219069250692841473>',
    value: 'these last two',
    inline: true
  }, {
    name: '<:thonkang:219069250692841473>',
    value: 'are inline fields',
    inline: true
  }]
}; // this is just for convenience.
// TODO: vary this more?

var initialCode = JSON.stringify({
  content: initialContent,
  embed: initialEmbed
}, null, '  ');
var webhookExample = JSON.stringify({
  content: "".concat(initialContent, "\nWhen sending webhooks, you can have [masked links](https://discordapp.com) in here!"),
  embeds: [initialEmbed, {
    title: 'Woah',
    description: 'You can also have multiple embeds!\n**NOTE**: The color picker does not work with multiple embeds (yet).'
  }]
}, null, '  ');
var App = React__default['default'].createClass({
  displayName: "App",
  // TODO: serialize input, webhookMode, compactMode and darkTheme to query string?
  getInitialState: function getInitialState() {
    return {
      webhookMode: false,
      compactMode: false,
      darkTheme: true,
      currentModal: null,
      input: initialCode,
      data: {},
      error: null,
      colorPickerShowing: false,
      embedColor: extractRGB(initialColor),
      // TODO: put in local storage?
      webhookExampleWasShown: false
    };
  },
  validateInput: function validateInput(input, webhookMode) {
    var validator = webhookMode ? validators.webhook : validators.regular;
    var parsed;
    var isValid = false;
    var error = '';

    try {
      //parsed = JSON.parse(input);
      parsed = input;
      isValid = validator(input);

      if (!isValid) {
        error = stringifyErrors(parsed, validator.errors);
      }
    } catch (e) {
      error = e.message;
    }

    var data = isValid ? parsed : this.state.data;
    var embedColor = {
      r: 0,
      g: 0,
      b: 0
    };

    if (webhookMode && isValid && data.embeds && data.embeds[0]) {
      embedColor = extractRGB(data.embeds[0].color);
    } else if (!webhookMode && isValid && data.embed) {
      embedColor = extractRGB(data.embed.color);
    } // we set all these here to avoid some re-renders.
    // maybe it's okay (and if we ever want to
    // debounce validation, we need to take some of these out)
    // but for now that's what we do.


    this.setState({
      input: input,
      data: data,
      error: error,
      webhookMode: webhookMode,
      embedColor: embedColor
    });
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (JSON.stringify(this.props.embed) !== JSON.stringify(prevProps.embed)) {
      var input = {
        embed: this.props.embed,
        content: 'Test'
      };
      this.validateInput(input, this.state.webhookMode);
    }
  },
  componentWillMount: function componentWillMount() {
    var input = {
      embed: this.props.embed,
      content: 'Test'
    };
    this.validateInput(input, this.state.webhookMode);
  },
  onCodeChange: function onCodeChange(value, change) {
    // for some reason this fires without the value changing...?
    if (value !== this.state.input) {
      this.validateInput(value, this.state.webhookMode);
    }
  },
  displayWebhookExample: function displayWebhookExample() {
    this.setState({
      currentModal: null,
      webhookExampleWasShown: true
    });
    this.validateInput(webhookExample, true);
  },
  dismissWebhookExample: function dismissWebhookExample() {
    this.setState({
      currentModal: null,
      webhookExampleWasShown: true
    });
    this.validateInput(this.state.input, true);
  },
  toggleTheme: function toggleTheme() {
    this.setState({
      darkTheme: !this.state.darkTheme
    });
  },
  toggleCompactMode: function toggleCompactMode() {
    this.setState({
      compactMode: !this.state.compactMode
    });
  },
  openColorPicker: function openColorPicker() {
    this.setState({
      colorPickerShowing: !this.state.colorPickerShowing
    });
  },
  colorChange: function colorChange(color) {
    var val = combineRGB(color.rgb.r, color.rgb.g, color.rgb.b);
    if (val === 0) val = 1; // discord wont accept 0

    var input = this.state.input.replace(/"color"\s*:\s*([0-9]+)/, '"color": ' + val);
    this.validateInput(input, this.state.webhookMode);
  },
  render: function render() {
    this.props.embed;
    return /*#__PURE__*/React__default['default'].createElement("main", {
      className: "bg-blurple open-sans"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "h-100 flex flex-column"
    }, /*#__PURE__*/React__default['default'].createElement("section", {
      className: "flex-l flex-auto"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "h-auto-l w-100 w-50-l pa4 pl3-l pb0"
    }, /*#__PURE__*/React__default['default'].createElement(DiscordView, {
      avatar_url: this.props.avatar_url,
      username: this.props.username,
      data: this.state.data,
      error: this.state.error,
      webhookMode: this.state.webhookMode,
      darkTheme: this.state.darkTheme,
      compactMode: this.state.compactMode
    })))));
  }
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "@import './tachyons.css';\n@import './codemirror-one-dark.css';\n\n@font-face {\n  font-family: Whitney;\n  font-style: light;\n  font-weight: 300;\n  src: url(https://discordapp.com/assets/6c6374bad0b0b6d204d8d6dc4a18d820.woff) format('woff');\n}\n\n@font-face {\n  font-family: Whitney;\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://discordapp.com/assets/e8acd7d9bf6207f99350ca9f9e23b168.woff) format('woff');\n}\n\n@font-face {\n  font-family: Whitney;\n  font-style: medium;\n  font-weight: 600;\n  src: url(https://discordapp.com/assets/3bdef1251a424500c1b3a78dea9b7e57.woff) format('woff');\n}\n\n@font-face {\n  font-family: WhitneyMedium;\n  font-style: medium;\n  font-weight: 600;\n  src: url(https://discordapp.com/assets/be0060dafb7a0e31d2a1ca17c0708636.woff) format('woff');\n}\n\n@font-face {\n  font-family: Whitney;\n  font-style: bold;\n  font-weight: 700;\n  src: url(https://discordapp.com/assets/8e12fb4f14d9c4592eb8ec9f22337b04.woff) format('woff');\n}\n\n/* -- colors -- */\n\n.blurple            { color:            #7289DA; }\n.bg-blurple         { background-color: #7289DA; }\n.red                { color:            #F04747; }\n.bg-red             { background-color: #F04747; }\n.bg-discord-light   { background-color: #ffffff; }\n.bg-discord-dark    { background-color: #36393e; }\n\n/* -- colors -- */\n\n/* -- box shadow -- */\n\n.shadow-1 { box-shadow: 0 2px  8px  rgba(0, 0, 0, 0.3); }\n.shadow-2 { box-shadow: 0 5px  15px rgba(0, 0, 0, 0.3); }\n.shadow-3 { box-shadow: 0 14px 25px rgba(0, 0, 0, 0.4); }\n.shadow-4 { box-shadow: 0 28px 50px rgba(0, 0, 0, 0.4); }\n\n/* -- box shadow -- */\n\n/* -- hover -- */\n\n[class *= 'shadow-hover'] { transition: box-shadow 0.5s ease; }\n.shadow-hover-1:hover, .shadow-hover-1:focus { box-shadow: 0 2px  8px  rgba(0, 0, 0, 0.3); }\n.shadow-hover-2:hover, .shadow-hover-2:focus { box-shadow: 0 5px  15px rgba(0, 0, 0, 0.3); }\n.shadow-hover-3:hover, .shadow-hover-3:focus { box-shadow: 0 14px 25px rgba(0, 0, 0, 0.4); }\n.shadow-hover-4:hover, .shadow-hover-4:focus { box-shadow: 0 28px 50px rgba(0, 0, 0, 0.4); }\n\n.shadow-up-hover { position: relative; top: 0; transition: box-shadow 0.1s ease, top 0.1s ease; }\n.shadow-up-hover:hover, .shadow-up-hover:active { top: -.1rem; }\n\n/* -- hover -- */\n\n/* -- misc -- */\n\n.flex-shrink-0 { flex-shrink: 0; }\n.pre-wrap { white-space: pre-wrap; }\n.resize-none { resize: none; }\n.open-sans { font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n.whitney { font-family: Whitney, \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif; }\n\n/* -- misc -- */\n\n/* -- modal -- */\n\n.modal-enter { opacity: 0; }\n.modal-enter .inner { transform: scale(0.5); }\n\n.modal-enter-active { animation: fade-in 190ms ease-out; }\n.modal-enter-active .inner { animation: zoom-in 190ms ease-in-out; }\n\n.modal-leave { opacity: 1; }\n.modal-leave .inner { transform: scale(1); }\n\n.modal-leave-active { animation: fade-out 190ms ease-in; }\n.modal-leave-active .inner { animation: zoom-out 190ms ease-in; }\n\n@keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }\n@keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }\n\n@keyframes zoom-out {\n  0% { transform: scale(1); }\n  20% { transform: scale(0.95); }\n  100% { transform: scale(0.1); }\n}\n\n@keyframes zoom-in {\n  0% { transform: scale(0.8); }\n  50% { transform: scale(1.02); }\n  100% { transform: scale(1); }\n}\n\n/* -- modal -- */\n\n/* -- codemirror -- */\n\n.CodeMirror {\n  height: 100%;\n  border-radius: .25rem;\n  z-index: 0;\n  font-family: Consolas, Monaco, monospace;\n  font-weight: 300;\n  font-size: 14px;\n}\n\n/* -- codemirror -- */\n\n/* -- highlight.js -- */\n\n/*\n\nwe use a different class name here since\nwe'd like to keep the code blocks for the discord view\nthe same as they would be in the actual application\n---------------------------------------------------\n*/\n\n/*!\nAtom One Dark by Daniel Gamage\nOriginal One Dark Syntax theme from https://github.com/atom/one-dark-syntax\n*/\n\n.atom-one-dark {\n  display: block !important;\n  overflow-x: auto !important;\n  padding: 0.5em !important;\n  color: #abb2bf !important;\n  background: #282c34 !important;\n}\n\n.atom-one-dark > .hljs-comment,\n.atom-one-dark > .hljs-quote {\n  color: #5c6370;\n  font-style: italic;\n}\n\n.atom-one-dark > .hljs-doctag,\n.atom-one-dark > .hljs-keyword,\n.atom-one-dark > .hljs-formula {\n  color: #c678dd;\n}\n\n.atom-one-dark > .hljs-section,\n.atom-one-dark > .hljs-name,\n.atom-one-dark > .hljs-selector-tag,\n.atom-one-dark > .hljs-deletion,\n.atom-one-dark > .hljs-subst {\n  color: #e06c75;\n}\n\n.atom-one-dark > .hljs-literal {\n  color: #56b6c2;\n}\n\n.atom-one-dark > .hljs-string,\n.atom-one-dark > .hljs-regexp,\n.atom-one-dark > .hljs-addition,\n.atom-one-dark > .hljs-attribute,\n.atom-one-dark > .hljs-meta-string {\n  color: #98c379;\n}\n\n.atom-one-dark > .hljs-built_in,\n.atom-one-dark > .hljs-class .hljs-title {\n  color: #e6c07b;\n}\n\n.atom-one-dark > .hljs-attr,\n.atom-one-dark > .hljs-variable,\n.atom-one-dark > .hljs-template-variable,\n.atom-one-dark > .hljs-type,\n.atom-one-dark > .hljs-selector-class,\n.atom-one-dark > .hljs-selector-attr,\n.atom-one-dark > .hljs-selector-pseudo,\n.atom-one-dark > .hljs-number {\n  color: #d19a66;\n}\n\n.atom-one-dark > .hljs-symbol,\n.atom-one-dark > .hljs-bullet,\n.atom-one-dark > .hljs-link,\n.atom-one-dark > .hljs-meta,\n.atom-one-dark > .hljs-selector-id,\n.atom-one-dark > .hljs-title {\n  color: #61aeee;\n}\n\n.atom-one-dark > .hljs-emphasis {\n  font-style: italic;\n}\n\n.atom-one-dark > .hljs-strong {\n  font-weight: bold;\n}\n\n.atom-one-dark > .hljs-link {\n  text-decoration: underline;\n}\n\n/*!\nAtom One Light by Daniel Gamage\nOriginal One Light Syntax theme from https://github.com/atom/one-light-syntax\n*/\n\n.atom-one-light {\n  display: block !important;\n  overflow-x: auto !important;\n  padding: 0.5em !important;\n  color: #383a42 !important;\n  background: #fafafa !important;\n}\n\n.atom-one-light > .hljs-comment,\n.atom-one-light > .hljs-quote {\n  color: #a0a1a7;\n  font-style: italic;\n}\n\n.atom-one-light > .hljs-doctag,\n.atom-one-light > .hljs-keyword,\n.atom-one-light > .hljs-formula {\n  color: #a626a4;\n}\n\n.atom-one-light > .hljs-section,\n.atom-one-light > .hljs-name,\n.atom-one-light > .hljs-selector-tag,\n.atom-one-light > .hljs-deletion,\n.atom-one-light > .hljs-subst {\n  color: #e45649;\n}\n\n.atom-one-light > .hljs-literal {\n  color: #0184bb;\n}\n\n.atom-one-light > .hljs-string,\n.atom-one-light > .hljs-regexp,\n.atom-one-light > .hljs-addition,\n.atom-one-light > .hljs-attribute,\n.atom-one-light > .hljs-meta-string {\n  color: #50a14f;\n}\n\n.atom-one-light > .hljs-built_in,\n.atom-one-light > .hljs-class .hljs-title {\n  color: #c18401;\n}\n\n.atom-one-light > .hljs-attr,\n.atom-one-light > .hljs-variable,\n.atom-one-light > .hljs-template-variable,\n.atom-one-light > .hljs-type,\n.atom-one-light > .hljs-selector-class,\n.atom-one-light > .hljs-selector-attr,\n.atom-one-light > .hljs-selector-pseudo,\n.atom-one-light > .hljs-number {\n  color: #986801;\n}\n\n.atom-one-light > .hljs-symbol,\n.atom-one-light > .hljs-bullet,\n.atom-one-light > .hljs-link,\n.atom-one-light > .hljs-meta,\n.atom-one-light > .hljs-selector-id,\n.atom-one-light > .hljs-title {\n  color: #4078f2;\n}\n\n.atom-one-light > .hljs-emphasis {\n  font-style: italic;\n}\n\n.atom-one-light > .hljs-strong {\n  font-weight: bold;\n}\n\n.atom-one-light > .hljs-link {\n  text-decoration: underline;\n}\n\n/* -- highlight.js -- */\n";
styleInject(css_248z$1);

var css_248z = ".bot-tag {\n  background: #7289da;\n  font-size: 10px;\n  font-weight: 600;\n  color: #fff!important;\n  margin-left: 6px;\n  padding: 1px 2px;\n  border-radius: 3px;\n  text-transform: uppercase;\n  vertical-align: bottom;\n  line-height: 16px;\n  -ms-flex-negative: 0;\n  flex-shrink: 0\n}\n\n.compact .bot-tag {\n  margin: 0 3px 0 0\n}\n\n.avatar-large,\n.avatar-profile,\n.avatar-small,\n.avatar-xlarge,\n.avatar-xsmall,\n.avatar-xxlarge {\n  background-clip: padding-box;\n  position: relative;\n  background-color: none;\n  background-position: 50%;\n  border-radius: 50%\n}\n\n.avatar-large {\n  width: 40px;\n  height: 40px;\n  background-size: 40px 40px\n}\n\n.scroller-wrap {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex\n}\n\n.scroller-wrap,\n.scroller-wrap .scroller {\n  min-height: 1px;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1\n}\n\n.scroller-wrap .scroller.scrolling>* {\n  pointer-events: none\n}\n\n.scroller-wrap .scroller::-webkit-scrollbar {\n  width: 14px\n}\n\n.scroller-wrap .scroller::-webkit-scrollbar-thumb,\n.scroller-wrap .scroller::-webkit-scrollbar-track-piece {\n  background-color: #7289da;\n  background-clip: padding-box;\n  border: 3px solid #fff;\n  border-radius: 7px\n}\n\n.scroller-wrap .scroller::-webkit-scrollbar-track-piece {\n  background-color: #f3f3f3\n}\n\n.scroller-wrap.polyfill .scroller {\n  padding-right: 14px\n}\n\n.scroller-wrap .scrollbar {\n  background-color: #fff;\n  width: 14px;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex\n}\n\n.scroller-wrap .scrollbar:after {\n  left: -3px;\n  width: 3px;\n  background-color: #fff;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  content: \"\"\n}\n\n.scroller-wrap .scrollbar .track {\n  background: #f3f3f3;\n  border-radius: 4px;\n  margin: 3px;\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column\n}\n\n.scroller-wrap .scrollbar .thumb {\n  background-color: #fff;\n  border-radius: 7px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0\n}\n\n.scroller-wrap .scrollbar .thumb:after {\n  border-radius: 4px;\n  background-color: #7289da;\n  margin: 3px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: \"\"\n}\n\n.scroller-wrap.fade .scroller::-webkit-scrollbar-thumb,\n.scroller-wrap.fade .scroller::-webkit-scrollbar-track-piece {\n  visibility: hidden\n}\n\n.scroller-wrap.fade .scroller:hover:hover::-webkit-scrollbar-thumb,\n.scroller-wrap.fade .scroller:hover:hover::-webkit-scrollbar-track-piece,\n.scroller-wrap.fade:hover:hover::-webkit-scrollbar-thumb,\n.scroller-wrap.fade:hover:hover::-webkit-scrollbar-track-piece {\n  visibility: visible\n}\n\n.scroller-wrap.fade .scroller:hover .scrollbar .thumb,\n.scroller-wrap.fade:hover .scrollbar .thumb {\n  opacity: 1\n}\n\n.scroller-wrap.fade .scrollbar .thumb {\n  -webkit-transition: opacity .1s ease-in-out;\n  transition: opacity .1s ease-in-out;\n  opacity: 0\n}\n\n.scroller-wrap.dark .scroller::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, .4);\n  border-color: transparent\n}\n\n.scroller-wrap.dark .scroller::-webkit-scrollbar-track-piece {\n  background-color: transparent;\n  border-color: transparent\n}\n\n.scroller-wrap.dark .scrollbar,\n.scroller-wrap.dark .scrollbar:after {\n  background-color: #2e3136\n}\n\n.scroller-wrap.dark .scrollbar .track {\n  background-color: transparent\n}\n\n.scroller-wrap.dark .scrollbar .thumb {\n  background-color: #2e3136\n}\n\n.scroller-wrap.dark .scrollbar .thumb:after {\n  background-color: rgba(0, 0, 0, .4)\n}\n\n.scroller-wrap.light .scroller::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, .4);\n  border-color: transparent\n}\n\n.scroller-wrap.light .scroller::-webkit-scrollbar-track-piece {\n  background-color: transparent;\n  border-color: transparent\n}\n\n.scroller-wrap.light .scrollbar,\n.scroller-wrap.light .scrollbar:after {\n  background-color: #f3f3f3\n}\n\n.scroller-wrap.light .scrollbar .track {\n  background-color: transparent\n}\n\n.scroller-wrap.light .scrollbar .thumb {\n  background-color: #f3f3f3\n}\n\n.scroller-wrap.light .scrollbar .thumb:after {\n  background-color: rgba(0, 0, 0, .4)\n}\n\n.theme-dark .hljs,\n.theme-light .hljs {\n  display: block;\n  overflow-x: auto;\n  padding: .5em;\n  -webkit-text-size-adjust: none\n}\n\n.theme-dark .hljs-emphasis,\n.theme-light .hljs-emphasis {\n  font-style: italic\n}\n\n.theme-dark .hljs-strong,\n.theme-light .hljs-strong {\n  font-weight: 700\n}\n\n.theme-light .hljs {\n  background: #fdf6e3;\n  color: #657b83\n}\n\n.theme-light .hljs-comment,\n.theme-light .hljs-quote {\n  color: #586e75\n}\n\n.theme-light .hljs-addition,\n.theme-light .hljs-keyword,\n.theme-light .hljs-selector-tag {\n  color: #859900\n}\n\n.theme-light .hljs-doctag,\n.theme-light .hljs-literal,\n.theme-light .hljs-meta .hljs-meta-string,\n.theme-light .hljs-number,\n.theme-light .hljs-regexp,\n.theme-light .hljs-string {\n  color: #2aa198\n}\n\n.theme-light .hljs-name,\n.theme-light .hljs-section,\n.theme-light .hljs-selector-class,\n.theme-light .hljs-selector-id,\n.theme-light .hljs-title {\n  color: #268bd2\n}\n\n.theme-light .hljs-attr,\n.theme-light .hljs-attribute,\n.theme-light .hljs-class .hljs-title,\n.theme-light .hljs-template-variable,\n.theme-light .hljs-type,\n.theme-light .hljs-variable {\n  color: #b58900\n}\n\n.theme-light .hljs-bullet,\n.theme-light .hljs-link,\n.theme-light .hljs-meta,\n.theme-light .hljs-meta .hljs-keyword,\n.theme-light .hljs-selector-attr,\n.theme-light .hljs-selector-pseudo,\n.theme-light .hljs-subst,\n.theme-light .hljs-symbol {\n  color: #cb4b16\n}\n\n.theme-light .hljs-built_in,\n.theme-light .hljs-deletion {\n  color: #dc322f\n}\n\n.theme-light .hljs-formula {\n  background: #073642\n}\n\n.theme-dark .hljs {\n  background: #002b36;\n  color: #839496\n}\n\n.theme-dark .hljs-comment,\n.theme-dark .hljs-quote {\n  color: #586e75\n}\n\n.theme-dark .hljs-addition,\n.theme-dark .hljs-keyword,\n.theme-dark .hljs-selector-tag {\n  color: #859900\n}\n\n.theme-dark .hljs-doctag,\n.theme-dark .hljs-literal,\n.theme-dark .hljs-meta .hljs-meta-string,\n.theme-dark .hljs-number,\n.theme-dark .hljs-regexp,\n.theme-dark .hljs-string {\n  color: #2aa198\n}\n\n.theme-dark .hljs-name,\n.theme-dark .hljs-section,\n.theme-dark .hljs-selector-class,\n.theme-dark .hljs-selector-id,\n.theme-dark .hljs-title {\n  color: #268bd2\n}\n\n.theme-dark .hljs-attr,\n.theme-dark .hljs-attribute,\n.theme-dark .hljs-class .hljs-title,\n.theme-dark .hljs-template-variable,\n.theme-dark .hljs-type,\n.theme-dark .hljs-variable {\n  color: #b58900\n}\n\n.theme-dark .hljs-bullet,\n.theme-dark .hljs-link,\n.theme-dark .hljs-meta,\n.theme-dark .hljs-meta .hljs-keyword,\n.theme-dark .hljs-selector-attr,\n.theme-dark .hljs-selector-pseudo,\n.theme-dark .hljs-subst,\n.theme-dark .hljs-symbol {\n  color: #cb4b16\n}\n\n.theme-dark .hljs-built_in,\n.theme-dark .hljs-deletion {\n  color: #dc322f\n}\n\n.theme-dark .hljs-formula {\n  background: #073642\n}\n\n.chat,\n.message-group .accessory,\n.message-group .comment .attachment .attachment-inner {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal\n}\n\n.chat,\n.chat>.title-wrap>.title,\n.message-group .accessory {\n  -webkit-box-direction: normal\n}\n\n.message-group,\n.message-group.compact .message .message-text .markup .message-content {\n  word-wrap: break-word\n}\n\n.chat {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  position: relative;\n  color: #fff\n}\n\n.chat .content {\n  background: #fff\n}\n\n.chat .user-name {\n  cursor: pointer\n}\n\n.chat .user-name:hover {\n  text-decoration: underline\n}\n\n.chat .avatar-large {\n  cursor: pointer;\n  opacity: 1;\n  -webkit-transition: opacity .2s ease;\n  transition: opacity .2s ease\n}\n\n.chat>.title-wrap>.topic a,\n.message-group a {\n  -webkit-transition: .05s;\n  text-decoration: none\n}\n\n.chat .avatar-large:hover {\n  opacity: .8\n}\n\n.chat .messages-wrapper {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  z-index: 0\n}\n\n.chat .messages-wrapper,\n.chat .messages-wrapper .scroller-wrap {\n  overflow: hidden\n}\n\n.chat .messages {\n  margin: 0;\n  overflow-x: hidden\n}\n\n.hide-overflow {\n  overflow: hidden\n}\n\n.message-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 20px 0;\n  margin-left: 20px;\n  margin-right: 6px;\n  border-bottom: 1px solid #eceeef;\n  box-sizing: border-box;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text\n}\n\n.message-group a {\n  color: #00b0f4;\n  transition: .05s;\n  cursor: pointer\n}\n\n.message-group a:hover {\n  text-decoration: underline\n}\n\n.message-group .message .markup a {\n  unicode-bidi: bidi-override;\n  direction: ltr\n}\n\n.message-group .comment .markup code.inline,\n.message-group .comment .markup pre {\n  font-family: Consolas, Liberation Mono, Menlo, Courier, monospace;\n  background: #f9f9f9\n}\n\n.message-group .accessory {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  -ms-flex-direction: column;\n  flex-direction: column\n}\n\n.message-group:last-of-type,\n.message-group:last-of-type:after {\n  border-bottom: none\n}\n\n.message-group .emoji {\n  margin-bottom: -5px\n}\n\n.message-group .image {\n  vertical-align: bottom;\n  max-width: 520px\n}\n\n.message-group .avatar-large {\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  margin-top: -2px;\n  margin-right: 20px\n}\n\n.message-group h2 {\n  margin: 0;\n  padding: 0\n}\n\n.message-group h2 strong {\n  color: #2e3136;\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0\n}\n\n.message-group h2 .timestamp {\n  color: #99aab5;\n  font-size: 12px;\n  letter-spacing: 0;\n  font-weight: 500;\n  text-transform: none;\n  margin-left: 6px\n}\n\n.message-group .highlight-separator {\n  opacity: 0;\n  width: 0;\n  display: inline-block;\n  color: #99aab5\n}\n\n.message-group .highlight-separator.right-pad {\n  text-indent: -10px\n}\n\n.message-group .highlight-separator.left-pad {\n  text-indent: 10px\n}\n\n.message-group .comment {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  margin-right: 20px;\n  min-width: 0\n}\n\n.message-group .comment .markup {\n  color: #737f8d;\n  font-size: 15px;\n  line-height: 1.1em;\n  white-space: pre-wrap;\n  margin-top: 6px;\n  word-wrap: break-word\n}\n\n.message-group .comment .markup strong {\n  font-weight: 700\n}\n\n.message-group .comment .markup em {\n  font-style: italic\n}\n\n.message-group .comment .markup pre {\n  border: 2px solid #f3f3f3;\n  border-radius: 5px;\n  max-width: 90%;\n  box-sizing: border-box;\n  font-size: 12px;\n  white-space: pre-wrap;\n  margin-top: 6px\n}\n\n.message-group .comment .markup pre code {\n  background: #f9f9f9;\n  text-indent: 0\n}\n\n.message-group .comment .markup code.inline {\n  width: auto;\n  height: auto;\n  padding: .2em;\n  border-radius: 3px;\n  font-size: 85%;\n  text-indent: 0\n}\n\n.message-group.compact .comment {\n  width: 100%\n}\n\n.message-group.compact .accessory {\n  padding-left: 100px\n}\n\n.message-group.compact .emoji {\n  width: 16px;\n  height: 16px;\n  vertical-align: top\n}\n\n.message-group.compact .emoji.jumboable {\n  width: 16px;\n  height: 16px\n}\n\n.message-group.compact.message-group {\n  padding: 3px 0\n}\n\n.message-group.compact .timestamp {\n  color: #d0d8dd;\n  display: inline-block;\n  width: 65px;\n  text-align: right;\n  padding-right: 5px;\n  overflow: hidden;\n  font-size: 11px;\n  line-height: 16px;\n  vertical-align: bottom\n}\n\n.message-group.compact .message {\n  padding: 0;\n  margin: 6px 0;\n  line-height: 18px;\n  vertical-align: bottom\n}\n\n.message-group.compact .message:not(.first) .timestamp {\n  color: transparent!important\n}\n\n.message-group.compact .message:hover .timestamp {\n  color: #99aab5!important\n}\n\n.message-group.compact .message .message-text .markup {\n  text-indent: -100px;\n  padding-left: 100px\n}\n\n.message-group.compact .message .message-text .markup .user-name {\n  margin-right: 5px;\n  font-size: 16px;\n  line-height: 16px;\n  font-weight: 600;\n  color: #4f545c;\n  word-break: break-all\n}\n\n.theme-dark .message-group h2 strong {\n  color: #fff\n}\n\n.theme-dark .message-group h2 span {\n  color: hsla(0, 0%, 100%, .2)\n}\n\n.theme-dark .message-group a {\n  color: #0096d1\n}\n\n.theme-dark .message-group .comment .markup {\n  color: hsla(0, 0%, 100%, .7)\n}\n\n.theme-dark .message-group .comment .markup pre {\n  background: #2e3136;\n  border-color: #282b30\n}\n\n.theme-dark .message-group .comment .markup code.inline,\n.theme-dark .message-group .comment .markup pre code {\n  background: #2e3136\n}\n\n.theme-dark .message-group.compact .message .markup .user-name {\n  color: #f9f9f9\n}\n\n.theme-dark .message-group.compact .timestamp {\n  color: hsla(0, 0%, 100%, .2)\n}\n\n.theme-dark .message-group .embed-wrapper .embed-color-pill {\n  background-color: #4f545c\n}\n\n.theme-dark .message-group .embed {\n  background-color: rgba(46, 48, 54, .3);\n  border-color: rgba(46, 48, 54, .6)\n}\n\n.theme-dark .message-group .embed .embed-footer,\n.theme-dark .message-group .embed .embed-provider {\n  color: hsla(0, 0%, 100%, .6)\n}\n\n.theme-dark .message-group .embed .embed-author-name {\n  color: #fff!important\n}\n\n.theme-dark .message-group .embed div.embed-title {\n  color: #fff\n}\n\n.theme-dark .message-group .embed .embed-description,\n.theme-dark .message-group .embed .embed-fields {\n  color: hsla(0, 0%, 100%, .6)\n}\n\n.theme-dark .message-group .embed .embed-fields .embed-field-name {\n  color: #fff\n}\n\n.emoji {\n  -o-object-fit: contain;\n  object-fit: contain;\n  width: 22px;\n  height: 22px;\n  margin: 0 .05em 0 .1em!important;\n  vertical-align: -.4em\n}\n\n.emoji.jumboable {\n  width: 32px;\n  height: 32px\n}\n\n.image {\n  display: inline-block;\n  position: relative;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text\n}\n\n.embed,\n.embed-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox\n}\n\n.embed-wrapper {\n  position: relative;\n  margin-top: 5px;\n  max-width: 520px;\n  display: flex\n}\n\n.embed-wrapper .embed-color-pill {\n  width: 4px;\n  background: #cacbce;\n  border-radius: 3px 0 0 3px;\n  -ms-flex-negative: 0;\n  flex-shrink: 0\n}\n\n.embed {\n  padding: 8px 10px;\n  box-sizing: border-box;\n  background: hsla(0, 0%, 98%, .3);\n  border: 1px solid hsla(0, 0%, 80%, .3);\n  border-radius: 0 3px 3px 0;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column\n}\n\n.embed .embed-content,\n.embed.embed-rich {\n  display: -webkit-box;\n  display: -ms-flexbox\n}\n\n.embed .embed-fields,\n.embed.embed-link {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal\n}\n\n.embed div.embed-title {\n  color: #4f545c\n}\n\n.embed .embed-content {\n  width: 100%;\n  display: flex;\n  margin-bottom: 10px\n}\n\n.embed .embed-content .embed-content-inner {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1\n}\n\n.embed.embed-rich {\n  position: relative;\n  display: flex;\n  border-radius: 0 3px 3px 0\n}\n\n.embed.embed-rich .embed-rich-thumb {\n  max-height: 80px;\n  max-width: 80px;\n  border-radius: 3px;\n  width: auto;\n  -o-object-fit: contain;\n  object-fit: contain;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  margin-left: 20px\n}\n\n.embed.embed-inline {\n  padding: 0;\n  margin: 4px 0;\n  border-radius: 3px\n}\n\n.embed .image,\n.embed video {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  border-radius: 2px\n}\n\n.embed .embed-content-inner>:last-child,\n.embed .embed-content:last-child,\n.embed .embed-inner>:last-child,\n.embed>:last-child {\n  margin-bottom: 0!important\n}\n\n.embed .embed-provider {\n  display: inline-block;\n  color: #87909c;\n  font-weight: 400;\n  font-size: 12px;\n  margin-bottom: 5px\n}\n\n.embed .embed-author {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin-bottom: 5px\n}\n\n.embed .embed-author-name,\n.embed .embed-footer,\n.embed .embed-title {\n  display: inline-block;\n  font-weight: 600\n}\n\n.embed .embed-author-name {\n  font-size: 14px;\n  color: #4f545c!important\n}\n\n.embed .embed-author-icon {\n  margin-right: 9px;\n  width: 20px;\n  height: 20px;\n  -o-object-fit: contain;\n  object-fit: contain;\n  border-radius: 50%\n}\n\n.embed .embed-footer {\n  font-size: 12px;\n  color: rgba(79, 83, 91, .6);\n  letter-spacing: 0\n}\n\n.embed .embed-footer-icon {\n  margin-right: 10px;\n  height: 18px;\n  width: 18px;\n  -o-object-fit: contain;\n  object-fit: contain;\n  float: left;\n  border-radius: 50%\n}\n\n.embed .embed-title {\n  margin-bottom: 4px;\n  font-size: 14px\n}\n\n.embed .embed-title+.embed-description {\n  margin-top: -3px!important\n}\n\n.embed .embed-description {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  color: rgba(79, 83, 91, .9);\n  letter-spacing: 0\n}\n\n.embed .embed-description.markup {\n  white-space: pre-line;\n  margin-top: 0!important;\n  font-size: 14px!important;\n  line-height: 16px!important\n}\n\n.embed .embed-description.markup pre {\n  max-width: 100%!important\n}\n\n.embed .embed-fields {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  color: #36393e;\n  margin-top: -10px;\n  margin-bottom: 10px\n}\n\n.embed .embed-fields .embed-field {\n  -webkit-box-flex: 0;\n  -ms-flex: 0;\n  flex: 0;\n  padding-top: 10px;\n  min-width: 100%;\n  max-width: 506px\n}\n\n.embed .embed-fields .embed-field.embed-field-inline {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  min-width: 120px;\n  -ms-flex-preferred-size: auto;\n  flex-basis: auto\n}\n\n.embed .embed-fields .embed-field .embed-field-name {\n  font-size: 14px;\n  margin-bottom: 4px;\n  font-weight: 600\n}\n\n.embed .embed-fields .embed-field .embed-field-value {\n  font-size: 14px;\n  font-weight: 500\n}\n\n.embed .embed-thumbnail,\n.embed .embed-thumbnail-gifv {\n  position: relative;\n  display: inline-block\n}\n\n.embed .embed-thumbnail {\n  margin-bottom: 10px\n}\n\n.embed .embed-thumbnail img {\n  margin: 0\n}\n\n.embed .embed-footer-wrapper {\n  display: flex;\n  align-items: center;\n}\n\n.comment>:last-child .embed {\n  margin-bottom: auto\n}\n\n.flex-horizontal,\n.flex-vertical {\n  display: -webkit-box;\n  display: -ms-flexbox\n}\n\n.flex-vertical {\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column\n}\n\n.flex-vertical>.flex-spacer {\n  min-height: 1px\n}\n\n.flex-horizontal {\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row\n}\n\n\n.flex-horizontal>.flex-spacer {\n  min-width: 1px\n}\n\n.flex-spacer {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1\n}\n\n.flex-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center\n}\n\n.theme-dark .chat {\n  background-color: #36393e\n}\n\n.theme-dark .chat>.content,\n.theme-dark .friends-table,\n.theme-dark .messages-wrapper {\n  background-color: #36393e\n}\n\n.theme-dark .friends-table .scroller-wrap::-webkit-scrollbar-thumb,\n.theme-dark .messages-wrapper .scroller-wrap::-webkit-scrollbar-thumb {\n  background-color: #1e2124;\n  border-color: #36393e\n}\n\n.theme-dark .friends-table .scroller-wrap::-webkit-scrollbar-track-piece,\n.theme-dark .messages-wrapper .scroller-wrap::-webkit-scrollbar-track-piece {\n  background-color: #2e3136;\n  border-color: #36393e\n}\n\n.theme-dark .friends-table .scroller-wrap.polyfill .scrollbar,\n.theme-dark .friends-table .scroller-wrap.polyfill .scrollbar:after,\n.theme-dark .messages-wrapper .scroller-wrap.polyfill .scrollbar,\n.theme-dark .messages-wrapper .scroller-wrap.polyfill .scrollbar:after {\n  background-color: #36393e\n}\n\n.theme-dark .friends-table .scroller-wrap.polyfill .scrollbar .thumb,\n.theme-dark .messages-wrapper .scroller-wrap.polyfill .scrollbar .thumb {\n  background-color: #36393e;\n  border-color: #36393e\n}\n\n.theme-dark .friends-table .scroller-wrap.polyfill .scrollbar .thumb:after,\n.theme-dark .messages-wrapper .scroller-wrap.polyfill .scrollbar .thumb:after {\n  background-color: #1e2124\n}\n\n.theme-dark .friends-table .scroller-wrap.polyfill .scrollbar .track,\n.theme-dark .messages-wrapper .scroller-wrap.polyfill .scrollbar .track {\n  background-color: #2e3136;\n  border-color: #36393e\n}\n\n.discord-view body,\n.discord-view button,\n.discord-view input,\n.discord-view textarea {\n  font-family: Whitney, Helvetica Neue, Helvetica, Arial, sans-serif\n}\n\n.discord-view a img {\n  border: none\n}\n\n.discord-view ol,\n.discord-view ul {\n  list-style: none\n}\n\n.discord-view strong {\n  font-weight: 600\n}\n\n.discord-view button {\n  border: 0;\n  cursor: pointer\n}\n\n.discord-view button:focus {\n  outline: 0\n}\n\n.discord-view code {\n  font-family: Menlo, Consolas, Monaco, monospace;\n  font-size: 14px;\n  line-height: 16px\n}\n\n.discord-view a {\n  color: #00b0f4;\n  text-decoration: none\n}\n";
styleInject(css_248z);

module.exports = App;
