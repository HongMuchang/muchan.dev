declare module '*.sass' {
  const exports: {
      [exportName: string]: string
  };
  export = exports
}