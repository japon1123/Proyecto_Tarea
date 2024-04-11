import React, { useState } from 'react'; // Importa React y el hook useState
import { 
        View, 
        Text, 
        TextInput, 
        TouchableOpacity 
        } from 'react-native';// Importa componentes de React Native
import styles from './LoginStyles';// Importa los estilos del Login
import { validateEmail, validatePassword } from './LoginViewModel';// Importa funciones de validación de correo electrónico y contraseña



const Login = ({ navigation }) => {// Declara un componente funcional llamado Login que recibe la navegación como propiedad
  const [email, setEmail] = useState('');// Estado para el correo electrónico
  const [password, setPassword] = useState('');// Estado para la contraseña
  const [errorMessage, setErrorMessage] = useState('');// Estado para el mensaje de error

  const SigIn = () => {// Función para iniciar sesión
    if (!validateEmail(email)) {// Valida el correo electrónico
      setErrorMessage('Correo electrónico no válido');// Establece un mensaje de error si el correo electrónico no es válido
      return;
    }
    if (!validatePassword(password)) {// Valida la contraseña
      setErrorMessage('La contraseña debe tener al menos 6 caracteres, una mayúscula y un numero');// Establece un mensaje de error si la contraseña no es válida
      return;
    }
    // Imprimir los datos en la consola
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);
    // Navegar a la pantalla del CRUD
    navigation.navigate('Crud');
  };

  return (// Retorna la vista del Login
    <View style={styles.container}>
      <TextInput // Campo de entrada para el correo electrónico
        style={styles.input} // Estilos del campo de entrada
        placeholder="Correo electrónico"
        value={email} // Valor del correo electrónico
        onChangeText={setEmail} // Función para actualizar el correo electrónico
        editable={true} // Permite la edición del campo
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        editable={true} // Igual que con el correo
      />
      <TouchableOpacity style={styles.button} onPress={SigIn} disabled={!email || !password}> 
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
    </View>
  );
};

export default Login; // Exporta el componente Login