import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import { useTheme } from '../context/ThemeContext.jsx';

const GithubLogo = styled(FaGithub)`
  &:hover {
    opacity: 0.8;
  }
`;

const LinkedinLogo = styled(FaLinkedin)`
  &:hover {
    opacity: 0.8;
  }
`

const DiscordLogo = styled(FaDiscord)`
  &:hover {
    opacity: 0.8;
  }
`

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  scroll-snap-type: y mandatory;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
      height: 200vh;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6%;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    margin-bottom: 12px;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;

  form {
    width: 200%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  input {
    width: 100%;
    height: 30px;
    overflow-wrap: break-word;
  }

  #message {
    height: 100px;
  }

  div {
    margin-bottom: 12px;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 15px;
`;

const Contact = () => {
  const form = useRef();
  const { currentTheme } = useTheme();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current[0].value || !form.current[1].value || !form.current[2].value) {
      toast.error('Please fill out all fields!', { position: 'top-right' })
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SECRET_KEY,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success('Message sent!', { position: 'top-right' })
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

      form.current.reset();
  };

  return (
    <Section id="contact">
      <Navbar />
      <Container>
        <Top>
          <div style={{fontSize: "17px"}}>Follow me on socials</div>
          <Icons>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/KohnKaleb"
            >
              <GithubLogo style={{ fontSize: '4em', color: currentTheme.linkColor }} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/kaleb-kohn-2a1b3622b/"
            >
              <LinkedinLogo style={{ fontSize: '4em', color: currentTheme.linkColor }} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://discordapp.com/users/7071"
            >
              <DiscordLogo style={{ fontSize: '4em', color: currentTheme.linkColor }} />
            </a>
          </Icons>
        </Top>
        <Bottom>
          <div style={{fontSize: "17px"}}>Reach out to me</div>
          <form ref={form} onSubmit={sendEmail}>
            <input id="name" type="text" name="from_name" placeholder="name" class="form-control" required/>
            <input id="email" type="text" name="email" placeholder="email" class="form-control" required/>
            <textarea id="message" type="text" name="message" placeholder="message" class="form-control" required/>
            <button type="submit" class="btn btn-secondary">Submit</button>
          </form>
          <Toaster />
        </Bottom>
      </Container>
    </Section>
  );
};

export default React.memo(Contact);
