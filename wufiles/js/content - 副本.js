//标签
var labels =	["1.软件","2.无线电","3.单片机","4.技术", "5.资料","6.天线","7.物联网","8.编程","9.源码","a.英语","b.小工具","c.模块","d.AIS","e.433MHz","f.SDR","g.蓝牙"];
//数据库
var datalist = [
{"id":10,"label":"1b","title":"数据恢复软件","url":"archives/7345.html","pic":"wuroom.png","time":"2019-03-09",
	"resume":"能够恢复从已经删除的文件,包括从回收站中已经清空的文件,当分区被破坏,或者打开指定盘符时提示 需要格式化时,也可以通过这个工具来进行恢复。可以恢复已经丢失的分区,包括MBR被破坏或者硬盘被重新分区等情况。"},
{"id":10,"label":"1b","title":"十六进制编辑器","url":"archives/7345.html","pic":"wuroom.png","time":"2019-03-09",
	"resume":"一款以十六进制编辑器为核心的数据处理高级工具，有着很多诸如数据恢复、低级数据处理等其他强大的功能，需要有相当强悍的专业知识才能使用。"},
{"id":10,"label":"1b","title":"密码检验工具","url":"archives/7345.html","pic":"wuroom.png","time":"2019-03-09",
	"resume":"能够检验任意文件、文字串、HEX字串的MD5码。只需将文件拖放进HashCalc的窗口即可检验出来，而且还能检验出MD4、CRC32、SHA等多种格式的密码，验证下载的文件是否完整，充分保证文件的真实性。"},	

{"id":10,"label":"26","title":"对数周期天线","url":"archives/7345.html","pic":"s6.png","time":"2019-03-09",
	"resume":"通过定向天线精确定位发射源和干扰源的查找，可以应用于 EMC 测试、场强扫描、基站检测维护、变电站电力系统检测维护、汽车 EMI 检测、医疗设备辐射、伪基站检测设备等领域。"},	
{"id":10,"label":"26","title":"频谱监测测向系统","url":"archives/7345.html","pic":"s6.png","time":"2019-03-09",
	"resume":"频谱监测测向系统是一款功能多、用途广的空中无线电信号的测量设备,既可以对空间信号实时监控、分析、解调，同时对非法干扰信号进行定位、压制等，作为日常无线电管理和无线电活动保障的工具及日常户外便携测试。"},	

	
{"id":10,"label":"5a","title":"7345个常用英文词汇","url":"archives/7345.html","pic":"wuroom.png","time":"2019-03-09",
	"resume":"7345个常用英文词汇语音mp3文件"},
{"id":9,"label":"5a","title":"16天记住7000考研单词","url":"archives/167000.html","pic":"wuroom.png","time":"2019-03-09",
	"resume":"16天记住7000考研单词mp3+txt+doc"},
{"id":8,"label":"5a","title":"记完7000个托福单词","url":"archives/1007000.html","pic":"wuroom.png","time":"2019-03-09",
	"resume":"100个句子记完7000个托福单词mp3+txt+epub"},
{"id":7,"label":"1ab","title":"不知不觉背单词","url":"archives/ew.html","pic":"5.png","time":"2019-03-05",
	"resume":"轻松背单词、上班工作背单词、不知不觉背单词。软件说明： 为了边工作边背单词,因为找不到简单 适用的软件,所以便有了这个软件, 在使用过程中有任何建议欢迎提出。"},
{"id":6,"label":"1b","title":"音量控制工具","url":"archives/wuroom.html","pic":"wuroom.png","time":"2020-03-13",
	"resume":"本软件为方便在全屏工作时，通过快捷键控制音量或显示时间，集音量控制、时间控制、常用程序控制、万年历等于一体。"},
{"id":5,"label":"13b","title":"NTC热敏电阻计算工具","url":"archives/wuntc.html","pic":"ntc.png","time":"2019-05-28",
	"resume":"NTC热敏电阻AD值计算、导出 B值计算软件工具。本软件利用公式，方便使用者快速计算出NTC热敏电阻的AD值，及导入AD值使用。"},
{"id":4,"label":"4b","title":"正规表达式工具","url":"tool/regex.html","pic":"wuroom.png","time":"2019-03-09",
	"resume":"该工具主要针对程序开发人员，通过该工具可以快速准备的判断所写的正则是否能正确匹配相应的字符。"},
{"id":3,"label":"4b","title":"RGB颜色对照表","url":"tool/color.html","pic":"wuroom.png","time":"2019-03-09",
	"resume":"点击对应的转换按钮，即可直接输出该颜色的所有表现形式。"},
{"id":2,"label":"19","title":"仓库管理系统模版MFC源码","url":"archives/mfcaccess.html","pic":"vs.png","time":"2019-05-21",
	"resume":"仓库管理系统模版MFC源码,Microsoft Office Access数据库类VS2008项目。注：本源码是软件设计模版，部分功能并没有实现，要求使用者有一定的C++或VS基础。"},

{"id":1,"label":"4b","title":"Base64加密解密","url":"tool/base64.html","pic":"5.png","time":"2019-03-09",
	"resume":"实现Base64加密解密"}
];


function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

function zopen(id,op){
	      sessionStorage["tag1"]=id;
	      if(op==null)return;
	
        for(var i=0;i< datalist.length;i++){
            if(datalist[i].label.includes(id)){
            window.location.href = './'+datalist[i].url;
            break;
            }         
        }
}


function conlist(){
        var content = document.getElementById('lab1');
        var tag = sessionStorage["tag1"];
        content.innerHTML = '<p><a href="../index.html"><h2>五宙坐标</h2></a></p><ul>';      
        for(var i=0;i< datalist.length;i++){
            if(datalist[i].label.includes(tag))
            content.innerHTML += '<li><a href="../'+datalist[i].url+'">'+datalist[i].title+'</a></li>';           
        }
        content.innerHTML += '</ul>';
}


function Homelist(id,list){

        var content = document.getElementById(id);
            
        //var tag = sessionStorage["tag1"];
        
        //循环生成div标签，然后为innerHTML属性添加内容
        for(var i=0;i< datalist.length;i++){
        	
        	if(datalist[i].label.includes(list)){
            //生成新标签
            var newDiv = document.createElement('div');
            //绑定类名和ID
            newDiv.className = "entry";
            //newDiv.id = "tip"+datalist[i].id;
            //改变位置
            //var topValue = parseInt(Math.random()*400);
            //var leftValue = parseInt(Math.random()*700);
            // newDiv.style.top = topValue+"px";
            //newDiv.style.left = leftValue+"px";
            //赋值内容
            newDiv.innerHTML = '<h1><a class="post-title" href="'+datalist[i].url+'" rel="bookmark">'+datalist[i].title+'</a></h1>'+            
                                '<div class="post-meta"><i class="fa fa-calendar" aria-hidden="true"></i> '+datalist[i].time+
                                ' <i class="fa fa-link"></i> <a class="post-title" href="'+datalist[i].url+'">Read more​...</a></div>'+
                                '<div class="clear"></div><div class="entry-content"><a href="'+datalist[i].url+'" rel="tag">'+
                                '<img src="./file/'+datalist[i].pic+'" class="thumb" /></a>'+datalist[i].resume+
                                '</div></div>';
            //把新创建的元素放入content里面
            content.appendChild(newDiv);
           }
         //centerY += newDiv.offsetHeight;
   if((document.documentElement.clientWidth > 1100 && i > 4 )|| (document.documentElement.clientWidth < 1100 && i > 2 ))
        break;

  /*if(centerY/2 > document.documentElement.clientHeight-400){ break;}*/
                  
        }
}
//不是首页
if(!RegExp(/index/).test(window.location.href))
conlist();
else
{
//Homelist('software',1);
//Homelist('radio',2);
//Homelist('mcu',3);
//Homelist('rd',4);
//Homelist('data',5);
}


