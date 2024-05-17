import Link from "next/link";

export default function ForgotPassword(){
    return <div className="container">
    <div className="row mt-5">
      <div className="col-12">
        <h5>This is the forgot password page without auth in the url</h5>
        <button className="pr-3" style={{ marginRight: "15px" }}>
          <Link href="/login">Login Page</Link>
        </button>
        <button>
          <Link href="/">Main Page</Link>
        </button>
      </div>
    </div>
  </div>
}