var yatr = {
    lines: {},
    key: 'trnsl.1.1.20180327T062540Z.3d8f690132078d0c.1f8b83ea28fbf13fe0fcaaa42c3ebd4962dc75b5',
    api: 'https://translate.yandex.net/api/v1.5/tr.json/translate',
    translate: function (id, callback) {
        var text = document.getElementById(id).innerHTML;
        var url = this.api + '?';
        url += 'key=' + this.key;
        url += '&text=' + text;

        var x = document.getElementsByClassName('check1');
        for (var i = 0; i < x.length; i++) {
            if(x[i].checked) {
                var a = x[i].value;
                url += '&lang=' + a;
                console.log(url)
            }

        }


        var ajax = new XMLHttpRequest();
        ajax.open("Get", url, true);
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    text = ajax.responseText;
                    text = JSON.parse(text);
                    text = text.text[0];
                    callback(text)
                }
            }
        };
        ajax.send()

    },
    revert: function (id) {

    }

}
log = function (text) {
    var div = document.getElementsByClassName("new_text1")[0];
    div.innerHTML = text;

}
if (onclick) {
    log();
}