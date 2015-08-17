var app = angular.module("rtfmApp");

app.service('threadService', function(fb) /*, $http, $q, $firebaseAuth, $firebaseObj*/{
  var firebaseRef = new Firebase('https://rtfmdvmtn.firebaseio.com/');







  // this.register = function(user){
  //   console.log(user);
  //   authObject.$createUser({
  //     email: user.email,
  //     password: user.password
  //   }).then(function(authData){
  //     var userRef = new Firebase('' + authData.uid);
  //     var userObj = $rirebaseObj(userRef);
  //     userObj.email = user.email;
  //     // userObj.profileImageUrl = authData.password.profileImageUrl;
  //     userObj.$save();.then(function(res){
  //       console.log(res);
  //       authObject.$authWithPassword({
  //         email: user.email,
  //         password: user.password
  //       }).then(function(loggedInUser){
  //         console.log(loggedInUser);
  //       }, function(error){
  //         console.log(error);
  //       })
  //     }, function(err){
  //       console.log(err);
  //     });
  //     console.log(authData);
  //   }, function(err){
  //     console.log(err);
  //   })
  // }
  // return dfd.promise
})
