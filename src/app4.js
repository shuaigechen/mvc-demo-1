import './app4.css';
import $ from 'jquery';

const $circle = $('#app4 .circle');
//鼠标移入事件
$circle.on('mouseenter', () => {
    $circle.addClass('active')
    //鼠标移出事件
}).on('mouseleave', () => {
    $circle.removeClass('active')
})