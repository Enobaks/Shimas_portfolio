const Form = document.getElementById('form');
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const body = document.getElementById('message').value;

function sendMessage (e) {
    e.preventDefault();
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value

    };

    const serviceID = "service_6prpcar"
    const templateID = "template_4k24gai"
    
    emailjs.send(serviceID,templateID,params)
        .then (
            res => {
                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('message').value = "";
                console.log(res);
                alert("Message sent successfully")
            }
        ). catch((err) => console.log(err));
}

Form.addEventListener('submit', sendMessage, false)