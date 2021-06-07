
function MySPXParticles(canvasID, particleAmount){

    // An example configuration:
    // var spxParticleSettings = {
    //     p_texture     :  '../img/fb-haha.png', 
    //     p_blending    :  'color-dodge',   /* (empty), screen, overlay, multiply, color-dodge... */
    //     emit_delay    :  30,              /* Delay in between each new particle (small = performance impact!)   */
    //     emit_left     :  10,              /* Emitter zone left % */
    //     emit_right    :  90,              /* Emitter zone right % */
    //     emit_top      :  80,              /* Emitter zone top % */
    //     emit_bottom   :  90,              /* Emitter zone bottom % */
    //     zone_visible  :  false,           /* Preview emitter zone on canvas */
    //     gravity       :  -4,              /* Y move speed (negative: up) */
    //     rnd_grav_mult :  2,               /* Random speed multiplier */
    //     spread_x      :  0.5,             /* Dispersion value */
    //     wind          :  2,               /* Horizontal push force */
    //     wave_size     :  1,               /* Size of wavy motion */
    //     wave_freq     :  80,              /* Speed of wavy motion */
    //     p_life        :  250,             /* Maximum particle lifespan duration */
    //     p_rnd_life    :  20,              /* Randomize lifespan */
    //     p_size        :  110,             /* Particle born size in pixels */
    //     p_rnd_size    :  80,              /* Randomize size */
    //     p_size_mult   :  0.98,            /* Size multiplier, scale down/up gradually */
    //     p_rotation    :  0,               /* Spawn rotation (deg) */
    //     p_rnd_rot     :  15,              /* Randomize rotation (deg) */
    //     p_rot_wobble  :  true,            /* wobble back and forth? */
    //     p_rot_amount  :  1.2,             /* Rotation speed */
    //     p_rot_wofreq  :  40,              /* Wobble frequency */
    //     p_rot_dual    :  false,           /* both directions CW and CCW */ 
    //     p_opacity     :  100,             /* Opacity of a particle when born (%) */
    //     p_rnd_opa     :  0,               /* Randomize born opacity (%) */
    //     p_opa_mult    :  0.8,             /* Opacity multiplier, fade gradually */
    //     p_fade_start  :  150,             /* When do we start to fade out */
    //     p_rnd_fstart  :  20               /* Randomize fade start age */
    // }; 
    var canvas    = document.getElementById(canvasID);
    let partImage = new Image();    
    partImage.src = spxParticleSettings.p_texture;
    let born = 0;
    var context = canvas.getContext("2d");
    class SpxParticle {
        constructor() {
            canvas.width  = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            this.age = 0;
            this.dead = false;
            this.killAge = spxParticleSettings.p_life + this.rnd(spxParticleSettings.p_rnd_life);
            this.fadeStart = spxParticleSettings.p_fade_start + this.rnd(spxParticleSettings.p_rnd_fstart);
            this.image = partImage;
            this.x = this.rndNro(canvas.width / 100 * spxParticleSettings.emit_left, canvas.width / 100 * spxParticleSettings.emit_right);
            this.y = this.rndNro(canvas.height / 100 * spxParticleSettings.emit_top, canvas.height / 100 * spxParticleSettings.emit_bottom);
            this.vx = this.rnd(spxParticleSettings.spread_x);
            this.vy = (spxParticleSettings.gravity/100)*Math.max(1,this.rnd(spxParticleSettings.rnd_grav_mult));
            this.size = spxParticleSettings.p_size + this.rnd(spxParticleSettings.p_rnd_size);
            this.maxSize = spxParticleSettings.p_size;  
            this.phase = Math.random() * 360;
            this.opacity = spxParticleSettings.p_opacity/100 + this.rnd(spxParticleSettings.p_rnd_opa/100);
            this.rotwobble = spxParticleSettings.p_rot_wobble;
            this.rotspeed = spxParticleSettings.p_rot_amount;
            if (spxParticleSettings.p_rot_dual){this.rotspeed = ( this.rndNro(-1,1) < 0 ) ? spxParticleSettings.p_rot_amount*-1 : spxParticleSettings.p_rot_amount;}
            this.rotate = spxParticleSettings.p_rotation + this.rnd(spxParticleSettings.p_rnd_rot);
            this.fadeStartPos = (canvas.height/2) + this.rndNro(-30,30); 
            born++; 
        }

        rnd(value) {return this.rndNro(value*-1, value)}
        degToRad(deg){return deg * Math.PI / 180}
        rndNro(min, max) {return Math.random() * (max - min) + min;}
       
        redraw() {
            this.phase++;
            this.age++;
            this.vy += spxParticleSettings.gravity/100;
            this.y += this.vy;
            this.x += this.vx + spxParticleSettings.wave_size * Math.sin(3.14 * this.phase / spxParticleSettings.wave_freq) + spxParticleSettings.wind/10;
            if (this.rotwobble) { this.rotate += spxParticleSettings.p_rot_amount * Math.sin(3.14 * this.phase / spxParticleSettings.p_rot_wofreq); }
            else{this.rotate += this.rotspeed;}

            if (this.age >= this.fadeStart) {
                this.opacity = this.opacity * spxParticleSettings.p_opa_mult;
                this.size = this.size * spxParticleSettings.p_size_mult;
            }

            if (spxParticleSettings.zone_visible){
                context.globalAlpha = 1.0;
                context.strokeStyle = 'green';
                let L = canvas.width / 100 * spxParticleSettings.emit_left;
                let T = canvas.height / 100 * spxParticleSettings.emit_top;
                let R = canvas.width / 100 * spxParticleSettings.emit_right;
                let W = canvas.width - L - (canvas.width / 100 * (100-spxParticleSettings.emit_right));
                let H = canvas.height - T - (canvas.height / 100 * (100-spxParticleSettings.emit_bottom));
                context.rect(L,T,W,H);
                context.stroke();
            }

            context.globalAlpha = this.opacity;
            context.globalCompositeOperation = spxParticleSettings.p_blending; 
            context.save();
            context.translate(this.x, this.y);
            context.rotate(this.degToRad(this.rotate));
            context.drawImage(this.image, -this.size/2, -this.size/2, this.size, this.size);
            context.restore();
            this.dead = ( this.y < 0 || this.opacity <= 0 || this.age > this.killAge ) ? true : false;  
        }
    } 

    let particleArr = []; 
    let id = setInterval( () => {
        particleArr.push( new SpxParticle() ); 
        if (particleAmount && born>=particleAmount){
            clearInterval(id);
        }
    }, spxParticleSettings.emit_delay );

    function loop() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        requestAnimationFrame( loop );
        let i; 
        for( i = 0; i < particleArr.length; ++i ) {
            if( particleArr[i].dead  ) {
                particleArr.splice(i,1); 
            }
        }
        /*if (document.getElementById('particle-count-display')){
            document.getElementById('particle-count-display').innerText= "Particle count: " + particleArr.length;
        }*/
        
        for( i = 0; i < particleArr.length; ++i ) {
            particleArr[i].redraw(); 
        }
    }
    loop();   
}


var spxParticleSettings = {
         p_texture     :  'wufiles/flare.png',   // 图片
         p_blending    :  'color-dodge',   //(empty), screen, overlay, multiply, color-dodge... 
         emit_delay    :  500,             // 每个新粒子之间的延迟 (small = performance impact!)
         emit_left     :  5,               // 左侧区域 % 
         emit_right    :  90,              // 右侧区域 % 
         emit_top      :  5,               // 上部区域 % 
         emit_bottom   :  60,              // 发射区底部 % 
         zone_visible  :  false,           // 在画布上预览发射器区域
         gravity       :  0,               // Y移动速度（负：向上）
         rnd_grav_mult :  0,               // 随机速度倍增器
         spread_x      :  0,               // 色散值
         wind          :  0,               // 水平推力
         wave_size     :  0,               // 波浪运动的大小 
         wave_freq     :  1,               // 波浪运动速度
         p_life        :  10,              // 最大粒子寿命
         p_rnd_life    :  10,              // 随机化寿命
         p_size        :  110,             // 粒子大小（像素）
         p_rnd_size    :  80,              // 随机化大小
         p_size_mult   :  1.1,             // 大小倍增，逐渐缩小/增大
         p_rotation    :  20,              // 繁殖旋转（度）
         p_rnd_rot     :  0,               // 随机旋转（度） 
         p_rot_wobble  :  false,           // 来回摇晃？
         p_rot_amount  :  1.2,             // 转速
         p_rot_wofreq  :  40,              // 摆动频率
         p_rot_dual    :  true,            // CW和CCW两个方向
         p_opacity     :  50,              // 粒子出生时的不透明度 (%) 
         p_rnd_opa     :  10,              // 随机化出生不透明 (%) 
         p_opa_mult    :  1.0,             // 不透明度倍增，逐渐淡入 
         p_fade_start  :  1,               // 我们什么时候开始淡出
         p_rnd_fstart  :  10               // 随机淡入淡出开始年龄
         
/*         emit_delay    :  30,              // 每个新粒子之间的延迟 (small = performance impact!)
         emit_left     :  10,              // 左侧发射器区域 % 
         emit_right    :  90,              // 右侧发射器区域 % 
         emit_top      :  80,              // Emitter zone top % 
         emit_bottom   :  90,              // 发射区底部 % 
         zone_visible  :  false,           // 在画布上预览发射器区域
         gravity       :  -4,              // Y移动速度（负：向上）
         rnd_grav_mult :  2,               // 随机速度倍增器
         spread_x      :  0.5,             // 色散值
         wind          :  2,               // 水平推力
         wave_size     :  1,               // 波浪运动的大小 
         wave_freq     :  80,              // 波浪运动速度
         p_life        :  250,             // 最大粒子寿命
         p_rnd_life    :  20,              // 随机化寿命
         p_size        :  110,             // 粒子大小（像素）
         p_rnd_size    :  80,              // 随机化大小
         p_size_mult   :  0.98,            // 大小倍增，逐渐缩小/增大
         p_rotation    :  0,               // 繁殖旋转（度）
         p_rnd_rot     :  15,              // 随机旋转（度） 
         p_rot_wobble  :  true,            // 来回摇晃？
         p_rot_amount  :  1.2,             // 转速
         p_rot_wofreq  :  40,              // 摆动频率
         p_rot_dual    :  false,           // CW和CCW两个方向
         p_opacity     :  100,             // 粒子出生时的不透明度 (%) 
         p_rnd_opa     :  0,               // 随机化出生不透明 (%) 
         p_opa_mult    :  0.8,             // 不透明度倍增，逐渐淡入 
         p_fade_start  :  150,             // 我们什么时候开始淡出
         p_rnd_fstart  :  20               // 随机淡入淡出开始年龄*/
        };
        
//判断图片是否存在
function CheckImgExists(imgurl) {
     var ImgObj = new Image(); 
     ImgObj.src = imgurl;
     //存在图片
     if (ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {  
          return true;
     } else {  
          return false;
      }       
}

//if(CheckImgExists(spxParticleSettings.p_texture))
//{
        window.addEventListener('DOMContentLoaded',(e) =>
      {
        MySPXParticles('Star_Canvas', '');
      });
 //}
 
//战机 
 $(document).ready(function() {

        // pre-loader
       /* var items = new Array();
        var errors = new Array();
        current = 0;
        var jBar = $('#load-fill');
        var jPer = $('#load-pct #pct-value');

        //get the url for every image within the page and the css files
        var getImages = function( element) {
            $(element).find('*:not(script)').each(function() {
                var url = "";

                if ($(this).css('background-image').indexOf('none') == -1) {
                    url = $(this).css('background-image');
                    if(url.indexOf('url') != -1) {
                        var temp = url.match(/url\((.*?)\)/);
                        url = temp[1].replace(/\"/g, '');
                    }
                } else if ($(this).get(0).nodeName.toLowerCase() == 'img' && typeof($(this).attr('src')) != 'undefined') {
                    url = $(this).attr('src');
                }
                
                if (url.length > 0) {
                    items.push(url);
                }

            });
        } */   

        //create preloaded image
        // for each image load it
       /* var preloading = function() {
            for (var i = 0; i < items.length; i++) {
                if(loadImg(items[i]));
            }
        }*/

        // load a single image
        /*var loadImg = function(url) {
            var imgLoad = new Image();

            $(imgLoad)
            .load(function() {
                completeLoading();
            })
            .error(function() {
                errors.push($(this).attr('src'));
                completeLoading();
            })
            .attr('src', url);
        }*/
        
        //update progress bar once image loaded
       /* var completeLoading = function() {
            current++;
            var per = Math.round((current / items.length) * 100);

            jBar.stop().animate({
                width: (per-0.5) + '%'
            }, 200, 'easeInQuad');

            jPer.delay(500).text((per-1.5));

             //if all images loaded
            if(current >= items.length) {

                current = items.length; 

                $('#preloader-title h3').text('Core Resources');
                setTimeout(function() {   $('#preloader-title h3').text('Physics Engine'); }, 300);             
                jPer.text(98.9);
                setTimeout(function() { loadComplete() }, 1200);
                setTimeout(function() { jBar.stop().animate({ width: 99.1 + '%'}, 500, 'easeInQuad');jPer.text(99.1); }, 600);
                setTimeout(function() { jBar.stop().animate({ width: 99.6 + '%'}, 500, 'easeInQuad'); jPer.text(99.6); }, 900);
            }
            
        }
        
        //triggered when all images are loaded
        var loadComplete = function() {

            jBar.stop().animate({
                width: (100) + '%'
            }, 0, 'easeInQuad');
            jPer.text('100');

            $(document).scrollTop(0);

            $('#preloader-title h2').text('Loading');
            $('#preloader-title h3').text('Complete');
            $('body').css('overflow','visible');

            $('#preloader').fadeOut(900, function() {
                $(this).remove();
            });

        }

        getImages('body');
        //preloading();        

        // Parallax Code
        var previousScroll = 0;*/

       /* $(window).bind('scroll', function () {

            if(!body.hasClass("mobile-width")) {
                parallaxScroll();
            }
        });*/
        
       /* function parallaxScroll(){

            var scrolled = $(window).scrollTop();

            var down = true;
            if( scrolled < previousScroll ) {
                down = false;       
            }

            var pinkShips = $('#home-fly');
            var pinkShipsPos = pinkShips.position(); 

            var blueShips = $('#bottom-fly');
            var blueShipsPos = blueShips.position(); 

            $('#bg-star-field-fixed').css('top',(0+((scrolled)*.76))+'px');
            $('#home').css('top',(0-(scrolled*.64))+'px');
            $('#about').css('top',(0-(scrolled*.64))+'px');
            $('#small-pink-ship-wrap').css('top',(-833+(scrolled*.80))+'px'); 
            $('#services').css('top',(0-(scrolled*.64))+'px');
            $('#team').css('top',(0-(scrolled*.64))+'px');
            $('#work').css('top',(0-(scrolled*.64))+'px');
            $('#contact').css('top',(0-(scrolled*.65))+'px');
            $('#footer').css('top',(775-(scrolled*.60))+'px');

            // 1. get the width it starts from
            // 2. get the current scrolltop around 470
            // 3. Current scrolltop value- 470
            var shieldPct = (0+(scrolled-683)/5).toFixed(1);
            
            if(shieldPct > 100) { 
                shieldPct = 100; 
            } else if(shieldPct < 0 ) { 
                shieldPct = 0; 
            }

            $('#ui-message-shield-prototype .ui-bar .fill').css('width', shieldPct + '%');
            $('#ui-message-shield-prototype .shield-pct').html(shieldPct + '<span class="alt-color">%</span>');
            $('#small-pink-ship .ship-shield').fadeTo(0, (shieldPct/100));
            $('#home-fly').css({'top' : (20-(scrolled*0.25))+'px','left' : (0+(scrolled*0.95))+'px'});

            // || (!body.hasClass("mobile-width") && window.pageYOffset >=700 )
            if( (scrolled >= 700 && backToTop.hasClass("off") && !body.hasClass("mobile-width") ) )
            {               
                // Show It
                backToTop.show();
                TweenMax.to(backToTop, 0.2, {css:{opacity: 1, right: 60, display: 'block', position: 'fixed'}, ease:Power0.easeInOut, repeat:0});
                backToTop.removeClass("off");                
            }

            if (scrolled <= 700 && !backToTop.hasClass("off") && !body.hasClass("mobile-width") ) {
                 // Hide It
                TweenMax.to(backToTop, 0.2, {css:{opacity: 1, right: -60}, ease:Power0.easeInOut, repeat:0, onComplete:hideBackToTop});
            }
           
            previousScroll = scrolled;

        }

        function hideBackToTop() {
            $("#back-to-top").addClass("off");
            $("#back-to-top").hide();
        }

        // thumb Overlay
        $('.medium-thumb').hover( 
            function() {
              
                $('.thumb-overlay', this).show();

            },
            function() {
                $('.thumb-overlay', this).hide();
            }
        );

         // handle service item clicks
        $('#service-venn-diagram .venn-label').hover( 
            function() {
                var label = $(this).attr("id");
                $('#' + label + '-label').stop(true, true).show("slow");
            },
            function() {
                var label = $(this).attr("id");
                $('#' + label + '-label').stop(true, true).hide("slow");
            }
        );*/

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

        // CSS Animation
       /* var smallPinkShip = $("#small-pink-ship");
        var smallPinkShipPosition = smallPinkShip.position(); 
        var smallPinkShipXpos = smallPinkShipPosition.left;
        var smallPinkShipYpos = smallPinkShipPosition.top;

        var t4P = new TimelineMax({repeat:-1, yoyo:true});
        t4P.to(smallPinkShip, 2, {css:{left:smallPinkShipXpos+15, top:smallPinkShipYpos-10}, ease:Power0.easeIn});
     
        var smallPinkShipBoosterF1 = $("#small-pink-ship .ship-fire-1");
        smallPinkShipBoosterF1Position = smallPinkShipBoosterF1.position();
        gsap.to(smallPinkShipBoosterF1, 0.7, {css:{opacity: 0.4, left: smallPinkShipBoosterF1Position.left-0, top: smallPinkShipBoosterF1Position.top+0}, ease:"power2.out", repeat:-1, yoyo:true});

        var smallPinkShipBoosterF2 = $("#small-pink-ship .ship-fire-2");
        smallPinkShipBoosterF2Position = smallPinkShipBoosterF2.position();
        gsap.to(smallPinkShipBoosterF2, 0.1, {css:{opacity: 0, left: smallPinkShipBoosterF2Position.left-0, top: smallPinkShipBoosterF2Position.top+0}, ease:"power2.out", repeat:-1, yoyo:true});
*/
        //var browserWidth = $(document).width();
        //var planetDestination = browserWidth + 150;
       
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