import { useEffect, useState } from 'react';
import { getLatLng } from '../utilities/location';

export const useLatLng = () => {
  const [location, setLocation] = useState({
    lat: '',
    lng: ''
  })
  useEffect(() => {
    getLatLng(setLocation)
  }, [])
  return {
    location
  }
}