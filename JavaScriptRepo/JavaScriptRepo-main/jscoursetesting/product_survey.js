// const submitButton=document.getElementById('submitBtn');
// function submitFeedback() {
//     const username = document.getElementById('name').value;
//     const age = document.getElementById('age').value;
//     const email = document.getElementById('email').value;
//     const job = document.getElementById('job').value;
//     const designation = document.getElementById('designation').value;
//     const productType = document.getElementById('productType').value;
//     const feedback = document.getElementById('feedbackText').value;
    
//     alert('Thank you for your valuable feedback')
    

//     document.getElementById('userName').innerHTML = username;
//     document.getElementById('userAge').innerHTML = age;
//     document.getElementById('userEmail').innerHTML = email;
//     document.getElementById('userJob').innerHTML = job;
//     document.getElementById('userDesignation').innerHTML = designation;
//     document.getElementById('userProductChoice').innerHTML = productType;
//     document.getElementById('userFeedback').innerHTML = feedback;
//     document.getElementById('userInfo').style.display = 'block';
    

// }

// submitButton.onclick = submitFeedback;

//     document.addEventListener('keydown', function(event) {
//         if (event.key === 'Enter') {
//           submitFeedback();
//         }
//       });


const submitButton=document.getElementById('submitBtn');
function submitFeedback()
{
    const userName = document.getElementById('name').value;
    const userAge = document.getElementById('age').value;
    const userEmail = document.getElementById('email').value;
    const userDesignation = document.getElementById('designation').value;
    const userProductChoice = document.getElementById('productType').value;
    const userFeedback = document.getElementById('feedback').value;
    const userExperience = document.getElementById('experience').value;

    alert('Thank you for the valuable feedback!');

    document.getElementById('UserName').innerHTML = userName;
    document.getElementById('UserAge').innerHTML = userAge;
    document.getElementById('UserEmail').innerHTML = userEmail;
    document.getElementById('UserDesignation').innerHTML = userDesignation;
    document.getElementById('UserProductChoice').innerHTML = userProductChoice;
    document.getElementById('UserFeedback').innerHTML = userFeedback;
    document.getElementById('userExperience').innerHTML = userExperience;
    document.getElementById('userinfo').style.display = 'block';

}

 submitButton.onclick = submitFeedback;

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          submitFeedback();
        }
      });
