const urlCrud = 'http://localhost:3001';

const getListprofesor = async () => {
    const response = await fetch(`${urlCrud}/cards/`);    
    const data = await response.json();
    console.log(data)
    return  data;
}

const getListusuario = async () => {
    const response = await fetch(`${urlCrud}/usuario/`);    
    const data = await response.json();
    console.log(data)
    return  data;
}

const createprofesor = async (profesor) => {
    console.log(profesor) 
    const resp = await fetch(`${urlCrud}/cards`, {
        method: 'POST',
        body: JSON.stringify(profesor),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

const createusuario = async (usuario) => {
    console.log(usuario) 
    const resp = await fetch(`${urlCrud}/usuarios`, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getListprofesor,
    createprofesor,
    getListusuario,
    createusuario
}