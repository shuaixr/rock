import { Box, Button, chakra, Flex } from "@chakra-ui/react";
import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <>
      <Flex flexDirection="column" flex={1}>
        {user ? (
          <Button as={Link} to="/notes">
            View Notes for {user.email}
          </Button>
        ) : (
          <Box boxShadow="base" position="absolute" width="100%" height="20">
            <Button as={Link} to="/join">
              Sign up
            </Button>
            <Button as={Link} to="/login">
              Log In
            </Button>
          </Box>
        )}
        <p>aaaaa</p>
      </Flex>
    </>
  );
}
