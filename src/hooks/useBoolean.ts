import { useState } from 'react'

interface UseBooleanType {
  isTrue: boolean
  setTrue: () => void
  setFalse: () => void
}

const useBoolean = (defaultValue = false): UseBooleanType => {
  const [value, setValue] = useState<boolean>(defaultValue || false)

  return {
    isTrue: value,
    setTrue: () => setValue(true),
    setFalse: () => setValue(false),
  }
}

export default useBoolean
