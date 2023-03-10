let div = document.getElementById('box')
    console.log(div)
    

    		
		// 获取元素
		// 按下，鼠标移动的时候，div跟着鼠标移动
		// 因为作用域问题，这两个变量需要是全局变量
		let startx,starty;

		function moveDiv (e) {
            // 鼠标相对于文档距离
            // console.log(e.clientX);
            // console.log(e.clientY);
			// 让div移动：获取鼠标位置设置给div的left金额top
			// 获取鼠标位置
			let x = e.clientX - startx;
			let y = e.clientY - starty;

			// 边界
		if (x < 30) {
			x = 0;
		} else if ( x > document.documentElement.clientWidth - div.offsetWidth ) {
			x = document.documentElement.clientWidth - div.offsetWidth;
		}


		if (y < 0) {
			y = 0;
		} else if (y > document.documentElement.clientHeight - div.offsetHeight) {
			y = document.documentElement.clientHeight - div.offsetHeight;
		}

			// 设置给div
			div.style.left = x + 'px';
			div.style.top= y + 'px';
		}



		div.addEventListener('mousedown', function (ev) {
            // 鼠标按下的位置相对于元素的位置
            console.log(ev.offsetX);
            console.log(ev.offsetY);
			// 属性按下的时候，我们得获取鼠标距离div的x和y位置
			startx = ev.offsetX;
			starty = ev.offsetY;

			// 添加鼠标移动
			document.addEventListener('mousemove', moveDiv);
		});



		// 松开，鼠标移动的时候，div不动
		div.addEventListener('mouseup', function () {
			// 移除移动事件
			document.removeEventListener('mousemove', moveDiv);
		});
