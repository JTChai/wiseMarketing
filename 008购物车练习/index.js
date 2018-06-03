
var cartController = function($scope){

	$scope.cart = [
		{

			id:1000,
			name:'iphone7',
			quantity:3,
			price:4300
		},
		{
			id:2000,
			name:'iphone8',
			quantity:5,
			price:5300
		},
		{
			id:188,
			name:'iphoneX',
			quantity:10,
			price:8399
		},
		{
			id:555,
			name:'imac',
			quantity:4,
			price:18500
		},
		{
			id:888,
			name:'ipad',
			quantity:88,
			price:4888
		}
	];
	/***
	*  增加方法
	***/
	$scope.add = function(id){


	}
	/***
	*  计算总价
	***/
	$scope.totalPrice = function(){

		var total = 0;

		angular.forEach($scope.cart,function(item){

			total += item.quantity * item.price;
		})

		return total;
	}
	/***
	*  计算总购买数
	***/
	$scope.totalQuantity = function(){

		var total = 0;

		angular.forEach($scope.cart,function(item){

			total += parseInt(item.quantity);
		})

		return total;
	}
	/***
	*  删除
	***/
	$scope.remove = function(id){

		var index = -1;

		angular.forEach($scope.cart,function(item,key){

			if(item.id === id){

				index = key;
			}
		});

		if(index !== -1){
			$scope.cart.splice(index,1)
		}
	}
	/***
	*  找一个元素的索引
	***/
	var findIndex = function(id){
		var index = -1;

		angular.forEach($scope.cart,function(item,key){
			if(item.id === id){
				index = key;
				return;
			}
		});
		return index;
	}
	/***
	*  添加add
	***/
	$scope.add = function(id){

		var index = findIndex(id);

		if(index !== -1){

			++$scope.cart[index].quantity;
		}
	}

	/***
	*  减少reduce
	***/
	$scope.reduce = function(id){

		var index = findIndex(id);

		if(index !== -1){
			var item = $scope.cart[index];
			if(item.quantity > 1){
				--item.quantity;
			} else {
				var returnKey = confirm('从购物车内删除该产品！');
				if(returnKey){
					$scope.remove(id);
				}
			}
		}
	}
}