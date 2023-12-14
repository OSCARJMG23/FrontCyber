const form = document.querySelector('.form');
form.addEventListener('submit', async function (event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const username = document.querySelector('.input-field[type="text"]').value;
    const password = document.querySelector('.input-field[type="password"]').value;

    try {
        const data = await login(username, password);

        if (data) {
            console.log('Inicio de sesión exitoso:', data);
            
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
    }
});

const login = async (username, password) => {
    try {
        const response = await fetch('http://localhost:5116/api/User/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });
        console.log(response); 
        if (!response.ok) {
            // Manejar errores de autenticación
            const errorData = await response.json();
            console.error('Error de autenticación:', errorData.message);
            throw new Error('Error de autenticación');
        }

        const data = await response.json();

        // Almacenar el token en el almacenamiento local
        localStorage.setItem('token', data.token);

        // Redirigir o realizar acciones según los roles
        if (data.roles.includes('Administrador')) {
            window.location.href = '../admin.html';
        } else if (data.roles.includes('Empleado')) {
            window.location.href = '../empleado.html';
        } else {
            // Manejar otros roles o escenarios
            
        }

        return data;
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }
};

const getTokenExpiration = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
        const { exp } = JSON.parse(atob(token.split('.')[1]));
        return exp * 1000;  
    } catch (error) {
        console.error('Error al obtener la fecha de expiración del token:', error);
        return null;
    }
};
