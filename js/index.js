let vm = new Vue({
	el: '#app',
	data: {
		minute: 0,
		second: 0,
		millisecond: 0,
		btnName: true
	},
	methods: {
		timer (){
			if(this.btnName) return;

			this.millisecond ++;
			if(this.millisecond == 99){
				this.second ++;
				this.millisecond = 0
			}
			if(this.second == 59){
				this.minute ++;
				this.second = 0;
			}
		},
		start(){
			this.btnName = !this.btnName;
			let startTimer = setInterval('vm.timer()',10);
		},
		reset() {
			this.minute = this.second = this.millisecond = 0;
		}
	},
	computed: {
		zerofill: function(){
			let strmin = ('0' + this.minute).slice(-2);
			let strsec = ('0' + this.second).slice(-2);
			let strmillisec = ('0' + this.millisecond).slice(-2);
			return { strmin, strsec, strmillisec }
		}
	}
});