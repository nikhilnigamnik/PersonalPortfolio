import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { Button, Input, Textarea } from "@material-tailwind/react";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    toast.success("Message Sent");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bnff48u",
        "template_qae1azc",
        form.current,
        "XGeL653R1YrnjGEzi"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset(); 
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" type="text" name="from_name" required />
          <Input
            size="lg"
            label="Email"
            type="email"
            name="from_email"
            required
          />
          <Textarea
            type="Message"
            size="lg"
            label="Write Something..."
            name="message"
            required
          />
        </div>

        <div className="flex justify-center">
          <Button
            className="shadow-none hover:shadow-none bg-gray-900"
            type="submit"
          >
            Send message
          </Button>
        </div>
      </form>
    </div>
  );
};
