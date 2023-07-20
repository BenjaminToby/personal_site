import { Dispatch, SetStateAction } from "react";

export default async function submitContactForm(e: any, setSuccess: Dispatch<SetStateAction<string | null>>, setLoading: Dispatch<SetStateAction<boolean>>) {
    e.preventDefault();

    setLoading(true);

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
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    } else {
        setSuccess("Failed");
    }

    setLoading(false);
}
