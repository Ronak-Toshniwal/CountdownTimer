  function setTime() {
		date = prompt("YYYY DD MM 00:00:00");
			  function doStuff() {
						var d2021 = new Date(date).getTime();
						dnow = new Date().getTime();
						var dleft = d2021 - dnow
						var days = Math.floor(dleft / (1000 * 60 * 60 * 24));
						var hours = Math.floor((dleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
						var mins = Math.floor((dleft % (1000 * 60 * 60)) / (1000 * 60));
						var secs = Math.floor(dleft % (1000 * 60) / (1000));
						document.getElementById("valday").innerHTML = days;
						document.getElementById("valHour").innerHTML = hours;
						document.getElementById("valMins").innerHTML = mins;
						document.getElementById("valSec").innerHTML = secs;
					}
			setInterval(doStuff, 1000);
		}
 setTime();