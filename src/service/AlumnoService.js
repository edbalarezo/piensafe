const urlCrud = 'http://localhost:3001';

const getListAlumno = async () => {
    const response = await fetch(`${urlCrud}/cards/`);    
    const data = await response.json();
    return  data;
}

const findByIdAlumno = async (alumnoId) => {
    const response = await fetch(`${urlCrud}/cards/${alumnoId}`);
    const data = await response.json();
    return data;
}
 
const createAlumno = async (alumno) => {
  
    const resp = await fetch(`${urlCrud}/cards`,{
        method: 'POST',
        body: JSON.stringify(alumno),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

const updateAlumno = async (alumno) => {

    const resp = await fetch(`${urlCrud}/teachers`, {
        method: 'PUT',
        body: JSON.stringify(alumno),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getListAlumno,
    createAlumno,
    updateAlumno,
    findByIdAlumno
}