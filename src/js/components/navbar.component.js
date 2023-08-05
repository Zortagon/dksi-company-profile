import $ from "jquery";

export function headerComponent() {
    const header = $("header");

    header.on("click", () => {
        alert("You click the header");
    });
}
