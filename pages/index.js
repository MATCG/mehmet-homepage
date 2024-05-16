import {
  Box,
  Container, 
  Center,
  Heading,
  Button,
  Text,
  Link,
  Image,
  SimpleGrid,
  GridItem,
  Stack
} from "@chakra-ui/react";

import { useColorModeValue } from "@chakra-ui/react";

import {
  EmailIcon
} from '@chakra-ui/icons';

import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord
} from 'react-icons/io5';

import NextLink from 'next/link';

import TopBar from '../components/ui/topbar';
import Main from '../components/layouts/main';
import SectionTitle from '../components/ui/sectiontitle';
import { BioSection, BioYear } from '../components/ui/biography';

const Home = () => {
  return (
    <Main>

      <Center>
        <TopBar />
      </Center>

      <Container mt="3rem">
        <Box
          bg={useColorModeValue('#FFFFFF', '#2D3748')}
          borderRadius="lg"
          fontWeight="bold"
          p={3}
          mb={6}
          align="center"
          zIndex={999}
        >
          Herzlich willkommen auf meinem persönlichen Portfolio, hier
          erhalten Sie einen Einblick in meine Arbeit, meine Leidenschaften
          und meine Persönlichkeit.
        </Box>
        <Box display={{md:'flex'}}>
          <Box flexGrow={1}>
            <Heading
              color="text"
              as="h2"
              variant="page-title"
              fontFamily="Anta, sans-serif"
              fontWeight="900"
              fontStyle="regular"
            >
              Mehmet Akif Cangül
            </Heading>

              <Text 
                bgColor={useColorModeValue('#38B2AC', '#B83280')}
                bgClip="text"
                fontSize="1xl"
                fontWeight="extrabold"
                >
                Digital Craftsman ( Programmer / Abiturient / Economist )
              </Text>
          </Box>
        </Box>

        <SectionTitle>
          Arbeit
        </SectionTitle>

        <Text>
          Mehmet, Abiturient am Kuniberg Berufskolleg, ist
          leidenschaftlicher Programmierer mit dem Ziel, nach dem
          Abschluss ein Informatikstudium zu beginnen. Neben der Schule
          widmet er sich der Weiterentwicklung seiner Fähigkeiten durch das
          Erlernen neuer Technologien und Programmiersprachen sowie der
          Vertiefung bereits erworbener Kenntnisse. Besonders wichtig sind ihm
          dabei persönliche Projekte, darunter ein {" "}
          <Link
          as={NextLink}
          color="#ED64A6"
          href="https://example.com">
            Kurs
          </Link>
          &nbsp;zur Vorbereitung auf
          Abiturprüfungen, der auch Auszubildenden oder Studenten in Mathematik
          oder Wirtschaft helfen kann. Zusätzlich verfasst er informative {" "}
          <Link
          color="#ED64A6"
          href="https://example.com">
            Artikel
          </Link>
          &nbsp;und betreibt einen {" "}
          <Link
          color="#ED64A6"
          href="https://example.com">
            Blog
          </Link>
          &nbsp;zu verschiedenen Lebensbereichen.
        </Text>

        <SectionTitle>
          Bio
        </SectionTitle>
          <BioSection>
            <BioYear>
              2011
            </BioYear>
              Grundschule im Romberg-Speckhorn
          </BioSection>
          <BioSection>
            <BioYear>
              2015
            </BioYear>
              Realschule Dietrich Bonhoeffer
          </BioSection>
          <BioSection>
            <BioYear>
              2017
            </BioYear>
              Wolfgang-Borchert-Gesamtschule
          </BioSection>
          <BioSection>
            <BioYear>
              2021
            </BioYear>
              Kuniberg Berufskolleg
          </BioSection>

        <SectionTitle>
          Errungenschaften
        </SectionTitle>

        <BioYear>
          2024
        </BioYear>

        <SimpleGrid mb="2rem" align="center" >
          <GridItem
            title="Harvard University: CS50's Introduction to Computer Science"
            borderColor={useColorModeValue('#CBD5E0', '#2D3748')}
            borderWidth="10px"
            borderRadius="lg"
          >
            <Image
              src="/images/CS50x.png"
              alt="CS50x Zertifikat"
            />
          </GridItem>
          <Heading
            as="h3"
            size="md"
            pt="2"
          >
            Harvard Univserity's: CS50X
          </Heading>
          <Text pt="2" > Introduction to the intellectual enterprises of Computer Science and the art of programming </Text>
        </SimpleGrid>

        <SectionTitle>
          Leidenschaften
        </SectionTitle>
          
        <Text>
          Ich liebe Ausdauersport, Technik, Programmierung, lesen und
          lernen.
        </Text>

        <SectionTitle>
          Kontakt
        </SectionTitle>

        <Stack direction='column' spacing={4}>
          <Button
            aria-label="Github Account"
            leftIcon={<IoLogoGithub />}
            onClick={() => window.location.href = "https://github.com/MATCG"}
          >
            MATCG
          </Button>

          <Button
            aria-label="Instagram Account"
            leftIcon={<IoLogoInstagram />}
            onClick={() => window.location.href = "https://www.instagram.com/mehmet__a.c/"}
          >
            mehmet__a.c
          </Button>

          <Button
            aria-label="Discord Account"
            leftIcon={<IoLogoDiscord />}
            onClick={() => window.location.href = "https://discord.com"}
          >
            mtd66
          </Button>

          <Button
            aria-label="Email address"
            leftIcon={<EmailIcon />}
            onClick={() => window.location.href = "mailto:mcangul19@gmail.com"}
          >
            mcangul19@gmail.com
          </Button>
        </Stack>

      </Container>
    </Main>
  )
}

export default Home;
