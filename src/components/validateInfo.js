export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'The field is required';
  }
  else if (!/^[A-Za-z]+/.test(values.username.trim())) {
    errors.username = 'Error Message';
  }

  if (!values.email) {
    errors.email = 'The field is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Error Message';
  }
  if (!values.phone) {
    errors.phone = 'The field is required';
  } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(values.phone)){
    errors.phone = 'Error Message'
  }
  return errors;
}