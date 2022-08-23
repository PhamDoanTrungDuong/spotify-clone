import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import TrackSearchResult from "./TrackSearchResult";
import Player from "./Player";

interface Props {
	code: any;
}

const spotifyApi = new SpotifyWebApi({
	clientId: "c2bbb093651d43f999d789c27b4c9075",
});

const Dashboard: React.FC<Props> = ({ code }) => {
	const accessToken = useAuth(code);
	const [pop, setPop] = useState<any>([]);
	const [summer, setSummer] = useState<any>([]);
	const [mood, setMood] = useState<any>([]);
	const [focus, setFocus] = useState<any>([]);

	useEffect(() => {
		if (!accessToken) return;
		spotifyApi.setAccessToken(accessToken);
	}, [accessToken]);

	// const [search, setSearch] = useState("");
	// const [searchResult, setSearchResult] = useState<any>([]);
	// const [playingTrack, setPlayingTrack] = useState<any>();
	// const chooseTrack = (track: any) => {
	//       setPlayingTrack(track)
	//       setSearch('');
	// }

	// useEffect((): any => {
	// 	if (!search) return setSearchResult([]);
	// 	if (!accessToken) return;
	//       let cancel = false;

	// 	spotifyApi.searchTracks(search).then((res) => {
	//             if(cancel) return
	// 		setSearchResult(
	// 			res.body.tracks?.items.map((track) => {
	// 				const smallestAlbumImage = track.album.images.reduce(
	// 					(smallest, image) => {
	// 						if (image.height! < smallest.height!)
	// 							return image;
	// 						return smallest;
	// 					},
	// 					track.album.images[0]
	// 				);

	// 				return {
	// 					artist: track.artists[0].name,
	// 					title: track.name,
	// 					uri: track.uri,
	// 					albumUrl: smallestAlbumImage.url,
	// 				};
	// 			})
	// 		);
	// 	});
	//       return () => cancel = true;
	// }, [search, accessToken]);

	useEffect(() => {
		spotifyApi
			.getPlaylistsForCategory("pop", {
				country: "US",
				limit: 5,
				offset: 0,
			})
			.then((res) => {
				setPop(
					res.body.playlists.items.map((playlist) => {
						return {
							name: playlist.name,
							description: playlist.description,
							albumUrl: playlist.images[0].url,
						};
					})
				);
			})
			.catch((err) => {
				console.log("Something went wrong!", err);
			});
		spotifyApi
			.getPlaylistsForCategory("rock", {
				country: "US",
				limit: 5,
				offset: 0,
			})
			.then((res) => {
				setSummer(
					res.body.playlists.items.map((playlist) => {
						return {
							name: playlist.name,
							description: playlist.description,
							albumUrl: playlist.images[0].url,
						};
					})
				);
			})
			.catch((err) => {
				console.log("Something went wrong!", err);
			});
		spotifyApi
			.getPlaylistsForCategory("mood", {
				country: "US",
				limit: 5,
				offset: 0,
			})
			.then((res) => {
				setMood(
					res.body.playlists.items.map((playlist) => {
						return {
							name: playlist.name,
							description: playlist.description,
							albumUrl: playlist.images[0].url,
						};
					})
				);
			})
			.catch((err) => {
				console.log("Something went wrong!", err);
			});
	}, [accessToken]);

	const truncateString = (str: string, num: number) => {
		if(str?.length > num) {
		  return str.slice(0, num) + ' and more';
		}else{
		  return str
		}
	    }

	return (
		<div className="bg-[#1E1E1E] w-full py-6 px-8">
			<div className="my-2">
				<div className="flex flex-row justify-between items-center">
					<h1 className="text-2xl font-bold text-white hover:underline duration-75 cursor-pointer">Spotify Playlists</h1>
					<h4 className="text-[#A7A7A7] text-xs font-bold hover:underline cursor-pointer" >SEE ALL</h4>
				</div>
				<div className="my-4 flex flex-row justify-center gap-5">
					{pop.map((item: any) => {
						return (
							<div key={item.albumUrl} className='bg-[#171717] hover:bg-[#272727] cursor-pointer text-white rounded-lg p-4'>
								<div>
									<div>
										<img src={item.albumUrl} alt={item.name} className='w-full rounded-md' />
									</div>
									<div className="mt-3">
										<h3 className="text-sm font-bold">{item.name}</h3>
										<p className="text-[14px] text-[#A7A7A7] mt-2">{truncateString(item.description, 25)}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<div className="my-2">
				<div className="flex flex-row justify-between items-center">
					<h1 className="text-2xl font-bold text-white hover:underline duration-75 cursor-pointer">Summer</h1>
					<h4 className="text-[#A7A7A7] text-xs font-bold hover:underline cursor-pointer" >SEE ALL</h4>
				</div>
				<div className="my-4 flex flex-row justify-center gap-5">
					{summer.map((item: any) => {
						return (
							<div key={item.albumUrl} className='bg-[#171717] hover:bg-[#272727] cursor-pointer text-white rounded-lg p-4'>
								<div>
									<div>
										<img src={item.albumUrl} alt={item.name} className='w-full rounded-md' />
									</div>
									<div className="mt-3">
										<h3 className="text-sm font-bold">{item.name}</h3>
										<p className="text-[14px] text-[#A7A7A7] mt-2">{truncateString(item.description, 25)}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<div className="my-2">
				<div className="flex flex-row justify-between items-center">
					<h1 className="text-2xl font-bold text-white hover:underline duration-75 cursor-pointer">Latin</h1>
					<h4 className="text-[#A7A7A7] text-xs font-bold hover:underline cursor-pointer" >SEE ALL</h4>
				</div>
				<div className="my-4 flex flex-row justify-center gap-5">
					{mood.map((item: any) => {
						return (
							<div key={item.albumUrl} className='bg-[#171717] hover:bg-[#272727] cursor-pointer text-white rounded-lg p-4'>
								<div>
									<div>
										<img src={item.albumUrl} alt={item.name} className='w-full rounded-md' />
									</div>
									<div className="mt-3">
										<h3 className="text-sm font-bold">{item.name}</h3>
										<p className="text-[14px] text-[#A7A7A7] mt-2">{truncateString(item.description, 25)}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
		// <div className="max-w-[1140px] flex flex-col mx-auto h-screen mt-5">
		// 	<form>
		// 		<input
		// 			className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none"
		// 			type="search"
		// 			placeholder="Search Songs/Artists"
		// 			value={search}
		// 			onChange={(e) => setSearch(e.target.value)}
		// 		/>
		// 	</form>
		// 	<div className="flex-grow my-2 overflow-y-auto">
		//             {searchResult.map((track: any) => {
		//                   return (
		//                         <TrackSearchResult chooseTrack={chooseTrack} track={track} key={track.uri} />
		//                   )
		//             })}
		//       </div>
		// 	<div>
		//             {/* <Player trackUri={playingTrack?.uri} accessToken={accessToken} /> */}
		//       </div>
		// </div>
	);
};

export default Dashboard;
