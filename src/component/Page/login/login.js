import React, { Component } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Container, Row, Col,Button,Card,CardBody,FormGroup,CardGroup} from 'reactstrap';
import swal from 'sweetalert';
import '../login/login.css';
import { async } from 'q';
class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:"",
      location:"",
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange1(event) {
    this.setState({ username: event.target.value });
  }

  handleChange2(event) {
    this.setState({ password: event.target.value });

  }
  handleChange3(event) {
    this.setState({ location: event.target.value });
  }
  async handleClick(event) {
    if(this.state.username==="chiao" && this.state.password==="test1234"){
      await swal({
        title: "Good job!",
        text: this.state.username + " is signed in...!",
        icon: "success",
        button: "OK",
      });

      window.location.assign("home");

    }
    else{
      swal({
        title: "Sorry!",
        text: "please sign in...!",
        icon: "error",
        button: "OK",
      });;
    }
  }
  render() {
    return (
      <div className = "container-fluid">
        <br/>
        <Row>
          <Col sm={{ size: 4, order: 2, offset: 4 }}>
          <Container className="login">
            <CardGroup>
                <Card className = "cardlogin">
                  <CardBody>
                  <h1 className = "text-center"> SIGN IN</h1>
                  <hr/>
                  <br/>
                  <AvForm>
                      <AvField label="Username" name="username" type="text" value={this.state.username} 
                                onChange={this.handleChange1} validate={{
                        required: {value: true, errorMessage: 'Please enter username'},
                        pattern: {value: '^[A-Za-z0-9]+$', errorMessage: 'Your username must be composed only with letter and numbers'},
                        minLength: {value: 3, errorMessage: 'Your username must be between 3 and 16 characters'},
                        maxLength: {value: 16, errorMessage: 'Your username must be between 3 and 16 characters'}
                      }} grid={{xs: 9}} />
                      <AvField label="Password" name="password" type="password" value={this.state.password} 
                                onChange={this.handleChange2} validate={{
                        required: {value: true, errorMessage: 'Please enter password'},
                        pattern: {value: '^[A-Za-z0-9]+$', errorMessage: 'Your password must be composed only with letter and numbers'},
                        minLength: {value: 3, errorMessage: 'Your password must be between 3 and 16 characters'},
                        maxLength: {value: 16, errorMessage: 'Your password must be between 3 and 16 characters'}
                      }} grid={{xs: 9}} />
                      <AvField name="location" label="Location" type="select" errorMessage="กรุณาเลือกแผนก" value={this.state.location} 
                                onChange={this.handleChange3} validate={{
                            required: {value: true}
                            }}  grid={{xs: 9}}> <option> Select... </option>
                                              <option value = "แผนกฉุกเฉินและอุบัติเหตุ (Emergency Room)" > แผนกฉุกเฉินและอุบัติเหตุ (Emergency Room) </option>
                                              <option value = "แผนกผู้ป่วยนอก (Outpatient Department)" > แผนกผู้ป่วยนอก (Outpatient Department) </option>
                                              <option value = "แผนกผู้ป่วยใน (Inpatient Department)" > แผนกผู้ป่วยใน (Inpatient Department) </option>
                                              <option value = "แผนกผู้ป่วยหนัก (Intensive Care Unit)" > แผนกผู้ป่วยหนัก (Intensive Care Unit) </option>
                                              <option value = "แผนกรังสีกรรม (Radiology Department)" > แผนกรังสีกรรม (Radiology Department) </option>
                                              <option value = "แผนกห้องปฏิบัติการทางการแพทย์ (Laboratory Department)" > แผนกห้องปฏิบัติการทางการแพทย์ (Laboratory Department) </option>
                                              <option value = "แผนกศัลยกรรม (Surgical Department)" > แผนกศัลยกรรม (Surgical Department) </option>
                                              <option value = "แผนกวิสัญญี (Department of Anaesthesia)" > แผนกวิสัญญี (Department of Anaesthesia) </option>
                                              <option value = "แผนกกุมารเวชกรรม (Pediatrics Department)" > แผนกกุมารเวชกรรม (Pediatrics Department) </option>
                                              <option value = "แผนกสูตินรีเวชกรรม (Obstretic - Gynecology Department)" > แผนกสูตินรีเวชกรรม (Obstretic - Gynecology Department) </option>
                                              <option value = "แผนกเวชศาสตร์ฟื้นฟู (Physical Therapy Department)" > แผนกเวชศาสตร์ฟื้นฟู (Physical Therapy Department) </option>
                                              <option value = "แผนกอายุรกรรม (Medicine Department)" > แผนกอายุรกรรม (Medicine Department) </option>
                                              <option value = "แผนกจักษุ (Ophthalmology Department)" > แผนกจักษุ (Ophthalmology Department) </option>
                                              <option value = "แผนกหู คอ จมูก (Ear nose and throat Department)" > แผนกหู คอ จมูก (Ear nose and throat Department) </option>
                                              <option value = "แผนกเภสัชกรรม (Phamarceutical Department)" > แผนกเภสัชกรรม (Phamarceutical Department) </option>
                                              <option value = "แผนกจิตเวช (Psychology Department)" > แผนกจิตเวช (Psychology Department) </option>
                                              <option value = "ห้องผ่าตัด (OPERATING ROOM)" > ห้องผ่าตัด (OPERATING ROOM) </option>
                                              <option value = "ห้องคลอด (LABOR ROOM)" > ห้องคลอด (LABOR ROOM) </option>
                                              <option value = "ศัลยกรรมกระดูก (ORTHOPEDIC)" > ศัลยกรรมกระดูก (ORTHOPEDIC) </option>
                                              <option value = "แผนกเอ็กซเรย์วินิจฉัย รังสีวินิจฉัย (Radiology)" > แผนกเอ็กซเรย์วินิจฉัย รังสีวินิจฉัย (Radiology) </option>
                                              <option value = "หออภิบาลผู้ป่วยหนักเฉพาะโรคหัวใจ (Coronary Care Unit)" > หออภิบาลผู้ป่วยหนักเฉพาะโรคหัวใจ (Coronary Care Unit) </option>
                                              <option value = "ศูนย์ทันตกรรม (Dental Center)" > ศูนย์ทันตกรรม (Dental Center) </option>
                                              <option value = "ศูนย์รังสีวินิจฉัย (Medical Imaging Center)" > ศูนย์รังสีวินิจฉัย (Medical Imaging Center) </option>
                                              <option value = "คลินิกระบบทางเดินปัสสาวะ (Urology Clinic)" > คลินิกระบบทางเดินปัสสาวะ (Urology Clinic) </option>
                                              <option value = "ศูนย์โรคระบบทางเดินอาหาร (GI Center)" > ศูนย์โรคระบบทางเดินอาหาร (GI Center) </option>
                                              <option value = "คลินิกผิวหนัง (Skin care / Dermatology Clinic)" > คลินิกผิวหนัง (Skin care / Dermatology Clinic) </option>
                                              <option value = "ศูนย์ผู้มีบุตรยาก (Infertility Center)" > ศูนย์ผู้มีบุตรยาก (Infertility Center) </option>
                                              <option value = "คลินิกวัยทอง (Golden Age Clinic)" > คลินิกวัยทอง (Golden Age Clinic) </option>
                                              <option value = "ศูนย์หัวใจและหลอดเลือด  (Heart / Cardiovascular Center)" > ศูนย์หัวใจและหลอดเลือด (Heart / Cardiovascular Center) </option>
                                              <option value = "ศูนย์โรคไต  (Kidney Disease Clinic)" > ศูนย์โรคไต (Kidney Disease Clinic)</option>
                                              <option value = "คลินิกเบาหวานและต่อมไร้ท่อ  (Diabetes & Metabolic Center)" > คลินิกเบาหวานและต่อมไร้ท่อ (Diabetes & Metabolic Center) </option>
                                              <option value = "ศูนย์รักษ์เต้านม (Breast Care Center)" > ศูนย์รักษ์เต้านม (Breast Care Center) </option>
                                              <option value = "คลินิกความอ้วน (Weight Control Clinic)" > คลินิกความอ้วน (Weight Control Clinic) </option>
                                              <option value = "ศูนย์สมองและระบบประสาท (Neurological Center)" > ศูนย์สมองและระบบประสาท (Neurological Center) </option>
                                              <option value = "ศูนย์เนื้องอก / มะเร็ง (Oncology / Cancer Center)" > ศูนย์เนื้องอก / มะเร็ง (Oncology / Cancer Center) </option>
                                              <option value = "หน่วยงานห้องยา/คลังยา (Pharmacy)" > หน่วยงานห้องยา/คลังยา (Pharmacy) </option>
                          </AvField>
                      <FormGroup body className = "text-center">
                        <Button color="primary"   onClick={this.handleClick.bind(this)}>SIGN IN</Button>
                      </FormGroup>
                    </AvForm>
                  </CardBody>
                </Card>
              </CardGroup>
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}

export default login;
