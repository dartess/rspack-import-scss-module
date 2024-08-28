import './render.css'

import * as fonts from './fonts.module.scss';

export function render() {
    const el = document.createElement('div')
    el.classList.add('text')
    document.getElementsByTagName('body')[0].appendChild(el)
    el.innerHTML = fonts.inter;
}