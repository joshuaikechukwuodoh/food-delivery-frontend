export default function App() {
  return (
    <div>
      <button className="btn btn-xs">Xsmall</button>
      <button className="btn btn-sm">Small</button>
      <button className="btn">Medium</button>
      <button className="btn btn-lg">Large</button>
      <button className="btn btn-xl">Xlarge</button>
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
        Responsive
      </button>
      <button className="btn btn-soft">Default</button>
      <button className="btn btn-soft btn-primary">Primary</button>
      <button className="btn btn-soft btn-secondary">Secondary</button>
      <button className="btn btn-soft btn-accent">Accent</button>
      <button className="btn btn-soft btn-info">Info</button>
      <button className="btn btn-soft btn-success">Success</button>
      <button className="btn btn-soft btn-warning">Warning</button>
      <button className="btn btn-soft btn-error">Error</button>
      <button className="btn btn-square">
        <span className="loading loading-spinner"></span>
      </button>

      <button className="btn">
        <span className="loading loading-spinner"></span>
        loading
      </button>
    </div>
  );
}
