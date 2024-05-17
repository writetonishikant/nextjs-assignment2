export default function ParallelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12">
          <h5>Parallel Layout - You will see the layout.tsx file inside the parallel folder which will render parallely hence it will load faster.</h5>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
