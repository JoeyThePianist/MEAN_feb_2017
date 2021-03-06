var app = angular.module('app', [])
app.factory('productFactory', ['$http', function($http) {
  var factory = {};
  var products = [];
  factory.index = function(callback){
    callback(products);
  }
  factory.create = function(product, callback){
    if(product.price && Number(parseFloat(product.price))==product.price){
      products.push(product);
      callback(products);
    }
  }
  factory.delete = function(id, callback){
    products.splice(id,1);
    callback(products);
  }
  return factory;
}]);



app.controller('productController', ['$scope','productFactory', function($scope, productFactory) {
  function setProducts(data){
    $scope.products = data;
    $scope.product = {};
  }
  $scope.product = {};
  $scope.products = {};
  $scope.index = function(){
    productFactory.index(setProducts);
  }
  $scope.index();
  $scope.create = function(){
    productFactory.create($scope.product, setProducts);
  }
  $scope.delete = function(id){
    productFactory.delete(id,setProducts);
  }
}]);
