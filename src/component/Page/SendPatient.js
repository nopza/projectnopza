import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../css/style4.css'
import '../Page/Page.css'
import Navheader from '../Header/Navheader';

import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class SendPatient extends Component {
  constructor(props) {
    super(props);

    this.state = {
        columnService: [
            {headerName: "วันที่รับบริการ", field: "วันที่รับบริการ",width :180,checkboxSelection: true,suppressSizeToFit: true},
            {headerName: "อาการสำคัญ", field: "อาการสำคัญ",width :230},
            {headerName: "สิทธิรักษา", field: "สิทธิรักษา",width :200},
            {headerName: "Doctor", field: "Doctor",width :230},
            {headerName: "Location", field: "Location",width :200}
        ],
        rowDataService: [
            {วันที่รับบริการ: "", อาการสำคัญ: "", สิทธิรักษา: "", Doctor: "", Location: ""},
        ],
        columnVisit: [
          {headerName: "ลำดับ", field: "ลำดับ",width :140,checkboxSelection: true,suppressSizeToFit: true},
          {headerName: "สิทธิ", field: "สิทธิ",width :300},
          {headerName: "ความคุ้มครอง", field: "ความคุ้มครอง",width :300},
          {headerName: "Contact", field: "Contact",width :300}
        ],
            
        // เปลี่ยนจาก rowDataVisit เเล้วใช้ fetch ใน fx  componentdidmount ได้ ComponentDidMount() {
        //           fetch('https://api.myjson.com/bins/15psn9')
        //               .then(result => result.json())
        //               .then(rowData => this.setState({rowData}))
        //       } แบบนี้ ในการดึงข้อมูลไปใส่ในตาราง

         rowDataVisit: [
          {วันที่รับบริการ: "", อาการสำคัญ: "", สิทธิรักษา: "", Doctor: "", Location: ""},
        ],
        columnAppoint: [
          {headerName: "", field: "",width :180},
          {headerName: "", field: "",width :230},
          {headerName: "", field: "",width :200},
          {headerName: "", field: "",width :220},
          {headerName: "", field: "",width :220}
        ],
        rowDataAppoint: [
          {วันที่รับบริการ: "", อาการสำคัญ: "", สิทธิรักษา: "", Doctor: "", Location: ""},
        ],
    }
}
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className='container'>
          <Navheader />
          <form >
          <div className="card">
            <div className="card-header">
              <h4>ส่งตรวจผู้ป่วย</h4>
            </div>
            <div className="card-body">
              <div className="card">
                <div className="card-body">
                  <div className="form-row ">
                    <div className="form-group  col-md-6">
                      <label>ค้นหา </label>
                      <input type='text' className="form-control" />
                    </div>
                  </div>
                  <div className="form-group "> 
                    <button type="search" class="btn btn-primary mb-2 mr-sm-2"> ค้นหา </button>
                    <button type="button" class="btn  mb-2 mr-sm-2"> อ่านบัตรประชาชน </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="form-row ">
                    <div className="form-group col-md-12">
                      <label>ชื่อ-สกุล</label>
                      <input type='text' className="form-control" />
                    </div>
                    <div className="form-group col-md-12">
                      <label>Name</label>
                      <input type='text' className="form-control" />
                    </div>
                    <div className="form-group col-md-5">
                      <label>ว ด ป เกิด</label>
                      <input type='date' className="form-control" />
                    </div>
                    <div className="form-group col-md-2">
                      <label>อายุ</label>
                      <input type='number' className="form-control" />
                    </div>
                    <div className="form-group col-md-5">
                      <label>เบอร์โทร</label>
                      <input type='number' className="form-control"/>
                    </div>
                    <div className="form-group col-md-12">
                      <label>ที่อยู่</label>
                      <input type='text' className="form-control" />
                    </div>
                    <div className="form-group col-md-4">
                      <label>เชื่อชาติ</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group col-md-4">
                      <label>สัญชาติ</label>
                      <input type='text' className="form-control" />
                    </div>
                    <div className="form-group col-md-4">
                      <label>ศาสนา</label>
                      <input type='text' className="form-control"/>
                    </div>
                    <div className="form-group  col-md-6">
                      <label>เลขบัตรประชาชน </label>
                      <input type='text' className="form-control" />
                    </div>
                  </div>
                  <div className="form-group text-right"> 
                    <button type="button" class="btn btn-success mb-2 mr-sm-2"> ทะเบียนผู้ป่วยใหม่</button>
                    <button type="button" class="btn btn-outline-danger mb-2 mr-sm-2"> แก้ไขรายการ</button>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="card-body">
                  <div className="form-row ">
                    <div className="form-group col-md-12">
                      <label><b>ประวัติการรับบริการ</b></label>
                    </div>
                    <div style={{ height: '300px', width: '100%'}} className="ag-theme-balham">
                      <AgGridReact
                        enableColResize={true}
                        enableSorting={true}
                        enableFilter={true}
                        rowSelection="multiple"
                        columnDefs={this.state.columnAppoint}
                        rowData={this.state.rowDataAppoint}>
                      </AgGridReact>
                    </div>
              
                    <div className="form-group col-md-2">    <br/>               
                      <div className="form-inline"> 
                        <div class="custom-control custom-checkbox"> 
                          <input type="checkbox" className="custom-control-input" id="special"/> 
                          <label className="custom-control-label" for="special"> limit 10 </label>
                        </div>
                        
                      </div>
                    </div>

                    <div className="form-group col-md-10 text-right">
                      <fieldset >
                        <button type="button" class="btn  mt-3"> เลือกใช้สิทธิจาก Visit นี้</button>
                      </fieldset>
                    </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <div className="form-row ">
                      <div className="form-group col-md-12">
                        <label>อาการสำคัญ</label>
                        <input type='text' className="form-control" />
                      </div>
                      <div className="form-group col-md-2">
                        <label>ส่งไปตรวจที่</label>
                        <input type='text' className="form-control" />
                      </div>
                      <div className="form-group col-md-10">
                        <fieldset >
                          <label><br/></label>
                          <input type='text' className="form-control" />
                        </fieldset>
                      </div>
                      <div className=" form-group col-md-12">
                        <label>แพทย์</label>
                          <select className="form-control">
                            <option></option>
                            <option>นาย</option>
                            <option>นาง</option>
                            <option>นางสาว</option>
                          </select>
                          <div className="form-group ">
                            <button type="button" class="btn  mt-3"> ระบุเเพทย์อื่น</button>
                          </div>
                      </div>
                      <div className=" form-group col-md-5">
                        <label>การมารับบริการ </label>
                          <select className="form-control">
                            <option></option>
                            <option>มารับบริการเอง</option>
                          </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <div className="form-row ">
                      <div className="form-group col-md-12">
                        <label><b>สิทธิรักษาพยาบาลที่ใช้ Visit นี้</b></label>
                      </div>
                      <div style={{ height: '300px', width: '100% '}} className="ag-theme-balham">
                      <AgGridReact
                        enableColResize={true}
                        enableSorting={true}
                        enableFilter={true}
                        rowSelection="multiple"
                        columnDefs={this.state.columnVisit}
                        rowData={this.state.rowDataVisit}>
                      </AgGridReact>
                    </div>
                      <div className="form-group text-right"> 
                      <br/>
                        <button type="button" class="btn btn-success mb-2 mr-sm-2"> เลือกสิทธิรักษาพยาบาล</button>
                        <button type="button" class="btn btn-outline-danger mb-2 mr-sm-2"> ลบ</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="form-row ">
                      <div className="form-group col-md-12">
                         <label><b>ประวัติการนัดหมาย</b></label>
                      </div>
                      <div style={{ height: '300px', width: '100% '}} className="ag-theme-balham">
                      <AgGridReact
                        enableColResize={true}
                        enableSorting={true}
                        enableFilter={true}
                        rowSelection="multiple"
                        columnDefs={this.state.columnService}
                        rowData={this.state.rowDataService}>
                      </AgGridReact>
                    </div>
                    </div>
                  </div>
                </div>


                <div className="card">
                  <div className="card-body">
                    <div className="form-row ">
                      <div className="form-group col-md-12">
                        <label><b>เอกสาร</b></label>
                      </div>
                      <div class="d-flex flex-column col-md-4 ">
                        <div class="radio"> ใบรับรองเเพทย์ </div>
                          <div className="form-lebel">
                            <div class="custom-control custom-radio">
                              <input type="radio" className="custom-control-input" id="customRadio1" name="radio2"/>
                              <label className="custom-control-label" for="customRadio1">เบิกค่ารักษา</label>
                            </div>
                            <div class="custom-control custom-radio">
                              <input type="radio" className="custom-control-input" id="customRadio2" name="radio2"/>
                              <label className="custom-control-label" for="customRadio2">ลา</label>
                            </div>
                            <div class="custom-control custom-radio">
                              <input type="radio" className="custom-control-input" id="customRadio3" name="radio2"/>
                              <label className="custom-control-label" for="customRadio3">เบิกค่ารักษาเเละลา</label>
                            </div>
                          </div>
                          <div className=" form-group  col-md-12 ">
                            <label>จำนวน </label>
                              <select className="form-control col-md-5 ">
                                <option></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                              </select>
                              <label>หมายเหตุ</label>
                                <input type='text' className="form-control" />
                          </div>
                        </div>
                        <div class="d-flex flex-column col-md-3 ">
                          <div class="checkbox">
                            <div class="form-check">
                              <div className="form-inline">
                                <div class="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                  <label className="custom-control-label" for="customCheck1">ใบรับรองยานอกบัญชี</label>
                                </div>
                              </div>
                              <div className="form-inline">
                                <div class="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                  <label className="custom-control-label" for="customCheck2">ใบเคลม</label>
                                </div>
                              </div>
                           </div>
                          </div>
                        </div>
                        <div class="d-flex flex-column col-md-5 ">
                          <div class="checkbox">
                            <div className="form-inline">
                              <div class="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                                <label className="custom-control-label" for="customCheck3">อื่นๆ  ระบุ</label>
                              </div>
                            </div>
                          <div className=" form-group col-md-5 p-4">
                            <label>จำนวน</label>
                              <select className="form-control">
                                <option></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                              </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="form-row ">
                      <div className="d-flex flex-column col-md-4 ">
                        <div class="checkbox">
                          <div className="form-inline">
                            <div class="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="customCheck"/>
                              <label className="custom-control-label" for="customCheck">พิมพ์ใบ Visit Slip</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-column col-md-2">
                        <div class="radio">
                          <div className="form-inline">
                            <div class="custom-control custom-radio">
                              <input type="radio" className="custom-control-input" id="customRadio4" name="radio"/>
                              <label className="custom-control-label" for="customRadio4">ภาษาไทย</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-column col-md-2">
                        <div class="radio">
                          <div className="form-inline">
                            <div class="custom-control custom-radio">
                              <input type="radio" className="custom-control-input" id="customRadio5" name="radio"/>
                              <label className="custom-control-label" for="customRadio5">ภาษาอังกฤษ</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row ">
                  <div className="form-group col-md-12 text-right">
                    <button type="submit" class="btn btn-success mb-2 mr-sm-2 "> บันทึก </button>
                    <button type="button" class="btn btn-danger mb-2 mr-sm-2 "> ลบรายการ </button>
                  </div>
                </div>
              </div>
            </div>
  
          </form>
          <Footer />
        </div>
      </div>
    );
  }
}
export default SendPatient;