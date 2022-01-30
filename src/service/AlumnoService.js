const urlCrud = 'http://localhost:3001';

const getListalumnos = async () => {
    const response = await fetch(`${urlCrud}/cards/`);    
    const data = await response.json();
    console.log(data)
    return  data;
}

const findById_alumnos = async (alumnosId) => {
    const response = await fetch(`${urlCrud}/cards/${alumnosId}`);
    const data = await response.json();
    return data;
}

const createalumnos = async (alumnos) => {
    console.log(alumnos)
    const resp = await fetch(`${urlCrud}/cards`, {
        method: 'POST',
        body: JSON.stringify(alumnos),
        headers: {
            'Content-type': 'application/json'
}
    });
       return await resp.json();
}


const updateAlumnos = async (alumnos) => {

    const resp = await fetch(`${urlCrud}/cards`, {
    method: 'PUT',
    body: JSON.stringify(alumnos),
    headers:{
        'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getListalumnos,
    createalumnos,
    updateAlumnos,
    findById_alumnos
}