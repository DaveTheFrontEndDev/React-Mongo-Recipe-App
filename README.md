ReactJS + Mongo: Recipe App
================

![Recipe App Example](docs/resources/recipe-app-example.gif)

## Setup

This application has been:
 
 - created with `create-react-app`.
 - ejected to make __scss__ additions to webpack.
 - __Redux__ installed for state management

Once downloaded install with 

```console
npm install
```

And run front / back end with the instructions below.

### Front-end

Run the front-end with 

```console
npm start
```

### Back-end

#### API

Run the api with 

```console
npm run server
```

#### MongoDB

_If you would like to run this with full database capability (mongodb), you can install it locally. Ideally this would be more portable, for example, in a docker container._

Install a local instance of [mongodb](https://docs.mongodb.com/manual/installation/)

This should automatically be accessible via `mongodb://127.0.0.1:27017`

Run the build script ( this will add the data into the mongodb instance with the address mentioned above )

```console
npm run build-db
```

### Tests

Currently, there are only tests for the API. In the future, tests for front-end components would be desirable.

### Mock Mode

In the browser console you can set the application to only use mocked data and not rely on an api or database:

```javascript
localStorage.setItem('mock', true)
```

And to set it back:

```javascript
localStorage.removeItem('mock')
```

## Explaination

### Front-end

#### Directories

The directory structure follows a domain driven design in which components are grouped into relevant domains (unless they are `/common`).

#### ReactJS

The front-end is developed using ReactJS and Redux (create-react-app with redux added on). The reasons for using react are predominantly down to experience. Additionally, the create-react-app tool provides a quick setup and saves time. 

#### Redux

Redux is used for state management, this makes managing state between pages easier to separate and manage.   

### API

Restify focuses on maintaining restfull semantics, is used by some of the largest deployments (Netflix, npm). The popularity and focus on semantics would help developers keep restful design in mind whilst providing the security of large scale adoption. Additionaly, it supports the use of async / await allowing development to make complex endpoints more readable.

### Database

For the database NoSQL (mongodb) was used. The document structure translates easily into json, which is ideal for the data structures of a recipe (e.g. ingredients and steps).

### CSS Methodology

The css methodology being used is BEVM, which is an alteration of the BEM modifier to split it into variation and modifier.

For an example of this, read [here](https://www.viget.com/articles/bem-sass-modifiers/) and view `component/_button.scss`

Additional directories added based on Harry Robert's namespacing technique linked [here](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/) and [here](https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/)

Component styles have been added in their directories, making them more modular. Most components represents a block (in BEM).
