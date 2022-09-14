import { ListItem, UnorderedList } from "@chakra-ui/react";

import Reading from "./reading";

const DESCI_CONTENT = [
  {
    title: "What is Decentralized Science (DeSci)?",
    previewText:
      "{" "}
    <Link href="https://www.nature.com/articles/s41587-022-01459-z" passHref>
      <ChakraLink isExternal textDecoration="underline">
        DeSci is an emerging field
        </ChakraLink>
        </Link>{" "}
      that uses blockchain technology and Web3 principles to improve the way scientific research is conducted.",
    body: (
      <>
        DeSci is a growing movement that aims to build public infrastructure for funding, creating, reviewing, 
        crediting, storing and disseminating scientific knowledge faily and equitably using Web3 technology.
        Colletively, the DeSci ecosystem is working towards:
        <UnorderedList>
          <ListItem>improving coordination</ListItem>
          <ListItem>
            increasing access to scientific publishing and participation
          </ListItem>
          <ListItem>providing novel sources of funding</ListItem>
          <ListItem>democratising science</ListItem>
          <ListItem>
            creating mechanisms that incentivise scientific progress.
          </ListItem>
        </UnorderedList>
      </>
    ),
  },
  {
    title: "How does LabDAO fit into the DeSci ecosystem?",
    previewText: "LabDAO is using blockchain technology to achieve the following: ",
    body: (
      <>
        <UnorderedList>
          <ListItem>
            <b>Lab-Fund</b>: Give scientists better access to raise funds for their
            scientific or entrepreneurial project
          </ListItem>
          <ListItem>
            <b>Lab-Exchange</b>: Enable scientists to run laboratory services from their computer, from anywhere in the world
          </ListItem>
          <ListItem>
            <b>LabTeams</b>: Share data and materials in new ways that reward inventors
            and create access to new research pathways
          </ListItem>
        </UnorderedList>
        <br />
        The tools we are building make it easier for scientists to provide
        services to each other while ensuring ownership and provenance of their
        data.
      </>
    ),
  },
];

const DeSci = ({ onFinished }: { onFinished(): void }) => {
  return <Reading content={DESCI_CONTENT} onFinished={onFinished} />;
};

export default DeSci;
