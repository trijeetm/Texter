angular.module('starter.controllers', [])

.controller('DirectCtrl', function($scope, $ionicLoading, $ionicPopup, API) {
	$scope.msg = {};

	$scope.sendMessage = function () {
		console.log($scope.msg);
	  
	  $ionicLoading.show({
	    template: "Sending direct message to " + $scope.msg.to
	  });
    
    API.sendDirectMessage($scope.msg.to, $scope.msg.text).then(function(data) {
      if (data.data.status == "success") {
        $scope.msg.to = "";
        $scope.msg.text = "";
        var alertPopup = $ionicPopup.alert({
         	title: "Delivered!",
         	template: "Direct message sent successfully"
        });
        alertPopup.then(function(res) {
          console.log('Success');
        });
      } else {
        var alertPopup = $ionicPopup.alert({
         	title: "Failure!",
        	template: "Something went wrong! Please try again later."
        });
        alertPopup.then(function(res) {
          console.log('Error');
        });
      }

      $ionicLoading.hide();
    });
	}
})

.controller('ListsCtrl', function($scope, API, $ionicLoading) {
	$ionicLoading.show({
	  template: "Loading message lists"
	});

	API.getLists().then(function (data) {
		$scope.lists = data.data.lists;	
		console.log($scope.lists);

		$ionicLoading.hide();
	});
})

.controller('MessageListCtrl', function($scope, $ionicLoading, $ionicPopup, $stateParams, API) {
	$scope.list = {};

	$ionicLoading.show({
	  template: "Preparing list"
	});

	API.getLists().then(function (data) {
		$scope.list = data.data.lists[$scope.msg.listId - 1];	


		window.setTimeout(function () {
			$ionicLoading.hide();
		}, 1000);
	});

	$scope.msg = {};
	$scope.msg.listId = $stateParams.listId;

	$scope.sendMessage = function () {
		console.log($scope.msg);
	  
	  $ionicLoading.show({
	    template: "Sending messages to list"
	  });
    
    API.sendListMessage($scope.msg.listId, $scope.msg.text).then(function(data) {
      if (data.data.status == "success") {
        $scope.msg.text = "";
        var alertPopup = $ionicPopup.alert({
         	title: "Delivered!",
         	template: "List messaged successfully"
        });
        alertPopup.then(function(res) {
          console.log('Success');
        });
      } else {
        var alertPopup = $ionicPopup.alert({
         	title: "Failure!",
        	template: "Something went wrong! Please try again later."
        });
        alertPopup.then(function(res) {
          console.log('Error');
        });
      }

      $ionicLoading.hide();
    });
	}
});
