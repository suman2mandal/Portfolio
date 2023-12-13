export function useMDXComponents(components) {
    return components
    // Allows customizing built-in components, e.g. to add styling.
    return {
      h1: ({ children }) => <h1 className="text-4xl text-white" style={{ fontSize: "100px" }}>{children}</h1>,
      ...components,
    }
}