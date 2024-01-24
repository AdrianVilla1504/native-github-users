# native-github-users

Una pequeña aplicación de busqueda de react native para ver usuarios de github

## Para empezar

Se uso Javascript como lenguaje de progracmacion, Expo como framework de React, Node como entorno de ejecucion, y Npm como gestor de paquetes.

Copia y pegue el siguiente codigo para simular las variables de entorno en el directorio "/src/services/GitHubUsers.js"

```
export const fetchUserData = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchUsersList = async (searchText) => {
  try {
    const response = await fetch(
      `https://api.github.com/search/users?q=${searchText}&per_page=10`
    );
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
```


### Dependencias

```
json
"dependencies": {
    "@expo/metro-runtime": "^3.1.1",
    "@react-navigation/native": "^6.1.9",
    "@react-navigation/native-stack": "^6.9.17",
    "react-native-safe-area-context": "^4.8.2",
    "expo": "~50.0.2",
    "expo-status-bar": "~1.11.1",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-native": "0.73.2",
    "react-native-paper": "^5.12.2",
    "react-native-svg": "^14.1.0",
    "react-native-web": "~0.19.6",
    "react-navigation": "^5.0.0",
    "victory-native": "^36.8.2"
},
"devDependencies": {
    "@babel/core": "^7.20.0"
},
```

### Instalación

Para instalar dependencias ejecutar comando.

```
npm install
```

### Ejecutar aplicación

Para ejecutar en el navegador se usa el comando

```
npm run web
```

Si requiere ver en la vista movil, descargue la aplicacion de expo y escanee el codigo qr que aparece en consola cuando esta ejecutandose el programa.

### Ayuda

Contactame al +57 3205200706

### Autor

- [Adrian Villa](https://adrian-villa-dev-portfolio.vercel.app/)
- [Linkedin](https://www.linkedin.com/in/adrian-villa-776783175/)
