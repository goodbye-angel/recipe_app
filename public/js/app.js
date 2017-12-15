const app = angular.module('worldbank', []);


app.controller('mainController', ['$http', function ($http) {
    //stuff

    this.recipes = [];
    this.newRecipe = {};

    //click on region name and newRecipe store in global variable
    this.clickFornewRecipes = (id) => {
        console.log()
        $http({
            method: 'GET',
            url: '/recipes/' + id
        }).then(response => {
            this.newRecipe = response.data;
            console.log(this.newRecipe);
        }, error => {
            console.error(error.message);
        }).catch(err => console.error('Catch: ', err));
    }

    //load immediately on page load 
    this.clickFornewRecipes();



    this.uniqueRegions = () => {
        $http({
            method: 'GET',
            url: '/recipes/uniqueRegions'
        }).then(response => {
            this.regions = response.data;
            
        }, error => {
            console.error(error.message);
        }).catch(err => console.error('Catch: ', err));
    }
    //load immediately on page load 
    this.uniqueRegions();



    
    this.createRecipe = () => {
        $http({
            method: 'POST',
            url: '/recipes',
            data: this.newRecipe
        }).then(response => {
            this.recipes.push(response.data);
            console.log(response.data);
            // this.newRecipe = {};
        }, error => {
            console.error(error.message);
        }).catch(err => console.error('Catch: ', err));
    }






}]);