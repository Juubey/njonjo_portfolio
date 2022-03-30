import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle,} from '../../styles/GlobalComponents';
/**import { contactBlock, textarea, iframe, button }from './ContactStyles';**/

import {Form, Input, Button } from 'antd';
const { TextArea } = Input;

function Contact(){
return (
  <ContactBlock>
    <div className="containter-fluid">
      <div className="titleHolder">
        <SectionTitle main>Let's connect!</SectionTitle>
        <SectionDivider />
        <SectionText>I am currently accepting new freelance clients, interesting project opportunities, and memes.</SectionText>

        <iframe
        class="scribd_iframe_embed"
        title="Albert Njubi Resume.pdf"
        src="https://www.scribd.com/embeds/478032261/content?start_page=1&view_mode=scroll&access_key=key-OyEo06HE6YnryccilJQV"
        tabindex="0"
        data-auto-height="true"
        data-aspect-ratio="0.7729220222793488"
        scrolling="no"
        width="100%"
        height="600"
        frameborder="0">
      </iframe>

        <SectionText>Email me at: <strong>albert.njubi1@gmail.com</strong><br />
          Or send me a quick message here:</SectionText>
      </div>
      <Form
        name="contactForm"
        className="form"
        method="POST"
        data-netlify="true"
        type="hidden"
        initialValues={{ remembered: true }}
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
          <TextArea placeholder="Form Submissions are Disabled for the time being. If you need me, please reach out via Email" />
        </Form.Item>

        <Form.Item>
          <Button type="default">
            Send
          </Button>
          <Button type="reset" htmlType="reset">
            Reset
          </Button>
        </Form.Item>

      </Form>
    <div/>

    </div>
  </ContactBlock>
  );
}

export default Contact;

