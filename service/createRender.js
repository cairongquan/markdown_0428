const { marked } = require('marked')
const { watch, statSync, readFileSync, readdirSync, writeFileSync } = require('fs')
const { join, basename } = require('path')

const config = require('../config/028.config.json')
const uuid = require('uuid')
watch(config.read_path, watchFileChangeEvent)

function watchFileChangeEvent() {
  const renderWebJsonValue = reanderWebJsonFromMd(config.read_path)
  writeFileSync('../view/public/export.json', `${JSON.stringify(renderWebJsonValue)}`)
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
