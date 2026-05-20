import { createRoot } from "react-dom/client";//pemanggilan method createRoot untuk menghubungkan React dengan DOM
import Tailwindcss from "./TailwindCSS";//pemanggilan component TailwindCSS untuk menampilkan contoh penggunaan Tailwind CSS 
import './tailwind.css';//pemanggilan file css untuk mengimpor Tailwind CSS ke dalam project
import UserForm from "./UserForm";//pemanggilan component UserForm untuk menampilkan form input
import HitungGajiForm from "./HitungGajiForm";//pemanggilan component HitungGajiForm untuk menampilkan form perhitungan gaji
createRoot(document.getElementById("root")).render(//pemanggilan component TailwindCSS, UserForm, dan HitungGajiForm sebagai children dari div
    <div>
        <Tailwindcss/>{/* Untuk Menampilkan dari file TailwindCSS */}  
        <UserForm/>{/* Menampilkan form input */}
        <HitungGajiForm/>{/* Menampilkan form perhitungan gaji  */}
    </div>
)