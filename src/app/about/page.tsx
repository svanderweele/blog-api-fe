import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Background from "../assets/img/home-bg.jpg";

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <Header image={Background} />
      <main className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <p>
                Hello! I&apos;m a passionate Full-Stack Developer with a strong
                focus on backend technologies. With years of experience in
                building and optimizing web applications, I excel in creating
                robust, scalable, and efficient systems.
              </p>

              <p>
                My expertise lies in server-side development, where I have
                significant experience working with AWS, .NET Core, Node.js, and
                Redis. I am adept at containerization using Docker and
                orchestrating deployments with Kubernetes, ensuring that
                applications are both resilient and highly available.
              </p>

              <p>
                On the frontend, I am proficient in TypeScript, React, and
                Angular, capable of building functional and dynamic user
                interfaces. While my strength is not in designing the most
                visually appealing interfaces, I ensure that the applications
                are user-friendly and performant.
              </p>

              <p>
                Beyond the technical aspects, I am a proactive problem solver
                and a collaborative team player. I am committed to continuous
                learning and staying updated with the latest industry trends to
                deliver cutting-edge solutions. My goal is to leverage my
                technical expertise and creativity to contribute to innovative
                projects and drive success in a remote working environment.
              </p>

              <p>
                If you&apos;re looking for a dedicated and skilled backend
                developer with solid frontend capabilities to join your remote
                team, let&apos;s connect!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
