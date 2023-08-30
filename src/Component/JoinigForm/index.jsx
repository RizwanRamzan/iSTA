import React, { useState } from 'react'
import TopBar from '../../Component/Layout/TopBar'
import '../../Pages/Contact/contact.scss'
import { Button, Card, Col, Form, Input, Row, Select } from 'antd'
import { Gmail, whatsapp } from '../../assets'
import Footer from '../../Component/Layout/Footer'

const JoiningForm = () => {

    const [service, setService] = useState("")
    const { TextArea } = Input;

    return (
        <div className='contact-main'>
            <TopBar button="Join" activeClass="activehome" />
            <div className='contact'>
                {service == "institute" &&
                    <p>Apply Now</p>
                }
                {service == "solutions" &&
                    <p>Connect Now</p>
                }
                {service == "shop" &&
                    <p>Order Now</p>
                }
                {service == "" &&
                    <p>Join Now</p>
                }
            </div>

            <div style={service == "institute" && {background:"rgba(59, 125, 237, 0.05)"} || service == "solutions" &&  {background:"rgba(43, 162, 76, 0.05)"} || service == "shop" && {background:"rgba(228, 62, 43, 0.05)"} || {}} className='contact-form'>
                <div className='contact-form-box'>
                    <Form layout='vertical' style={{ width: "100%" }}>
                        <Row gutter={40}>
                            <Col span={24}>{service == "institute" &&
                                <p style={{color:"#3B7DED"}} >Get Admission Get Success</p>
                            }
                                {service == "solutions" &&
                                    <p style={{color:"#2BA24C"}}>Change Dream With Reality</p>
                                }
                                {service == "shop" &&
                                    <p style={{color:"#E43E2B"}}>"Your One-Stop Destination for All Your IT Needs!"</p>
                                }
                                {service == "" &&
                                    <p>Get in Touch With Us</p>
                                }</Col>
                            <Col span={24}>
                                <Form.Item name='service' label="Service" rules={[{ required: true, message: "please select service" }]}>
                                    <Select onChange={(e) => setService(e)} placeholder='Enter service' className='ant-select-selector'>
                                        <Select.Option value="institute">
                                            Institute
                                        </Select.Option>
                                        <Select.Option value="solutions">
                                            Solutions
                                        </Select.Option>
                                        <Select.Option value="shop">
                                            IT Shop
                                        </Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
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
                            <button style={service == "institute" && {background:"#3B7DED"} || service == "solutions" &&  {background:"#2BA24C"} || service == "shop" && {background:"#E43E2B"} || {}} >Submit Now</button>
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

export default JoiningForm