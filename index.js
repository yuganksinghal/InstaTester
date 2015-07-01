angular.module('project',[])
    .controller('Carousel', 
    	function ($scope, $http) {
    		$http.get('http://sheltered-falls-4288.herokuapp.com/tag_search?content=json').success(
    			function (data) {
            		$scope.Media = data;
        	});
    	    
    	    $scope.iterator = 0;
    	
    		$scope.navigate = function(e){
    			if(e.keyCode == 37){
    				++$scope.iterator;
    				console.log("37");
    			}
    			if(e.keyCode == 39){
    				--$scope.iterator;
    				console.log("39");
    			}
    		}
    	});

