/* FORM VALIDATION */

const form = document.querySelector('form');

form.addEventListener('submit' ,function(event){
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    if(firstName === ''){
        alert('firstname is required');
        return;
    }

    const lastName = document.getElementById('lastName').value;
    if(lastName === ''){
        alert('lastname is required');
        return;
    }

   
   const email = document.getElementById('email').value;
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
   if (!emailRegex.test(email)) {
     alert("Please enter a valid email address.");
     return;
   }


    const message = document.getElementById('message').value;
    if(message === ''){
        alert('message is required');
        return;
    }


    form.submit();
    alert('form is submitted');
});



/* FOR SCROLLING FROM BOTTOM TO TOP */

const footerIconTop = document.getElementsByClassName('.footer-icon-Top')
footerIconTop.addEventListener('click' , function(){
    window.scrollTo(0,0);
});




/* FOR MAKING CURRENT PAGE ACTIVE  */

const links = document.querySelectorAll('a');
for(const link of links){
    link.addEventListener('click', function(){
       const href = this.href;
       const activeClass = 'active';

       links.forEach(function(link){
          link.classList.remove(activeClass);
       });

       this.classList.add(activeClass);
    });
}


