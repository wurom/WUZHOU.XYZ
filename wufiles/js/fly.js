//fly 
 $(document).ready(function() {


        // 顶部
        var Hfly1 = $("#fly-1");
        var Fly1Position = Hfly1.position(); 
        var Fly1Xpos = Fly1Position.left;
        var Fly1Ypos = Fly1Position.top;

        var Hfly2 = $("#fly-2");
        var Fly2Position = Hfly2.position();
        var Fly2Xpos = Fly2Position.left - 25;
        var Fly2Ypos = Fly2Position.top - 10;

        var Hfly3 = $("#fly-3");
        var Fly3Position = Hfly3.position();
        var Fly3Xpos = Fly3Position.left;
        var Fly3Ypos = Fly3Position.top;

        var FireFly1F1 = $("#fly-1 .fire-1");
        FireFly1F1Position = FireFly1F1.position();
        gsap.to(FireFly1F1, 0.1, {css:{opacity: 0, left: FireFly1F1Position.left, top: FireFly1F1Position.top}, ease:"power2.out", repeat:-1, yoyo:true});
        var FireFly1F2 = $("#fly-1 .fire-2");
        FireFly1F2Position = FireFly1F2.position();
        gsap.to(FireFly1F2, 0.1, {css:{opacity: 0, left: FireFly1F2Position.left+2, top: FireFly1F2Position.top-5}, ease:"power2.out", repeat:-1, yoyo:true});
        
        var FireFly2F1 = $("#fly-2 .fire-1");
        FireFly2F1Position = FireFly2F1.position();
        gsap.to(FireFly2F1, 0.1, {css:{opacity: 0.5, left: FireFly2F1Position.left, top: FireFly2F1Position.top}, ease:"power2.out", repeat:-1, yoyo:true});
        var FireFly2F2 = $("#fly-2 .fire-2");
        FireFly2F2Position = FireFly2F2.position();
        gsap.to(FireFly2F2, 0.1, {css:{opacity: 0, left: FireFly2F2Position.left-1, top: FireFly2F2Position.top+2}, ease:"power2.out", repeat:-1, yoyo:true});
            
        var FireFly3F1 = $("#fly-3 .fire-1");
        FireFly3F1Position = FireFly3F1.position();
        gsap.to(FireFly3F1, 0.1, {css:{opacity: 0.5, left: FireFly3F1Position.left, top: FireFly3F1Position.top}, ease:"power2.out", repeat:-1, yoyo:true});
        var FireFly3F2 = $("#fly-3 .fire-2");
        FireFly3F2Position = FireFly3F2.position();
        gsap.to(FireFly3F2, 0.2, {css:{opacity: 0.2, left: FireFly3F2Position.left, top: FireFly3F2Position.top}, ease:"power2.out", repeat:-1, yoyo:true});

        var t1P = new TimelineMax({repeat:-1, yoyo:true});
        t1P.to(Hfly1, 1, {css:{left:Fly1Xpos+5, top:Fly1Ypos-13}, ease:Power0.easeIn});
        t1P.to(Hfly1, 2, {css:{left:Fly1Xpos-5, top:Fly1Ypos}, ease:Power0.easeInOut});
        
        var t2P = new TimelineMax({repeat:-1, yoyo:true});
        t2P.to(Hfly2, 4, {css:{left:Fly2Xpos+2, top:Fly2Ypos-28}, ease:Power0.easeInOut});
        t2P.to(Hfly2, 4, {css:{left:Fly2Xpos, top:Fly2Ypos}, ease:Power0.easeInOut});

        var t3P = new TimelineMax({repeat:-1, yoyo:true});
        t3P.to(Hfly3, 2, {css:{left:Fly3Xpos+2, top:Fly3Ypos-13}, ease:Power0.easeIn});
        t3P.to(Hfly3, 2.4, {css:{left:Fly3Xpos, top:Fly3Ypos}, ease:Power0.easeIn});

      
        // 底部
        var Ffly1 = $("#bottom-fly #bfly-1");
        var Bfly1Position = Ffly1.position(); 
        var Bfly1Xpos = Bfly1Position.left;
        var Bfly1Ypos = Bfly1Position.top;

        var Ffly2 = $("#bottom-fly #bfly-2");
        var Bfly2Position = Ffly2.position();
        var Bfly2Xpos = Bfly2Position.left;
        var Bfly2Ypos = Bfly2Position.top;

        var Ffly3 = $("#bottom-fly #bfly-3");
        var Bfly3Position = Ffly3.position();
        var Bfly3Xpos = Bfly3Position.left;
        var Bfly3Ypos = Bfly3Position.top;

        var FireBfly1F1 = $("#bottom-fly #bfly-1 .fire-1");
        FireBfly1F1Position = FireBfly1F1.position();
        gsap.to(FireBfly1F1, 1, {css:{opacity: 0.5, left: FireBfly1F1Position.left, top: FireBfly1F1Position.top}, ease:"power2.out", repeat:-1, yoyo:true});        
        var FireBfly1F2 = $("#bottom-fly #bfly-1 .fire-2");
        FireBfly1F2Position = FireBfly1F2.position();
        gsap.to(FireBfly1F2, 0.1, {css:{opacity: 0, left: FireBfly1F2Position.left, top: FireBfly1F2Position.top}, ease:"power2.out", repeat:-1, yoyo:true});

        var FireBfly2F1 = $("#bottom-fly #bfly-2 .fire-1");
        FireBfly2F1Position = FireBfly2F1.position();
        gsap.to(FireBfly2F1, 1, {css:{opacity: 0.5, left: FireBfly2F1Position.left, top: FireBfly2F1Position.top}, ease:"power2.out", repeat:-1, yoyo:true});       
        var FireBfly2F2 = $("#bottom-fly #bfly-2 .fire-2");
        FireBfly2F2Position = FireBfly2F2.position();
        gsap.to(FireBfly2F2, 0.1, {css:{opacity: 0, left: FireBfly2F2Position.left, top: FireBfly2F2Position.top}, ease:"power2.out", repeat:-1, yoyo:true});

        var FireBfly3F1 = $("#bottom-fly #bfly-3 .fire-1");
        FireBfly3F1Position = FireBfly3F1.position();
        gsap.to(FireBfly3F1, 2, {css:{opacity: 0.1, left: FireBfly3F1Position.left, top: FireBfly3F1Position.top}, ease:"power2.out", repeat:-1, yoyo:true});        
        var FireBfly3F2 = $("#bottom-fly #bfly-3 .fire-2");
        FireBfly3F2Position = FireBfly3F2.position();
        gsap.to(FireBfly3F2, 0.1, {css:{opacity: 0, left: FireBfly3F2Position.left, top: FireBfly3F2Position.top}, ease:"power2.out", repeat:-1, yoyo:true});

        var t1B = new TimelineMax({repeat:-1, yoyo:true});
        t1B.to(Ffly1, 1, {css:{left:Bfly1Xpos+5, top:Bfly1Ypos-10}, ease:Power0.easeIn});
        t1B.to(Ffly1, 1, {css:{left:Bfly1Xpos, top:Bfly1Ypos}, ease:Power0.easeInOut});
        
        var t2B = new TimelineMax({repeat:-1, yoyo:true});
        t2B.to(Ffly2, 2, {css:{left:Bfly2Xpos+7, top:Bfly2Ypos-15}, ease:Power0.easeIn});
        t2B.to(Ffly2, 2, {css:{left:Bfly2Xpos, top:Bfly2Ypos}, ease:Power0.easeInOut});

        var t3B = new TimelineMax({repeat:-1, yoyo:true});
        t3B.to(Ffly3, 3, {css:{left:Bfly3Xpos+2, top:Bfly3Ypos-13}, ease:Power0.easeIn});
        t3B.to(Ffly3, 3, {css:{left:Bfly3Xpos, top:Bfly3Ypos}, ease:Power0.easeIn});

        var BottomFlyX = $("#bottom-fly-x");
        var BottomFlyXPosition = BottomFlyX.position();
        var BottomFlyXXpos = BottomFlyXPosition.left;
        var BottomFlyXYpos = BottomFlyXPosition.top;
        var tSB = new TimelineMax({repeat:-1, yoyo:true});
        tSB.to(BottomFlyX, 10, {css:{scale: 0.90}, ease:Linear.easeNone});

        //pre loader animation
        //var formPreloader = $("#form-preloader");
        //gsap.to(formPreloader, 1, { css:{rotation: 360}, ease:Linear.easeNone, repeat:-1});

});

function OpenWUInfo(id1,id2) {
document.getElementById(id1).style.display='block';
document.getElementById(id2).style.display='block';
}

function CloseWUInfo(id1,id2) {
document.getElementById(id1).style.display='none';
document.getElementById(id2).style.display='none';
}
