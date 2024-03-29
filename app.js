// const listItem=document.getElementsByTagName('bady')
// console.log(listItem)
// const listItem=document.getElementsByClassName('list-item')
// console.log(listItem)
// const clickBtn=document.getElementById('click-btn')
// console.log(clickBtn)
// const list=document.querySelectorAll('li')
// console.log(list)
// const title=document.getElementById('title')
// title.textContent='new text'
const listItem=document.querySelectorAll('.list-item')
console.log(listItem)
listItem.forEach((item)=>{
    item.textContent+=' darsalri'
})
const title=document.getElementById('title')
title.innerHTML=' <i>darslar jadvali</i>'