import React, { useState } from 'react';
import { 
        View, 
        Text, 
        TouchableOpacity, 
        FlatList, 
        Modal } from 'react-native';
import crudStyles from './CrodStyles';
import RegistroModal from '../../Components/Modal/RegistroModal';
import gestionarEstudiantes from './CrodViewModel';

const Crod = () => {
  const { students, addStudent, updateStudent, deleteStudent } = gestionarEstudiantes();// Obtiene datos y funciones para gestionar estudiantes
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isAddingStudent, setIsAddingStudent] = useState(false);

  const handleEdit = (student) => {// Función para manejar la edición de un estudiante
    setSelectedStudent(student);// Establece el estudiante seleccionado
    setModalVisible(true); // Muestra el modal de edición
  };

  const handleCloseModal = () => {// Función para cerrar el modal
    setSelectedStudent(null);
    setModalVisible(false);
    setIsAddingStudent(false);
  };

  const handleSaveChanges = (updatedStudent) => {// Función para guardar los cambios en un estudiante
    console.log('Datos a enviar al servicio:', updatedStudent);//imprime en consola los datos del estudiante
    updateStudent(updatedStudent); //aca deberia actualizar los datos pero asimilo que por que no hay base de datos no lo guarda o tendre que estudiar mas
    handleCloseModal(); // cierra el modal
  };

  const handleAddStudent = () => { // Función para agregar un estudiante
    setIsAddingStudent(true); // Establece el indicador de agregar estudiante
    setModalVisible(true); // Muestra el modal
  };

  const handleSaveNewStudent = (newStudent) => { // Función para guardar un nuevo estudiante
    addStudent(newStudent.name, newStudent.age, newStudent.grade); // esta es la función que no pude lograr hacer funcionar 
    handleCloseModal();
  };

  return (
    <View style={crudStyles.container}>
      <Text style={crudStyles.title}>Estudiantes</Text>
      <FlatList // Lista plana para mostrar estudiantes
        data={students} // Datos de los estudiantes
        keyExtractor={(item) => item.id.toString()} // Función para extraer claves únicas de elementos de la lista
        renderItem={({ item }) => (// Función para renderizar cada elemento de la lista
          <View style={crudStyles.studentItem}>
            <Text>{item.name}, {item.age} años, Grado: {item.grade}</Text>
            <TouchableOpacity onPress={() => handleEdit(item)}>
              <Text>Editar</Text> 
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteStudent(item.id)}>
              <Text>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity style={crudStyles.button} onPress={handleAddStudent}>
        <Text style={crudStyles.buttonText}>Agregar Estudiante</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">
        <RegistroModal
          student={selectedStudent}
          onSave={handleSaveChanges}
          onSaveNewStudent={handleSaveNewStudent}
          onClose={handleCloseModal}
          isAddingStudent={isAddingStudent}
        />
      </Modal>
    </View>
  );
};

export default Crod;
