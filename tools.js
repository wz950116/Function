module.exports = {
    objToStr: function (obj) {
        var res = [];
        for (var o in obj) {
            if (obj.hasOwnProperty(o)) {
                res.push(o + '=' + obj[o]);
            }
        }
        return res.join('&');
    },
    fadeIn($el, time, callback) {
        $el.css('opacity', 0);
        $el.css('display', 'block');
        let t = setInterval(() => {
            if ($el.css('opacity') < 1) {
                let o = parseFloat($el.css('opacity'));
                $el.css('opacity', o + 0.05);
            } else {
                clearInterval(t);
                callback && callback();
            }
        }, time / 100);
    },
    fadeOut($el, time, callback) {
        $el.css('opacity', 1);
        let t = setInterval(() => {
            if ($el.css('opacity') > 0) {
                let o = parseFloat($el.css('opacity'));
                $el.css('opacity', o - 0.05);
            } else {
                $el.css('display', 'none');
                clearInterval(t);
                callback && callback();
            }
        }, time / 100);
    },
    randomArr: function (arr) {
        // 希望从arr[0]到arr[length-1]中随机return一个
        let l = arr.length;
        let random = Math.floor((Math.random()) * l); // 0 到 length - 1 的随机数
        return arr[random];
    },
    accountEncrypt: function (str) {
        let tpm = str.substring(3, str.length - 4);
        return str.replace(tpm, '****');
    }
}

// 随机生成安全色
function getRandomColor() {
    return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6); 
}

// RGB to HEX
function zero_fill_hex(num, digits) {
    var s = num.toString(16)
    while (s.length < digits)
        s = "0" + s
    return s
}
function rgb2hex(rgb) {
    if (rgb.charAt(0) == '#') return rgb
    var ds = rgb.split(/\D+/)
    var decimal = Number(ds[1]) * 65536 + Number(ds[2]) * 256 + Number(ds[3])
    return "#" + zero_fill_hex(decimal, 6);
}

// 获取光标位置
function getCursortPosition(textDom) {
    var cursorPos = 0;
    if (document.selection) {
      // IE Support
      textDom.focus();
      var selectRange = document.selection.createRange();
      selectRange.moveStart('character', -textDom.value.length);
      cursorPos = selectRange.text.length;
    } else if (textDom.selectionStart || textDom.selectionStart == '0') {
      // Firefox support
      cursorPos = textDom.selectionStart;
    }
    return cursorPos;
}

// 设置光标位置
function setCaretPosition(textDom, pos) {
    if (textDom.setSelectionRange) {
      // IE Support
      textDom.focus();
      textDom.setSelectionRange(pos, pos);
    } else if (textDom.createTextRange) {
      // Firefox support
      var range = textDom.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
}
setCaretPosition(document.getElementById('inp1'), 3)
