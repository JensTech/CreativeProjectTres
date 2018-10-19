angualr.module('app', [])
    .controller('mainCtrl', mainCtrl)
    .directive('ingredient', ingrdientDirective);
    
function mainCtrl($scope){
    
    $scope.users=[];
    
    $scope.addNew = function(user){
        $scope.users.push({
            name: user.name,
            quantity: user.quantity,
        });
        
     user.name='';
     user.quantity='';
    };
}

function ingrdientDirective () {
    return {
        scope: {
            user: '='
        },
        restrict: 'E',
        replace: 'true',
        template: (
            '<div class = "Item">' + 
             '<h4>{{user.name}}</h4>' + 
             '<h4>{{user.quantity}}</h4>'+
            '</div>'
        ),
   };
}