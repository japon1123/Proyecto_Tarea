import React, { useState } from 'react';
import { 
        View, 
        Text, 
        TouchableOpacity, 
        TextInput } from 'react-native';
import modalStyles from './RegistroModalStyles';

const RegistroModal = ({ student, onSave, onClose }) => {// Define el componente RegistroModal
  const [name, setName] = useState(student ? student.name : ''); //Esta expresión evalúa si existe student. Si student existe, entonces student.name se utiliza como el valor inicial para name. De lo contrario, si student no existe (es null o undefined), entonces el valor inicial para name es una cadena vacía ('').
  const [age, setAge] = useState(student ? student.age.toString() : ''); // Estado para la edad del estudiante
  const [grade, setGrade] = useState(student ? student.grade : ''); // Estado para el grado del estudiante

  // Función para guardar los cambios y llamar a la función onSave
  const handleSave = () => {
    onSave({ ...student, name, age: parseInt(age), grade });// Guarda los cambios en los datos del estudiante
  };

  return (
    <View style={modalStyles.container}>
      <Text>Editar Estudiante</Text>
      <TextInput
        style={modalStyles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={modalStyles.input}
        placeholder="Edad"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={modalStyles.input}
        placeholder="Grado"
        value={grade}
        onChangeText={setGrade}
      />
      <TouchableOpacity style={modalStyles.button} onPress={handleSave}>
        <Text>Guardar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={modalStyles.button} onPress={onClose}>
        <Text>Cerrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistroModal;