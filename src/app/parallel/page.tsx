export default function Parallel() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p>
            1) In Parallel routing, it has capability to render multiple routes
            or components simultaneously or parallely
            <br />
            2) Optimizing load times and allowing more complex routing
            structures.
            <br />
            3) We can use multiple layouts in nested routing to which will run
            in parallel.
            <br />
            4) Creating dynamic, nested layouts that can load components in
            parallel.
            <br />
            5) It improves both user experience and faster performance.
          </p>
          <code>
            ├── app/
            <br />
            │ ├── layout.tsx
            <br />
            │ ├── page.tsx
            <br />
            │ ├── parallel/
            <br />
            │ │ ├── layout.js
            <br />
            │ │ ├── page.js
            <br />
          </code>
        </div>
      </div>
    </div>
  );
}
