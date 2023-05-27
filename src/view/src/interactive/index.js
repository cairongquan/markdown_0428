/*
 * @Author: cairq cairq@tongbaninfo.com
 * @Date: 2023-05-25 22:13:41
 * @LastEditors: cairq cairq@tongbaninfo.com
 * @LastEditTime: 2023-05-27 12:03:55
 * @FilePath: \markdown_0428\view\src\interactive\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './index.css'
import themeOption from './option'

const outBox = () => document.querySelectorAll('#out-box')

const rightBox = () => document.querySelectorAll('.right-box')
const outUl = () => document.querySelectorAll('.out-ul')
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
            animation: 'introduceInto 620ms ease forwards',
        }
    }
}

// first into theme
export function changeThemeInto(e) {
    Object.assign(outBox()[themeOption.activeTheme].style, animationOther.themeInto.outBoxStyle)
    outBox()[themeOption.activeTheme].classList.add('mask')
    Object.assign(rightBox()[themeOption.activeTheme].style, animationOther.themeInto.rightBox)
    Object.assign(introduceBox()[themeOption.activeTheme].style, animationOther.themeInto.introduceBox)
}