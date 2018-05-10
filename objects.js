var playlist = {artistName : songTitle};

var artistName = "Prints";
var songTitle = "Purple Rain";

function updatePlaylist(playlist, artistName, song){
  Object.assign(playlist, {name: song})
}