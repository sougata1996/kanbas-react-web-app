import ModuleList from "../Modules/ModuleList";
import HomeStatus from "../HomeStatus";
import './index.css';

function Home() {
  return (
    <div class="container-fluid">
    <div class="row">
    <div className="column col-8 third">
      <ModuleList />
      </div>
      
    <div class="column col-3 fourth">
      <HomeStatus/>
      </div>
    </div>
    </div>
  );
}
export default Home;

