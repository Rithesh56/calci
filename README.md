<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <body>
    <header>
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg bg-body">
          <div class="container-fluid">
            <button
              data-mdb-collapse-init
              class="navbar-toggler"
              type="button"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarExample01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <!-- Navbar -->
      
        <!-- Jumbotron -->
        <div class="p-5 text-center bg-body-tertiary">
          <h1 id="num"    class="mb-3">Value 1</h1>
          <button id ="add"   type="button" class="btn btn-danger">+</button>
          <button id="reset" type="button" class="btn btn-warning">reset</button>
          <button id="sub"type="button" class="btn btn-primary">-</button><br>
            
          <h1 id="num2"    class="mb-3">Value 2</h1>
          <button id ="add2"   type="button" class="btn btn-danger">+</button>
          <button id="reset2" type="button" class="btn btn-warning">reset</button>
          <button id="sub2"type="button" class="btn btn-primary">-</button><br>
          <h1 id="num3"    class="mb-3">Result</h1>
    
          <button id="result"type="button" class="btn btn-primary">+</button>
          <button id="result2"type="button" class="btn btn-primary">-</button>
          <button id="result3"type="button" class="btn btn-primary">x</button>
          <button id="result4"type="button" class="btn btn-primary">/</button>
          <input id="imp" type="checkbox">add</input>
          <input id="imp2" type="checkbox">sub</input>
          <input id="imp3" type="checkbox">mul</input>
          <input id="imp4" type="checkbox">div</input>
      
        </div>
        <!-- Jumbotron -->
      </header>
    

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="main.js"></script>
  </body>
</html>
