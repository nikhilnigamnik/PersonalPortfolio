import { Button, Input, Textarea } from "@material-tailwind/react";
import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <form
        action="https://formspree.io/f/mayzkdlo"
        method="POST"
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" name="name" required />
          <Input size="lg" label="Email" name="email" required />
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

export default ContactForm;
