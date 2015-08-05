var fis = module.exports = require('fis');

fis.cli.name = 'qfe';
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');
fis.cli.version = function(){
    var content = [
        '',
        '  v' + fis.cli.info.version,
        '',
        '________/\\\\\\________/\\\\\\\\\\\\\\\\\\\\\\\\\\____/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_        ',
        ' _____/\\\\\\\\/\\\\\\\\____\\/\\\\\\/////////\\\\\\_\\///////\\\\\\/////__       ',
        '  ___/\\\\\\//\\////\\\\\\__\\/\\\\\\_______\\/\\\\\\_______\\/\\\\\\_______      ',
        '   __/\\\\\\______\\//\\\\\\_\\/\\\\\\\\\\\\\\\\\\\\\\\\\\\\________\\/\\\\\\_______     ',
        '    _\\//\\\\\\______/\\\\\\__\\/\\\\\\/////////\\\\\\_______\\/\\\\\\_______    ',
        '     __\\///\\\\\\\\/\\\\\\\\/___\\/\\\\\\_______\\/\\\\\\_______\\/\\\\\\_______   ',
        '      ____\\////\\\\\\//_____\\/\\\\\\_______\\/\\\\\\_______\\/\\\\\\_______  ',
        '       _______\\///\\\\\\\\\\\\__\\/\\\\\\\\\\\\\\\\\\\\\\\\\\/________\\/\\\\\\_______ ',
        '        _________\\//////___\\/////////////__________\\///________',
        ''
    ].join('\n');
    console.log(content);
};
fis.require.prefixes.unshift('qfe');

// 默认的配置

fis.config.merge({
    project: {
        fileType: {
            text: 'es6, jsx'
        }
    },
    modules: {
        parser: {
            less: 'less',
            es6: 'es6-babel',
            jsx: 'es6-babel'
        },
        postprocessor: {
            html: 'amd',
            js: 'amd'
        },
        lint: {
            'js': 'jshint'
        },
        postpackager: ['simple', 'autoload']
    },
    roadmap: {
        ext: {
            less: 'css',
            es6: 'js',
            jsx: 'js'
        }
    },
    settings: {
        parser: {
            'less': {
                relativeUrls: false
            }
        },
        postpackager: {
            autoload: {
                type: 'requirejs'
            }
        }
    }
});
