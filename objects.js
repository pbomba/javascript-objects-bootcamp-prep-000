var playlist = {artistName : songTitle};

//var artistName = "Prints";
//var songTitle = "Purple Rain";

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign(playlist, {artistName: songTitle})
}