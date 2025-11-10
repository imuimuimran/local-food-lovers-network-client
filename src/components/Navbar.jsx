import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaHeart, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../provider/AuthProvider';
// import { Tooltip } from 'react-tooltip';

const NavLinkItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-all
         ${isActive ? 'text-primary underline decoration-2' : 'text-neutral-700 hover:text-primary hover:underline-offset-4'}`
      }
    >
      {children}
    </NavLink>
  );
};

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (err) {
      console.error('Logout error:', err);
      // We will show toast here
    }
  };

  return (
    <nav className="w-full bg-base-100 shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Part: Logo */}
          <div className="flex items-center">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 btn btn-ghost normal-case text-xl"
              aria-label="Go to home"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                FL
              </div>
              <span className="hidden sm:inline-block font-semibold">FOOD LOVERS</span>
            </button>
          </div>

          {/* Middle Part: Links */}
          <div className="hidden md:flex md:space-x-1 md:items-center">
            <NavLinkItem to="/">HOME</NavLinkItem>
            <NavLinkItem to="/add-review">Add Review</NavLinkItem>
            <NavLinkItem to="/all-reviews">All Reviews</NavLinkItem>
            <NavLinkItem to="/my-reviews">My Reviews</NavLinkItem>
          </div>

          {/* Right Part: Auth Buttons */}
          <div className="flex items-center gap-3">
            {!user ? (
              <button
                onClick={() => navigate('/login')}
                className="btn btn-primary btn-sm normal-case"
              >
                LOGIN
              </button>
            ) : (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="cursor-pointer">
                  <img
                    src={user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || user.email)}`}
                    alt="user-avatar"
                    className="w-10 h-10 rounded-full object-cover ring ring-primary ring-offset-2"
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-56 mt-2"
                >
                  <li><NavLink to="/add-review">Add Review</NavLink></li>
                  <li><NavLink to="/my-reviews">My Reviews</NavLink></li>
                  <li><NavLink to="/my-favorites">My Favorites</NavLink></li>
                  <li>
                    <button onClick={handleLogout} className="flex items-center gap-2">
                      <FaSignOutAlt /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}

            {/* Responsive (Mobile) menu button */}
            <div className="md:hidden">
              <input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />
              <label htmlFor="mobile-menu-toggle" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>

              {/* Responsive (Mobile) dropdown menu */}
              <div className="peer-checked:block hidden absolute right-4 top-16 bg-base-100 w-56 p-4 rounded-lg shadow">
                <div className="flex flex-col space-y-2">
                  <NavLinkItem to="/">HOME</NavLinkItem>
                  <NavLinkItem to="/add-review">Add Review</NavLinkItem>
                  <NavLinkItem to="/all-reviews">All Reviews</NavLinkItem>
                  <NavLinkItem to="/my-reviews">My Reviews</NavLinkItem>
                  {!user ? (
                    <button onClick={() => navigate('/login')} className="btn btn-primary w-full">Login</button>
                  ) : (
                    <>
                      <NavLink to="/my-favorites" className="btn w-full">My Favorites</NavLink>
                      <button onClick={handleLogout} className="btn w-full mt-2">Logout</button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
