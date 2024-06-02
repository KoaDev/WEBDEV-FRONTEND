function editContent(event){
    console.log(event.target.id);
    const element = event.target;
    const testMalo=event.target.class;
    console.log(element);
    console.log(testMalo);
    console.log(event.target.value)

    document.querySelectorAll(testMalo).innerHTML="test";
}

function initListeners(){
    document.querySelectorAll('#Actions').addEventListener('click', editContent);
}

window.addEventListener('load', initListeners);