var coggno = angular.module('coggno', ['coggnoService'])

angular.module('coggnoService', ['ngResource']).
  factory('CoggnoDocuments', ['$resource', function($resource) {
    return $resource('/documents.json', {}, {
      index: { method: 'GET', isArray: true},
      create: { method: 'POST' }
    });
  }]).
  factory('CoggnoDocument', ['$resource', function($resource) {
    return $resource('/documents/:task_id.json', {}, {
      show: { method: 'GET' },
      update: { method: 'PUT' }
    });
  }]); 

function CoggnoDocumentDetailCtrl($scope, $http, $location){
  $scope.single_document = "";
  $scope.single_document_images = [];

  $http.get($location.url()).success(function(data){
    Galleria.unloadTheme('/assets/galleria.classic.min.js');

    $scope.single_document = data;
    $scope.single_document_images = data.images;
    
    Galleria.loadTheme('/assets/galleria.classic.min.js');
    // Galleria.run('#galleria');

    Galleria.ready(function() {
      var gallery = this; // galleria is ready and the gallery is assigned
      $('#full_screen').click(function() {
        gallery.toggleFullscreen(); // toggles the fullscreen
      });
    });

     Galleria.run('#galleria', {
        show: $scope.single_document.current_page
        // $('#full_screen').click(function(){
        //   gallery.toggleFullscreen(); // toggles the fullscreen        
        // });
    });

    Galleria.on('image', function(e){
      if(e.index == 0)
        return;
      $scope.slideChanged(e);
    });
  });

}

function CoggnoDocumentCtrl($scope, $http, $location, CoggnoDocuments, $routeParams){
  
  $http.get('/documents.json').success(function(data){
    $scope.documents = data;
  });

  // $scope.create = function(doc){

  //   d = new CoggnoDocuments(doc);  

  //     $scope.todos.push({text:, done:false});

  //   $scope.documents.push(d);
  //   // $scope.documents.push(d);
  //   // d.$create(function(doc){
  //   //   $location.path('show/' + doc.id);  
  //   // });
  // }

  $scope.slideChanged = function(slide){
    $http.post('documents/'+$routeParams.id+'/slide_changed?slide_index=' + slide.index).success(function(data){

    });
  }
}