import './index.css'

import './github.css'

import themeOption from './option'

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
            animation: 'introduceInto 620ms ease forwards',
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

    outli()[themeOption.activeTheme].style.width = '50%'
    outUl().style.width = '200%'

    const outBoxCopy = outBox()[themeOption.activeTheme].cloneNode(true)
    outBoxCopy.querySelector('.right-box').classList.add('github-light')

    const tempLi = document.createElement('li')
    tempLi.className = 'out-li'
    tempLi.appendChild(outBoxCopy)
    outUl().appendChild(tempLi)
}