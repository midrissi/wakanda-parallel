How to start
------------

1. Create a new file in the root of this project named `config.json`
2. Copy the content of the file `config.example.json` into the previously created file
3. Fill the variables:

* `WAKANDA_BIN`: Full path of `wakanda server` binary
* `LICENSE_PATH`: Full path of the license file
* `SOLUTIONS`: List of solutions to run. Each solution have a process `name` and a `solution` attribute that contains the full path of the `.waSolution` file.

4. Install dependencies

```bash
npm i
```

5. Start processes

```bash
npm start
```

**`NB`**: Verify that all projects have different port to run them properly.
