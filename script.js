console.log('hello js')

allstar = Array.from(document.getElementsByClassName('star'))

allstar.map((element)=>{
    element.addEventListener('click', (element)=>{
        document.getElementById('rating_value').innerHTML=element.target.id;
        if(element.target.id==1 && element.target.style.color==!'yellow'){
            Array.from(document.getElementsByClassName('star'))[0].style.color='yellow'
            Array.from(document.getElementsByClassName('star'))[1].style.color='black'
            Array.from(document.getElementsByClassName('star'))[2].style.color='black'
            Array.from(document.getElementsByClassName('star'))[3].style.color='black'
            Array.from(document.getElementsByClassName('star'))[4].style.color='black'
        }
        else if(element.target.id==2){
            Array.from(document.getElementsByClassName('star'))[0].style.color='yellow'
            Array.from(document.getElementsByClassName('star'))[1].style.color='yellow'
            Array.from(document.getElementsByClassName('star'))[2].style.color='black'
            Array.from(document.getElementsByClassName('star'))[3].style.color='black'
            Array.from(document.getElementsByClassName('star'))[4].style.color='black'
        }
        else if(element.target.id==3){
            Array.from(document.getElementsByClassName('star'))[0].style.color='yellow'
            Array.from(document.getElementsByClassName('star'))[1].style.color='yellow'
            Array.from(document.getElementsByClassName('star'))[2].style.color='yellow'
            Array.from(document.getElementsByClassName('star'))[3].style.color='black'
            Array.from(document.getElementsByClassName('star'))[4].style.color='black'
        }
        else if(element.target.id==4){
            Array.from(document.getElementsByClassName('star'))[0].style.color='yellow'
            Array.from(document.getElementsByClassName('star'))[1].style.color='yellow'
            Array.from(document.getElementsByClassName('star'))[2].style.color='yellow'
            Array.from(document.getElementsByClassName('star'))[3].style.color='yellow'
            Array.from(document.getElementsByClassName('star'))[4].style.color='black'
        }
        else if(element.target.id==5){
            Array.from(document.getElementsByClassName('star'))[0].style.color='yellow'
            Array.from(document.getElementsByClassName('star'))[1].style.color='yellow'
            Array.from(document.getElementsByClassName('star'))[2].style.color='yellow'
            Array.from(document.getElementsByClassName('star'))[3].style.color='yellow'
            Array.from(document.getElementsByClassName('star'))[4].style.color='yellow'
        }
        else if(element.target.id==1 && element.target.style.color=='yellow'){
            Array.from(document.getElementsByClassName('star'))[0].style.color='yellow'
            Array.from(document.getElementsByClassName('star'))[1].style.color='black'
            Array.from(document.getElementsByClassName('star'))[2].style.color='black'
            Array.from(document.getElementsByClassName('star'))[3].style.color='black'
            Array.from(document.getElementsByClassName('star'))[4].style.color='black'
            document.getElementById('rating_value').innerHTML=1;
        }
    })
})
