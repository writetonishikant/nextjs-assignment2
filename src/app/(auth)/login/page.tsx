import Link from "next/link";

export default function Login() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12">
          <h5>
            Here you will learn about Group routing. In this example, I have
            used the login section. All the folders are wrapped inside the auth
            folder. However, if you check the URL, you will not find
            &quot;auth&quot; in it as you would expect with nested routing. This
            is because we have renamed the auth folder to{" "}
            <span className="text-danger">(auth)</span>. By doing this,
            &quot;auth&quot; is removed from the URL, giving us a clean URL for
            login.
          </h5>
          <button className="pr-3" style={{ marginRight: "15px" }}>
            <Link href="/register">Register</Link>
          </button>
          <button>
            <Link href="/forgot-password">Forgot Password</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
