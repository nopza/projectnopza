import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import '../../css/style4.css'
import '../../Page/Page.css'
import Navheader from '../../Header/Navheader';
import ScrollUpButton from "react-scroll-up-button";
// import ScrollToTop from "react-scroll-up";
import { AvForm} from 'availity-reactstrap-validation';

// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '../../css/table.scss'
import 'ag-grid-enterprise';
import Ginformation from './Ginformation';
import Ainformation from './Ainformation';
import Pinformation from './Pinformation';
import Cinformation from './Cinformation';
import Binformation from './Binformation';


class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
}

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className='container'>
          <Navheader />

          <AvForm>
          
          <div className="card">
            <div className="card-body">
              
              <div className="form-row">
                <div className=" form-group col-md-">
                  <label><br/></label>
                  <h3>Hospital Number</h3>
                </div>
                <div className=" form-group col-md-3">
                  <label><br/></label>
                  <fieldset disabled>
                    <input type='text' className="form-control" placeholder="00000000"  />
                  </fieldset>
                </div>
                               
                
              </div>
            </div>

          </div>

          <div>
            <Ginformation />
          </div>

          <div>
            <Ainformation />
          </div>

          <div>
            <Pinformation />
          </div>

          <div>
            <Cinformation />
          </div>
          
          <div>
            <Binformation />
          </div>

            <div className="form-row">
              <div className="form-group col-md-9">
                <button type="button" className="btn btn-success ">อ่านข้อมูลจากบัตรประชาชน</button>
              </div>
              <div className="form-group col-md-3">
                <button type="button" className="btn btn-danger ">ลบรายการ</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="submit" className="btn btn-primary ">บันทึก</button>&nbsp;&nbsp;&nbsp;&nbsp;     
                <button type="button" className="btn btn-second ">ยกเลิก</button>   
              </div>
            </div>
          </AvForm>
          <ScrollUpButton 
            StopPosition={0}
            ShowAtPosition={150}
            EasingType='easeOutCubic'
            AnimationDuration={500}
            ContainerClassName='ScrollUpButton__Container'
            TransitionClassName='ScrollUpButton__Toggled'
            style={{}}
            ToggledStyle={{}} />
            {/* <ScrollToTop showUnder={160}>
            <span>UP</span>
            </ScrollToTop> */}
          <Footer />

        </div>
        
      </div>
    );
  }
}

export default Register;
