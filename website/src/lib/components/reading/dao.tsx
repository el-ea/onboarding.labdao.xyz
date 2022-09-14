import { Heading, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

import Reading from "./reading";

const DAO_CONTENT = [
  {
    title: "What is a DAO?",
    previewText:
      '"A collectively-owned, blockchain-governed organisation working towards a shared mission."',
    body: (
      <>
        <Link href="https://ethereum.org/en/dao/" passHref>
          <ChakraLink isExternal textDecoration="underline">
            DAOs
          </ChakraLink>
        </Link>{" "}
        are a collectively-owned organisation that allow like-minded folks to work together around the
        globe. DAOs are usually flat in hierarchy and democratised, all activity is transparent and public. 
        Decisions are made by members of the DAO using governance systems (such as voting and proposals). 
        The "rules" of a DAO are ingrained into the blockchain via a "smart contract", the code on which it runs.
        <br />
        <br />
        A DAO’s smart contract defines how the organisation works. It is deployed with voted DAO member approval 
        and can help determine how the group's treasury and governance systems are managed. 
        The Ethereum blockchain is the perfect foundation for DAO smart contracts because they are tamper-proof, 
        all activity is public and can only be changed by DAO vote.
        <br />
        <br />
        At LabDAO, this means that members of the DAO (owners of the not-yet-launched governance $LAB tokens) 
        will have a say in major decisions made on e.g. DAO governance, funding, etc.
      </>
    ),
  },
  {
    title: "What tools do you need to participate in LabDAO?",
    previewText:
      "The first tool to get in touch with other members of LabDAO is Discord.",
    body: (
      <>
        <Heading as="h3" size="md">
          Discord
        </Heading>
        <br />
        LabDAO uses{" "}
        <Link href="https://discord.com" passHref>
          <ChakraLink isExternal textDecoration="underline">
            Discord
          </ChakraLink>
        </Link>{" "}
        as the main communication platform for DAO members. Discord is functionally similar
        to Slack, but with more modularity. To meet other LabDAO members, join community events
        and explore ongoing projects, download Discord and create an
        account{" "}
        <Link href="https://discord.com" passHref>
          <ChakraLink isExternal textDecoration="underline">
            here
          </ChakraLink>
        </Link>
        .
        <br />
        <br />
        Once you’ve created an account and downloaded the app, open Discord and
        click the username next to your avatar on the bottom left corner.
        This will automatically copy your username/ID (which will look like
        ‘Name#1234’).{" "}
        <b>Keep this handy, we’ll ask you for it soon.</b>
        <br />
        <br />
        <Heading as="h3" size="md">
          A wallet
        </Heading>
        <br />
        As you get more involved in LabDAO, having a{" "}
        <Link href="https://ethereum.org/en/wallets/" passHref>
          <ChakraLink isExternal textDecoration="underline">
            digital wallet
          </ChakraLink>
        </Link>{" "}
        such as{" "}
        <Link href="https://metamask.io/" passHref>
          <ChakraLink isExternal textDecoration="underline">
            MetaMask
          </ChakraLink>
        </Link>{" "}
        will be important for allowing you to vote on community proposals,
        connect to other applications,{" "}
        <Link href="https://gitcoin.co/grants/" passHref>
          <ChakraLink isExternal textDecoration="underline">
          apply for grants 
          </ChakraLink>  
        and get rewarded for your contributions.
        <br />
        <br />
        If you don’t have already have a wallet we recommend firstly finishing
        your LabDAO onboarding before creating one.
      </>
    ),
  },
];

const DAO = ({ onFinished }: { onFinished(): void }) => {
  return <Reading content={DAO_CONTENT} onFinished={onFinished} />;
};

export default DAO;
