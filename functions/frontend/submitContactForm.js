export default async function submitContactForm(e, setSuccess) {
    e.preventDefault();

    let name = e.target[0].value;
    let email = e.target[1].value;
    let message = e.target[2].value;

    let body = {
        name: name,
        email: email,
        message: message,
    };

    let res = await fetch("/api/contactForm", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    let data = await res.json();

    console.log(data);

    if (data.msg === "Success") {
        setSuccess("Success");
    } else {
        setSuccess("Failed");
    }
}
