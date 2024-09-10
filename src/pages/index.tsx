import Head from "next/head";
import Container from "@/components/Container/Container";

interface Props {

}

const Home = ({}: Props) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex-1 border-1 border-solid border-primary-border bg-white py-[40px] px-16 rounded-2xl">
        <Container className="overflow-hidden">
          <p>Home</p>
        </Container>
      </div>
    </>
  )
}

export default Home
