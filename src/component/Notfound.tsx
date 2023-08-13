import Nav from "./Nav";
import Notresult from "./Notresult";

export default function Notfound() {
  return (
    <div className="w flex flex-col">
      <Nav />
      <div className="w80">
        <Notresult data={3} eye={false} />
      </div>
    </div>
  );
}
