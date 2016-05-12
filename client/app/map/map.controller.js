/**
 * Created by annadowling on 30/04/2016.
 */
/**
 * Created by annadowling on 17/03/2016.
 * The purpose of this controller is to handle the Google Maps API searching functionality displayed on the map page of this application.
 * This controller sets the default lat and long,
 * Takes in user input to create location suggestions,
 * Performs a fly to address based on the user selection.
 * Adds markers to the map.
 * Sets the map type (Hybrid - Satellite and Terrain)
 */
angular.module('yoFitFocusApp').config(iconConfiguration);
angular.module('yoFitFocusApp').controller('MapController', ['$scope', '$mdToast', MapController]);

function iconConfiguration($mdIconProvider) {
  $mdIconProvider.defaultIconSet('icons_24x24.svg', 24); // sets the default marker icons
}

function MapController($scope, $mdToast) {
  var map;
  var geocoder;

  $scope.view = {
    addressInput: '',
    places: [],
    selectedPlace: '',
    markers: []
  };
  $scope.findAddress = findAddress;
  $scope.centralLocation = centralLocation;
  $scope.findMarkers = findMarkers;

  InitializeComponents();

  function InitializeComponents() { // initialise the map components to the display.
    var mapConfig = {
      center: {
        lat: 52.1618665, //sets the default lat and long to be Splashworld Gym Tramore.
        lng: -7.1493735 // This is what will display by default when the map loads to the user.
      },
      zoom: 17, //default zoom level
      mapTypeId: google.maps.MapTypeId.HYBRID // map type
    };
    map = new google.maps.Map(document.getElementById('map'), mapConfig);
    geocoder = new google.maps.Geocoder();
  }

  function findAddress() {
    if (geocoder !== undefined) {
      geocoder.geocode({ // use the maps api geocoder class to convert the address into lat long co-ordinates.
          address: $scope.view.addressInput // via the user address input
        },
        function (results, status) {
          $scope.view.places = [];
          $scope.view.selectedPlace = '';
          switch (status) { // if geocoder successfully converts the user input to location results
            case google.maps.GeocoderStatus.OK:
              console.log(results);
              $scope.view.places = results;
              if (results.length < 2) { // if there is one result, display this automatically
                $scope.view.selectedPlace = results[0].place_id;
                $scope.view.addressInput = results[0].formatted_address;
                centralLocation();
              } else showMessage('Found ' + $scope.view.places.length + ' locations'); // or display options in the dropdown
              break;
            case google.maps.GeocoderStatus.ZERO_RESULTS:
              showMessage('No results found'); // no results return to user no results found
              break;
            case google.maps.GeocoderStatus.REQUEST_DENIED:
              showMessage('The search request has been denied'); // not a searchable location on the map.
              break;
            case google.maps.GeocoderStatus.INVALID_REQUEST:
              showMessage('Invalid search'); // invalid input
              break;
          }
          $scope.$apply();
        }
      );
    }
  }

  function centralLocation() {
    if ($scope.view.selectedPlace !== undefined & $scope.view.selectedPlace !== '') { // if the selectedLocation is not blank or null
      var location = _.result(_.find($scope.view.places, function (x) { //pass the selectedPlace result to the method
        return x.place_id === $scope.view.selectedPlace; //set the place_id equal to the user selection
      }), 'geometry.location');
      if (location !== undefined) {
        var marker = new google.maps.Marker({ //assign a new map marker with the position equal to the geometry class location
          position: location,
          map: map
        });
        $scope.view.markers.push(marker); // push the markers to the maps
        map.setCenter(location); // et the new location to display to the user on the map
      } else {
        showMessage('Could not display the location'); // if it cant find the location display the following message
      }
    }
  }

  function findMarkers() {
    for (var i = 0; i < $scope.view.markers.length; i++) {
      $scope.view.markers[i].setMap(null);
    }
    $scope.view.markers = [];
  }


  function simpleToastBase(message, position, delay, action) {
    $mdToast.show(
      $mdToast.simple()
        .content(message)
        .position(position)
        .hideDelay(delay)
        .action(action)
    );
  }

  function showMessage(message) { // handles the display of the toast message which is called when directions are entered by a user.
    simpleToastBase(message, 'top right', 6000, 'X'); // displays this toast with the appropriate result message in the top right hand corner.
  }
};


