/*
 * A simple plugin for image preload
 * Author Leo 984018099@qq.com
 * Create date 2014-05-22
 * Update 2015-05-28
 */
;(function(win,doc){
	
	var isFunc = function(f){
        return typeof f === 'function';
    }
	
	function Loader(config){
		//参数列表
		this.option={
            images :[], //资源路径数组
            start :null, //加载开始回调函数，接收 加载数 一个参数
            progress:null, //正在加载回调函数，接收一个对象作为参数
            complete:null, //加载完毕回调函数，接收一个对象作为参数
            error:null //加载失败回调
		}
		for(key in config){
            this.option[key]=config[key];
        }
		this.total=this.option.images.length||0;//待加载的图片总数
		this.currentIndex=0;//当前加载的进度
		this.errorSrc=[];//加载失败的图片集
	}
	
	Loader.prototype.init=function(){
		var _this=this;

		if(isFunc(_this.option.start)){
			_this.option.start(_this.total);
		}
		
		for(var i=0;i<_this.total;i++){
			var img=new Image();
			var url=_this.option.images[i];
			if(img.readyState){
				img.onreadystatechange = function(){
					if(img.readyState=="complete"||img.readyState=="loaded"){
						_this.loadend();
					}else if(img.readyState=="error"){
						_this.errorSrc.push(this.src);
						if(isFunc(_this.option.error)){
							_this.option.error(this.src,_this.errorCount);
						}
						_this.loadend();
					}
				}
			}else{
				img.onload=function(){
					if(this.complete==true){
						_this.loadend();
					};
				}
				img.onerror=function(){
					_this.errorSrc.push(this.src);
					if(isFunc(_this.option.error)){
						_this.option.error(img.src,_this.errorCount);
					}
					_this.loadend();
				}
			}
			img.src=url;
		}
		
	}
	
	Loader.prototype.loadend=function(){
		
		var _this=this;
		_this.currentIndex++;
		
		var opt={
			total:_this.total,
			currentIndex:_this.currentIndex,
			errorSrc:_this.errorSrc,
			images:_this.option.images
		}
		
		if(isFunc(_this.option.progress)){
			_this.option.progress(opt);
		}
		
		if(_this.currentIndex == _this.total && isFunc(_this.option.complete)){
			_this.option.complete(opt);		
		}
			
	}
	
	win.imgLoader=Loader;
	
})(window,document);
