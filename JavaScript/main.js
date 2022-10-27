const images = document.querySelectorAll('.mini a');
const popup = document.querySelector('.popup');
const sliderImg = document.querySelector(".inner img");
const close = document.querySelector('.clos');
const nextClick = document.querySelector('.next');
const prevClick = document.querySelector('.prev');
let nextElement;
let prevElement;

function closeSlider(){
    popup.style.display= 'none';
}

images.forEach((img) => {
    img.addEventListener('click',function(e){
        e.preventDefault();

        this.classList.add('showSlider');
        popup.style.display = 'block';
        let bigImgSrc = this.getAttribute("href");
        sliderImg.setAttribute("src",bigImgSrc);

    })
});

document.addEventListener('click',(e)=>{
if(e.target.classList.contains('popup')){
    closeSlider();
}
})

document.addEventListener('keydown',(e)=>{
    if(e.key === "Escape"){
        closeSlider();
    }
    })

close.addEventListener('click',()=>{
    closeSlider();
})

nextClick.addEventListener('click',function(e){

    let changebleAtr;

    let showSlider = document.querySelector('.showSlider')

    if(showSlider.nextElementSibling){
        showSlider.nextElementSibling.classList.add('showSlider')
        changebleAtr = showSlider.nextElementSibling.getAttribute('href');
    }
    else{   
        showSlider.parentElement.children[0].classList.add('showSlider') 
        changebleAtr = showSlider.parentElement.children[0].getAttribute('href');
    }

    showSlider.classList.remove("showSlider");
    sliderImg.setAttribute('src',changebleAtr);
})

prevClick.addEventListener('click',function(){
    let changebleAtr;

    let showSlider = document.querySelector('.showSlider')

    if(showSlider.previousElementSibling){
        showSlider.previousElementSibling.classList.add('showSlider')
        changebleAtr = showSlider.previousElementSibling.getAttribute('href');
    }
    else{   
        showSlider.parentElement.children[4].classList.add('showSlider') 
        changebleAtr = showSlider.parentElement.children[4].getAttribute('href');
    }

    showSlider.classList.remove("showSlider");
    sliderImg.setAttribute('src',changebleAtr);
})


setInterval(() => {
    if(popup.style.display == 'block'){
        let changebleAtr;

    let showSlider = document.querySelector('.showSlider')

    if(showSlider.nextElementSibling){
        showSlider.nextElementSibling.classList.add('showSlider')
        changebleAtr = showSlider.nextElementSibling.getAttribute('href');
    }
    else{   
        showSlider.parentElement.children[0].classList.add('showSlider') 
        changebleAtr = showSlider.parentElement.children[0].getAttribute('href');
    }

    showSlider.classList.remove("showSlider");
    sliderImg.setAttribute('src',changebleAtr);

    }
}, 5000);


document.addEventListener('keydown',(e)=>{
    if(e.key === "ArrowLeft"){
        let changebleAtr;

    let showSlider = document.querySelector('.showSlider')

    if(showSlider.previousElementSibling){
        showSlider.previousElementSibling.classList.add('showSlider')
        changebleAtr = showSlider.previousElementSibling.getAttribute('href');
    }
    else{   
        showSlider.parentElement.children[4].classList.add('showSlider') 
        changebleAtr = showSlider.parentElement.children[4].getAttribute('href');
    }

    showSlider.classList.remove("showSlider");
    sliderImg.setAttribute('src',changebleAtr);

    }})

    document.addEventListener("keydown",function(e){
        if(e.key === "ArrowRight"){
            if(popup.style.display == 'block'){
                let changebleAtr;
        
            let showSlider = document.querySelector('.showSlider')
        
            if(showSlider.nextElementSibling){
                showSlider.nextElementSibling.classList.add('showSlider')
                changebleAtr = showSlider.nextElementSibling.getAttribute('href');
            }
            else{   
                showSlider.parentElement.children[0].classList.add('showSlider') 
                changebleAtr = showSlider.parentElement.children[0].getAttribute('href');
            }
        
            showSlider.classList.remove("showSlider");
            sliderImg.setAttribute('src',changebleAtr);
        
            }
        }
    })






