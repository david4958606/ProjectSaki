用户 = "";
			function getMsg(addr, process) {
				var request = new XMLHttpRequest();	//第一步：建立所需的对象
				request.open('GET', addr, true);		//第二步：打开连接,将请求参数写在网址中
				request.send();						//第三步：发送请求
				request.onreadystatechange = function () {
					if (request.readyState == 4 && request.status == 200) {
						process(request.responseText);
					}
				};
			}
			function getImg(){
				if(user == "") alert("未登录!");
				else {
					getMsg("/pick?" + user, function rri(t) {
						document.getElementById("img_display").src = "/" + t;
					});
				}
			}
			function logIn() {
				input = prompt("请输入用户名，错误的用户名无法加载图片","示例");
				if(input.length == 2) user = input;
			}
			function Encode(text) {
				text = escape(text.toString()).replace(/\+/g, "%2B");
				var re = text.match(/(%([0-9A-F]{2}))/gi);
				if (re) {
					for (var bit = 0; bit < re.length; bit++) {
						var code = re[bit].substring(1,3);
						if (parseInt(code, 16) >= 128) {
							text = text.replace(re[bit], '%u00' + code);
						}
					}
				}
				text = text.replace('%25', '%u0025');
				return text;
			}
			function Sixty(six) {
    			var length = six.length, array = new Array(length), code;
    			for (var bit = 0; bit < length; bit++) {
        			code = six.charCodeAt(bit);
        			if (48<=code && code < 58) code -= 48;
        			else code = (code & 0xdf) - 65 + 10;
        			array[bit] = code;
    			}
    			return array.reduce(function(sum, remain) {
        			sum = 16 * sum + remain;
        			return sum;
    			}, 0);
			}
			function Reg() {
				if(user == "") {
					input = Encode(prompt("请输入密码"));
					input = Sixty(input.substring(2,6) + input.substring(8, 12));
					码 = ((Date.parse(new Date())/1000) ^ input).toString().padStart(10, "0");
					getMsg("/signup?" + code, function rr(t) {
						if(t != "null" && t != "erro") {
							prompt("这是您的用户名，请复制好后妥善保存", t);
							user = t;
						} else alert("密码错误!");
					});
				}
			}
			function Vote(cla) {
				if(user != "") {
					img = document.getElementById("img_display").src;
					getMsg("/vote?uuid=" + user + "&img=" + img.substring(img.lastIndexOf('/')+1, img.length) + "&class=" + cla, function rv(t) {
						alert(t);
						getImg();
					});
				} else alert("请登录!");
			}
			hiden = false;
			col = document.getElementsByTagName("div");
			function Show() {
				hiden = !hiden;
				col[0].hidden = col[2].hidden = col[4].hidden = hiden;
				document.getElementById("btn_hide").innerText = hiden?"显示":"隐藏";
			}
			function Upload() {
				document.getElementById("upload_form").action = "upform?uuid=" + user;
			}