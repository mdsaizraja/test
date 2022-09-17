import Head from "next/head";
import {
  Button,
  Container,
  Divider,
  Form,
  Header,
  Icon,
  Image,
  Table,
} from "semantic-ui-react";
import styles from "../styles/Home.module.css";
import pkg from "semantic-ui-react/package.json";
import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";
import { useState } from "react";

const options = [
  { key: "d", text: "Propose", value: "Propose" },
  { key: "u", text: "Open", value: "Open" },
  { key: "a", text: "Closed", value: "Closed" },
];

export default function Home({ initialUsers }) {
  const [id, setid] = useState("");
  const [lastName, setLastName] = useState("");
  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [state, setRole] = useState();

  const handleChange = (e, { value }) => setRole(value);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>
      <Container style={{ margin: 20 }}>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="id"
              placeholder="id"
              value={id}
              onChange={(e) => setid(e.target.value)}
            />
            <br />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>

        <Divider horizontal>a</Divider>

        <Table basic="very" celled collapsing>
          <Table.Body>{""}</Table.Body>
        </Table>
      </Container>
    </>
  );
}
