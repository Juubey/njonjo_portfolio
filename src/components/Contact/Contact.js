import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle,} from '../../styles/GlobalComponents';
import {Form, Input, Button } from 'antd';
const { TextArea } = Input;

function Contact(){
return (
  <div className="block Contact">
    <div className="containter-fluid">
      <div className="titleHolder">
        <SectionTitle main>Let's connect!</SectionTitle>
        <SectionDivider/>
        <SectionText>I am currently accepting new freelance clients, interesting project opportunities, and memes.</SectionText>
        <SectionText>Email me at: <strong>albert.njubi1@gmail.com</strong><br/>
        Or send me a quick message here:</SectionText>
      </div>
    <Form
    name="contactForm"
    className="form"
    initialValues={{remembered: true}}
    >
      <Form.Item
        name="Full Name"
        rules={[{required: true, message: 'Please enter your full name' }]}
      >
        <Input placeholder= "Full Name" />
      </Form.Item>

      <Form.Item
        name="Email"
        rules={[{required: true, message: 'Please enter your Email' }]}
      >
        <Input placeholder= "Email" />
      </Form.Item>

      <Form.Item
        name="Subject"
      >
        <Input placeholder= "Subject" />
      </Form.Item>

      <Form.Item
        name="Message"
      >
        <TextArea placeholder= "Form Submissions are Disabled for the time being. If you need me, please reach out via Email" />
      </Form.Item>

      <Form.Item>
      <Button type="default" htmlType="submit" className="btn btn-primary">
      Submit  
      </Button>
      <Button type="reset" htmlType="reset" CLASS="btn btn-secondary">
      Reset  
      </Button>
      </Form.Item>

   </Form>
    </div>
  </div>
  );
}

export default Contact;

