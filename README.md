Link to Github-pages: https://alwaystiredneverok.github.io/nyanshin/index.html

<h1>Steps to run this project properly. This is to ensure that the backend server of the project is running locally in your machine.</h1>

1. Install NodeJS. Link: https://nodejs.org/en/download

2. Please run:

```
sudo npm install -g json-server
```

3. Create a `db.json` file and write the following in the file:

```
{
  "gacha": []
}
```

4. Navigate to your where you saved your `db.json` file in the terminal by running `cd path/to/your/file`. For example, in my case I run the following in my terminal as this where I saved my files:

```
cd Documents/school/Spring\ 2023/Web\ Design\ II/nyanshin
```

5. After that, run the following to start the fake backend server:

```
json-server --watch db.json --port 3000
```
