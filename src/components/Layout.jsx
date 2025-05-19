const Layout = ({ children, title }) => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
        {title}
      </h1>
      {children}
    </div>
  );
};

export default Layout;
