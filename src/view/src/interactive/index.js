/*
 * @LastEditTime: 2024-02-18 23:10:32
 * @FilePath: /markdown_0428/src/view/src/interactive/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './index.css'

// import './github.css'

import themeOption from './option'

export const styleList = [{
  name: 'undefined',
}, {
  name: 'github-light'
}]



const outBox = () => document.querySelectorAll('#out-box')

const rightBox = () => document.querySelectorAll('.right-box')
const outli = () => document.querySelectorAll('.out-li')
const outUl = () => document.querySelector('.out-ul')
const introduceBox = () => document.querySelectorAll('.introduce-box')

const animationOther = {
  themeInto: {
    outBoxStyle: {
      animation: 'themeInto 620ms ease forwards',
      transition: 'all ease 420ms',
      borderRadius: '6px'
    },
    rightBox: {
      overflowY: 'hidden',
    },
    introduceBox: {
      fontSize: '90px',
      display: 'block',
      transition: 'all ease 1024ms',
      opacity: 1,
    },
  }
}

// first into theme
export function changeThemeInto(e) {
  Object.assign(outBox()[themeOption.activeTheme].style, animationOther.themeInto.outBoxStyle)
  outBox()[themeOption.activeTheme].classList.add('mask')
  Object.assign(rightBox()[themeOption.activeTheme].style, animationOther.themeInto.rightBox)
  Object.assign(introduceBox()[themeOption.activeTheme].style, animationOther.themeInto.introduceBox)

  // copy curActive themenOutBoxLi


  const outLiCopy = outUl().querySelectorAll('.out-li')[themeOption.activeTheme].cloneNode(true)
  outLiCopy.querySelector('.right-box').classList.add('github-light')
  outLiCopy.querySelector('.introduce-box').innerHTML = 'gitHub-light'
  outUl().appendChild(outLiCopy)
  outUl().querySelectorAll('.out-li').forEach(item => {
    item.style.witdh = (100 / styleList.length) + '%'
  })
  outUl().style.transform = `translateX(${themeOption.activeTheme * -100}%)`
}
