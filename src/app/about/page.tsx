import Card from "./components/Card";
import Navbar from "../components/Navbar";

export default function home() {
  return (
    <>
    <Navbar />
    <div>
      <Card title="Tentang 1" description="Ini adalah komponen tentang aplikasi kami" />
      <Card title="Tentang 2" description="Ini adalah komponen tentang bagaimana menjalankan aplikais " />
    </div>
    </>
  );
}
