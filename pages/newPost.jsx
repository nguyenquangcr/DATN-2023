import React, {Fragment, useRef} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import {Button, Col, Form, Input, Row, Typography} from 'antd';
import {createPostUser} from '../services/PostUser';
import {notification} from 'antd';
import PageNewPostSuccess from '../components/PageNewPostSuccess';
import classNames from 'classnames';

const NewPost = () => {
    const [form] = Form.useForm();
    const editorRef = useRef(null);
    //state
    const [loadding, setloadding] = React.useState(false);
    const [type, setType] = React.useState('Edit');
    const onFinish = async (values) => {
        setloadding(true);
        try {
            await createPostUser({
                ...values,
                content: editorRef.current.getContent()
            })
                .then((res) => {
                    setloadding(false);
                    if (res.status == 200) {
                        notification.success({
                            message: 'Thêm bài viết thành công',
                            duration: 500
                        });
                    }
                    setType('Success');
                })
                .catch((err) => {
                    if (res.status == 200) {
                        notification.success({
                            message: 'Thêm bài viết Thất bại',
                            duration: 500
                        });
                    }
                    console.log('err:', err);
                    setloadding(false);
                });
        } catch (error) {
            if (res.status == 200) {
                notification.success({
                    message: 'Thêm bài viết Thất bại',
                    duration: 500
                });
            }
            setloadding(false);
            console.log('error:', error);
        }
    };

    return (
        <>{
            type == 'Edit' ?
                <>
                    <Typography.Title editable level={4} style={{margin: '15px'}}>
        Thêm bài Viết
                    </Typography.Title>
                    <Row style={{margin: '20px 10px'}} gutter={16}>
                        <Col span={12}>
                            <Editor
                                onInit={(evt, editor) => (editorRef.current = editor)}
                                initialValue="<p>This is the initial content of the editor.</p>"
                                init={{
                                    selector: 'textarea#image-tools',
                                    height: 500,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste imagetools wordcount'
                                    ],
                                    toolbar:
                'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
                                    content_style:
                'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                }}
                            />
                        </Col>
                        <Col span={12}>
                            <Form
                                layout={'vertical'}
                                form={form}
                                style={{maxWidth: 600}}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    label="Tiêu đề"
                                    name="title"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Nôi dung này không được để trống!'
                                        }
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Hình đại diện"
                                    name="linkImage"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Nôi dung này không được để trống!'
                                        }
                                    ]}
                                >
                                    <Input placeholder="Lưu ý nhập link hình ảnh. Ví dụ:http://meovathay.com/image.jpg" />
                                </Form.Item>
                                <Form.Item
                                    label="Mô tả"
                                    name="description"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Nôi dung này không được để trống!'
                                        }
                                    ]}
                                >
                                    <Input.TextArea />
                                </Form.Item>
                                <Form.Item>
                                    <Button loading={loadding} type="primary" htmlType="submit">
                Đăng bài viết
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </> :
                <Fragment>
                    <div className="container">
                        <div className={classNames('container-body clearfix w1040')}>
                            <div className={classNames('clearfix w1040')}>
                                <PageNewPostSuccess />
                            </div>
                        </div>
                    </div>
                </Fragment>
        }
        </>
    );
};

export default NewPost;
