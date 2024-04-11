import { StyleSheet } from 'react-native';

const registroModalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 60,
    borderRadius: 20,

    backgroundColor: '#F57154', // Fondo semi-transparente para resaltar el modal
  },
  modalContent: {
    backgroundColor: '#fff', // Fondo blanco para el contenido del modal
    borderRadius: 10,
    padding: 20,
    width: '80%', // Ancho del modal
    maxWidth: 300, // Ancho máximo del modal
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '100%', // Ancho del input al 100%
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row', // Alinear botones en fila
    justifyContent: 'space-around', // Espacio entre botones
    width: '100%', // Ancho del contenedor de botones al 100%
  },
  button: {
    backgroundColor: '#F4D9D3',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default registroModalStyles;