const form = document.getElementById('myForm');
const errorMsg = document.getElementById('errorMessage');

form.addEventListener('submit',function(event){
    const name = document.getElementById('name');
    const age = document.getElementById('age');
    const gender = document.querySelector('input[name="Gender"]:checked');
    if(!name || !age || !gender){
        event.preventDefault();
        errorMsg.textContent='Please provide the required information.';
    }
    else{
        event.preventDefault();
        document.body.innerHTML='<h2 style="text-align: center; margin-top:200px;">Have a Good Day :)</h2>'
    }
});
