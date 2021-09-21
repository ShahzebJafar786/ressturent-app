import {Link} from 'react-router-dom'

function Header() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">FOOD SNAP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/menu">Menu</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Specials
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#!">Pizza</a></li>
            <li><a className="dropdown-item" href="#!">Burgers</a></li>
            <li><a className="dropdown-item" href="#!">Sandwiches</a></li>
            <li><a className="dropdown-item" href="#!">Sides And Salads</a></li>
            <li><a className="dropdown-item" href="#!">Combos</a></li>
            <li><a className="dropdown-item" href="#!"><i class="flaticon-011-ice-cream-1"></i>Drinks</a></li>
            <li><a className="dropdown-item" href="#!">Deserts</a></li>
          </ul>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="design_my_pizza">Design My Pizza</Link>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#!">Our Blog</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#!">Contact</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#!">About Us</a>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="todos">Todos</Link>
        </li>

      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <i class="bi bi-cart"></i>
        <button className="btn btn-outline-warning" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </header>
    );
  }
  
  export default Header;
  