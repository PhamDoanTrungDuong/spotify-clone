import React from "react";

export interface ITrack {
	albumUrl: string;
	title: string;
	artist: string;
	uri: string;
}
interface Props {
	track: ITrack;
      chooseTrack: any
}
const TrackSearchResult: React.FC<Props> = ({ track, chooseTrack }) => {
      const handlePlay = () => {
            chooseTrack(track)
      }
      return (
		<div>
			<div className="flex m-2 items-center cursor-pointer" onClick={handlePlay}>
				<img
					src={track.albumUrl}
					alt={track.title}
					className="h-[64px] w-[64px] rounded-full"
				/>
				<div className="ml-5">
					<div className="font-semibold">{track.title}</div>
					<div className="text-gray-400">{track.artist}</div>
				</div>
			</div>
		</div>
	);
};

export default TrackSearchResult;
