const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/refresh', (req, res) => {
	console.log("h1")
	const refreshToken = req.body.refreshToken;
 	const spotifyApi = new SpotifyWebApi({
		redirectUri: "http://127.0.0.1:5173",
		clientId: "c2bbb093651d43f999d789c27b4c9075",
		clientSecret: "4030a54611af4a6783a63c7e806db9af",
		refreshToken
	});

	spotifyApi.refreshAccessToken()
	.then((data) => {
		res.json({
			accessToken: data.body.accessToken,
			expiresIn: data.body.expiresIn,
		})
	})
	.catch((err) => {
		console.log(err)
	});
})

app.post("/login", (req, res) => {
	const code = req.body.code;
	const spotifyApi = new SpotifyWebApi({
		redirectUri: "http://127.0.0.1:5173",
		clientId: "c2bbb093651d43f999d789c27b4c9075",
		clientSecret: "4030a54611af4a6783a63c7e806db9af",
	});

	spotifyApi
		.authorizationCodeGrant(code)
		.then((data) => {
			res.json({
				accessToken: data.body.access_token,
				refreshToken: data.body.refresh_token,
				expiresIn: data.body.expires_in,
			});
		})
		.catch((err) => {
			console.log(err);
			// res.sendStatus(400);
		});
});

app.listen(3001);
