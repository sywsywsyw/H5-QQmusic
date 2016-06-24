$(function(){

    $(document).on('contextmenu',false)   
////json版本
    // var database =[];
    // var makelist = function(){
    // 	$(database).each(function(i,v){
    // 		$('<li index="'+i+'" class="li"><strong class="music_name" title="'+v.title+'">'+v.title+'</strong>  <strong class="singer_name" title="'+v.artist+'">'+v.artist+'</strong> <strong class="play_time">'+v.duration+'</strong>  <div class="list_cp">  <strong class="btn_like" title="喜欢" name="" mid="004fQTu016b9W4">   <span>我喜欢</span>   </strong>   <strong class="btn_share" title="分享"> <span>分享</span> </strong>  <strong class="btn_fav" title="收藏到歌单"> <span>收藏</span> </strong>  <strong class="btn_del" title="从列表中删除"> <span>删除</span> </strong></div> </li>)')
    // 		.appendTo($('#cc'))
    // 	})
    // }
    // $.getJSON('/database.json').done(function(data){
    // 	// console.log(data)
    //     database = data ;
    //     makelist();
    //     $('.open_list span').text(database.length)
    // })
//本地版本
    var database =[
  {
    "filename": "./musics/下雨天.mp3",
    "duration": "04:13",
    "title": "下雨天",
    "album": "优の良曲 南搞小孩 新歌 精选",
    "artist": "南拳妈妈"
  },
  {
    "filename": "./musics/不为谁而作的歌(Live).mp3",
    "duration": "04:22",
    "title": "不为谁而作的歌 (Live)",
    "album": "2016QQ音乐“最好的时光”跨年演唱会",
    "artist": "林俊杰"
  },
  {
    "filename": "./musics/不为谁而作的歌.mp3",
    "duration": "04:26",
    "title": "不为谁而作的歌",
    "album": "和自己对话 From M.E. To Myself",
    "artist": "林俊杰"
  },
  {
    "filename": "./musics/偏爱.mp3",
    "duration": "03:33",
    "title": "偏爱",
    "album": "仙剑奇侠传三 电视剧原声带",
    "artist": "张芸京"
  },
  {
    "filename": "./musics/分手旅行.mp3",
    "duration": "03:19",
    "title": "分手旅行",
    "album": "痛过我记得",
    "artist": "苏霏/刘玥"
  },
  {
    "filename": "./musics/巴赫旧约.mp3",
    "duration": "03:47",
    "title": "巴赫旧约",
    "artist": "汪苏泷"
  },
  {
    "filename": "./musics/此生不换(《仙剑奇侠传3》电视剧插曲).mp3",
    "duration": "04:26",
    "title": "此生不换 (《仙剑奇侠传3》电视剧插曲)",
    "album": "仙剑奇侠传三 电视剧原声带",
    "artist": "青鸟飞鱼"
  },
  {
    "filename": "./musics/英雄联盟之大圣归来(DJ版).mp3",
    "duration": "03:21",
    "title": "英雄联盟之大圣归来 (DJ版)",
    "album": "英雄联盟",
    "artist": "小可"
  }
]
  var makelist = function(){
     $(database).each(function(i,v){
       $('<li index="'+i+'" class="li"><strong class="music_name" title="'+v.title+'">'+v.title+'</strong>  <strong class="singer_name" title="'+v.artist+'">'+v.artist+'</strong> <strong class="play_time">'+v.duration+'</strong>  <div class="list_cp">  <strong class="btn_like" title="喜欢" name="" mid="004fQTu016b9W4">   <span>我喜欢</span>   </strong>   <strong class="btn_share" title="分享"> <span>分享</span> </strong>  <strong class="btn_fav" title="收藏到歌单"> <span>收藏</span> </strong>  <strong class="btn_del" title="从列表中删除"> <span>删除</span> </strong></div> </li>)')
       .appendTo($('#cc'))
     })
    }
  makelist();
  $('.open_list span').text(database.length)
	// var database=[
	// {"title":"不为谁而作的歌(Live)","src":"./musics/不为谁而作的歌(Live).MP3","artist":"林俊杰","duration":"1:43"},
	// {"title":"下雨天","src":"./musics/下雨天.MP3","artist":"南拳妈妈","duration":"2:16"},
	// {"title":"此生不换(《仙剑奇侠传3电视剧插曲)","src":"./musics/此生不换 (《仙剑奇侠传3》电视剧插曲).MP3","artist":"青鸟飞鱼 ","duration":"1:43"},
	// {"title":"分手旅行","src":"./musics/分手旅行.MP3","artist":"苏霏_刘玥","duration":"2:16"},
	// {"title":"英雄联盟之大圣归来 (DJ版)","src":"./musics/英雄联盟之大圣归来(DJ版).MP3","artist":"小可","duration":"1:43"},
	// {"title":"偏爱","src":"./musics/偏爱.MP3","artist":"张芸京","duration":"2:16"},
	// {"title":"巴赫旧约","src":"./musics/巴赫旧约.MP3","artist":"汪苏泷","duration":"2:16"}
	// ]    
    var  a = $('audio').get(0)
	// console.log(a)
// 设置开始和暂停
	$('#btnplay').on('click',function(){
		var src = $('audio').attr('src')
		// console.log(src)
		if( !src ){   //解决和下面歌曲点击的冲突 判断audio属性值src是否为空
			a.src = database[0].filename
			$('#cc li:nth-child(1)').addClass('play_current')
	 $('#music_name').text(database[0].title)
     $('.singerr_name').text(database[0].artist)
     $('.play_date').text(database[0].duration)
		}
		if( a.paused === true){
			a.play()
		}else{
			a.pause()
		}
	})
	//界面
	$('#btnplay').on('click',function(){
		if ( $(this).hasClass('play_bt') ){
        $(this).removeClass('play_bt')
		$(this).addClass('pause_bt')
		}else{
			$(this).removeClass('pause_bt')
		    $(this).addClass('play_bt')
		}
	})
//设置进度条的进度
    a.ontimeupdate = function(){
    	var jjtd = ((a.currentTime/a.duration).toFixed(2))*100+'%';
    	$('#spanplaybar').css('width',jjtd)
    	$('#spanprogress_op').css('left',jjtd)
    }
//点击设置音量
    $('#spanvolume').on('click',function(e){
        var yl = (e.offsetX/this.offsetWidth).toFixed(2);
        var yll = (e.offsetX/this.offsetWidth).toFixed(2)*71+'px';
        a.volume = yl;
        // console.log(yll)
    	$('.volume_bar').css('width',yll)
    	$('.volume_op').css('left',yll)
    })
//拖动设置音量
  $('.volume_op').on('mousedown',function () {
    $(document).on('mousemove',function (e) {
      var regulate=$('.volume_regulate');
      e.preventDefault();
      var left=(e.clientX-regulate.offset().left-$('.volume_op').width()/2).toFixed(0);
      if(left<0||left>regulate.width()){
        return;
      }
      a.volume=left/regulate.width();
    })
    $(document).on('mouseup',function () {
      $(this).off('mousemove');
    })
  })
//设置静音和非静音
    var cc = a.volume
    // console.log(cc)
    $('#spanmute').on('click',function(){
    	if( a.volume === 0 ){
            a.volume = cc;
            $('.volume_op').css('left',71)
    	}else{
    	a.volume = 0;    
    	$('.volume_op').css('left',0)		
       }
    })
    $('#spanmute').on('click',function(){
        if ( $(this).hasClass('volume_icon') ){
        $(this).removeClass('volume_icon')
		$(this).addClass('volume_mute')
		}else{
			$(this).removeClass('volume_mute')
		    $(this).addClass('volume_icon')
		}
    })
//点击展开列表
    $('#spansongnum1').on('click',function(){
    	if( $('.play_list_fram').hasClass('style')){
    	    $('.play_list_fram').removeClass('style').animate({opacity: '0'}, "slow");
    	}else{
            $('.play_list_fram').addClass('style').animate({opacity: '1'}, "slow");
        }
    })
//界面展开关闭
   $('.folded_bt').on('click',function(){   
   	   if( $('.m_player').hasClass('style')){
    	    $('.m_player').removeClass('style').animate({left: '-548px'}, "slow");
              var cc = window.screen.height 
        $('body').css({width:'100%',height:cc})
        document.documentElement.webkitRequestFullScreen()
        $('.kk').show()
    	}else{
            $('.m_player').addClass('style').animate({left: '0'}, "slow")
    	}
   })
   $(document).keydown(function(e){
       if(e.keyCode === 27){
        $('.kk').hide()
       }
   })
   $('.kk').on('click',function(){
    document.webkitCancelFullScreen();
    $(this).toggle()
   })
//点击那首唱那首
   var dangqian = 0;
   var bofang = function(){
   	a.play()
   	$('#cc li').removeClass('play_current').eq(dangqian).addClass('play_current')
     $('#music_name').text(database[dangqian].title)
     $('.singerr_name').text(database[dangqian].artist)
     $('.play_date').text(database[dangqian].duration)
	 $('#btnplay').addClass('pause_bt')
   }
   $('#cc').on('click','li',function(){
   	dangqian = $(this).index()
   	a.src = database[dangqian].filename
   	// console.log(dangqian)
   	bofang()
   })
//点击设置播放时间
   $('.player_bar').on('click',function(e){
   	var src = $('audio').attr('src')
   	  if( !src ){
   	  	return;
   	  }
   	  a.currentTime = a.duration*e.offsetX/this.offsetWidth
   })
   $('.player_bar').on('mouseenter mouseleave',function(){
   	  $('.time_show').toggle()
   	  var bfsj = (a.currentTime).toFixed(2)
   	  $('.time_show p').text(bfsj)
   	  // a.currentTime = a.duration*e.offsetX/this.offsetWidth
   })
//拖动设置播放时间
   $('.progress_op').on('mousedown',function () {
     $(document).on('mousemove',function (e) {
       var regulate=$('.play_bar');
       e.preventDefault();
       var left=(e.clientX-$('.progress_op').width()/2).toFixed(0);
       if(left<0||left>regulate.width()){
         return;
       }
       a.currentTime=left/regulate.width()*audio.duration;
     })
     $(document).on('mouseup',function () {
       $(this).off('mousemove');
     })
   })
//上一首
  $('#prevbt').on('click',function(){
  	if(dangqian === 0){
  		dangqian = database.length;
  	}
    dangqian -=1
  	a.src = database[dangqian].filename
  	// console.log(a.src)
  	bofang()
  })
//下一首
    $('#nextbt').on('click',function(){
    if(dangqian === database.length-1){
  		dangqian = -1;
  	}
  	dangqian +=1
  	a.src = database[dangqian].filename
  	// console.log(a.src)
  	bofang()
  })
//鼠标移上去出现删除
  $('#cc').on('mouseenter mouseleave','li',function(){
  	$(this).toggleClass('play_hover')
  })
//点击删除删除一条歌曲
$('.single_list ul').on('click','.btn_del',function(){
	var _i=$('.single_list .btn_del').index(this);
    //正在播放切到下一首
    if($(this).closest('li').hasClass('play_current')){
    	dangqian=_i+1;
    	bofang();
    }
    database=$.grep(database,function (v,i) {
    	return _i!==i;
    })
    $(this).closest('li').remove();
    $('#spansongnum1 span').text(database.length)
     return false; //阻止事件默认行为和默认事件
 })
//唱完一首接下一首

  var xunhuan = function(){
  	  var ms =$('#btnPlayway').attr('class')
  	//单曲循环
  	if( ms=== 'cycle_single_bt'){
  	  dangqian = dangqian
  	}else if( ms === 'unordered_bt'){
      var sj = Math.floor(Math.random()*database.length)
      // console.log(sj)
      dangqian = sj
  	}else if( ms=== 'ordered_bt'){
      dangqian = dangqian+1;
      if(dangqian === database.length){
      	// alert(1)
        a.pause();
        return;
       }
    }else{
        dangqian +=1;
  	   if( dangqian === database.length){
  		dangqian = 0;
  	  }
  	}
  	a.src = database[dangqian].filename
  	bofang()
  }
  $(a).on('ended',xunhuan)

//播放模式
   $('#btnPlayway').on('click',function(){
   	$('#divselect').show()
   })
   $('#divselect').on('click','strong',function(){
   	$('#btnPlayway').removeClass().addClass($(this).attr('class'))
   	 $('#divselect').hide()
   })

})