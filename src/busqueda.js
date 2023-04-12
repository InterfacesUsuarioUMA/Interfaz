import logo from './logo.svg';
import './App.css';

function Busqueda() {
  return (
    <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="" />
  <title>Livroo</title>
  <link
    rel="icon"
    type="image/x-icon"
    href="/images//favicon/favicon-32x32.png"
  />
  <link rel="stylesheet" href="css/busqueda.css" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
  />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
    crossOrigin="anonymous"
  />
  <header className="">
    <div>
      <a href="welcome.html">
        <h3 className="float-md-start mt-auto">
          <img
            src="images/Livroo.png"
            alt="Logo not found"
            width={100}
            height={48}
          />
        </h3>
      </a>
      <nav id="imgperfil" className="nav float-md-end">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src="images/user.png" style={{ width: 42, height: 42 }} />
        </a>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <a className="dropdown-item" href="miCuenta.html">
              Mi cuenta
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="index.html">
              Cerrar sesión
            </a>
          </li>
        </ul>
      </nav>
      <nav className="nav float-md-end nav-masthead pt-1">
        <a
          className="nav-link nav-masthead fw-bold px-2 active align-self-center"
          aria-current="page"
          href="busqueda.html"
        >
          <img src="images/lupa.png" style={{ width: 46, height: 26 }} />
        </a>
      </nav>
    </div>
  </header>
  <div className="d-flex h-100 p-3 mx-auto flex-column justify-content-center">
    <main className="px-3 cover-container">
      <div className="">
        <h1>Escribe el libro que estés buscando:</h1>
      </div>
      <div id="barra-busqueda" className="container p-3">
        <div className="barra card">
          <div className="card-body d-flex justify-content-between align-items-center border-success">
            <input
              id="myInput"
              className="form-control"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
              style={{ width: 500 }}
            />
            <div className="card-body d-flex justify-content-between align-items-center">
              <a
                onclick="search_book()"
                className="btn btn-outline-success"
                type="submit"
              >
                Buscar
              </a>
              <nav
                id="imgperfil"
                className="nav justify-content-center float-md-end"
              >
                <a
                  className="dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <button
                    className="btn me-2 dropdown-toggle"
                    type="button"
                    id="button-addon1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="bi bi-filter text-success" />
                  </button>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      {" "}
                      menos &lt; más (páginas){" "}
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {" "}
                      más &gt; menos (páginas)
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="album">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card bg-dark text-white">
                <img
                  id="Los Juegos Del Hambre"
                  className="card-img"
                  src="images/libro1.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay">
                  <a
                    href="infoLibros/infoJuegos.html"
                    className="stretched-link"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-dark text-white">
                <img
                  id="Los Juegos Del Hambre En Llamas"
                  className="card-img"
                  src="images/libro2.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay">
                  <a
                    href="infoLibros/infoLlamas.html"
                    className="stretched-link"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-dark text-white">
                <img
                  id="Los Juegos Del Hambre Sinsajo"
                  className="card-img"
                  src="images/libro3.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay">
                  <a
                    href="infoLibros/infoSinsajo.html"
                    className="stretched-link"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <footer className="container">
    <hr className="divider" />
    <p className="float text-center">
      © 2023 Livroo ·
      <a className="text-success" href="#">
        Privacidad
      </a>{" "}
      ·
      <a className="text-success" href="#">
        Condiciones
      </a>
    </p>
  </footer>
</>

  );
}

export default Busqueda; 