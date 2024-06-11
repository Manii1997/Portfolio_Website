import Footer from "../FooterSection/Footer";

import "./Contact.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section py-5 md:ml-72 flex flex-col gap-10 bg-[#0F172A] text-white"
    >
      <div className="p-3 flex flex-col grow justify-center">
        <h1 className="text-4xl md:text-6xl font-bold self-center">Contact</h1>
        <p className="mt-10 text-center">
          If you would like to discuss further, please contact me.
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <div className="flex flex-col self-center p-5 py-10 border mt-5 rounded md:m-20">
              <img
                src="https://res.cloudinary.com/drdl4pdnx/image/upload/v1718092069/Portfolio-Website/accept-call-icon_kfjb56.svg"
                alt="call"
                className="h-[50px] md:h-[80px] self-center"
              />
              <p className="mt-5 text-center text-xl">
                <span className="font-semibold ">Phone</span> <br />
                <a href="tel:+918675748207" className="hover:underline">
                  +91 86757 48207
                </a>
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="flex flex-col self-center px-5 py-10 border mt-5 rounded md:m-20">
              <img
                src="https://res.cloudinary.com/drdl4pdnx/image/upload/v1718092069/Portfolio-Website/gmail-icon_odbyt0.svg"
                alt="email"
                className="h-[50px] md:h-[80px] self-center"
              />
              <p className="mt-5 text-center text-xl">
                <span className="font-semibold">Email:</span> <br />
                <a
                  href="mailto:manideveloper.designer@gmail.com"
                  className=" hover:underline"
                >
                  manideveloper.designer@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
