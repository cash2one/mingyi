var MY = {
    init: function() {
        var _this = this;
        _this.caseSlider();
        _this.oxgirlSlider();
        _this.bannerSlider();
    },
    caseSlider: function() {
        TouchSlide({ 
            slideCell: "#caseSlider",
            mainCell: ".bd ul", 
            effect: "leftLoop",
            interTime: 6000,
            delayTime: 600, 
            autoPlay: true
        });
    },
    oxgirlSlider: function() {
        TouchSlide({ 
            slideCell: "#oxgirlSlide",
            titCell:".hd ul",
            effect: "leftLoop",
            interTime: 6000,
            delayTime: 600, 
            autoPlay: true,
            autoPage:true,
        });
    },
    bannerSlider: function() {
        TouchSlide({ 
            slideCell: "#bannerSlide",
            titCell:".hd ul",
            mainCell: ".bd ul", 
            effect: "leftLoop",
            interTime: 6000,
            delayTime: 600, 
            autoPlay: true,
            autoPage:true,
        });
    }
}

MY.init();