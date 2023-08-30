import React from 'react'
import TopBar from '../../Component/Layout/TopBar'
import './contact.scss'
import { Button, Card, Col, Form, Input, Row } from 'antd'
import { Gmail, whatsapp } from '../../assets'
import Footer from '../../Component/Layout/Footer'

const Contact = () => {

    const { TextArea } = Input;

    return (
        <div className='contact-main'>
            <TopBar button="Join" activeClass="activehome" />
            <div className='contact'>
                <p>Contact</p>
            </div>
            <div className='contact-content'>
                <div className='contact-text-box'>
                    <Row gutter={40}>
                        <Col span={24}>
                            <p>Connecting with Us is Just a Click Away!</p>
                        </Col>
                        <Col span={12}>
                            <Card className='contact-boxs'>
                                <img src={whatsapp} />
                                <p>+92 300 110 4782</p>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card className='contact-boxs'>
                                <img src={Gmail} />
                                <p>ista478822@gmail.coms</p>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='contact-form'>
                <div className='contact-form-box'>
                    <Form layout='vertical' style={{ width: "100%" }}>
                        <Row gutter={40}>
                            <Col span={24}><p>Get in Touch With Us</p></Col>
                            <Col span={12}>
                                <Form.Item name='name' label="Full Name" rules={[{ required: true, message: "please enter you full name" }]}>
                                    <Input placeholder='Enter Fisrt Name' className='ant-input-affix-wrapper' />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item name='cnic' label="CNIC (Optional)" rules={[{ required: false, message: "please enter you CNIC" }]}>
                                    <Input placeholder='Enter CNIC' className='ant-input-affix-wrapper' />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item name='email' label="Email" rules={[{ required: true, message: "please enter you valid email" }]}>
                                    <Input placeholder='Enter email' className='ant-input-affix-wrapper' />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item name='phoneNumber' label="Phone Number" rules={[{ required: true, message: "please enter you phone number" }]}>
                                    <Input type='number' placeholder='Enter phone number' className='ant-input-affix-wrapper' />
                                </Form.Item>
                            </Col>
                            <Col span={24} className='textarea'>
                                <Form.Item name='description' label="Description" rules={[{ required: true, message: "please enter you description" }]}>
                                    <TextArea rows={4} placeholder='Enter description' className='ant-input-affix-wrapper' />
                                </Form.Item>
                            </Col>
                        </Row>
                        <div span={24} className='form-button'>
                            <button>Send message</button>
                        </div>
                    </Form>
                </div>
            </div>


            {/* Meet Our iSTA Team */}

            <div className='meet'>
                <div className='meet-team' >
                    <div className='meet-box' >
                        <p className='meet-our'>Frequently Asked Questions</p>
                        <p className='meet-explor' >Explore</p>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Contact