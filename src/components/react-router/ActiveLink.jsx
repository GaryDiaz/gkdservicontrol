import { Link, useMatch, useResolvedPath } from "react-router-dom";

export const ActiveLink = ({ children, to, className = "", ...props }) => {
  let resolve = useResolvedPath(to);
  let match = useMatch({ path: resolve.pathname, end: true });

  return (
    <li className={match ? className + " active" : className}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};
