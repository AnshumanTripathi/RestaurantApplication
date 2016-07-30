angular.module("Restaurant",[])
    .controller("MenuController",['$scope', function ($scope) {
        $scope.items = [{
            name: 'Pizza',
            price: 10,
            selected: false
        },{
            name: 'Burger',
            price: 5,
            selected: false
        },{
            name: 'Nachos',
            price: 7,
            selected: false
        },{
            name: 'Taco',
            price: 3,
            selected: false
        },{
            name: 'Burrito',
            price: 7,
            selected: false
        },{
            name: 'Poha',
            price: 1,
            selected: false
        },{
            name: 'Jalebi',
            price: 1,
            selected: false
        },{
            name: 'Kachori',
            price: 2,
            selected: false
        },{
            name: 'Samosa',
            price: 2,
            selected: false
        }];
        $scope.selection=[];
        $scope.toggleSelection = function toggleSelection(item){
           if(item.selected){
              return ""+item.name;
           }
        }

        $scope.getTotal = function(){
          var total=0;
            for(var i=0;i<$scope.items.length;i++){
                var product = $scope.items[i];
                if(product.selected) {
                    total += product.price;
                }
            }
            return total;
        };
    }]);
