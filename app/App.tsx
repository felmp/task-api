import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 bg-sky-200 px-10">
      <StatusBar style="auto" />
      <View className="mb-[43px] mt-[400px] w-full">
        <Text className="text-[36px] font-normal text-slate-900">
          Organize suas{' '}
        </Text>
        <Text className="text-[36px] font-normal text-slate-900">
          tarefas em{' '}
        </Text>
        <Text className="text-[36px] font-medium italic text-slate-900">
          categorias{' '}
          <Text className="text-[36px] font-normal text-slate-900">e</Text>
        </Text>
        <Text className="text-[36px] font-normal text-slate-900">
          acompanhe
        </Text>
        <Text className="text-[36px] font-normal text-slate-900">
          seu{' '}
          <Text className="text-[36px] font-medium italic text-slate-900">
            progresso.
          </Text>
        </Text>
      </View>
      <TouchableOpacity
        className="mb-4 h-16 w-full items-center justify-center rounded-full bg-slate-900"
        activeOpacity={0.8}
      >
        <Text className="text-[16px] font-medium uppercase text-sky-200">
          Criar uma conta
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="h-16 w-full items-center justify-center rounded-full border-2 border-slate-900 bg-sky-200"
        activeOpacity={0.8}
      >
        <Text className="text-[16px] font-medium uppercase text-slate-900">
          Já tenho uma conta
        </Text>
      </TouchableOpacity>
    </View>
  )
}
