import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
//import {user, userDetails} from "../../utils/userDB";
import {user, userDetails} from "../../utils/userDB";
import useAuth from "../../hooks/useAuth";

export default function LoginForm() {
    const [error, setError] = useState('');
    const {login} = useAuth();
    //console.log(useAuth());

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (dataValue)=>{
            setError('')
            const {username, password} = dataValue;
            if (username !== user.username || password !== user.password){
                setError('El usuario o la contra no es correcta')
            }else{
                login(userDetails)
                console.log('login correcto');
                console.log(userDetails);
            }
        }
    });

  return (
    <View>
      <Text style={styles.title} >Iniciar Sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        value={formik.values.username}
        onChangeText={(text)=> formik.setFieldValue('username', text)}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text)=>formik.setFieldValue("password", text)}
      />
      <View style={styles.button}>
        <Button
            title="Enviar"
            onPress={formik.handleSubmit}
        />
      </View>
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error} > {error} </Text>
    </View>
  );
}

function initialValues(){
    return {
        username: "",
        password: ""
    };
}

function validationSchema(){
    return {
        username: Yup.string().required("El usuario es obligatorio"),
        password: Yup.string().required('La contraseña es obligatoria')
    };
}

const styles = StyleSheet.create({
    title:{
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 15
    },
    input:{
        height:40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    button:{
        margin: 12
    },
    error:{
        textAlign: "center",
        color: "#f00",
        marginTop: 20
    }
})