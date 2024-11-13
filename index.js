async function fetchSpotifyPlaylists(requestURL) {
    let request = await fetch(requestURL)
    let data = await request.json()
    console.log(data)
}
fetchSpotifyPlaylists("https://api.spotify.com/v1/users/{user_id}/playlists")