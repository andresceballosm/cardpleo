export const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = 'requerido';
    }
    if (!values.lastname) {
      errors.lastname = 'requerido';
    }
    if (!values.region) {
      errors.region = 'requerido';
    }
    if (!values.city) {
      errors.city = 'requerido';
    }
    if (!values.phone) {
      errors.phone = 'requerido';
    }
    if (!values.email) {
      errors.email = 'requerido';
    }
    if (!values.confirmation) {
      errors.confirmation = 'requiredo';
    } else if (values.password !== values.confirmation) {
      errors.confirmation = 'Contraseña no coincide';
    }
    if (!values.email) {
      errors.email = 'requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'email invalido';
    }
    if (!values.password) {
      errors.password = 'requerido';
    } else if (values.password.length < 6) {
      errors.password = 'Minimo 6 carácteres';
    } else if (values.password.length > 15) {
      errors.password = 'Maximo 15 carácteres';
    }
    
    return errors;
  };