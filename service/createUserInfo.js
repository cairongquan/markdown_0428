const userInfo = require('../config/user.config.json')

const { writeFileSync, readFileSync } = require('fs')

const avatarData = userInfo.avatarPath && readFileSync(userInfo.avatarPath, 'base64') || ''
userInfo.avatarPath = `data:image/png;base64,${avatarData}`

writeFileSync('../view/public/user.json', `${JSON.stringify(userInfo)}`)
