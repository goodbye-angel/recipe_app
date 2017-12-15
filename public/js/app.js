const app = angular.module('RecipesApp', []);

app.controller('MainController', ['$http', function ($http) {

    this.createForm = {};

    this.recipe = '';

    this.recipes = [];

    // create
    this.createRecipe = () => {
        $http({
            method: 'POST',
            url: '/recipes',
            data: this.createForm
        }).then(response => {
            this.recipes.push(response.data);
            this.createForm = {};
        }, error => {
            console.error(error.message);
        }).catch(err => console.error('Catch: ', err));
    }

    // index
    this.getRecipes = () => {
        $http({
            method: 'GET',
            url: '/recipes'
        }).then(response => {
            this.recipes = response.data;
            this.recipe = this.recipes[0];
        }, error => {
            console.error(error.message);
        }).catch(err => console.error('Catch: ', err));
    }

    //load immediately on page load
    this.getRecipes();

    // delete
    this.deleteRecipe = (id) => {
        $http({
            method: 'DELETE',
            url: '/recipes/' + id
        }).then(response => {
            const removeByIndex = this.recipes.findIndex(recipe => recipe._id === id)
            this.recipes.splice(removeByIndex, 1);
        }
            , error => {
                console.error(error.message);
            }).catch(err => console.error('Catch: ', err));
    }

    // show
    this.chooseOneRecipe = (recipe) => {
        this.recipe = recipe;
        console.log(this.recipe.name);
    }



}]); //this closes app.controller
