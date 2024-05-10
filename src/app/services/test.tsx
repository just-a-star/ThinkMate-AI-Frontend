import axios from 'axios';
import getConfig from 'next/config';

import { AUTH_INFO, USER_LOGOUT } from '../constant/shared/APIUrl';
import { getCookie, removeCookie, setCookie } from './cookie';

const {
  publicRuntimeConfig: { genericToken },
} = getConfig();

const checkToken = async headers => {
  try {
    const response = await axios({ headers, url: AUTH_INFO, method: 'get' });
    if (!response.data) {
      throw new Error('expired token');
    }
  } catch (error) {
    const token = getCookie('token');
    if (token) {
      setCookie();
      removeCookie('token');
      window.location.href = '/login';
    }
  }
};

export const request = async (url, requestBody = {}, method = 'post', withToken = true, isFile = false) => {
  const token = getCookie('token');
  const headers = {};

  /**
   * If logout, don't use generic token
   */
  if (url !== USER_LOGOUT) {
    headers.Authorization = 'Bearer ' + genericToken;
  }

  if (token && withToken) {
    headers.Authorization = 'Bearer ' + token;
  }

  if (isFile) {
    headers['Content-Type'] = 'multipart/form-data';
  }

  const axiosProps = {
    headers,
    method,
    url,
    data: requestBody,
  };

  return axios(axiosProps)
    .then(response => {
      return {
        success: true,
        message: 'OK',
        responseData: response.data,
      };
    })
    .catch(err => {
      const { response } = err || {};
      if (response) {
        return {
          success: false,
          message: response.statusText || '',
          responseData: response.data || null,
        };
      }

      checkToken(headers);
      return {
        success: false,
        message: '',
        responseData: null,
      };
    });
};

export const requestDownloadFile = (url, withToken = false) => {
  const headers = {};
  if (!withToken) {
    headers['Authorization'] = 'Bearer ' + genericToken;
  } else {
    const token = getCookie('token');
    headers['Authorization'] = 'Bearer ' + token;
  }

  const axiosProps = {
    headers,
    method: 'get',
    url,
    responseType: 'blob',
  };

  return axios(axiosProps)
    .then(response => {
      return {
        success: true,
        message: 'OK',
        responseData: response.data,
      };
    })
    .catch(err => {
      const { response } = err || {};
      if (response) {
        return {
          success: false,
          message: response.statusText || '',
          responseData: response.data || null,
        };
      }
      return {
        success: false,
        message: '',
        responseData: null,
      };
    });
};