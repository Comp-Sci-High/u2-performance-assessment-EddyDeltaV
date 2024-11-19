const prompt = require('prompt-sync')()

const apiKey = "BQDsWZt088WOrpX0gXtvEU-tqesPD_YjNLJM4yOR0BLhed4gVGkSGRRPmX9nL2QbgRl2ikMgP3pr8QHebpX-P-AiVEv4UNwgHxmNsDNmaNq4py_lUkd4VVOFYUE_EKGsz6YMwOeUdLMp5Usy8NpMJfhiE0BrWNyKcPX1uqhc5hlYm4TdtGCyYlMP9FJ4G9vFynLyTbLOsFKGq5ClK2WUpuFWUfWjc4rcEXkzBCKHAimafF-8bZ4363eZoZaRGIo4Tky7pH3z4-JSexD4UlndREDVN1kbYyNHvmPLJTW5wretT1SFAyUo6FBcUfhBVLH-Ta2ii4LBv-uZcEgAmDUr3GqM"
const URL = "https://api.spotify.com/v1/users/59oOaUav2cqt9zkhpQgmru/playlists/"

async function fetchSpotifyPlaylists() {
  const options = {
    method: "GET",
    headers: {
     Authorization: `Bearer ` + apiKey,
     'Content-Type': 'application/json'
    },
  
    };
}
fetchSpotifyPlaylists(URL)
 try {const response = await fetch(spotifyURL, opitons)
  let data = await fetch(spotifyURL)
  console.log("spotify Playlists: " , data)
 return data;
} catch(error) {
  console.error("possible errors include: ", error)
}


const response = await fetch(addPlaylistSongs, options);{
   const data = await response.json();
 console.log(data);
 }


   const apiKey2 = "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"



   const url = "https://api.openai.com/v1/images/generations"

   const options = {
     method: "POST",
     headers: {
       Authorization: `Bearer ` + apiKey2,
       'Content-Type': 'application/json'
    },
     body: JSON.stringify(promptData)
   }
try {const response = await fetch(spotifyURL, opitons)
  let data = await fetch(spotifyURL)
  console.log("spotify Playlists: " , data)
 return data;
} catch(error) {
  console.error("possible errors include: ", error)
}

  const response2 = await fetch(url, options);
{
  const data2 = await response.json();
   console.log(data2); 
   return data2;
 }

 generateImage({
  prompt: "Spotify playists on a laptop  "
});

