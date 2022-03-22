import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <h3 className="text-center">
                    <NavLink to="/" className="px-2">Go back Home</NavLink>
                    <NavLink to="/films"className="px-2">View Films</NavLink>
                    <NavLink to="/people"className="px-2">View People</NavLink>
                    </h3>
                </div>
            </section>
        </main>
    )
}

export default Navbar