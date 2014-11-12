# rff-doctor

> Verify system configuration for using RFF components.

## Installation
```shell
$ npm install -g rff-doctor
```

## Usage
```
$ rff-doctor
```

## Options
* `-h`, `--help`  
  Display command usage and exit.

* `-v`, `--version`  
  Display version and exit.

## API
```javascript
var doctor = require('rff-doctor');
doctor.run(function (error, results) {
  // error:
  //   Execution error. This is different from the warning of doctor.
  //
  // results:
  //   Array of objects. Each object has the following values.
  //   [{
  //     name:         Name of test
  //     status:       'ok', 'ng' or 'skipped'
  //     description:  Result message
  //     hint:         Hint message
  //     error:        Error object or null
  //   }, ... ]
});
```

## License
Copyright (c) 2014 Rakuten, Inc. Licensed under the [MIT License](LICENSE).
