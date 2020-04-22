const fs = require('fs');
const path = require('path');
const root = 'src/views';

/**
 * start
 * @param{String} directory
 */
function start(directory) {
    /* eslint-disable */
    console.log('start scan files...');
    let globalFiles = {}; // 记录是否会有重复的使用
    let maps = _iFiles(directory, globalFiles);

    const fileContent = `/* eslint-disable */module.exports = ${JSON.stringify(maps)};`;
    fs.writeFileSync('src/router/generator/filePaths.js', fileContent);
    console.log('Success! write to: src/router/generator/filePaths.js');
}

function _iFiles(directory, globalFiles) {
    let maps = {};
    let files = fs.readdirSync(directory);
    files.forEach(function (fileName) {
        let filePath = path.join(directory, fileName);
        let stats = fs.statSync(filePath);
        let isFile = stats.isFile();
        let isDir = stats.isDirectory();
        if (isFile) {
            let fileNameArr = fileName.split('.');
            let fileType = fileNameArr.pop();

            // 判断文件类型，只有vue文件才需要记录
            if (fileType === 'vue') {
                let name = fileNameArr.join('.');
                let pattern = RegExp(`^${root}`);

				// 前端做此操作，是为了避免出现相同路由名
				if (globalFiles[name]) {
					console.error(`Error: Duplicate this file name ${name}.`);
					process.exit();
				}

                maps[name] = filePath.replace(/\\/g, '/').replace(pattern, '');
				globalFiles[name] = true;
            }
        }
        let dirName = fileName;
        // !!! 排出掉components下面的文件
        if (isDir && dirName !== 'components') {
            // 递归
            Object.assign(maps, _iFiles(filePath, globalFiles));
        }
    });
    return maps;
}

start(root);

