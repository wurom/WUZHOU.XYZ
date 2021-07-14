//标签
var labels =	[{"id":"b","label":"推荐"},{"id":1,"label":"软件"},{"id":2,"label":"无线电"},{"id":3,"label":"单片机"},{"id":4,"label":"技术"},{"id":5,"label":"资料"},{"id":6,"label":"天线"},{"id":7,"label":"物联网"},
 {"id":8,"label":"编程"},{"id":9,"label":"源码"},{"id":"a","label":"英语"},{"id":"c","label":"模块"},{"id":"d","label":"AIS"},{"id":"e","label":"433MHz"},
 {"id":"f","label":"SDR"},{"id":"g","label":"蓝牙"}];
//数据库
var datalist = [

{"id":15,"label":"4","title":"网线水晶头接法","url":"archives/nl.html","pic":"wuroom.png","time":"2019-03-09",
	"resume":"网线水晶头有两种接法，一种是直连互联法，一种是交叉互联法。交叉线的做法是：一头采用568A标准，一头采用568B标准。平行（直通）线的做法是：两头同为568A标准或568B标准。"},
{"id":14,"label":"3478cde","title":"SI4463模块","url":"mcu/si4463.html","pic":"wuroom.png","time":"2021-07-01",
	"resume":"主要用在智能电表、遥控、家庭安全和告警、车库和大门开启、遥测、家庭自动化、传感器网络、健康监视等"},
{"id":13,"label":"3478c","title":"esp8266的NodeMcu开发板","url":"mcu/esp8266.html","pic":"wuroom.png","time":"2021-07-01",
	"resume":"具有GPIO、PWM、I2C、1-Wire、ADC等功能，结合NodeMcu 固件为您的原型开发提供最快速的途径。"},

{"id":12,"label":"26","title":"对数周期天线","url":"rfs/s5000.html","pic":"s6.png","time":"2021-07-01",
	"resume":"通过定向天线精确定位发射源和干扰源的查找，可以应用于 EMC 测试、场强扫描、基站检测维护、变电站电力系统检测维护、汽车 EMI 检测、医疗设备辐射、伪基站检测设备等领域。"},	
{"id":11,"label":"26","title":"频谱监测测向系统","url":"rfs/9k20g.html","pic":"s6.png","time":"2021-07-01",
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
{"id":3,"label":"4","title":"RGB颜色对照表","url":"tool/color.html","pic":"wuroom.png","time":"2019-03-09",
	"resume":"点击对应的转换按钮，即可直接输出该颜色的所有表现形式。"},
{"id":2,"label":"19","title":"仓库管理系统模版MFC源码","url":"archives/mfcaccess.html","pic":"vs.png","time":"2019-05-21",
	"resume":"仓库管理系统模版MFC源码,Microsoft Office Access数据库类VS2008项目。注：本源码是软件设计模版，部分功能并没有实现，要求使用者有一定的C++或VS基础。"},

{"id":1,"label":"4","title":"Base64加密解密","url":"tool/base64.html","pic":"5.png","time":"2019-03-09",
	"resume":"实现Base64加密解密"}
];


