var playlist = {"Jamiroquai" : "Cosmic Girl", artistName : songTitle};

//var artistName = "Prints";
//var songTitle = "Purple Rain";

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign(playlist, {artistName: songTitle})
}