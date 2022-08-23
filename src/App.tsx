import Login from "./app/components/Login";
import Dashboard from "./app/components/Dashboard";
import SideBar from "./app/components/SideBar";
import Header from "./app/components/Header";
import { Route, Routes } from "react-router-dom";
import Player from "./app/components/Player";
import "./App.css";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
	// return code ? <Dashboard code={code} /> : <Login />
	return (
		<>
			<div className="flex h-screen absolute">
				<div className="basis-1/5">
					<SideBar />
				</div>
				<div className="basis-4/5 flex flex-col overflow-y-scroll scrollbar scrollbar-thumb-custom scrollbar-track-transparent">
					<div>
						<Header />
					</div>
					<div>
						<Dashboard code={code} />
					</div>
				</div>
			</div>
			<div className="fixed top-[85%] w-full">
				<Player />
			</div>
		</>
	);
}


export default App;
