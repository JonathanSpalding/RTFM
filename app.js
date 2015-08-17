var app = angular.module("rtfmApp", ["firebase", "ngRoute"]);


app.constant('fb', {
  url: 'https://rtfm-demo.firebaseio.com/JonathanSpalding'
});
app.config(function($routeProvider){
  $routeProvider
  .when("/threads", {
  })
  .when("/threads/:threadId", {
  })
  .otherwise({
	  rediredtTo: "/threads"
	  })
});
