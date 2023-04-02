import UserView from "./feature/user/UserView"
import IceCreamView from  "./feature/ice-cream/IceCreamView"
import CakeView from "./feature/cake/CakeView"


function App() {

  return (
    <div>
      <CakeView/>
      <IceCreamView/>
      <UserView/>
    </div>
  )
}

export default App
