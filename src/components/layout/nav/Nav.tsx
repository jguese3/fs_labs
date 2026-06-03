import { NavLink } from "react-router";

export function Nav() {
    return(
        <nav>
            <div className="page-links">
                {/* Create an <a> tag that routes to the provided string value */}
                <NavLink to="/organization">
                    Organization
                </NavLink>
                <NavLink to="/employees">
                    Employees
                </NavLink>
            </div>
        </nav>
    );
}