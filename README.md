# clock

https://codepen.io/rodnylobos/pen/OJmZOx by Rodny Lobos
with https://github.com/adobe-webplatform/Snap.svg 

curl https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.5.1/snap.svg.js > snap.svg.js

Server time sync
----------------
The clock can optionally fetch the current time from a server endpoint at `/time` which returns JSON like:

```json
{ "serverTime": 1600000000000, "iso": "2020-09-13T...Z" }
```

Run the minimal server shipped in this repo:

```bash
# start server on port 3000
node server.js
# or with npm
npm start
```

Open `index.html` in your browser; the client will try to fetch the server time from the same origin. If the client is loaded directly from the file system, it falls back to `http://localhost:3000/time`.

If the fetch fails, the clock silently falls back to the device time.
