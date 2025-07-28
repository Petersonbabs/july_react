// COMPONENTS => nested components
// PROPS => Property
// HOOKS
// fragment


import Header from "./components/Header"
import Hero from "./components/Hero"
import ProfileCard from "./components/ProfileCard"

function App() {
  return (
    <>
      {/* <Header />
      <Hero /> */}
      <ProfileCard
        profileImage="https://plus.unsplash.com/premium_photo-1664102191724-97e85d71a61a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwYm95fGVufDB8fDB8fHww"
        profileName="Dolapo"
      />
      <ProfileCard
        profileImage="https://images.unsplash.com/photo-1721133942491-ad470bc63d8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwYm95fGVufDB8fDB8fHww" />
      <ProfileCard
        profileImage="https://images.unsplash.com/photo-1601300921391-a761a8fffb12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwYm95fGVufDB8fDB8fHww" /> 
    </>
  )
}

export default App 