import React, { useEffect } from 'react';
import Router from 'next/router';
import Cookie from 'js-cookie';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const login = async (identifier, password) => {
  if (typeof window === 'undefined') return;

  const url = `${API_URL}/auth/local`;

  try {
    const res = await axios.post(url, { identifier, password });

    const { jwt, user } = await res.data;

    Cookie.set('token', jwt);

    Router.push('/');
  } catch (err) {
    console.log(err);
  }
};
