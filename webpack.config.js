/* module.exports = {
    // ... Otras configuraciones de webpack
  
    resolve: {
      fallback: {
        fs: false, // Este es un módulo de node.js que suele causar problemas en el navegador
        os: require.resolve('os-browserify/browser'), // Resuelve el problema de os
        path: require.resolve('path-browserify') // Resuelve el problema de path
        // Agrega otras resoluciones de fallback aquí si las necesitas
      }
    },
  
    // ... Más configuraciones de webpack
  };
   */