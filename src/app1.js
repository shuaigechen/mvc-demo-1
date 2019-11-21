import './app1.css';
//引入 jquery
import $ from 'jquery';

//拿到4个按钮
const $button1 = $('#add1');
const $button2 = $('#minus1');
const $button3 = $('#mul2');
const $button4 = $('#divide2');
const $number = $('#number');
//第一次进来是要初始化你，使用getItem
const n = localStorage.getItem("n");
//把n写到number.text上，没有n就保底值100
$number.text(n || 100);

//button1的点击事件，等于一个函数
$button1.on('click', () => {
    //$number.text()获取number里面的内容用.text，parseInt变成数字，得到数字n
    let n = parseInt($number.text());
    n += 1;
    //n+=1之后，把n的值存下来，"n"的值是n，用户刷新页面，n的值会保留
    localStorage.setItem("n", n);
    //把增加之后的n，放回去展示
    $number.text(n);
});
$button2.on('click', () => {
    let n = parseInt($number.text());
    n -= 1;
    localStorage.setItem("n", n);
    $number.text(n);
});
$button3.on('click', () => {
    let n = parseInt($number.text());
    n *= 2;
    localStorage.setItem("n", n);
    $number.text(n);
});
$button4.on('click', () => {
    let n = parseInt($number.text());
    n /= 2;
    localStorage.setItem("n", n);
    $number.text(n);
});