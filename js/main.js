$(function(){
    /*点击弹出,关闭menu */
    $(".menu,.reset-btn").on('click',function(event){
        event.preventDefault();
        var menuDetail = $('.menu-detail');
        if (!menuDetail.hasClass('show')) {
            menuDetail.addClass('show');
        } else {
            menuDetail.removeClass('show');
        }
    })
    /*menu中的tab切换效果 */
    $(".menu-nav li").on('click',function(event){
        event.preventDefault();
        var index = $(this).index();
        $(this).addClass('on').siblings().removeClass("on");
        $('.menu-content').eq(index).show().siblings().hide();
    })
    /**默认第一个高亮显示 */
    $('.menu-nav li').eq(0).addClass('on');
    $('.menu-content').eq(0).show().siblings().hide();
    /*搜索效果 */
    $('.search,.search-cancel').on('click',function(event){
        event.preventDefault();
        $(".search-detail").toggle('nomorl');
    })
})