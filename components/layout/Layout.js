import Link from "next/link";

function Layout({ children }) {
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
        </div>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">Next.js | CRM Project</footer>
    </>
  );
}

export default Layout;
