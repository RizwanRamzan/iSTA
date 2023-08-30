import React, { useState } from 'react'
import TopBar from '../../Component/Layout/TopBar'
import '../../Pages/Contact/contact.scss'
import { Col, Form, Input, Row } from 'antd'
import Footer from '../../Component/Layout/Footer'

const StartBuisness = () => {

    const { TextArea } = Input;

    return (
        <div className='contact-main'>
            <TopBar button="Join" activeClass="activehome" />
            <div className='contact'>
                <p>Start Business With iSTA</p>
            </div>

            <div className='contact-form'>
                <div className='contact-form-box'>
                    <Form layout='vertical' style={{ width: "100%" }}>
                        <Row gutter={40}>
                            <Col span={24}>
                                <p>Build Your Dream With iSTA</p>
                            </Col>
                            <Col span={24}>

                            </Col>
                            <Col span={12}>
                                <Form.Item name='name' label="Full Name" rules={[{ required: true, message: "please enter you full name" }]}>
                                    <Input placeholder='Enter Fisrt Name' className='ant-input-affix-wrapper' />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item name='company_name' label="Company Name" rules={[{ required: true, message: "please enter you company name" }]}>
                                    <Input placeholder='Enter your company name' className='ant-input-affix-wrapper' />
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
                            <Col span={12}>
                                <Form.Item name='city' label="City" rules={[{ required: true, message: "please enter you city" }]}>
                                    <Input placeholder='Enter your city' className='ant-input-affix-wrapper' />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item name='cnic' label="CNIC (Optional)" rules={[{ required: true, message: "please enter you CNIC" }]}>
                                    <Input placeholder='Enter CNIC' className='ant-input-affix-wrapper' />
                                </Form.Item>
                            </Col>
                            <Col span={12} className='textarea'>
                                <Form.Item name='description' label="Write Short Summary about your Idea/Plan" rules={[{ required: true, message: "please enter you details" }]}>
                                    <TextArea rows={4} placeholder='Enter details' className='ant-input-affix-wrapper' />
                                </Form.Item>
                            </Col>
                            <Col span={12} className='textarea'>
                                <Form.Item name='description1' label="Why Chose us for (business)?" rules={[{ required: true, message: "please enter you details" }]}>
                                    <TextArea rows={4} placeholder='Enter details' className='ant-input-affix-wrapper' />
                                </Form.Item>
                            </Col>
                        </Row>
                        <div span={24} className='form-button'>
                            <button >Submit Now</button>
                        </div>
                    </Form>
                </div>
            </div>

            <div style={{ width: "100%", marginTop: "20px" }}>


                <Footer />
            </div>

        </div>
    )
}

export default StartBuisness