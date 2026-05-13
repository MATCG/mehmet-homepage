import {
  Container,
  Center,
  Link,
  Text,
  SimpleGrid,
  GridItem,
  Image,
  Heading,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react"

import Page from '../../components/layouts/page';
import TopBar from '../../components/ui/topbar';
import Logo from '../../components/ui/logo';
import SectionTitle from '../../components/ui/sectiontitle';
import { BioSection, BioYear } from '../../components/ui/biography';

const CS50 = () => {
  return (
    <Page>
      <Center>
        <TopBar />
      </Center>
      
      <Container mt="4rem">

        <Heading
          color="text"
          as="h2"
          variant="page-title"
          fontFamily="Anta, sans-serif"
          fontWeight="900"
          fontStyle="regular"
        >
          Harvard University: CS50x
        </Heading>

        <SimpleGrid
          pt="1rem"
          mb="1rem"
          align="center"
          as={Link}
          href="/achievements/cs50"
        >
          <GridItem
            title="Harvard University: CS50's Introduction to Computer Science"
            borderColor={useColorModeValue('#CBD5E0', '#2D3748')}
            borderWidth="10px"
            borderRadius="lg"
          >
          <Image
            src="/images/sanders.jpg"
            alt="This is CS50"
          />
          </GridItem>
        </SimpleGrid>

        <Text>
          Der CS50-Kurs der Harvard Universität ist eine intensive
          Einführung in die Welt der Informatik und Programmierung. Im Laufe
          dieses Kurses habe ich ein umfassendes Verständnis für
          grundlegende Informatikkonzepte erlangt und praktische Fähigkeiten
          in verschiedenen Programmiersprachen und Technologien entwickelt.
        </Text>

        <SectionTitle>
          Week0
        </SectionTitle>

        <Text>
          In der ersten, sogenannten Woche 0 beschäftigte sich der Kurs in der
          Einführung mit viel Theorie. Es 
        </Text>
      </Container>
    </Page>
  );
};

export default CS50;

/*
Woche0
------
Informatik
Binär
ASCII
Representation
Algorithmen
Abstraktion
Scratch
Hello, world
Text zu Sprache
Loops / Schleifen
Conditionals
Whack-a-mole
Oscartime
Ivy's Hardest Game / Von einem Schüler gemachtes Spiel

Woche1
------
Von Scratch zu C
Compiling
Correctnes, Design, Style
Visual Studio Code
Hello world
Libraries, Documentation
Format Codes
Conditionals
Loops, Variables
Command-line Interface
Mario
Nested Loops
Do While Loops
Comments
Abstraction
Operators
Integer Overflow
Truncation
Floating-point Imprecision
Y2K

Woche2
------
Readability
Compiling
Debugging
Arrays
Strings
Command-line Arguments
cowsay
Exit status
Cryptography

Woche3
------
Algorithms
Linear Search
Binary Search
Running Time
search.c
Sorting
Selection Sort
Bubble Sort
Comparing Algorithms
Recursion
Merge Sort
Tradeoffs
Sort Race

Woche4
------
Memory
Hexadecimal
Addresses
Pointers
Strings / char* / wihtout abstraction
Pointer Arithmetic
Comparing Strings
Copying
Valgrind
Garbage Values
Pointer Fun with Binky / a nice video that explains pointers
Swap
Overflow
scanf
Phonebook

Woche5
------
Data structures
Stacks and Queues
Resizing Arrays
Linked Lists
Dictionaries
Hashing and Hash Tables
Tries
sweetgreen

Woche6
------
Python
Syntax
Types
Variables
Conditionals
OOP
Libraries


Woche7
------
SQL
Flat-file Databases
Relational Databases
Schemas
Types
Constraints
Primary Keys, Foreign Keys, Relationships
Indexes
Python and SQL
Race Conditions
SQL Injection Attacks
Little Bobby Tables

Woche8
------
HTML, CSS, Javascript
The Internet
Routers
TCP/IP
DNS
HTTP
Inspect
curl
Error Codes
Search
HTML
Document Object Model
Paragraphs
Autocomplete
Geolocation

Woche (9) Spezial
-----------------
Cybersecurity
Paswords
Two-Factor Authentication
Password Managers
Encryption
Incognito Mode

Woche9
------
Flask
Forms
Templates
Request Methods
Frosh IMs
SQLite and Python
Cookies and Sessions
Shopping Cart
API's

Woche10
------
Emoji
Recap of CS50
Computational Thinking
Precision and Abstraction
Tools
Nice Presentations, Quiz for farewell
*/
