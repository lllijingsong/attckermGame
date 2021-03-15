let baseUrl = '';

if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:3000'
  } else if (process.env.NODE_ENV === 'production') {
    baseUrl = ''
  }
  
  export default { baseUrl }
  