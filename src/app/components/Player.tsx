import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import SpotifyPlayer from "react-spotify-web-playback";

// interface Props {
// 	accessToken: any;
// 	trackUri: any;
// }
const Player: React.FC = () => {
	// const [play, setPlay] = useState(false);
	// useEffect(() => setPlay(true), [trackUri])

	// if (!accessToken) return null;
	// return <SpotifyPlayer
	//       callback={state => {if(!state.isPlaying) setPlay(false)}}
	//       play={true}
	//       token={accessToken}
	//       showSaveIcon uris={trackUri ? [trackUri] : []}
	// />;
	return (
		<div className="bg-[#181818] h-screen text-white">
			Music player
                  {/* <AudioPlayer layout="stacked-reverse" /> */}
		</div>
	);
};

export default Player;
