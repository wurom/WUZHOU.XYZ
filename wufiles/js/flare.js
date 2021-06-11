
function MySPXParticles(canvasID, particleAmount){

    // An example configuration:
    // var spxParticleSettings = {
    //     p_texture     :  '../img/fb-haha.png', 
    //     p_blending    :  'color-dodge',   
    //     emit_delay    :  30,              
    //     emit_left     :  10,              
    //     emit_right    :  90,              
    //     emit_top      :  80,              
    //     emit_bottom   :  90,              
    //     zone_visible  :  false,           
    //     gravity       :  -4,              
    //     rnd_grav_mult :  2,               
    //     spread_x      :  0.5,             
    //     wind          :  2,               
    //     wave_size     :  1,              
    //     wave_freq     :  80,              
    //     p_life        :  250,             
    //     p_rnd_life    :  20,             
    //     p_size        :  110,             
    //     p_rnd_size    :  80,             
    //     p_size_mult   :  0.98,            
    //     p_rotation    :  0,               
    //     p_rnd_rot     :  15,              
    //     p_rot_wobble  :  true,            
    //     p_rot_amount  :  1.2,             
    //     p_rot_wofreq  :  40,              
    //     p_rot_dual    :  false,           
    //     p_opacity     :  100,             
    //     p_rnd_opa     :  0,               
    //     p_opa_mult    :  0.8,             
    //     p_fade_start  :  150,            
    //     p_rnd_fstart  :  20               
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
 
