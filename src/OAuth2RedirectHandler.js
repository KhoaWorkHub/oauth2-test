import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OAuth2RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const refreshToken = params.get('refreshToken');

    if (token) {
      localStorage.setItem('JWT_TOKEN', token);
      localStorage.setItem('REFRESH_TOKEN', refreshToken);
      // now redirect wherever you want—profile, dashboard, etc.
      navigate('/');
    } else {
      // if something went wrong, back to login
      navigate('/');
    }
  }, [navigate]);

  return <p>Logging in… please wait</p>;
}
