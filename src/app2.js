import './app2.css';
import $ from 'jquery';

const $tabBar = $('#app2 .tab-bar');
const $tabContent = $('#app2 .tab-content');

//jquery提供监听子元素的事件，监听父元素tab-bar，点击里面的li也触发事件,e是用户点击的元素
$tabBar.on("click", 'li', e => {
    //e.currentTarget，拿到用户点击的元素,用jquery封装一下
    const $li = $(e.currentTarget);
    //背景色切换，当有addclass属性时，怎么样，没有时怎么样
    $li.addClass('selected').siblings().removeClass('selected')
    //一个juqery元素.index，就可以获取它排行第几
    const index = $li.index();
    //属性切换，样式行为分离
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
});
//找到孩子们，找到第一个，触发，click事件，一进来默认点击1
$tabBar.children().eq(0).trigger('click')