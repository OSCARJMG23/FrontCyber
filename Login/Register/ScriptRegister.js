const form = document.querySelector('#formRegister');
form.addEventListener('submit', async function (event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const email = document.querySelector('#inputemail').value;
    const username = document.querySelector('#inputusername').value;
    const password = document.querySelector('#inputpassword').value;

    try {
        const data = await register(email,username,password);

        if (data.ok) {
            console.log("registro exitoso", data);
            window.location.href = '../Login.html';
        }else{
            /* console.log("error al registrar"); */
            const errorText = await response.text();
            console.log("Error al registrar:", errorText);
        }
    } catch (error) {
        console.log("error al registrar", error);
    }

});

const register = async (email, username, password) => {
    try {
        const response = await fetch('http://localhost:5157/User/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                username,
                password,
            }),
        });
        console.log(response);
        
        
        
        /* const data = await response.json(); */
        
        return response;
    } catch (error) {
        console.log("Ocurrió un error al registrar al usuario",error);
        throw error;
    }
}