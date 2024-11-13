const URL_BASE= "http://localhost:5050/api/uploadToGoogleDrive";
function ArchivoApi(file) {
    const formData = new FormData();
    formData.append("file", file); 

    fetch(URL_BASE, {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la subida del archivo");
        }
        return response.json();
    })
    .then(data => {
        console.log("Archivo subido con éxito:", data);
    })
    .catch(error => {
        console.error("Error al subir el archivo:", error);
    });
}
export default ArchivoApi;