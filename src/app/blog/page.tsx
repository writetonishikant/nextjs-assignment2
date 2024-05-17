import Link from "next/link";

export default function Blog() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12">
          <h5>
            Here you will learn about the nested routing For nesting I have used
            blog section. In the blog section, I have added subfolders with
            page.tsx files which will redirect the pages in nested manner. To
            understand more, please check the Url structure.
          </h5>
          <button style={{marginRight:"15px"}}><Link href="/blog/first">First Blog</Link></button>
          <button><Link href="/blog/second">Second Blog</Link></button>
        </div>
      </div>
    </div>
  );
}
