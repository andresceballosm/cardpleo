export const validate = (values) => {
    const errors = {};
    if (!values.area) {
      errors.area = 'requirido';
    }
    if (!values.cargos) {
      errors.cargos = 'requirido';
    }
    if (!values.distance) {
      errors.distance = 'requirido';
    }
    return errors;
}