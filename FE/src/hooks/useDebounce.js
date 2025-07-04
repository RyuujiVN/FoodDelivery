/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay)

    return () => clearTimeout(handler)
  }, [value])

  return debouncedValue
}

export default useDebounce