import { useFormik } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Spacer,
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
    <Box p="50px" bg="gray.100">
      <Flex align="center" justify="center" h="100%" w="100%">
        <Box bg="white" p={6} rounded="md" w="60%" border="2px solid #b25ff1">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <Flex w="100%">
                <Box>
                  <FormControl>
                    <FormLabel htmlFor="fullname" display="inline-block">
                      Full Name
                    </FormLabel>
                    <Input
                      id="fullname"
                      name="fullname"
                      type="text"
                      //   variant="filled"
                      border="2px solid #b25ff1"
                      onChange={formik.handleChange}
                      value={formik.values.fullname}
                    />
                  </FormControl>
                </Box>

                <Box>
                  <FormControl>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </FormControl>
                </Box>
              </Flex>
              <Flex>
                <FormControl>
                  <FormLabel htmlFor="phone">Phone no</FormLabel>
                  <Input
                    id="phone"
                    name="phone"
                    type="number"
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
                    onChange={formik.handleChange}
                    value={formik.values.age}
                  />
                </FormControl>
              </Flex>
              <FormControl>
                <FormLabel htmlFor="address">Address</FormLabel>
                <Input
                  id="Address"
                  name="Address"
                  type="Text"
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
    </Box>
  );
}
