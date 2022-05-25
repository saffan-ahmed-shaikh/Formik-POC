import React from "react";
import { Box, Button } from "@chakra-ui/react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";

interface MyFormValues {
  firstName: string;
}
export default function FormValidation() {
  const initialValues: MyFormValues = { firstName: "" };
  return (
    <Box>
      <Box as="h1" textAlign="center">
        Validation Form
      </Box>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <Box textAlign="center">
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="First Name" />
          </Box>
          <Box textAlign={"center"}>
            <button>Submit</button>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
}
