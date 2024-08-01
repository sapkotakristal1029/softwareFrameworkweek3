$(document).ready(()=>{
    console.log("ready to use");
    $('#loginButton').click((event)=>{
        event.preventDefault();
        console.log('button is clicked');
        ajaxPost();
    })
    $('#continueButton').click((event)=>{
        event.preventDefault();
        navigateToAccPage();
    })

    

})

function navigateToAccPage(){
    console.log("continue is clicked");
    window.location.href = '/account';


}
let loginCustomer ={}

function resetForm(){
    $('#email').val("")
    $('#password').val("")

}
function ajaxPost(){
    let formData = {
        email: $('#email').val(),
        password: $('#password').val()
    }
    console.log('he')
    $.ajax({
        type:"post",
        contentType: 'application/json',
        url: window.location +'account',
        data: JSON.stringify(formData),
        dataType: 'json',
        success:(customer)=>{
            if (customer.valid){
                $('#loginform').css('background-color', 'lightgreen')
                $('#continueButton').css('display','block')
                
            }else{

                $('#loginform').css('background-color', 'red');
                $('#continueButton').css('display','none')
                
            }
             
            let dataToAdd = `<p>Login ${customer.valid?"Successful":"Unsuccessful"}!</p>
                <p>Email Address: ${customer.email}</p>
                <p>Password: ${customer.password}</p>`

                $('#afterData').html(dataToAdd);

        },
        error:(error)=>{
            alert("Error!")
            console.log("Error: ", error)
        }

    })
    resetForm();


}