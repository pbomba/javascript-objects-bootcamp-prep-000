var playlist = { Jamiroquai : "Cosmic Girl" };

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign( playlist, { [artistName] : songTitle } );
}

function removeFromPlaylist(playlist, artistName) {
  if delete playlist.artistName  {  
  return playlist};
}