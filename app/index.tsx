import { useRouter } from 'expo-router'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Index = () => {
  const router = useRouter()
  const [name, setName] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push({
          pathname: '/profile',
          params: { name }
        })}
      >
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.modalButton]}
        onPress={() => router.push('/modal')}
      >
        <Text style={styles.buttonText}>Open Modal</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: '#FF9500',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
})