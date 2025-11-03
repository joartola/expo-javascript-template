import { useLocalSearchParams, useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Profile = () => {
  const router = useRouter()
  const { name } = useLocalSearchParams()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      
      {name && (
        <Text style={styles.greeting}>Hi, {name}!</Text>
      )}
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>Go Back to Home</Text>
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

export default Profile

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
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#34C759',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#34C759',
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