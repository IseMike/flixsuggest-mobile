import { View, TextInput, Button, Text, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import { validateUserRegisterForm } from '../utils/validateUserRegisterForm'

const styles = StyleSheet.create({
      errorText: {
        color: 'red'
      }
    })


const RegisterScreen = ({ navigation }) => {
      const handleRegister = (values) => {
            console.log('Register Username:', values.username)
            console.log('Register Password:', values.password)
            console.log('Register Email:', values.email)
            const userInfo = {
                  username: values.username,
                  password: values.password,
                  email: values.email
            }
            navigation.navigate('RegLikeGenre')
      }

      return (
            <Formik
                  initialValues={{
                        username: '',
                        password: '',
                        email: ''
                  }}
                  validate={validateUserRegisterForm}
                  onSubmit={handleRegister}
            >
                  {({ values, handleChange, handleSubmit, errors, touched, handleBlur }) => (
                        <View>
                              <TextInput
                                    placeholder="Username"
                                    value={values.username}
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                              />
                              {touched.username && errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
                              <TextInput
                                    placeholder="Password"
                                    secureTextEntry
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                              />
                              {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
                              <TextInput
                                    placeholder="Email"
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                              />
                              {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                              <Button title="Register" onPress={handleSubmit} />
                        </View>
                  )}
            </Formik>
      )
}

export default RegisterScreen