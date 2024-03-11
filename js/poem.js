document.querySelector('.themes').addEventListener('change',(event)=>{
    if (event.target.nodeName === 'INPUT') {
        // console.log(bbhbjhbh);
        document.documentElement.classList.remove('dark','light');
        document.documentElement.classList.add(event.target.value);
    }
});