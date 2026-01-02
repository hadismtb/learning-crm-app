import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Layout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();

  const logoutHandler = async () => {
    const res = await fetch("/api/auth/logout");

    const data = await res.json();

    if (data.status === "success") {
      setIsLoggedIn(false);
      return router.push("/login");
    }
  };

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      });
  }, []);

  return (
    <>
      <header className="header">
        <h2>Hamim CRM</h2>
        {isLoggedIn && <Link href="/add-customer">Add Customer</Link>}
        <div>
          {!isLoggedIn && (
            <>
              <Link href="/signup">Signup</Link>
              <Link href="/login" style={{ marginLeft: "8px" }}>
                Login
              </Link>
            </>
          )}
          {isLoggedIn && (
            <button style={{ marginLeft: "8px" }} onClick={logoutHandler}>
              Logout
            </button>
          )}
        </div>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">Next.js | CRM Project</footer>
    </>
  );
}

export default Layout;
