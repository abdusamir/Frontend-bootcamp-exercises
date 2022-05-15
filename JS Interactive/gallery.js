prevBtn= document.querySelector('.prev');
nextBtn= document.querySelector('.next');
galleryImgs= document.querySelectorAll('.gallery-img');
let currentlySelected=0;

nextBtn.addEventListener('click',function(){
    galleryImgs[currentlySelected++].classList.remove('active');
    galleryImgs[currentlySelected].classList.add('active');
    prevBtn.disabled = false;

    if(currentlySelected+1===galleryImgs.length){
        nextBtn.disabled=true;
    }
});
prevBtn.addEventListener('click',function(){
    
    galleryImgs[currentlySelected--].classList.remove('active');
    galleryImgs[currentlySelected].classList.add('active');
    nextBtn.disabled=false;
    if(currentlySelected===0)
        prevBtn.disabled=true;
});