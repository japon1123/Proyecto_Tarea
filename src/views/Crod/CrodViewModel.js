import { useState } from 'react';
import studentsData from './Tareas.json';

const gestionarEstudiantes = () => {
  const [students, setStudents] = useState(studentsData);

  const addStudent = (newStudentName, newStudentAge, newStudentGrade) => {
    const newStudent = {
      id: students.length + 1,// Asigna un ID único al estudiante
      name: newStudentName,
      age: parseInt(newStudentAge),// Convierte la edad a un entero y la asigna al estudiante
      grade: newStudentGrade
    };
    setStudents([...students, newStudent]);// Agrega el nuevo estudiante a la lista de estudiantes , entiendo que copea los elementos del otro array por eso los 3 puntos
    console.log('Estudiante agregado:', newStudent); 
  };

  const updateStudent = (id, name, age, grade) => {// Función para actualizar un estudiante
    const updatedStudents = students.map(student => {// Mapea sobre la lista de estudiantes
      if (student.id === id) {
        return {
          ...student,//copia todas las propiedades del estudiante existente
          name: name,// Actualiza el nombre del estudiante etc...
          age: age,
          grade: grade
        };
      }
      return student;
    });
    setStudents(updatedStudents);// Actualiza la lista de estudiantes con los cambios aunque no me sirve asimilo que por el JSON
  };

  const deleteStudent = (id) => {// Función para eliminar un estudiante
    const updatedStudents = students.filter(student => student.id !== id);// Filtra los estudiantes para excluir el estudiante con el ID dado
    setStudents(updatedStudents);// Actualiza la lista de estudiantes sin el estudiante eliminado este si me funciona
  };

  return {
    students,
    addStudent,
    updateStudent,
    deleteStudent
  };
};

export default gestionarEstudiantes;