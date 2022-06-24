import React from 'react';
import styled from 'styled-components';
import { Section, SectionDivider, SectionText, SectionTitle,} from '../../styles/GlobalComponents';
import { contactblock, textarea, iframe, button }from './ContactStyles';
import { LinkItem} from '../Footer/FooterStyles';

import {Form, Input, Button } from 'antd';
const { TextArea } = Input;

function Contact(){
return (
  <contactblock>
    <div className="containter-fluid">
      <div className="titleHolder">
        <SectionTitle main>Let's connect!</SectionTitle>
        <SectionDivider />
        <SectionText>I am currently accepting new freelance clients, interesting project opportunities, and memes.</SectionText>

        <iframe
        class="scribd_iframe_embed"
        title="Albert Njubi Resume" 
        src="https://drive.google.com/file/d/1RB4cUJ6JR5l0HsAMWKoH5ZBfFicf3R-D/preview"
        tabindex="0"
        data-auto-height="true"
        data-aspect-ratio="0.7729220222793488"
        scrolling="no"
        width="100%"
        height="500"
        frameborder="0">
      </iframe>

        <SectionText>Email me at: <strong><LinkItem href="mailto:biz@albertnjubi.com">biz@albertnjubi.com</LinkItem></strong><br />
          Or send me a quick message here:</SectionText>
      </div>
      
      <Form
        name="contactForm"
        className="form"
        method="POST"
        data-netlify="true"
        type="hidden"
        initialValues={{ remembered: true }}
        data-netlify-recaptcha="true"
      >
        <Form.Item
          name="Full Name"
          type="hidden"
          rules={[{ required: true, message: 'Please enter your full name' }]}
        >
          <Input placeholder="Full Name" />
        </Form.Item>

        <Form.Item
          name="Email"
          type="hidden"
          rules={[{ required: true, message: 'Please enter your Email' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="Subject"
          type="hidden"
        >
          <Input placeholder="Subject" />
        </Form.Item>

        <Form.Item
          name="Message"
          type="hidden"
        >
          <div class="field">
          <TextArea placeholder="Message me here!" name="message" id="message" cols="50"/>
					</div>
        </Form.Item>

        <Form.Item>
          <ul class="actions">
						<li>
              <div data-netlify-recaptcha="true"></div>
            <Button type="submit" value="Send" class="button primary">Send</Button>
            <Button type="reset" value="Reset" class="button primary">Reset</Button>
            </li>
					</ul>
        </Form.Item>

      </Form>
    <div/>
  </div>
  </contactblock>
  );
}

export default Contact;

