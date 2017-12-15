const app = angular.module('RecipesApp', []);

app.controller('MainController', ['$http', function ($http) {

    this.createForm = {};

    this.recipe = '';

    this.recipes = [];


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

    this.deleteRecipe = (id) => {
        console.log("I'm going to delete you", id);
    }

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

/////----------edit doesnt work------------------------------------

    this.editRecipe = (recipe) => {

        $http({
            method: 'PUT',
            url: '/recipes/' + recipe._id,
            data: { recipe: recipe }
        }).then(response => {
            console.log(response.data);
        }, error => {
            console.error(error.message);
        }).catch(err => console.error('Catch: ', err));
    }
/////-------------------------------------------------------------



    this.chooseOneRecipe = (recipe) => {
        this.recipe = recipe;
        console.log(this.recipe.name);
    }


    this.addRecipe = (recipe) => {

        $http({
            method: 'PUT',
            url: '/recipes/' + recipe._id,
            data: { likes: recipe.likes }
        }).then(response => {
            console.log(response.data.likes);
        }, error => {
            console.error(error.message);
        }).catch(err => console.error('Catch: ', err));
    }


 



}]);
