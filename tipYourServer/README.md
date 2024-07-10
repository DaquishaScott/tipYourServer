# Tip Your Server

## Instructions

1. Create a directory called `node-fs-hw` in the terminal.
2. Go into the `node-fs-hw` directory.
3. In the terminal, create a file named `server.js` using the `touch` command.
4. In the terminal, initialize a Node.js project by running the following commands:
   - `npm init -y`
   - `npm install`
5. Make sure that the `main` property in the `package.json` file is set to `server.js`.
6. In the `server.js` file, create a Node.js server and make it listen on port 3000.

7. Using the `fs` module inside the `createServer` callback:

    - If `request.url` is equal to `"/create-directory"`, create a directory called `content` using the `fs` module, and log `'content folder created'`.

    - If `request.url` is equal to `"/create-text"`, create a file named `randomText.txt` using the `fs` module. This file should be located outside the `content` directory. Populate `randomText.txt` with a short string of data using the `fs` module. Additionally, log `'randomtext.txt created'` in the terminal.

    - If `request.url` is equal to `"/new-folder-and-file"`, write the data from `randomText.txt` to a new file named `verbage.txt` inside the `content` folder. Log `'verbage.txt created'`. Additionally, create a separate `setTimeout` function that, after 7 seconds, deletes the `content` directory using the `fs` module (inside the `/new-folder-and-file` route).

**Methods to look into:** `fs.mkdir`, `fs.unlinkSync`, `fs.rmdir`
