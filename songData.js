//songData.js
function song(nam, artis, img, easyN = 0, easyT = 0, mediumN = 0, mediumT = 0, hardN = 0, hardT = 0, expertN = 0, expterT = 0) {
    
    this.albumCover = img;
    this.name = nam;
    this.artist = artis;
    this.easyNotes = easyN;
    this.easyTimes = easyT;
    this.mediumNotes = mediumN;
    this.mediumTimes = mediumT;
    this.hardNotes = hardN;
    this.hardTimes = hardT;
    this.expertNotes = expertN;
    this.expertTimes = expterT;
}

var eyeOfTiger = new song("Eye of the Tiger", "Survivor", "eyeOfTheTiger.jpg",
    [47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 44, 44, 46, 44, 44, 46, 44, 44, 47, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 44, 44, 46, 44, 44, 46, 44, 44, 47, 46, 44, 44, 46, 47, 44, 46, 47, 44, 47, 46, 44, 44, 46, 47, 44, 46, 47, 44, 47, 46, 44, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47
],
[10.749, 10.974, 11.299, 11.799, 12.399, 12.949, 13.499, 14.049, 14.549, 15.124, 15.674, 16.224, 16.75, 17.324, 17.924, 18.449, 18.999, 19.524, 20.675, 21.074, 21.45, 22.799, 23.199, 23.624, 25.024, 25.399, 25.899, 26.5, 26.577, 26.649, 26.749, 26.828, 26.924, 26.999, 27.078, 27.174, 27.249, 27.327, 27.424, 27.5, 27.577, 27.674, 27.749, 27.824, 27.925, 28, 28.099, 28.274, 29.5, 29.899, 30.3, 31.999, 32.375, 32.774, 33.974, 34.274, 34.749, 37.15, 38.326, 38.724, 39.125, 40.499, 40.9, 41.375, 42.75, 43.15, 43.625, 45.975, 47.125, 47.6, 47.951, 49.351, 49.7, 50.175, 51.6, 52, 52.35, 54.8, 55.325, 55.9, 56.525, 57.051, 57.6, 58.176, 58.725, 59.326, 59.9, 60.426, 60.95, 61.5, 62.075, 62.625, 63.126, 63.726, 64.251, 64.825, 65.301, 65.925, 66.475, 66.975, 67.575, 68.1, 68.651, 69.225, 69.776, 70.35, 70.876, 71.4, 71.926, 72.526, 73.076, 73.651, 74.176, 74.726, 75.251, 75.851, 76.375, 76.801, 77.101, 77.501, 78.001, 78.625, 79.101, 79.675, 80.251, 80.801, 81.301, 81.901, 82.426, 83.001, 83.526, 84.101, 84.651, 85.276, 85.751, 86.401
],
[44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,109,44,44,44,44,44,109,46,44,44,109,110,44,44,44,44,109,46,44,44,109,44,44,44,109,44,46,109,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,109,44,44,44,109,46,44,109,44,44,44,44,44,44,109,46,44,44,109,44,44,109,44,109,46,46,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,109,44,109,110,109,44,46,44,44,44,44,109,110,109,109,44,44,46,46,46,46,46,46,44,109,46,109,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,109,44,44,109
],
[5.546,5.795,6.045,6.345,6.571,6.871,7.145,7.395,7.695,7.945,8.195,8.47,8.695,8.945,9.17,9.446,9.695,9.971,10.221,10.471,10.695,10.997,11.221,11.47,11.745,12.021,12.27,12.471,12.72,12.996,13.27,13.521,13.77,13.996,14.221,14.37,14.37,14.67,14.896,15.221,15.471,15.495,15.896,15.946,16.296,16.32,16.47,16.895,17.17,17.42,17.646,17.646,18.045,18.07,18.47,18.495,19.02,19.27,19.62,19.921,19.945,20.27,20.672,20.696,21.271,21.35,21.446,21.521,21.622,21.695,21.771,21.872,21.947,22.02,22.12,22.197,22.271,22.371,22.448,22.52,22.623,22.7,22.771,22.87,22.95,23.146,23.195,23.796,24.12,24.346,24.72,24.72,25.096,25.121,25.721,26.046,26.296,26.62,26.821,26.845,27.145,27.145,27.571,27.571,28.221,28.471,28.721,28.771,29.146,29.146,29.445,29.471,30.045,30.12,30.224,30.295,30.395,30.474,30.546,30.645,30.724,30.795,30.896,30.973,31.046,31.146,31.221,31.296,31.396,31.475,31.547,31.646,31.725,31.821,31.895,31.947,33.096,33.121,33.546,33.546,33.945,33.971,34.546,34.622,34.721,34.799,35.346,35.346,35.796,35.796,36.246,36.246,36.821,36.921,36.997,37.096,37.171,37.596,37.596,37.971,38.421,38.421,39.021,39.098,39.171,39.27,39.346,39.446,39.521,39.599,39.696,39.77,39.851,39.948,40.02,40.099,40.198,40.27,40.371,40.45,40.52,40.621,40.7,40.771,40.871,40.871,41.821,41.998]
);


var ironMan = new song("Iron Man", "Black Sabbath", "ironMan.jpg",
    [47,47,47,47,46,46,46,44,46,47,47,46,47,46,47,46,47,47,46,44,77,77,44,46,47,46,44,77,44,46,47,46,77,44,46],
    [1.836,2.411,2.487,2.587,2.739,3.337,3.412,3.636,4.061,4.511,5.212,5.486,5.686,5.936,6.136,6.386,6.661,7.061,7.461,7.861,8.636,9.212,9.436,10.238,10.662,11.037,11.662,11.962,12.264,12.536,12.836,13.211,13.637,14.012,14.512]
                      );

var livingOnAPrayer = new song("Living on a Prayer", "Bon Jovi", "livingOnAPrayer.jpg",
    [46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 44, 44, 46, 44, 44, 46, 44, 44, 47, 46, 44, 44, 46, 47, 44, 46, 47, 44, 47, 46, 44, 44, 46, 47, 44, 46, 47, 44, 47, 46, 44, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47],
    [1.836,2.411,2.487,2.587,2.739,3.337,3.412,3.636,4.061,4.511,5.212,5.486,5.686,5.936,6.136,6.386,6.661,7.061,7.461,7.861,8.636,9.212,9.436,10.238,10.662,11.037,11.662,11.962,12.264,12.536,12.836,13.211,13.637,14.012,14.512]
                              );

var hotelCalifornia = new song("Hotel California", "Eagles", "hotelCalifornia.jpg" );

var throughTheFireAndFlames = new song("Through the Fire and Flames", "Dragon Force", "throughTheFireAndFlames.jpg");
var spiritInTheSky = new song("Spirit in the Sky", "Norman Greenbaum", "spiritInTheSky.jpg");
var wantedDeadOrAlive = new song("Wanted Dead or Alive", "Bon Jovi", "livingOnAPrayer.jpg");
var hitMeWithYourBestShot = new song("Hit Me with Your Best Shot", "Pat Benatar", "hitMeWithYourBestShot.jpg");
var crazyOnYou = new song("Crazy On You", "Heart", "crazyOnYou.jpg");
var barracuda = new song("Barracuda", "Heart", "barracuda.jpg");
var rockAndRollAllNite = new song("Rock and Roll All Nite", "Kiss", "rockAndRollAllNite.jpg");
var schoolsOut = new song("School's Out", "Alice Cooper", "schoolsOut.jpg");
var slowRide = new song("Slow Ride", "Foghat", "slowRide.jpg");
var welcomeToTheJungle = new song("Welcome to the Jungle", "Guns N' Roses", "welcomeToTheJungle.jpg");

// 14
var songsList = [barracuda, crazyOnYou, eyeOfTiger, hitMeWithYourBestShot, hotelCalifornia, ironMan, livingOnAPrayer, rockAndRollAllNite, schoolsOut, slowRide, spiritInTheSky, throughTheFireAndFlames, wantedDeadOrAlive, welcomeToTheJungle];