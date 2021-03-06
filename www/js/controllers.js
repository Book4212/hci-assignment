angular.module('app.controllers', [])

.controller('homeCtrl', function($scope) {

})

.controller('tVCtrl', function($scope) {
	$scope.tvs = [
		{ title: "SAMSUNG 32 in. UA32FH4003" },
		{ title: "SAMSUNG 40 in. UA40H5003" },
		{ title: "SAMSUNG 24 in. UA24H4003" },
		{ title: "SAMSUNG 55 in. UA55J6200AK" }
	];
})

.controller('digitalTVCtrl', function($scope) {
	$scope.tvs = [
		{ title: "SAMSUNG 32 in. UA32J4003AK" },
		{ title: "SAMSUNG 40 in. UA40J5100AK" },
		{ title: "SAMSUNG 40 in. UA40J5125AK" },
		{ title: "SAMSUNG 48 in. UA48J5100AK" },
		{ title: "SAMSUNG 55 in. UA55JU6600K" }
	];
})

.controller('vDOCtrl', function($scope) {
	$scope.vdos = [
		{ title: "Sony DVP-SR660P DVD Player"},
		{ title: "Sony BDP-S1100 Blu Ray Player"},
		{ title: "Sony BDP-S1200 Blu Ray Player"},
		{ title: "Sony bdp-s5200 3d bluray player"},
		{ title: "Sony BDP- S5500 Blu-Ray Player"}
	];
})

.controller('audioCtrl', function($scope) {
	$scope.audios = [
		{ title: "SHAKE-X1D" },
		{ title: "MHC-ECL7D" },
		{ title: "GTK-N1BT"  }
	];
})

.controller('xtremerCtrl', function($scope) {
	$scope.xtremers = [
		{ title: "Xtreamer MK1"},
		{ title: "Xtreamer Pro"},
		{ title: "Xtreamer Ultra"},
		{ title: "Xtreamer Prodigy Silver"},
		{ title: "Xtreamer Prodigy 4K"}
	];
})

.controller('menu2Ctrl', function($scope) {

})

.controller('addAudioCtrl', function($scope) {
	$scope.audios = [
		{ title: "SHAKE-X1D" },
		{ title: "MHC-V7D" },
		{ title: "MHC-GT3D" },
		{ title: "SHAKE-3XD" },
		{ title: "SHAKE-X7D" },
		{ title: "MHC-M4V" },
		{ title: "MHC-ECL7D" },
		{ title: "GTK-N1BT"  }
	];
})

.controller('addDigitalTVCtrl', function($scope) {
	$scope.tvs = [
		{ title: "SAMSUNG 24 in. UA24H4003" },
		{ title: "SAMSUNG 32 in. UA32FH4003" },
		{ title: "SAMSUNG 32 in. UA32J4003AK" },
		{ title: "SAMSUNG 40 in. UA40H5003" },
		{ title: "SAMSUNG 40 in. UA40J5100AK" },
		{ title: "SAMSUNG 40 in. UA40J5125AK" },
		{ title: "SAMSUNG 48 in. UA48J5100AK" },
		{ title: "SAMSUNG 55 in. UA55J6200AK" },
		{ title: "SAMSUNG 55 in. UA55JU6600K" }
	];
})

.controller('addTVCtrl', function($scope) {
	$scope.tvs = [
		{ title: "SAMSUNG 24 in. UA24H4003" },
		{ title: "SAMSUNG 32 in. UA32FH4003" },
		{ title: "SAMSUNG 32 in. UA32J4003AK" },
		{ title: "SAMSUNG 40 in. UA40H5003" },
		{ title: "SAMSUNG 40 in. UA40J5100AK" },
		{ title: "SAMSUNG 40 in. UA40J5125AK" },
		{ title: "SAMSUNG 48 in. UA48J5100AK" },
		{ title: "SAMSUNG 55 in. UA55J6200AK" },
		{ title: "SAMSUNG 55 in. UA55JU6600K" }
	];
})

.controller('addVDOCtrl', function($scope) {
	$scope.vdos = [
		{ title: "Sony DVP-SR370 DVD Player"},
		{ title: "Sony DVP-SR660P DVD Player"},
		{ title: "Sony BDP-S1500 Blu-Ray Video Player"},
		{ title: "Sony DVP-SR760HP DVD Playe"},
		{ title: "Sony BDP-S1100 Blu Ray Player"},
		{ title: "Sony BDP-S1200 Blu Ray Player"},
		{ title: "Sony BDP-S4100 Blu Ray Player"},
		{ title: "Sony bdp-s5200 3d bluray player"},
		{ title: "Sony BDPS3500 Blu-ray Player"},
		{ title: "Sony BDP- S5500 Blu-Ray Player"}
	];
})

.controller('addXtremerCtrl', function($scope) {
	$scope.xtremers = [
		{ title: "Xtreamer MK1"},
		{ title: "Xtreamer eTRAYz"},
		{ title: "Xtreamer Pro"},
		{ title: "iXtreamer"},
		{ title: "Xtreamer Ultra"},
		{ title: "Xtreamer Prodigy Silver"},
		{ title: "Xtreamer Prodigy Black"},
		{ title: "Xtreamer Ultra 2"},
		{ title: "Xtreamer Prodigy 4K"}
	];
})

.controller('audioControllerCtrl', function($scope) {

})

.controller('tVControllerCtrl', function($scope) {

})

.controller('digitalTVControllerCtrl', function($scope) {

})

.controller('vDOControllerCtrl', function($scope) {

})

.controller('xtremerControllerCtrl', function($scope) {

})

.controller('tv-keypad', function($scope){

})

.controller('tv-volume', function($scope){

})

.controller('tv-favorite', function($scope){
	$scope.favorites = [
		{number: "33", name: "CH3 HD"},
		{number: "35", name: "CH7 HD"},
		{number: "31", name: "CH ONE"}
	];
})

.controller('tv-settings', function($scope){

})

.controller('audio-home', function($scope){

})

.controller('audio-music', function($scope){
	$scope.audios = [
		{ title: "Smoke On The Water" },
		{ title: "Angle with the shotgun" },
		{ title: "Gife(Musketeer)" },
		{ title: "Dancing(Musketeer)" }
	];
})

.controller('audio-volume', function($scope){

})

.controller('audio-settings', function($scope){

})

.controller('digitaltv-keypad', function($scope){

})

.controller('digitaltv-volume', function($scope){

})

.controller('digitaltv-favorite', function($scope){

})

.controller('digitaltv-settings', function($scope){

})

.controller('xtremer-home', function($scope){

})

.controller('xtremer-keyboard', function($scope){

})

.controller('xtremer-touch', function($scope){

})

.controller('xtremer-settings', function($scope){

})

.controller('vdo-home', function($scope){

})

.controller('vdo-sound', function($scope){

})

.controller('vdo-settings', function($scope){

})

