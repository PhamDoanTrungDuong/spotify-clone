import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const useAuth = (code: string) => {
      const [accessToken, setAccessToken] = useState()
      const [refreshToken, setRefreshToken] = useState()
      const [expiresIn, setExpiresIn] = useState(0)

      useEffect(() => {
            axios.post('http://127.0.0.1:3001/login', {
                  code,
            }).then(res => {
                  setAccessToken(res.data.accessToken)
                  setRefreshToken(res.data.refreshToken)
                  setExpiresIn(res.data.expiresIn)

                  window.history.pushState({}, "", '/');
            }).catch((err) => {
                  <Navigate to="/"/>
            })
      }, [code])

      useEffect(() => {
            if(!refreshToken || !expiresIn) return;
            const interval = setInterval(() => {
                  axios.post('http://127.0.0.1:3001/refresh', {
                        refreshToken,
                  }).then(res => {
                        setAccessToken(res.data.accessToken)
                        setExpiresIn(res.data.expiresIn)
                  }).catch((err) => {
                        <Navigate to="/"/>
                  })
            }, (expiresIn - 60) * 1000);

            return () => clearInterval(interval);
      }, [refreshToken, expiresIn])

      return accessToken;
}

export default useAuth