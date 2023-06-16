/*
 * @Author: 蔡荣诠 cairq@tongbaninfo.com
 * @Date: 2023-05-31 15:03:19
 * @LastEditors: 蔡荣诠 cairq@tongbaninfo.com
 * @LastEditTime: 2023-06-15 16:46:33
 * @FilePath: /markdown_0428/service/createUserInfo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const userInfo = require('../config/user.config.json')

const { writeFileSync, readFileSync } = require('fs')

const avatarData = userInfo.avatarPath && readFileSync(userInfo.avatarPath, 'base64') || ''
userInfo.avatarPath = `data:image/png;base64,${avatarData}`

writeFileSync('../src/view/public/user.json', `${JSON.stringify(userInfo)}`)
