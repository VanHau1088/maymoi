
function sayhello(){
    console.log('say hello');
}

document
    .getElementById('btn')
    .addEventListener('click', function(evt){
     console.log('hello world');
 });


document
    .getElementById('btn')
    .addEventListener('click' , (evt) => {
        console.log("hello world 2!");
    })
