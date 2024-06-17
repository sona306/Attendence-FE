import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-lg bg-warning">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="#"></Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <img src="https://fisat.ac.in/wp-content/themes/fisat2022/assets/testcopy.png" height="70" width="100" class="card-img-top" alt="..." />
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/signup">SignUp</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/viewbus">View</Link>
                                </li>   

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav