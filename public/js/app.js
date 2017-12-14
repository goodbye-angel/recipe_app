const app = angular.module('worldbank', []);

this.info = ''

app.controller('mainController', ['$http', function ($http) {
    //stuff


    this.counting = () => {
        $http({
            method: 'GET',
            url: '/wbinfo/count'
        }).then(response => {
            this.counting = response.data;
            
        }, error => {
            console.error(error.message);
        }).catch(err => console.error('Catch: ', err));
    }

    //load immediately on page load
    this.counting();

    //click on region name and info store in global variable
    this.clickForInfos = (regionName) => {
        console.log()
        $http({
            method: 'GET',
            url: '/wbinfo/byName/' + regionName
        }).then(response => {
            this.infos = response.data;
            this.info = this.infos[0];
            console.log(this.info);
        }, error => {
            console.error(error.message);
        }).catch(err => console.error('Catch: ', err));
    }

    //load immediately on page load 
    this.clickForInfos();



    this.uniqueRegions = () => {
        $http({
            method: 'GET',
            url: '/wbinfo/uniqueRegions'
        }).then(response => {
            this.regions = response.data;
            
        }, error => {
            console.error(error.message);
        }).catch(err => console.error('Catch: ', err));
    }
    //load immediately on page load 
    this.uniqueRegions();


  



    
    this.createDataZ = {};

    this.createData = () => {
        $http({
            method: 'POST',
            url: '/wbinfo',
            data: this.createDataZ
        }).then(response => {
            this.regions.push(response.data.region);
            this.createDataZ = {};
        }, error => {
            console.error(error.message);
        }).catch(err => console.error('Catch: ', err));
    }








}]);