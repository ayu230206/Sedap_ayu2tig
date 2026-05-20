import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";//pemanggilan component Container
import "./custom.css";//pemanggilan file css untuk styling

createRoot(document.getElementById("root"))//pemanggilan method createRoot untuk menghubungkan React dengan DOM
    .render(//pemanggilan component Container dengan component HelloWorld sebagai children
        <div>
            <Container>
                <HelloWorld/>
            </Container>
        </div>
    )
    