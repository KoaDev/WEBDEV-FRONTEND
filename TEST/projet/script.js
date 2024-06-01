function editContent(event){
    console.log(event.target.class);
    const element = event.target;
    const testMalo=event.target.class;
    console.log(element);
    console.log(testMalo);

    document.querySelectorAll(testMalo).innerHTML="test";
}

function initListeners(){
    document.querySelector('.Actions').addEventListener('click', editContent);
}

window.addEventListener('load', initListeners);