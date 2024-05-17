import Link from "next/link";

export default function ProductList() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12">
          <h5>
            Here you will learn about the Dynamic routing, here I have used
            product section. In Url, please type anything after <span className="text-danger">products</span> and that
            parameter will get printed on the dynamic page.
          </h5>
        </div>
      </div>
    </div>
  );
}
