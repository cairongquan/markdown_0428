/*
 * @Author: 蔡荣诠 cairq@tongbaninfo.com
 * @Date: 2023-05-31 15:03:19
 * @LastEditors: 蔡荣诠 cairq@tongbaninfo.com
 * @LastEditTime: 2023-06-15 16:46:23
 * @FilePath: /markdown_0428/service/createRender.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { marked } = require('marked')
const { watch, statSync, readFileSync, readdirSync, writeFileSync } = require('fs')
const { join, basename } = require('path')

const config = require('../config/028.config.json')
const uuid = require('uuid')
watch(config.read_path, watchFileChangeEvent)

function watchFileChangeEvent() {
  const renderWebJsonValue = reanderWebJsonFromMd(config.read_path)
  writeFileSync('../src/view/public/export.json', `${JSON.stringify(renderWebJsonValue)}`)
}


// format Md
function reanderWebJsonFromMd(dir) {
  if (statSync(dir).isDirectory()) {
    const dirOrFileList = readdirSync(dir).map((item) => formatMdDir(dir, item))
    for (let i = 0; i < dirOrFileList.length; i++) {
      if (dirOrFileList[i].isDir) {
        dirOrFileList[i].children = reanderWebJsonFromMd(dirOrFileList[i].curPath)
      }
    }
    return dirOrFileList
  }
}

function formatMdDir(dir, item) {
  const curPath = join(dir, item)
  const isDir = statSync(curPath).isDirectory()
  return Object.assign({
    name: basename(curPath).split('.')[0],
    isDir,
    curPath,
    children: []
  }, !isDir && { content: marked(readFileSync(curPath, 'utf-8')), id: uuid.v1() })
}

watchFileChangeEvent()
