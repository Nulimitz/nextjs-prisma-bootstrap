import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { getCourses } from "../utils/db";
import Layout from "../components/Layout";

export default function Home({ courses }) {
  const { data: session } = useSession();

  // redirect if not authenticated
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.push("/home");
    },
  });

  return (
    <Layout title="Courses">
      <div className="container-fluid">
        <h1>Courses</h1>
        <pre>{JSON.stringify(courses, null, 2)}</pre>
      </div>
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
