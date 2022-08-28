import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import { FaLock } from 'react-icons/fa';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const LoginPage = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: '10rem', textAlign: 'center' }}>
      <Avatar
        sx={{
          backgroundColor: 'primary.main',
          m: 'auto',
          width: 60,
          height: 60,
        }}
        sizes="100px"
      >
        <FaLock size="40" />
      </Avatar>
      <Typography variant="h4" align="center" mb={4} color="primary.dark">
        Login
      </Typography>

      <Formik
        initialValues={{ fullName: '', email: '', password: '' }}
        validationSchema={Yup.object().shape({
          fullName: Yup.string()
            .max(20, 'fullname 20 veya daha az karakter olmalıdır')
            .required('Lutfen fullname kismini bos birakmayiniz'),

          email: Yup.string()
            .email('Lutfen gecerli email adresini giriniz.')
            .required('Lutfen email kismini bos birakmayiniz'),
          password: Yup.string()
            .min(8, 'Sifre en az 8 karakter icermelidir')
            .max(16, 'Sifre en fazla 16 karakter icermelidir.')
            .required('Lutfen password kismini bos birakmayiniz')
            .matches(/\d+/, 'Sifre rakam icermelidir')
            .matches(/[a-z]+/, 'Sifre kucuk harf icermelidir')
            .matches(/[A-Z]+/, 'Sifre buyuk harf icermelidir')
            .matches(/[!,?{}><%&$#£+-.]+/, 'Sifreniz ozel karakter icermelidir'),
        })}
        onSubmit={(values, actions) => {
          alert(`fullName: ${values.fullName}
            email: ${values.email}
            password: ${values.password}
          `);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
      >
        {({ values, handleChange, errors, touched, handleBlur }) => (
          <Form>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <TextField
                label="Full Name"
                name="fullName"
                id="fullName"
                type="text"
                variant="outlined"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.fullName && errors.fullName}
                error={touched.fullName && Boolean(errors.fullName)}
              />
              <TextField
                label="Email"
                name="email"
                id="email"
                type="email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.email && errors.email}
                error={touched.email && Boolean(errors.email)}
              />
              <TextField
                label="password"
                name="password"
                id="password"
                type="password"
                variant="outlined"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.password && errors.password}
                error={touched.password && Boolean(errors.password)}
              />
              <Button type="submit" variant="contained" size="large">
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginPage;
