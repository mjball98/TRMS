/**
 * 
 */

let updateUsernameButton = documenet.getElementById("update username")
updateUsernameButton.addEventListener('click', updateUsername)

let updatePasswordButton = document.getElementById("update password")
updatePasswordButton.addEventListener('click', updatePassword)

function updateUsername(event){
	if(event.cancelable){
         event.preventDefault()
        }
}

function updatePassword(event){
	if(event.cancelable){
         event.preventDefault()
        }
}


function grabAccountInfo(){
	//We want to select the div which contains all of the cards and append more cards to this div
    let div = document.querySelector('account-info')

    //I want to place cards inside of this div. BUT I need to get the cards first. I have already set up an endpoint which I can use to access information about monster cards, so I can use this endpoint to grab my monster cards. We'll need AJAX to accomplish this task.

    //Let's start by creating an XMLHttpRequest object:

    let xhr = new XMLHttpRequest() //readyState 0

    //We need to define what we want to do when the readyState is 4 (meaning that the response body has been populated on the server side); in our case, we want to put some cards on the page for the user to see. We can use the onreadystatechange event listener to listen for changes to our readyState. In essence, this listener is invoked each time the readyState changes.

    xhr.onreadystatechange = function(){
        //You decide what to do each time the readyState changes in this function! Be sure to check that the readyState is 4 and and that the response code is 200 (meaning that everything went smoothly)

        if(xhr.readyState === 4 & xhr.status === 200){
            //JSON.parse is a convenience function for parsing JSON as a JavaScript object
            let acct_info = JSON.parse(xhr.response)
            console.log('the ready state was 4 and the status was 200')

            //We will add all our new cards as divs, so let's create a new div for each
			div.append(acct_info)
        }
    }

    //Open my XMLHttpRequest, specifying my HTTP verb and the endpoint I would like to hit.

    xhr.open('GET', 'http://localhost:8080/TRMS/api/viewAccountInfo') //readyState 1
    xhr.send() //readyState 2
	
}

window.onload = () => {
	grabAccountInfo()
}