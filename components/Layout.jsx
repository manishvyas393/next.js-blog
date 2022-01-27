import Hero from "./Hero";
import NavBar from "./NavBar";

export default function Layout({ children }) {
      return (
            <>
                  <NavBar />
                  <Hero/>
                  <main>
                        {children}
                  </main>

            </>
      )
}
