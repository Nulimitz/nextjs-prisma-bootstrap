import { getSession, signIn, signOut, useSession } from "next-auth/react";
import { getCourses } from "../utils/db";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function Home({ courses }) {
  const { data: session } = useSession();

  //redirect if not authenticated
  // const router = useRouter();

  //  const { status } = useSession({
  //    required: true,
  //    onUnauthenticated() {
  //      // The user is not authenticated, handle it here.
  //      router.push("/login");
  //    },
  //  });

  return (
    <Layout title="Courses">
      <>
        <h1>Courses</h1>
        <pre>{JSON.stringify(courses, null, 2)}</pre>
      </>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const data = await getCourses();

  return {
    props: {
      session,
      courses: JSON.parse(JSON.stringify(data)),
    },
  };
}
