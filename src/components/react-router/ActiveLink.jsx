import { Link, useMatch, useResolvedPath } from "react-router-dom";

export const ActiveLink = ({ children, to, className, ...props }) => {
  let resolve = useResolvedPath(to);
  let match = useMatch({ path: resolve.pathname, end: true });

  return (
    <Link className={match ? className + " active" : className} to={to} {...props}>
      {children}
    </Link>
  );
};
