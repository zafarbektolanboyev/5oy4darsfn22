// const box = document.querySelector(".box");
// console.log(box.offsetWidth)
// console.log(box.offsetHeight)



// Masalalar

// 1
// function sum(x, y){
//     return x + y;
// }
// console.log(sum(5,9))

// 2
// function toSecond(minutes){
//     return minutes * 60;
// }

// 3
// function nextInteger(int) {
//     return Math.floor(int) + 1;
// }

// 4
// function uchburchakYuzi(asos, balandlik) {
//     return (asos * balandlik) / 2;
// }

// 5
// function ageToDays(age) {
//     return age * 365;
// }


// 6
// function kub(x) {
//     return x ** 3;
// }

// 7
// function firstElement(arr) {
//     return arr[1];
// }


// 8
// function power(x, y) {
//     return x * y;
// }
// console.log(power(230*10));

// 9
// function hourToSeconds(hour) {
//     return hour * 3600;
// }
// console.log(hourToSeconds(2))

// 10
// function uchinchiTomon(tomon1, tomon2) {
//     return (tomon1 + tomon2) - 1;
// }
// console.log(uchinchiTomon(8, 10))


// 11
// function qoldiq(son1, son2) {
//     return son1 % son2;
// }
// console.log(qoldiq(1,3))


// 12
// function turtburchakYuzi(boyi, eni) {
//     return boyi * eni;
// }
// console.log(turtburchakYuzi(20,10))

// 13
// function stringQoshish(a) {
//     return "Something " + a;
// }
// console.log(stringQoshish("is better"))

// 14
// function kvadrat(a) {
//     return a * a;
// }
// console.log(kvadrat(5))


// 15
// function noldan(raqam) {
//     if (raqam <= 0) {
//         return true; // Rost
//     } else {
//         return false; // Yolg'on
//     }
// }
// console.log(noldan(5))


// 16
// function ichkiBurchaklar(n) {
//     return (n - 2) * 180;
// }


// 17
// function ochkolar(x, y) {
//     return x + y;
// }
// console.log()

//18
// function nameString(name) {
//     return name + "Edabit";
// }
// console.log(nameString("Mubashir"));
// console.log(nameString("Matt"));
// console.log(nameString("javaScript"));

// // 19
// function kichik100dan(x, y) {
//     var yigindi = x + y;
//     if (yigindi <= 100) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(kichik100dan(27, 15));
// console.log(kichik100dan(13, 34));
// console.log(kichik100dan(4, 107));


// 20
// function printArray(n) {
//     let array = Array.from({length: n}, (_, i) => i + 1);
//     return array;
// }
// console.log(printArray(1));
// console.log(printArray(3));
// console.log(printArray(9));


// 21
// function oyoqlar(tovuq, qoy, sigir) {
//     let tovuqOyoqlari = tovuq * 2;
//     let qoyOyoqlari = qoy * 4;
//     let sigirOyoqlari = sigir * 4;
//     let umumiyOyoqlar = tovuqOyoqlari + qoyOyoqlari + sigirOyoqlari;
//     return umumiyOyoqlar;
// }
// console.log(oyoqlar(2, 4, 5));
// console.log(oyoqlar(1, 2, 3));
// console.log(oyoqlar(5, 2, 8));

// 22
// function and(a, b) {
//     return a && b;
// }
// console.log(and(true, false));
// console.log(and(true, true));
// console.log(and(false, true));
// console.log(and(false, false)); 

// 23
// function tengMi(x, y) {
//     if (x === y) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(tengMi(4, 9));
// console.log(tengMi(2, 2));
// console.log(tengMi(2, "2"));

// 24
// function futbolOchko(yutishlar, duranglar, maglubiyatlar) {
//     let ochko = (yutishlar * 3) + duranglar - maglubiyatlar;
//     if (ochko < 0) {
//         ochko = 0;
//     }
//     return ochko;
// }
// console.log(futbolOchko(2, 4, 2));
// console.log(futbolOchko(5, 0, 2));
// console.log(futbolOchko(0, 0, 1));


// 25
// function sekundlar(soat, minut) {
//     let sekund = (soat * 3600) + (minut * 60);
//     return sekund;
// }
// console.log(sekundlar(2, 3));
// console.log(sekundlar(2, 0));
// console.log(sekundlar(0, 0));


// 26
// function fun(n) {
//     if (n > 1 && !Number.isInteger(Math.sqrt(n))) {
//         return false;
//     }
//     return true;
// }
// console.log(fun(4));
// console.log(fun(9));
// console.log(fun(7)); 

// 27
// function tengMi(x, y) {
//     if (typeof x === typeof y && x === y) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(tengMi(1, true));
// console.log(tengMi(0, "0"));
// console.log(tengMi(1, 1));

// 28
// function booleanToString(bool) {
//     return bool.toString();
// }
// console.log(booleanToString(true));
// console.log(booleanToString(false));

// 30
// function frameSoni(minut, frame) {
//     return minut * 60 * frame;
// }
// console.log(frameSoni(1, 1));
// console.log(frameSoni(10, 1));
// console.log(frameSoni(10, 25));

//31
// function calc(str) {
//     return eval(str);
// }
// console.log(calc("23+4"));
// console.log(calc("45-15"));
// console.log(calc("13+2-5*2"));
// console.log(calc("49/7*2-3"));

// 32
// function teng10(x, y) {
//     return x === 10 || y === 10 || x + y === 10;
// }
// console.log(teng10(9, 10));
// console.log(teng10(9, 9));
// console.log(teng10(1, 9));


// 33
// function litrMasofa(km) {
//     return Math.max(100, km * 10);
// }
// console.log(litrMasofa(15));
// console.log(litrMasofa(23.5));
// console.log(litrMasofa(3));

// 34
// function fun(a, b) {
//     return a >= 0 ? a : b;
// }
// console.log(fun(3, 7));
// console.log(fun(-1, 0));
// console.log(fun(1000, 400));

// 35
// function arr(x, y) {
//     return [x, y];
// }
// console.log(arr(1, 2));
// console.log(arr(51, 21));     
// console.log(arr(512124, 215));

// 36
// function tengStrings(str1, str2) {
//     return str1.length === str2.length;
// }
// console.log(tengStrings("AB", "CD"));
// console.log(tengStrings("ABC", "DE"));
// console.log(tengStrings("hello", "edabit"));

// 37
// function boshStr(str) {
//     return str === "";
// }
// console.log(boshStr(""));
// console.log(boshStr(" "));
// console.log(boshStr("a"));

// 38
// function bolinsin5(son) {
//     return son % 5 === 0;
// }
// console.log(bolinsin5(5));
// console.log(bolinsin5(-55));
// console.log(bolinsin5(37));

// 39
// function bolinsin100(son) {
//     return son % 100 === 0;
// }
// console.log(bolinsin100(1));
// console.log(bolinsin100(1000));
// console.log(bolinsin100(100));

// 40
// function uzunlik(str) {
//     if (str === "") {
//         return 0;
//     } else {
//         return 1 + uzunlik(str.substring(1));
//     }
// }
// console.log(uzunlik("apple"));
// console.log(uzunlik("make"));
// console.log(uzunlik("a"));
// console.log(uzunlik(""));
// console.log(uzunlik("  "));

// 41
// function bolinsin(x, y) {
//     return x > y && x % y === 0;
// }
// console.log(bolinsin(98, 7));
// console.log(bolinsin(85, 4)); 

// 42
// function raqam(str) {
//     return parseInt(str);
// }
// console.log(raqam("6"));
// console.log(raqam("1000"));
// console.log(raqam("12"));

// 43
// function tortYuzi(a, b) {
//     if (a > 0 && b > 0) {
//         return a * b;
//     } else {
//         return -1;
//     }
// }
// console.log(tortYuzi(3, 4));
// console.log(tortYuzi(10, 11));
// console.log(tortYuzi(-1, 5));
// console.log(tortYuzi(0, 2)); 

// 44
// function ismFam(ism, familiya) {
//     return familiya + ", " + ism;
// }
// console.log(ismFam("First", "Last")); 
// console.log(ismFam("John", "Doe"));  
// console.log(ismFam("Mary", "Jane"));

// 45
// function bug(ishonch) {
//     return ishonch ? "sad days" : "it's a good day";
// }
// console.log(bug(true));
// console.log(bug(false));

// 46
// function tushirMassiv(arr, tushirishSoni) {
//     return arr.slice(tushirishSoni);
// }
// console.log(tushirMassiv([1, 2, 3], 1));
// console.log(tushirMassiv([1, 2, 3], 2)); 
// console.log(tushirMassiv([1, 2, 3], 5)); 
// console.log(tushirMassiv([1, 2, 3], 0));

// 47
// function ovozlar(ovozObj) {
//     return ovozObj.upvotes > ovozObj.downvotes ? ovozObj.upvotes - ovozObj.downvotes : ovozObj.upvotes - ovozObj.downvotes;
// }
// console.log(ovozlar({ upvotes: 13, downvotes: 0 }));
// console.log(ovozlar({ upvotes: 2, downvotes: 33 }));
// console.log(ovozlar({ upvotes: 132, downvotes: 132 }));

// 48
// function negativ(son) {
//     return son >= 0 ? -son : son;
// }
// console.log(negativ(4));
// console.log(negativ(15));
// console.log(negativ(-4));
// console.log(negativ(0));

// 49
// function almash(arr) {
//     return arr.reverse();
// }
// console.log(almash([1, 2, 3, 4]));
// console.log(almash([9, 9, 2, 3, 4]));
// console.log(almash([]));

// 50
// function kinogaKirish(yosh, otaOna) {
//     return yosh >= 15 && otaOna;
// }
// console.log(kinogaKirish(14, true));
// console.log(kinogaKirish(14, false));
// console.log(kinogaKirish(16, false));

