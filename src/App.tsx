import React, { useState } from "react";
import './App.css';

const generos = [
  { value: "", label: "Seleccione género" },
  { value: "masculino", label: "Masculino" },
  { value: "femenino", label: "Femenino" },
  { value: "otro", label: "Otro" },
];

const saludos = [
  { value: "", label: "Ninguno" },
  { value: "Sr.", label: "Sr." },
  { value: "Sra.", label: "Sra." },
  { value: "Srta.", label: "Srta." },
];

function App() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    genero: "",
    email: "",
    fechaNacimiento: "",
    direccion: "",
  });
  const [saludo, setSaludo] = useState(saludos[0].value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const saludoNombre = saludo ? `${saludo} ${form.nombre}` : form.nombre;
    alert(
      `Formulario enviado:\nSaludo: ${saludoNombre}\n` +
      JSON.stringify(form, null, 2)
    );
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{maxWidth: 600}}>
        <div className="card-body">
          <h2 className="card-title mb-4">Detalles personales</h2>
          <div className="mb-4 text-center">
            <label className="form-label me-2">Saludo:</label>
            <select
              className="form-select d-inline-block w-auto"
              value={saludo}
              onChange={e => setSaludo(e.target.value)}
            >
              {saludos.map(s => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
            <span className="ms-3">
              ¡Hola {saludo ? `${saludo} ${form.nombre}` : form.nombre}!
            </span>
          </div>
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Apellido</label>
              <input
                type="text"
                className="form-control"
                name="apellido"
                value={form.apellido}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Género</label>
              <select
                className="form-select"
                name="genero"
                value={form.genero}
                onChange={handleChange}
                required
              >
                {generos.map((g) => (
                  <option key={g.value} value={g.value}>
                    {g.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Fecha de nacimiento</label>
              <input
                type="date"
                className="form-control"
                name="fechaNacimiento"
                value={form.fechaNacimiento}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-12">
              <label className="form-label">Dirección</label>
              <input
                type="text"
                className="form-control"
                name="direccion"
                value={form.direccion}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

