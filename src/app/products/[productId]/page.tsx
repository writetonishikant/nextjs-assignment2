export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12">
          <h5>
            Here you will see the params you have added on the Url is getting
            printed on the product details below in red. This can be dynamically
            done by using APIs also.
          </h5>
          <br />
          <h5>
            Details of Product{" "}
            <span className="text-danger">{params.productId}</span>
          </h5>
        </div>
      </div>
    </div>
  );
}
