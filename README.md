# The Node Alliance

The Node Alliance is a Node.js wrapper for The Blue Alliance API, using an XMLHTTPRequest object.
It is a constructor initialized with your application ID that TBA requires with all API requests.
Since it was originally created with Express and body-parser in mind, so each method passes the data
from TBA through a callback.

## Setup

This is all you need to get started:

```javascript
var TheNodeAlliance = require("the-node-alliance");
var TBA             = new TheNodeAlliance("team955:api-example:v01");

// Do the things down here
```

If you want to see how to do it with Express...

```javascript
var express         = require("express");
var bodyParser      = require("body-parser");
var app             = express();
var TheNodeAlliance = require("the-node-alliance");
var TBA             = new TheNodeAlliance("teamXXXX:testing-api:v01");

app.use(bodyParser.json());

app.post("/someRoute", (req, res) => {
    TBA.team(req.body, data => res.json(data));

app.listen(3000);
```

## Documentation

For documentation, take a look over [here](http://frc-team-955.github.io/the-node-alliance/TBA.js.html).

### Data Methods

The methods of the TBA object require the `data` object argument to have different properties.
While not every method uses the same properties, there is a shared pool.
To see which properties a method requires, look at its documentation.

#### `pageNum`
The page number of the list. Pages start with page 0 and each contain 500 teams.

```javascript
// For example:
{
    pageNum: "1"
}
```

#### `teamKey`
The official team number, **WITHOUT** `frc` prepended to it, as The Blue Alliance specifies.
We do that for you, just let it happen.

```javascript
// For example:
{
    teamKey: "955"
}
```

#### `year`
The year of the thing you want, as a number.

```javascript
// For example:
{
    year: "2015"
}
```

#### `eventKey`
The official event code.

```javascript
// For example:
{
    eventKey: "cmp"
}
```

#### `matchKey`
The unique key for each match. Match keys can be obtained with the Event Match request.

```javascript
//For example:
{
    matchKey: "f1m1"  // Or "qf3m2", or "qm25", etc...
}
```

#### `districtKey`
The shorthand district name.

```javascript
// For example:
{
    districtKey: "fim"
}
```