# Samehadaku-Rest-Api

SRA is a rest-api which is scraping to the [samehadaku](https://samehadaku.vip) website and made up using Express.

## Demo
[Click to show preview](https://samehadaku-rest-api.herokuapp.com/)

## Installation

Use the package manager [npm](https://npmjs.com/) to install SRA's package.

* Clone the Repo
* Install all packages using command
```bash
npm install
```
* Install nodemon package globaly in your computer
```bash
npm install -g nodemon
```

## Usage

Start server with command:
```bash
npx nodemon
```
Then open [localhost://3000](localhost://3000)

## Endpoint

| Url        | Params           | Type | Description |
| ------------- |:-------------:| :-----:|  :-----|
| /      | - | - | homepage  
| /page/{page}    | page     |  number | homepage-pagination |
| /blog   | -     |  - | blog |
| /blog/{page}   | page     |  number | blog-pagination |
| /blog/read/{id}   | id     |  String | read blog |
| /anime/{id}   | id     |  String | detail anime |
| /anime/eps/{link}   | link     |  String | detail anime's eps |
| /search/{title}/{page}   | title, page     |  String, number | search anime |
| /season | -     |  - |list anime of this season|
| /date-release | -     |  - | anime release date |
| /list-anime/{page} | page     |  number | list of all anime |
| /blog-category/{category}/{page} | category, page     |  String, number | list items of category |
| /tag/{tag} | tag   |  String | list items of tag |




## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
Copyright (c) 2020-present, ahmadkhamdani9 (rizalord)
