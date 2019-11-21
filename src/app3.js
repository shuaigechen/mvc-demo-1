import './app3.css';
import $ from 'jquery';

const $square = $('#app3 .square')
$square.on('click', () => {
    //jquery内置操作toggleClass，如果没有active属性，就加上，有就删除，不用监听2次 点击事件
    $square.toggleClass('active')
})