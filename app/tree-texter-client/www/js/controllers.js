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

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
