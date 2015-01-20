var fis = module.exports = require('fis');

fis.cli.name = 'qfe';
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');
