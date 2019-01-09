import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../css/style4.css'
import '../Page/Page.css'
import Navheader from '../Header/Navheader';

//AGGrid
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

//Camera
import Camera from 'react-camera';

class SendPatient extends Component {
  constructor(props) {
    super(props);

    var Photo;

    //varaible
    this.state = { Search: '' };
    this.state = { THName: '' };
    this.state = { ENName: '' };
    this.state = { Brithdate: '' };
    this.state = { Age: '' };
    this.state = { PhoneNumber: '' };
    this.state = { Address: '' };
    this.state = { Race: '' };
    this.state = { Nationality: '' };
    this.state = { Religion: '' };
    this.state = { IDCardNumber: '' };
    this.state = { Victim: '' };
    this.state = { SendTo: '' };
    this.state = { SendToO: '' };
    this.state = { Doctor: '' };
    this.state = { Service: '' };


    this.state = {
        columnService: [
            {
              headerName: "วันที่รับบริการ", 
              field: "วันที่รับบริการ",
              // headerCheckboxSelection: true,
              // checkboxSelection: true,
              width :200
            },
            {
              headerName: "อาการสำคัญ", 
              field: "อาการสำคัญ",
              width :230
            },
            {
              headerName: "สิทธิรักษา", 
              field: "สิทธิรักษา",
              width :200
            },
            {
              headerName: "Doctor", 
              field: "Doctor",
              width :230
            },
            {
              headerName: "Location", 
              field: "Location",
              width :200,
            }
          ],
          defaultColDef: { width: 100 },
          rowSelection: "multiple",
          rowDataService: [
            {วันที่รับบริการ: "", อาการสำคัญ: "", สิทธิรักษา: "", Doctor: "", Location: ""},
        ],
        
        columnVisit: [
          {headerName: "ลำดับ", field: "ลำดับ",width :140},
          {headerName: "สิทธิ", field: "สิทธิ",width :300},
          {headerName: "ความคุ้มครอง", field: "ความคุ้มครอง",width :300},
          {headerName: "Contact", field: "Contact",width :300}
        ],
            
        // เปลี่ยนจาก rowDataVisit เเล้วใช้ fetch ใน fx componentdidmount ได้  => 
        //       ComponentDidMount() {
        //           fetch('https://api.myjson.com/bins/15psn9')        *(ตย. api)
        //               .then(result => result.json())
        //               .then(rowData => this.setState({rowData}))
        //       } 
        // แบบนี้ ในการดึงข้อมูลไปใส่ในตาราง
        
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
    this.takePicture = this.takePicture.bind(this);
}

takePicture() {
  this.camera.capture()
  .then(blob => {
    this.img.src = URL.createObjectURL(blob);
    this.img.onload = () => { URL.revokeObjectURL(this.src); }
  })
}


sizeToFit() {
  this.gridApi.sizeColumnsToFit();
}
autoSizeAll() {
  var allColumnIds = [];
  this.gridColumnApi.getAllColumns().forEach(function(column) {
    allColumnIds.push(column.colId);
  });
  this.gridColumnApi.autoSizeColumns(allColumnIds);
}

  render() {

    return (
      <div className="wrapper">
        <Header />
        <div className='container'>
          <Navheader />
          <form>
          <div className="card">
            <div className="card-header">
              <h4>ส่งตรวจผู้ป่วย</h4>
            </div>
            <div className="card-body">

              {/*ค้นหา*/}

              <div className="card">
                <div className="card-body">
                  <div className="form-row ">
                    <div className="d-flex flex-column col-md-8 ">
                      <div className="form-group  col-md-10">
                        <label>ค้นหา </label>
                        <input type='text' className="form-control" name = "Search" />
                        <br/>
                        <button type="search" class="btn btn-primary mb-2 mr-sm-2"> ค้นหา </button>
                        <button type="button" class="btn mb-2 mr-sm-2"> อ่านบัตรประชาชน </button>
                      </div>
                    </div>
                    <div className="d-flex flex-column col-md-1">
                      <label> <br/><br/><br/></label>
                        <button type="button" class="btn btn-outline-secondary mt-3 " data-toggle="modal" 
                        data-target="#exampleModal"> <i class="fas fa-camera"></i> </button>
                      
                      {/* Modal */}
                    
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel"> Picture Capture </h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                              </div>
                              <div class="modal-body">
                                <div class="container-fluid">
                                  
                                  <div class="row">
                                    <div class="col d-flex justify-content-center">
                                      <div class="card" >
                                        <div class="card-body">
                                          <div class = "container" >
                                            <Camera width = '70%' height = '70%'
                                              class = "preview"
                                              ref={(cam) => {
                                              this.camera = cam;}}> 
                                            </Camera>
                                          </div>
                                          <br/>
                                          <div class = "container" >
                                          <div class="form-row">  
                                            <div className="form-group col-md-12 text-center"> 
                                              <div class= "captureContainer"  >
                                                <div class = "captureButton" >
                                                  <button type="button" class="btn btn-success" onClick={this.takePicture}> ถ่าย </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col d-flex justify-content-center">
                                      <div class="card" >
                                        <div class="card-body">
                                          <img class ="captureImage" width = '100%' height = '100%'
                                           ref={(img) => {
                                           this.img = img;}}
                                           screenshotFormat="image/jpeg"
                                           alt= "imag"/>
                                        </div>
                                        
                                        <div class = "container" >
                                          <div class="form-row">  
                                            <div className="form-group col-md-12 text-center"> 
                                              <div class= "captureContainer"  >
                                                <div class = "captureButton" >
                                                  <button type="button" class="btn btn-success"> ถ่ายใหม่ </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-primary"> ตกลง </button>
                                <button type="button" class="btn btn-danger" data-dismiss="modal"> ปิด </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-column col-md-3 ">
                        < img src="..." class="rounded float-right" alt="userpicture"/>
                      </div>
                    </div>
                  </div>
                </div>

                {/*ประวัติ*/}

              <div className="card">
                <div className="card-body">
                  <div className="form-row ">
                    <div className="form-group col-md-12">
                      <label>ชื่อ-สกุล</label>
                      <input type='text' className="form-control" name = "THName" />
                    </div>
                    <div className="form-group col-md-12">
                      <label>Name</label>
                      <input type='text' className="form-control" name = "ENName"/>
                    </div>
                    <div className="form-group col-md-5">
                      <label>ว ด ป เกิด</label>
                      <input type='date' className="form-control" name = "Brithdate" />
                    </div>
                    <div className="form-group col-md-2">
                      <label>อายุ</label>
                      <input type='number' className="form-control" name = "Age"/>
                    </div>
                    <div className="form-group col-md-5">
                      <label>เบอร์โทร</label>
                      <input type='number' className="form-control" name = "PhoneNumber"/>
                    </div>
                    <div className="form-group col-md-12">
                      <label>ที่อยู่</label>
                      <input type='text' className="form-control"name = "Address" />
                    </div>
                    <div className="form-group col-md-4">
                      <label>เชื้อชาติ</label>
                      <input type="text" className="form-control" name = "Race"/>
                    </div>
                    <div className="form-group col-md-4">
                      <label>สัญชาติ</label>
                      <input type='text' className="form-control"  name = "Nationality" />
                    </div>
                    <div className="form-group col-md-4">
                      <label>ศาสนา</label>
                      <input type='text' className="form-control" name = "Religion"/>
                    </div>
                    <div className="form-group  col-md-6">
                      <label>เลขบัตรประชาชน </label>
                      <input type='text' className="form-control" name = "IDCardNumber"/>
                    </div>
                  </div>
                  <div className="form-group text-right"> 
                    <button type="button" class="btn btn-success mb-2 mr-sm-2"> ทะเบียนผู้ป่วยใหม่</button>
                    <button type="button" class="btn btn-outline-danger mb-2 mr-sm-2"> แก้ไขรายการ</button>
                  </div>
                </div>
              </div>

              {/*ประวัติการรับบริการ*/}

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
                        defaultColDef={this.state.defaultColDef}
                        suppressRowClickSelection={true}
                        rowSelection={this.state.rowSelection}
                        columnDefs={this.state.columnAppoint}
                        rowData={this.state.rowDataAppoint}>
                      </AgGridReact>
                    </div>
                    </div>
                  </div>
                </div>

                {/*อาการ*/}

                <div className="card">
                  <div className="card-body">
                    <div className="form-row ">
                      <div className="form-group col-md-12">
                        <label>อาการสำคัญ</label>
                        <input type='text' className="form-control" name = "Victim"/>
                      </div>
                      <div className="form-group col-md-2">
                        <label>ส่งไปตรวจที่</label>
                        <input type='text' className="form-control"  name = "SendTo"/>
                      </div>
                      <div className="form-group col-md-10">
                        <fieldset >
                          <label><br/></label>
                          <input type='text' className="form-control"name = "SendToO" />
                        </fieldset>
                      </div>
                      <div className=" form-group col-md-12">
                        <label>แพทย์</label>
                          <select className="form-control" name = "Doctor">
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
                          <select className="form-control" name = "Service">
                            <option></option>
                            <option>มารับบริการเอง</option>
                          </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/*สิทธิรักษาพยาบาล*/}

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

                {/*ประวัติการนัดหมาย*/}

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
                        columnDefs={this.state.columnService}
                        rowData={this.state.rowDataService}>
                      </AgGridReact>
                    </div>
                    </div>
                  </div>
                </div>

                {/*เอกสาร*/}

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

                {/*พิมพ์ใบ Visit Slip*/}

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
const style = {
  preview: {
    position: 'relative',
  },
  captureContainer: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 1,
    bottom: 0,
    width: '100%'
  },
  captureButton: {
    backgroundColor: '#fff',
    borderRadius: '50%',
    height: 56,
    width: 56,
    color: '#000',
    margin: 20
  },
  captureImage: {
    width: '100%',
  }
};