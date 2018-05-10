var playlist = {"Jamiroquai" : "Cosmic Girl"};

//var artistName = "Prints";
//var songTitle = "Purple Rain";

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign(playlist, {artistName: songTitle})
}