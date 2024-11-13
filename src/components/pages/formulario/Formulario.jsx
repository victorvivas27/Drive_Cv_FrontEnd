
import "@/style/Formulario.css"

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Button, Typography, Box,CircularProgress } from '@mui/material';
import ArchivoApi from "../../../api/archivoApi";
function Formulario() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false); // Estado para manejar el loader

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer lo que necesites con el archivo
    console.log('Archivo cargado:', file);
   
    if (file) {
      setLoading(true); // Iniciar el loading
      console.log('Archivo cargado:', file);
      ArchivoApi(file)
      setTimeout(() => {
        setFile(null); // Limpiar el archivo después del tiempo
        setLoading(false); // Detener el loader
      }, 3000);
    } else {
      console.log('No se ha seleccionado ningún archivo');
    }
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Cargar un archivo
      </Typography>
      <form onSubmit={handleSubmit}>
        <div className="input-archivo">
          <input
            //accept="image/*" // Define el tipo de archivo que se puede cargar
            id="file-input"
            type="file"
            style={{ display: 'none' }} // Oculta el input de tipo file
            onChange={handleFileChange}
          
          />
          <label htmlFor="file-input" className="input-archivo">
            <Button variant="contained" color="primary" component="span">
              Seleccionar archivo
            </Button>
          </label>
        </div>
        {file && (
          <div >
            Archivo: {file.name}
          </div>
        )}
         <button className="button"
          type="submit"
          disabled={loading} // Deshabilitar el botón mientras se carga
          
        >
          {loading ? (
            <CircularProgress   size={10}  style={{ color:"red"}} />
          ) : (
            "Cargar archivo"
          )}
        </button>
      </form>
    </div>
  );
}

export default Formulario