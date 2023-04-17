import React from "react";
import "./assets/Profile.css";
import Headerbar from "./components/ProfileHeaderbar";
import Footer from "./components/Footer";
import user from "./assets/user.png";

export const Profile = () => {
  return (
    <>
      <Headerbar />
      <div className="d-flex h-100 p-3 mx-auto flex-column justify-content-center">
        <main>
          <div className="d-flex container h-100 text-center">
            <div className="d-flex container w-100 h-100 p-3 mx-auto flex-column">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card mb-4">
                    <div className="card-body text-center">
                      <img
                        src={user}
                        alt="avatar"
                        className="rounded-circle img-fluid"
                        style={{ width: 150 }}
                      />
                      <h5 className="my-3">Nombre</h5>
                    </div>
                    <div className="d-flex justify-content-center mb-2">
                      <button
                        type="button"
                        className="btn btn-primary bg-success border-success"
                      >
                        Cambiar imagen
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Nombre</p>
                        </div>
                        <div className="col-sm-9">
                          <form className="d-flex" role="nombre">
                            <input
                              className="form-control me-2"
                              type="nombre"
                              aria-label="nombre"
                            />
                          </form>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Apellidos</p>
                        </div>
                        <div className="col-sm-9">
                          <form className="d-flex" role="apellidos">
                            <input
                              className="form-control me-2"
                              type="apellidos"
                              aria-label="apellidos"
                            />
                          </form>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Fecha de nacimiento</p>
                        </div>
                        <div className="col-sm-9">
                          <form className="d-flex" role="fechanacimiento">
                            <input
                              className="form-control me-2"
                              type="dia"
                              aria-label="dia"
                            />
                            <select className="form-select me-2" id="mes">
                              <option value={1}>Enero</option>
                              <option value={2}>Febrero</option>
                              <option value={3}>Marzo</option>
                              <option value={4}>Abril</option>
                              <option value={5}>Mayo</option>
                              <option value={6}>Junio</option>
                              <option value={7}>Julio</option>
                              <option value={8}>Agosto</option>
                              <option value={9}>Septiembre</option>
                              <option value={10}>Octubre</option>
                              <option value={11}>Noviembre</option>
                              <option value={12}>Diciembre</option>
                            </select>
                            <input
                              className="form-control me-2"
                              type="anyo"
                              aria-label="anyo"
                            />
                          </form>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">País</p>
                        </div>
                        <div className="col-sm-9">
                          <form className="d-flex" role="pais">
                            <input
                              className="form-control me-2"
                              type="pais"
                              aria-label="pais"
                            />
                          </form>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Correo electrónico</p>
                        </div>
                        <div className="col-sm-9">
                          <form className="d-flex" role="email">
                            <input
                              className="form-control me-2"
                              type="email"
                              aria-label="email"
                            />
                          </form>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Usuario</p>
                        </div>
                        <div className="col-sm-9">
                          <form className="d-flex" role="usuario">
                            <input
                              className="form-control me-2"
                              type="usuario"
                              aria-label="usuario"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mb-2">
                    <button
                      type="button"
                      className="btn btn-primary bg-success border-success"
                    >
                      Guardar
                    </button>
                  </div>
                  <div className="card mb-4" style={{ marginTop: "3rem" }}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Contraseña</p>
                        </div>
                        <div className="col-sm-9">
                          <form className="d-flex" role="contrasena">
                            <input
                              className="form-control me-2"
                              type="contrasena"
                              aria-label="contrasena"
                            />
                          </form>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Repetir contaseña</p>
                        </div>
                        <div className="col-sm-9">
                          <form className="d-flex" role="ccontrasena">
                            <input
                              className="form-control me-2"
                              type="ccontrasena"
                              aria-label="ccontrasena"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mb-2">
                    <button
                      type="button"
                      className="btn btn-primary bg-success border-success"
                    >
                      Cambiar contraseña
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Profile;
