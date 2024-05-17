import Link from "next/link";

export default function Second() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12">
          <h5>My Second Blog</h5>
          <button><Link href="/blog">Go Back</Link></button>
        </div>
      </div>
    </div>
  );
}
