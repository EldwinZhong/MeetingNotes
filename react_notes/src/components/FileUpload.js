import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
  }

  handleFileChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0] ///choose first file selected 
    });
  }

  handleSubmit = (event) => {
    // Perform upload logic here
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup className="d-flex align-items-center">
          <Input type="file" id="fileUpload" onChange={this.handleFileChange} />
          <Button type="submit" color="primary" className="ml-2">Upload</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default FileUpload;