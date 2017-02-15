$(function(){
    function prevent(e) {
        e.preventDefault();
    }
    /*点击弹出,关闭menu */
    var menuNavs,menuContent;  
    $(".menu,.reset-btn").on('click',function(){
        var menuDetail = $('.menu-detail');
        if (!menuDetail.hasClass('show')) {
            menuDetail.addClass('show');
            menuNavs = new IScroll('.menu-nav',{mouseWheel:true, preventDefault:false, useTransform:true});
            menuContent = new IScroll('.menu-content-wrapper', {mouseWheel:true, preventDefault:false, useTransform:true});
            if (document.addEventListener){
                document.addEventListener('touchmove',prevent,false);   
            } else {
                document.attachEvent('ontouchmove',prevent);
            }
        } else {
            menuDetail.removeClass('show');
            if (document.removeEventListener){
                document.removeEventListener('touchmove',prevent,false);    
            } else {
                document.detachEvent('ontouchmove',prevent);
            } 
        }
    })
    /*menu中的tab切换效果 */
    $(".menu-nav li").on('click',function(){
        var index = $(this).index();
        $(this).addClass('on').siblings().removeClass("on");
        $('.menu-content').eq(index).show().siblings().hide();
        var element = this;
        menuNavs.scrollToElement(element, 500);
        menuContent.destroy();
        menuContent = new IScroll('.menu-content-wrapper', {mouseWheel:true, preventDefault:false, useTransform:true});
    })
    /**默认第一个高亮显示 */
    $('.menu-nav li').eq(0).addClass('on');
    $('.menu-content').eq(0).show().siblings().hide();
    /*搜索效果 */
    $('.search').on('click',function(){
        if (document.addEventListener){
            document.addEventListener('touchmove',prevent,false);   
        } else {
            document.attachEvent('ontouchmove',prevent);
        }
        $(".search-detail").fadeIn();
    })

    $('.search-cancel').on('click',function(){
        if (document.removeEventListener){
            document.removeEventListener('touchmove',prevent,false);    
        } else {
            document.detachEvent('ontouchmove',prevent);
        } 
        $(".search-detail").fadeOut();
    })
})