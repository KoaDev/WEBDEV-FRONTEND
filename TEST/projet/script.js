function editContent(event){
    console.log(event.target.id);
    const element = event.target;
    const testMalo=event.target.id;
    console.log(element);
    console.log(testMalo);

    document.getElementById(testMalo).innerHTML="test";
}

function initListeners(){
    document.querySelector('.Actions').addEventListener('click', editContent);
}

window.addEventListener('load', initListeners);