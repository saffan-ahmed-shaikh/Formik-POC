import { useFormik } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

export default function ChakraFormik() {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      age: "",
      Address: "",
      phone: "",
      pannumber: "",
      aadharnumber: "",
      dateofbirth: "",

      rememberMe: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100%">
      <Box bg="white" p={6} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="fullname">Full Name</FormLabel>
              <Input
                id="fullname"
                name="fullname"
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.fullname}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="phone">Phone no</FormLabel>
              <Input
                id="phone"
                name="phone"
                type="number"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="age">Age</FormLabel>
              <Input
                id="age"
                name="age"
                type="Number"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.age}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="address">Address</FormLabel>
              <Input
                id="Address"
                name="Address"
                type="Text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.Address}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="Pannumber">Pan Card Number</FormLabel>
              <Input
                id="pannumber"
                name="pannumber"
                type="number"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.pannumber}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="aadharnumber">aadhar Card Number</FormLabel>
              <Input
                id="aadharnumber"
                name="aadharnumber"
                type="number"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.aadharnumber}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="dateofbirth">Date-Of-Birth</FormLabel>
              <Input
                id="dateofbirth"
                name="dateofbirth"
                type="date"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.dateofbirth}
              />
            </FormControl>
            <Checkbox
              id="rememberMe"
              name="rememberMe"
              onChange={formik.handleChange}
              isChecked={formik.values.rememberMe}
              colorScheme="purple"
            >
              Remember me?
            </Checkbox>
            <Button type="submit" colorScheme="purple" width="full">
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}
