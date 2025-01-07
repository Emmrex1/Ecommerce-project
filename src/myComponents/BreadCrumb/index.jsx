const Breadcrumbs = ({ paths }) => (
  <nav className="text-gray-500 text-sm mb-4">
    {paths.map((path, index) => (
      <span key={index}>
        {index > 0 && " > "}
        <a
          href={`/${path.toLowerCase()}`}
          className="hover:text-blue-500 capitalize"
        >
          {path}
        </a>
      </span>
    ))}
  </nav>
);

export default Breadcrumbs;
