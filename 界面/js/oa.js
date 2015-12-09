
/* 创建菜单栏 */
function createMainNav(config,leftConfig){
	//获取主菜单ul
	var mainNav = $('#main-nav');
	//获取左侧菜单ul
	var leftNav = $('#page-middle-left-nav');
	//获取右侧内容区ul
	var content = $('#page-middle-right-content');
	for(var i=0;i<config.length;i++){
		//id定位标识
		var id = 'a0'+(i+1);
		var cid = "c0"+(i+1);
		//创建主菜单li
		var mainItem = $('<li markNav="'+id+'" markContent="'+cid+'"><a href="#">'+config[i]+'</a></li>');
		//创建右侧内容区li
		var contentli = $('<li id="'+cid+'"><div class=".content-div"></div></li>');
		//创建左侧导航li
		var leftli = $('<li id="'+id+'"></li>');
		var leftItem = $('<ul markContent="'+cid+'" class="nav nav-pills nav-stacked"></ul>');
		leftli.append(leftItem);
		//构建leftItem 即ul列表
		for(var j=0;j<leftConfig[i].length;j++){
			//alert(leftConfig[i][j]);
			var leftItemli = $('<li><a href="#">'+leftConfig[i][j]+'</a></li>');
			
			leftItem.append(leftItemli);
			//为左侧导航栏li设置点击事件
			leftItemli.click(function(){
				$(this).addClass("active").siblings().removeClass("active");
				//ajax请求获取页面
				
				//content-div 加载页面
				var contentId = $(this).parent().attr("markContent");
				//alert(contentId);
				$('#'+contentId).load('123.jsp');
			});
		}
		
		//添加到对应容器
		mainNav.append(mainItem);
		leftNav.append(leftli);
		content.append(contentli);
		//为主菜单导航栏每一个li设置点击事件
		mainItem.click(function(){
			//设置点击选中,移除其他选中
			$(this).addClass("active").siblings().removeClass("active");
			//获取要切换左侧导航栏id
			var leftNavId = $(this).attr('markNav');
			//alert(leftNavId);
			//切换对应左侧导航栏
			$('#'+leftNavId).addClass("li-show").siblings().removeClass("li-show").addClass("li-hidden");
			//切换时自动点击左侧第一选项卡
			$('#'+leftNavId).children(":first").children(":first").click();
			//切换对应右侧文本区
			var rightContentId = $(this).attr('markContent');
			//alert(rightContentId);
			$('#'+rightContentId).addClass("li-show").siblings().removeClass("li-show").addClass("li-hidden");
		});
	}
	//创建完成选中选中第一项
	mainNav.children(":first").click();
}
