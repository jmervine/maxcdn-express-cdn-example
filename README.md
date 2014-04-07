# MaxCDN Express CDN Example

## Setup

To test this, you'll need to create an AWS account, with an S3 bucket that your key/secret pair have write access to. Additionally, the files you upload will have to be readable by everyone.

```
var options = {
    publicDir  : path.join(__dirname, 'public'),
    viewsDir   : path.join(__dirname, 'views'),
    hostname   : 'localhost',
    port       : 1337,
    ssl        : false,
    production : true,
    
    // Update the following:
    domain     : 'yours.netdna-cdn.com',
    bucket     : 'your_bucket',
    key        : 'aws_key',
    secret     : 'aws_secret'
};
```

Then install required modules.

```
npm install
```

Once done, simple start express like so;

```
node index.js
```

You should see the following...

![](screenshot.png)
