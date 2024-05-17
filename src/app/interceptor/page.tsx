export default function Interceptor() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12">
          <h5>I have doubts about this. Few points i have mentioned below.</h5>
          <p>
            1) Intercepting routes allows you to load a route from another part
            of your application within the current layout.
            <br />
            2) This routing can be useful when you want to display the content
            of a route without the user switching to a different context.
            <br />
            3) We can use modals to show the content based on the route
            passed. Here modal doesnt get refreshed again and again, only the
            content inside gets rendered.
          </p>
        </div>
      </div>
    </div>
  );
}
