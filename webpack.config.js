// File config các folder alias của project cho webStorm có thể hiểu được.

let path = require('path');
let fs = require('fs');

let appDirectory = fs.realpathSync(process.cwd());

function resolveApp(relativePath) {
    return path.resolve(appDirectory, relativePath);
}

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        alias: {
            Config: resolveApp('config'),
            Modules: resolveApp('module'),
            Components: resolveApp('components'),
            Libs: resolveApp('libs'),
            Services: resolveApp('services'),
            Static: resolveApp('public')
        }
    }
};
