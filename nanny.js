;(function(win){
	let stg = win.localStorage;
	function nanny (item) {
	    this.get = function () {
	        return stg.getItem(item);
	    }
	    this.set = function (val) {
	        stg.setItem(item, val);
	    }
	    this.remove = function () {
	        stg.removeItem(item);
	    }
	    this.clear = function () {
	        stg.clear();
	    }
	}
	win.nanny = nanny;
})(window)