import Link from "next/link";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  const logoutHandler = async () => {
    const res = await fetch("/api/auth/logout");

    const data = await res.json();

    if (data.status === "success") {
      return router.push("/login");
    }
  };

  return (
    <>
      <header className="header">
        <h2>Hamim CRM</h2>
        <Link href="/add-customer">Add Customer</Link>
        <div>
          <Link href="/signup">Signup</Link>
          <Link href="/login" style={{ marginLeft: "8px" }}>
            Login
          </Link>
          <button style={{ marginLeft: "8px" }} onClick={logoutHandler}>
            Logout
          </button>
        </div>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">Next.js | CRM Project</footer>
    </>
  );
}

export default Layout;
