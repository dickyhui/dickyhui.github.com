var hoverEffect = true; // set true for hover effect, set false for no hover effect

var searchEngine = 'google'; // default search engine - set google for google search, bing for bing search, yahoo for yahoo search

var numberOfScreens = 3; // set number of screens (1 or 2 or 3)
 
var blockName = new Array(); // set names of blocks
blockName[1] = '与我有关';
blockName[2] = '经常访问';
blockName[3] = '实验室';

var bookmark = new Array();
bookmark[0] = new Array();
bookmark[1] = new Array();
bookmark[2] = new Array();

// set your bookmarks here: (If you do not fill 'thumb' for thumbnail will be used title)
// FIRST BLOCK
bookmark[0][0] = {
	'title':'blog',
	'url':'http://dickyhui.github.io/',
	'thumb':'blog.png'
};
bookmark[0][1] = {
	'title':'zhihu',
	'url':'http://www.zhihu.com/people/lin-xian-hui-58',
	'thumb':'zhihu.png'
};
bookmark[0][2] = {
	'title':'Blog Life',
	'url':'http://dickyhui.github.io/BestBlue/',
	'thumb':''
};
bookmark[0][3] = {
	'title':'推库',
	'url':'http://www.tuicool.com/',
	'thumb':''
};
bookmark[0][4] = {
	'title':'163',
	'url':'http://mail.163.com/',
	'thumb':''
};
bookmark[0][5] = {
	'title':'weibo',
	'url':'http://weibo.com/u/2682486434',
	'thumb':'weibo.png'
};
bookmark[0][6] = {
	'title':'CC98',
	'url':'http://www.cc98.org/',
	'thumb':''
};
bookmark[0][7] = {
	'title':'无聊图',
	'url':'http://jandan.net/pic',
	'thumb':''
};
bookmark[0][8] = {
	'title':'CSDN',
	'url':'http://www.csdn.net/',
	'thumb':''
};
bookmark[0][9] = {
	'title':'github',
	'url':'https://github.com/dickyhui',
	'thumb':'github.png'
};
bookmark[0][10] = {
	'title':'Startup News',
	'url':'http://news.dbanotes.net/',
	'thumb':''
};
bookmark[0][11] = {
	'title':'网易RSS',
	'url':'http://reader.youdao.com/index.do?oreferer=http%3A%2F%2Fwww.163.com%2Frss%2F#home',
	'thumb':''
};
// end of FIRST BLOCK
// SECOND BLOCK
bookmark[1][0] = {
	'title':'gmail',
	'url':'https://mail.google.com/',
	'thumb':'gmail.png'
};
bookmark[1][1] = {
	'title':'segmentfault',
	'url':'http://www.segmentfault.com/',
	'thumb':'segmentfault.png'
};
bookmark[1][2] = {
	'title':'ikeepu',
	'url':'http://www.ikeepu.com/',
	'thumb':'ikeepu.png'
};
bookmark[1][3] = {
	'title':'xianguo',
	'url':'http://xianguo.com/',
	'thumb':'xianguo.png'
};
bookmark[1][4] = {
	'title':'mtime',
	'url':'http://www.mtime.com/',
	'thumb':'mtime.png'
};
bookmark[1][5] = {
	'title':'reader',
	'url':'http://www.google.com/reader/',
	'thumb':'reader.png'
};
bookmark[1][6] = {
	'title':'lofter',
	'url':'http://www.lofter.com/',
	'thumb':'lofter.png'
};
bookmark[1][7] = {
	'title':'ucdchina',
	'url':'http://www.oschina.net/',
	'thumb':'ucdchina.png'
};
bookmark[1][8] = {
	'title':'yeeyan',
	'url':'http://www.yeeyan.com/',
	'thumb':'yeeyan.png'
};
bookmark[1][9] = {
	'title':'oschina',
	'url':'http://www.oschina.net/',
	'thumb':'oschina.png'
};
bookmark[1][10] = {
	'title':'yuedu163',
	'url':'http://yuedu.163.com/mysubs.do?operation=source',
	'thumb':'yuedu163.png'
};
bookmark[1][11] = {
	// 'title':'domarketing',
	// 'url':'http://www.domarketing.org/',
	// 'thumb':'domarketing.png'
	'title':'v2ex',
	'url':'http://www.v2ex.com/',
	'thumb':'v2ex.png'
};
//end of SECOND BLOCK
// THIRD BLOCK
bookmark[2][0] = {
	'title':'fecms',
	'url':'http://www.forecho.com/Fecms/feadmin/',
	'thumb':'fecms.png'
};
bookmark[2][1] = {
	'title':'yiicms',
	'url':'http://www.amazon.com/',
	'thumb':'yiicms.png'
};
bookmark[2][2] = {
	'title':'ing',
	'url':'http://www.forecho.com/',
	'thumb':'ing.png'
};
bookmark[2][3] = {
	'title':'ing',
	'url':'http://www.forecho.com/',
	'thumb':'ing.png'
};
bookmark[2][4] = {
	'title':'ing',
	'url':'http://www.forecho.com/',
	'thumb':'ing.png'
};
bookmark[2][5] = {
	'title':'ing',
	'url':'http://www.forecho.com/',
	'thumb':'ing.png'
};
bookmark[2][6] = {
	'title':'ing',
	'url':'http://www.forecho.com/',
	'thumb':'ing.png'
};
bookmark[2][7] = {
	'title':'ing',
	'url':'http://www.forecho.com/',
	'thumb':'ing.png'
};
bookmark[2][8] = {
	'title':'ing',
	'url':'http://www.forecho.com/',
	'thumb':'ing.png'
};
bookmark[2][9] = {
	'title':'ing',
	'url':'http://www.forecho.com/',
	'thumb':'ing.png'
};
bookmark[2][10] = {
	'title':'ing',
	'url':'http://www.forecho.com/',
	'thumb':'ing.png'
};
bookmark[2][11] = {
	'title':'ing',
	'url':'http://www.forecho.com/',
	'thumb':'ing.png'
};
