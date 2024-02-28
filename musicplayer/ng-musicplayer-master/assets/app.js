var app = angular.module('app', ['angularSoundManager']);

app.controller('appCtrl', function ($scope) {
  $scope.songs = [
    { id: "1",
      mood: "happy",
      title: "Audio 1",
      artist: "Artist 1",
      url: "src/mp3/1.mp3",
      albumart: "src/img/1.jpg",
      album: "Singles"
    },
    { id: "2",
      mood: "happy",
      title: "Audio 2",
      artist: "Artist 2",
      url: "src/mp3/2.mp3",
      albumart: "src/img/2.jpg",
      album: "Ashes"
    },
    { id: "3",
      mood: "happy",
      title: "Audio 3",
      artist: "Artist 3",
      url: "src/mp3/3.mp3",
      albumart: "src/img/3.jpg",
      album: "Singles"
    },
    { id: "4",
      mood: "happy",
      title: "Audio 4",
      artist: "Artist 4",
      url: "src/mp3/4.mp3",
      albumart: "src/img/4.jpg",
      album: "Singles"
    },
    { id: "5",
    mood: "happy",
    title: "Audio 5",
    artist: "Artist 5",
    url: "src/mp3/5.mp3",
    albumart: "src/img/5.jpg",
    album: "Singles"
  },
  ];
  $scope.isPlaying = false;
  $scope.songHover = false;
})
