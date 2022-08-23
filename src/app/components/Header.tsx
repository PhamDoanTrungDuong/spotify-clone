import React from "react";
import Login from "./Login";

const code = new URLSearchParams(window.location.search).get("code");

const Header: React.FC = () => {
	return (
		<div className="bg-[#0F0F0F] h-[70px] w-full">
			<div className="flex flex-row h-full p-8 justify-between items-center text-white">
				<div>
					<button className="bg-black rounded-full p-[10px] mx-3 cursor-pointer hover:bg-black/30 duration-100">
						<svg
							role="img"
							height="18"
							width="18"
							className="Svg-ytk21e-0 gFcOie fill-[#ffffff] IYDlXmBmmUKHveMzIPCF"
							viewBox="0 0 24 24">
							<path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path>
						</svg>
					</button>
					<button className="bg-black rounded-full p-[10px] cursor-pointer hover:bg-black/30 duration-100">
						<svg
							role="img"
							height="18"
							width="18"
							className="Svg-ytk21e-0 gFcOie fill-[#ffffff] IYDlXmBmmUKHveMzIPCF"
							viewBox="0 0 24 24">
							<path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path>
						</svg>
					</button>
				</div>
				<div className="flex justify-content-center items-center">
					{code ? (
						"UserABCD"
					) : (
						<>
							<button className="p-3 mr-1 text-[#B3B3B3] font-bold text-sm cursor-pointer hover:text-white">
								Sign up
							</button>
							<div>
								<Login />
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
