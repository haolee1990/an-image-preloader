# an-image-preloader
###an image preloader 

##用法示例

``javascript
var loader = new imgLoader({
	images: [
		'http://img.chihaod.com/group1/M00/00/10/Cr6LiFVdk36AIMQAAAEK98Eyznc493.jpg',
		'http://img.chihaod.com/group1/M00/00/10/Cr6LiFVdk1OASA89AAEtwHioPuk851.jpg',
		'http://img.chihaod.com/group1/M00/00/10/Cr6LiFVdkzGAVtz7AAEYS2wZeK4881.jpg',
		'http://img.chihaod.com/group1/M00/00/10/Cr6LiFVdkxaAKmLqAAEtwHioPuk195.jpg',
		'http://img.chihaod.com/group1/M00/00/10/Cr6LiFVdkwaAZOI_AAEYS2wZeK4421.jpg',
		'http://img.chihaod.com/group1/M00/00/10/Cr6LiFVdkvCABEzQAAErn_Uf8Go401.jpg',
		'http://img.chihaod.com/group1/M00/00/10/Cr6LiFVdktSAPfHkAAFRzDwXDYU609.jpg',
		'http://img.chihaod.com/group1/M00/00/10/Cr6LiFVdkqiAXRCyAAGciHB9BL8330.jpg',
		'http://img.chihaod.com/group1/M00/00/10/Cr6LiFVdknaAQSHPAAFqN9MJ9Mg203.jpg',
		'http://img.chihaod.com/group1/M00/00/10/Cr6LiFVdklGAeRs8AAEbNBj-kdI782.jpg',
		'http://img.chihaod.com/group1/M00/00/10/Cr6LiFVdkjiAZm5yAAERAbhsZ2g747.jpg',
		'http://img.chihaod.com/group1/M00/00/10/Cr6LiFVdkfiAfqt2AAGQ-YPUwfA112.jpg',
		'http://p3.qhimg.com/t0193d8a3963e1803e9.jpg',
		'http://p3.qhimg.com/t01cd6a4d4b4bd4457b.jpg',
		'http://wbg.do1.com.cn/templets/default/images/banner.jpg'
	],
	start : function(total){
		console.log('开始加载图片资源啦，要加载的图片数：'+total);
	},
	progress : function(opt){
		console.log('已成功加载 '+opt.currentIndex+' 张图片');
		var percent = opt.currentIndex/opt.total*100;
		$('.progressbar').css('width', percent+'%');
		$('.percent').text(percent.toFixed(0)+'%');
		$('.progresstext .current').text(opt.currentIndex);
		$('.progresstext .total').text(opt.total);
	
	},
	complete : function(opt){
		console.log(opt);
		if(opt.errorSrc.length>0){
			alert('加载完毕!\n'+opt.errorSrc.length+'张图片加载失败,\n图片地址为：'+opt.errorSrc);
		}else{
			alert('加载完毕!\n'+opt.total+'张图片加载成功');
		}
	}
});

loader.init();

``
