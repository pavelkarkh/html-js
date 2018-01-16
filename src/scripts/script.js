var fullbody = {
    head: null,
    body: null,
    foot: null,
    totalcost: 0
};

var hats = new Map();
hats.set(1, {id: 1, src: 'images/hats/1.png', title: 'hat one', price: 25});
hats.set(2, {id: 2, src: 'images/hats/2.png', title: 'hat two', price: 25});
hats.set(3, {id: 3, src: 'images/hats/3.png', title: 'hat three', price: 25});
hats.set(4, {id: 4, src: 'images/hats/4.png', title: 'hat four', price: 25});
hats.set(5, {id: 5, src: 'images/hats/5.png', title: 'hat five', price: 25});

var vests = new Map();
vests.set(1, {id: 1, src: 'images/vests/1.png', title: 'vest one', price: 25});
vests.set(2, {id: 2, src: 'images/vests/2.png', title: 'vest two', price: 25});
vests.set(3, {id: 3, src: 'images/vests/3.png', title: 'vest three', price: 25});
vests.set(4, {id: 4, src: 'images/vests/4.png', title: 'vest four', price: 25});
vests.set(5, {id: 5, src: 'images/vests/5.png', title: 'vest five', price: 25});

var shoes = new Map();
shoes.set(1, {id: 1, src: 'images/shoes/1.png', title: 'shoes one', price: 25});
shoes.set(2, {id: 2, src: 'images/shoes/2.png', title: 'shoes two', price: 25});
shoes.set(3, {id: 3, src: 'images/shoes/3.png', title: 'shoes three', price: 25});
shoes.set(4, {id: 4, src: 'images/shoes/4.png', title: 'shoes four', price: 25});
shoes.set(5, {id: 5, src: 'images/shoes/5.png', title: 'shoes five', price: 25});

document.getElementById('sendJSONButton').onclick = function() {
    sendJSONButton();
};

var sendJSONButton = function() {
    calcFullPrice();
    var textarea = document.getElementById('jsonresponse');
    textarea.textContent = JSON.stringify(fullbody);
};

var calcFullPrice = function() {
    fullbody.totalcost =
        fullbody.head.price +
        fullbody.body.price +
        fullbody.foot.price;
};

$(function(){
    $('#head').change(function(){
        updateFullbody('head', $('#head :selected').val());
        changeImage('head', $('#head :selected').val());
    });

    $('#body').change(function(){
        updateFullbody('body', $('#body :selected').val());
        changeImage('body', $('#body :selected').val());
    });

    $('#foot').change(function(){
        updateFullbody('foot', $('#foot :selected').val());
        changeImage('foot', $('#foot :selected').val());
    });
});

var updateFullbody = function(part, value) {
    if(part === 'head') {
        fullbody.head = hats.get(Number(value));
    }
    if(part === 'body') {
        fullbody.body = vests.get(Number(value));
    }
    if(part === 'foot') {
        fullbody.foot = shoes.get(Number(value));
    }
};

var changeImage = function(part, value) {
    if (part === 'head') {
        var hatImage = document.getElementById('hatimage');
        hatImage.setAttribute('src', hats.get(Number(value)).src);
    }
    if (part === 'body') {
        var vestImage = document.getElementById('vestimage');
        vestImage.setAttribute('src', vests.get(Number(value)).src);
    }
    if (part === 'foot') {
        var shoesImage = document.getElementById('shoesimage');
        shoesImage.setAttribute('src', shoes.get(Number(value)).src);
    }
};

var fillSelects = function() {
    var i;
    for (i = 1; i <= hats.size; i++) {
        createOption(hats.get(i).title, hats.get(i).id, 'head');
    }
    for (i = 1; i <= vests.size; i++) {
        createOption(vests.get(i).title, vests.get(i).id, 'body');
    }
    for (i = 1; i <= shoes.size; i++) {
        createOption(shoes.get(i).title, shoes.get(i).id, 'foot');
    }
};

var createOption = function (title, id, element) {
    var select = document.getElementById(element);
    var option = document.createElement('option');
    option.text = title;
    option.value = id;
    select.add(option);
};

var init = function() {
    fullbody = {
        head: hats.get(1),
        body: vests.get(1),
        foot: shoes.get(1)
    };
    changeImage('head', fullbody.head.id);
    changeImage('body', fullbody.body.id);
    changeImage('foot', fullbody.foot.id);
    fillSelects();
};

var printOptionObject = function(obj) {
    console.log(
        'id: ' + obj.id +'\n' +
        'title: ' + obj.title +'\n' +
        'src: ' + obj.src +'\n' +
        'price: ' + obj.price +'\n'
    );
};

/*
* после полной загрузки страницы
* происходит запуск инициализатора
* */
document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        init();
    }
};