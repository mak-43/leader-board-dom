document.getElementById('top-players').style.color='green'
document.getElementById('top-blogs').style.color='green'

const p=document.getElementById('plyr').style.backgroundColor='rgba(0, 0, 255, 0.1)'

document.getElementById('add').addEventListener('click',function(){
    const li=document.createElement('li')
    li.innerText='Brand new item'
    const ul=document.getElementById('ul')
    ul.appendChild(li)
    const input=document.getElementById('input')
    let t=parseInt(input.value)+1
    input.value=t
    console.log(t)
    if(t==5){
        document.getElementById('add').disabled=true
        
    }
})



