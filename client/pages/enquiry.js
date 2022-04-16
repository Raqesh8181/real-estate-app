// import Link from "next/link";
import { useState } from "react";
// import Image from "next/image";
import {
  Flex,
  Box,
  Text,
  Button,
  Input,
  Textarea,
  Heading,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const Enquiry = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
    enquiry: "",
  });

  const { fullname, email, phone, enquiry } = data;

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    alert(
      "Thank you being a part of Realor, Our team will contact within 24 hrs!!"
    );
  };

  // let handleInputChange = (e) => {
  //   let inputValue = e.target.value;
  //   setValue(inputValue);
  //   setInput(e.target.value);
  // };

  // const isError = input === "";

  return (
    <Box textAlign="center" justifyContent="flex-center" display="block ruby">
      <Flex flexWrap="wrap" justifyContent="flex-center" alignItems="center">
        <Box w="420px" p="5">
          <Heading as="h3" m={3} p={3} size="lg">
            Submit Your Enquiry
          </Heading>
          <FormControl mt={4}>
            <FormLabel htmlFor="first-name">Full name</FormLabel>
            <Input
              id="full-name"
              name="fullname"
              value={fullname}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <Input
              id="phone"
              name="phone"
              //   type="email"
              value={phone}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="enquiry">Enquiry Details</FormLabel>
            <Textarea
              id="enquiry"
              name="enquiry"
              value={enquiry}
              onChange={handleInputChange}
              placeholder="Here is a sample placeholder"
              size="sm"
            />
          </FormControl>

          <Button
            // isLoading
            mt={4}
            marginBottom="70px"
            loadingText="Submitting"
            colorScheme="teal"
            name="submit"
            onClick={onSubmit}
            // variant="outline"
          >
            Submit
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Enquiry;
