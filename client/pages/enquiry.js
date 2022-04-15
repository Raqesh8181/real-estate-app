// import Link from "next/link";
import { useState } from "react";
// import Image from "next/image";
import {
  Flex,
  Box,
  Text,
  Button,
  Input,
  Center,
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
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <Box textAlign="center" justifyContent="flex-center" display="block ruby">
      <Flex flexWrap="wrap" justifyContent="flex-center" alignItems="center">
        <Box w="420px" p="5">
          <FormControl isInvalid={!isError} mt={4}>
            <FormLabel htmlFor="first-name">Full name</FormLabel>
            <Input
              id="full-name"
              //   value={input}
              //   onChange={handleInputChange}
            />
            {!isError ? (
              <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={!isError} mt={4}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              value={input}
              onChange={handleInputChange}
            />
            {!isError ? (
              <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={!isError} mt={4}>
            <FormLabel htmlFor="email">Phone</FormLabel>
            <Input
              id="phone"
              //   type="email"
              //   value={input}
              //   onChange={handleInputChange}
            />
            {!isError ? (
              <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="country">City</FormLabel>
            <Select id="country" placeholder="Select country">
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Hyderabad</option>
              <option>Chennai</option>
            </Select>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor="amount">Amount</FormLabel>
            <NumberInput max={50} min={10}>
              <NumberInputField id="amount" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <Button
            // isLoading
            mt={4}
            loadingText="Submitting"
            colorScheme="teal"
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
