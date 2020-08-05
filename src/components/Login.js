import React, { useState } from "react";
import { Form, Input, Button } from 'antd'
import { auth, signInWithGoogle } from "../firebase";

function Login () {
    const [user, setUser] = useState("");
    const layout = {
        labelCol: { span: 8},
        wrapperCol: {span: 16},
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     const { email, password } = user;
    //     await auth.signInWithEmailAndPassword(email, password);
    //     setUser({
    //         email: "",
    //         password: "",
    //     });
    // };

    return (
        <div className = "login">
            <Form
                {...layout}
                name = "basic"
                >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!'}]}
                    >
                    <Input
                    //     name="email"
                    //     onChange = {e => {
                    //         const {name, value} = e.target;
                    //         console.log(name);
                    //         setUser({...user, [name]: value });
                    // }}
                    />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Please input your password!"},]}
                    >
                    <Input.Password
                        // name = "password"
                        // onChange = {e => {
                        //     const {name, value} = e.target;
                        //     console.log(name);
                        //     setUser({...user, [name]: value });
                        // }}
                    />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" /*onClick={onSubmit}*/>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            {/*<Button*/}
            {/*    type="primary"*/}
            {/*    onClick={signInWithGoogle}*/}
            {/*    >*/}
            {/*</Button>*/}
        </div>
    )
}

export default Login;
