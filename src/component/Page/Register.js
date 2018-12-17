import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../css/style4.css'
import '../Page/Page.css'
import Navheader from '../Header/Navheader';


import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '../css/table.scss'
import 'ag-grid-enterprise';


class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
        columnDefs: [
            {headerName: "ประเภทบัตร", field: "tcard", width: 310, suppressSizeToFit: true},
            {headerName: "เลขที่บัตร", field: "idcard" , width: 320},
            {headerName: "วันที่เริ่ม", field: "sdate", width: 200},
            {headerName: "วันที่สิ้นสุด", field: "edate", width: 200}

        ],
        rowData: [
            {tcard: "Visa", idcard: "1112", sdate: "12/12/2561", edate: "12/12/2562"},
            {tcard: "Paypal", idcard: "1150", sdate: "12/12/2561", edate: "12/12/2562"},
            {tcard: "30Bath", idcard: "7777", sdate: "12/12/2561", edate: "12/12/2562"},
            {tcard: "Hack!", idcard: "7777", sdate: "12/12/2561", edate: "12/12/2662"}
        ],
        columnDefs2: [
            {headerName: "คำนำหน้า", field: "title", width: 100, suppressSizeToFit: true},
            {headerName: "ชื่อ", field: "name" , width: 130},
            {headerName: "สกุล", field: "lname", width: 130},
            {headerName: "ที่อยู่", field: "ads", width: 130},
            {headerName: "ความสัมพันธ์", field: "rels", width: 120},
            {headerName: "เบอร์มือถือ", field: "monum" , width: 110},
            {headerName: "เบอร์บ้าน", field: "honum", width: 110},
            {headerName: "เบอร์ที่ทำงาน", field: "wonum", width: 120},
            {headerName: "Priority", field: "priority", width: 80}
        ],
        rowData2: [
          {title: "", name: "", lname: "", ads: "", rels: "", monum: "", honum: "", wonum: "", priority: ""}
        ],
        columnDefs3: [
          {headerName: "วัน/เวลาที่แก้ไข", field: "tchange", width: 150, suppressSizeToFit: true},
          {headerName: "ชื่อ-สกุลเดิม", field: "oldname" , width: 330},
          {headerName: "ชื่อ-สกุลใหม่", field: "newname", width: 330},
          {headerName: "ผู้รับแจ้ง", field: "uchange", width: 250}

      ],
      rowData3: [
        {tchange: "", oldname: "", newname: "", uchange: ""}
      ],
      columnDefs4: [
        {headerName: "สังกัด", field: "bemp", width: 170, suppressSizeToFit: true},
        {headerName: "ส่วนงาน", field: "jemp" , width: 170},
        {headerName: "รหัสพนักงาน", field: "empid", width: 170},
        {headerName: "ชื่อพนักงาน", field: "empname", width: 170},
        {headerName: "ส่วนงานย่อย", field: "sjemp", width: 170},
        {headerName: "Comment", field: "comment", width: 170}

      ],
      rowData4: [
        {bemp: "", jemp: "", empid: "", empname: "", sjemp: "", comment: ""}
      ],
      columnDefs5: [
        {headerName: "", field: "" , width: 40 , checkboxSelection: true},
        {headerName: "สิทธิ", field: "privilege", width: 140, suppressSizeToFit: true},
        {headerName: "ความคุ้มครอง", field: "protect" , width: 140},
        {headerName: "Contact", field: "pcontact", width: 140},
        {headerName: "รพ. ใช้สิทธิ", field: "hpprivilege", width: 140},
        {headerName: "เลขที่บัตร", field: "pidcard", width: 140},
        {headerName: "วันที่เริ่ม", field: "psdate", width: 140},
        {headerName: "วันที่สิ้นสุด", field: "pedate", width: 140}

      ],
      rowData5: [
        {privilege: "", protect: "", pcontact: "", emphpprivilegename: "", pidcard: "", psdate: "", pedate: ""},
        {privilege: "", protect: "", pcontact: "", emphpprivilegename: "", pidcard: "", psdate: "", pedate: ""},
        {privilege: "", protect: "", pcontact: "", emphpprivilegename: "", pidcard: "", psdate: "", pedate: ""}
      ],
      columnDefs6: [
        {headerName: "ลำดับที่", field: "number" , width: 80, suppressSizeToFit: true },
        {headerName: "สิทธิ", field: "privilege", width: 140},
        {headerName: "ความคุ้มครอง", field: "protect" , width: 140},
        {headerName: "Contact", field: "pcontact", width: 140},
        {headerName: "รพ. ใช้สิทธิ", field: "hpprivilege", width: 140},
        {headerName: "เลขที่บัตร", field: "pidcard", width: 140},
        {headerName: "วันที่เริ่ม", field: "psdate", width: 119},
        {headerName: "วันที่สิ้นสุด", field: "pedate", width: 119}

      ],
      rowData6: [
        {number: "", privilege: "", protect: "", pcontact: "", emphpprivilegename: "", pidcard: "", psdate: "", pedate: ""},
        {number: "",privilege: "", protect: "", pcontact: "", emphpprivilegename: "", pidcard: "", psdate: "", pedate: ""},
        {number: "",privilege: "", protect: "", pcontact: "", emphpprivilegename: "", pidcard: "", psdate: "", pedate: ""}
      ],
      columnDefs7: [
        {headerName: "", field: "tprivilege", width: 920, suppressSizeToFit: true}
      ],
      rowData7: [
        {tprivilege: "กองทุนเงินทดแทน" },
        {tprivilege: "พรบ." }
      ],
      columnDefs8: [
        {headerName: "", field: "tprivilege", width: 80, suppressSizeToFit: true},
        {headerName: "Contact", field: "ncontact", width: 500},
        {headerName: "ความคุ้มครอง", field: "nprotect", width: 340}
      ],
      rowData8: [
        {tprivilege: "", ncontact:"", nprotect:"" }
      ],
      columnDefs9: [
        {headerName: "ลำดับที่", field: "number2" , width: 80, suppressSizeToFit: true },
        {headerName: "สิทธิ", field: "privilege2", width: 120},
        {headerName: "ความคุ้มครอง", field: "protect2" , width: 120},
        {headerName: "Contact", field: "pcontact2", width: 120},
        {headerName: "รพ. ใช้สิทธิ", field: "hpprivilege2", width: 120},
        {headerName: "เลขที่บัตร", field: "pidcard2", width: 120},
        {headerName: "วันที่เริ่ม", field: "psdate2", width: 120},
        {headerName: "วันที่สิ้นสุด", field: "pedate2", width: 120}
      ],
      rowData9: [
        {number2: "", privilege2: "", protect2: "", pcontact2: "", emphpprivilegename2: "", pidcard2: "", psdate2: "", pedate2: ""},
        {number2: "", privilege2: "", protect2: "", pcontact2: "", emphpprivilegename2: "", pidcard2: "", psdate2: "", pedate2: ""}
      ]
    }
}


  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className='container'>
          <Navheader />

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

          <form  >
          <div className="card">
            <div className="card-header">
              <div className="form-row">
              <div className="col-md-8">
                <h4>ข้อมูลทั่วไป</h4>
              </div>
               <div className="col-md-4">
                <button className="btn btn-secondary float-right" type="button" data-toggle="collapse" data-target="#infoR" aria-expanded="true" aria-controls="infoR">
                  <i className="fas fa-align-justify" aria-hidden="true"></i>
                </button>
                </div>
              </div>
            </div>
            
            <div className="collapse show" id="infoR">
            <div className="card-body">

            <div className="card">
              <div className="card-body">
                <div className="form-row ">
                  <div className=" form-group col-md-2">
                    <label>คำนำหน้า</label>
                      <select className="form-control">
                        <option></option>
                        <option>นาย</option>
                        <option>นาง</option>
                        <option>นางสาว</option>
                      </select>
                  </div>
                  <div className="form-group col-md-3">
                    <label>ชื่อ</label>
                    <input type='text' className="form-control" />
                  </div>
                  <div className="form-group col-md-3">
                    <label>นามสกุล</label>
                    <input type='text' className="form-control" />
                  </div>
                  <div className="form-group col-md-2">
                    <label>ชื่อกลาง</label>
                    <input type='text' className="form-control" />
                  </div>
                    <div className="form-group col-md-2">
                    <label>ชื่อเล่น</label>
                    <input type='text' className="form-control"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="form-row ">
                  <div className=" form-group col-md-2">
                    <label>Title</label>
                    <select className="form-control">
                      <option></option>
                      <option>Mr.</option>
                      <option>Mrs.</option>
                      <option>Miss</option>
                    </select>
                  </div>
                  <div className="form-group col-md-3">
                    <label>Name</label>
                    <input type='text' className="form-control"  />
                  </div>
                    <div className="form-group col-md-3">
                    <label>Lastname</label>
                    <input type='text' className="form-control" />
                  </div>
                  <div className="form-group col-md-2">
                    <label>Middlename</label>
                    <input type='text' className="form-control" />
                  </div>
                  <div className="form-group col-md-2">
                    <label>Nickname</label>
                    <input type='text' className="form-control" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="form-row">
                  <div className="form-group col-md-5">
                    <label>เลขบัตรประชาชน</label>
                    <input type='text' className="form-control"  />
                  </div>
                  <div className="form-group col-md-2">
                    <label>วันที่เริ่ม</label>
                    <input type='text' className="form-control"  />
                  </div> 
                  <div className="form-group col-md-2">
                    <label>วันที่สิ้นสุด</label>
                    <input type='text' className="form-control"  />
                  </div>
                  <div className="form-inline">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                      <label className="custom-control-label" for="customCheck1">หน่วยงาน</label>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-2">
                      <label>วัน/เดือน/ปี เกิด</label>
                      <input type='text' className="form-control"  />
                  </div>
                  <div className="form-group col-md-1">
                    <fieldset disabled>
                      <label>อายุ</label>
                      <input type='text' className="form-control"  />
                    </fieldset>
                  </div>
                  <div className=" form-group col-auto">
                    <label>เพศ</label>
                      <select className="form-control">
                        <option></option>
                        <option>ชาย</option>
                        <option>หญิง</option>
                      </select>
                  </div>
                  <div className="form-group col-md-3">
                    <label>สภาพสมรส</label>
                    <input type='text' className="form-control"  />
                  </div>
                
                </div>

                <div className="form-row">
                  <div className="form-group col-md-2">
                    <label>อาชีพ</label>
                    <select className="form-control">
                        <option></option>
                        <option>ข้าราชการ</option>
                      </select>
                  </div>
                  <div className="form-group col-md-7">
                    <fieldset disabled>
                      <label><br /></label>
                      <input type='text' className="form-control"  />
                    </fieldset>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-auto">
                    <label>สัญชาติ</label>
                    <select className="form-control">
                        <option></option>
                        <option>ไทย</option>
                      </select>
                  </div>
                  <div className="form-group col-md-3">
                    <fieldset disabled>
                      <label><br /></label>
                      <input type='text' className="form-control"  />
                    </fieldset>
                  </div>
                  <div className="form-group col-md-1">
                    <label>เชื้อชาติ</label>
                    <select className="form-control">
                        <option></option>
                        <option>ไทย</option>
                      </select>
                  </div>
                  <div className="form-group col-md-3">
                    <fieldset disabled>
                      <label><br /></label>
                      <input type='text' className="form-control"  />
                    </fieldset>
                  </div>
                  <div className="form-group col-md-3">
                    <label>ศาสนา</label>
                    <select className="form-control">
                        <option></option>
                        <option>พุทธ</option>
                      </select>
                  </div>                  
                </div>
                <div className="form-row">
                  <div className="form-group col-md-2">
                    <label>หมู่เลือด</label>
                    <select className="form-control">
                        <option></option>
                        <option>A</option>
                        <option>AB</option>
                        <option>B</option>
                        <option>O</option>
                      </select>
                  </div>
                  <div className="form-group col-md-1">
                    <label>RH</label>
                    <select className="form-control">
                        <option></option>
                        <option>+</option>
                      </select>
                  </div>                  
                </div>
                <div className="form-row">
                  <div className="form-group col-md-2">
                    <label>เบอร์มือถือ 1</label>
                    <input type='text' className="form-control"  />
                  </div>

                  <div className="form-group col-md-2">
                    <label>เบอร์มือถือ 2</label>
                    <input type='text' className="form-control"  />
                  </div>

                  <div className="form-group col-md-2">
                    <label>เบอร์มือถือ 3</label>
                    <input type='text' className="form-control"  />
                  </div>

                  <div className="form-group col-md-2">
                    <label>เบอร์บ้าน</label>
                    <input type='text' className="form-control"  />
                  </div>

                  <div className="form-group col-md-2">
                    <label>เบอร์ที่ทำงาน</label>
                    <input type='text' className="form-control"  />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label>E-mail</label>
                    <input type='text' className="form-control"  />
                  </div>

                  <div className="form-group col-md-4">
                    <label>ID Line</label>
                    <input type='text' className="form-control"  />
                  </div>
                </div>

                </div>            
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="form-row">
                    <div className="form-group col-md-2">                      
                      <div className="form-inline">
                      <label>ประเภทผู้ป่วย</label>&nbsp;&nbsp;&nbsp;
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="vip"/>
                          <label className="custom-control-label" for="vip">VIP</label>
                        </div>
                        
                      </div>
                    </div>

                    <div className="form-group col-md-3">
                      <fieldset disabled>
                        <input type='text' className="form-control"  />
                      </fieldset>
                    </div>

                    <div className="form-group col-md-2">                      
                      <div className="form-inline">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="special"/>
                          <label className="custom-control-label" for="special">Special Care</label>
                        </div>
                        
                      </div>
                    </div>

                    <div className="form-group col-md-3">
                      <fieldset disabled>
                        <input type='text' className="form-control"  />
                      </fieldset>
                    </div>

                    <div className="form-group col-md-2">
                      <div className="form-inline">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="anonymous"/>
                          <label className="custom-control-label" for="anonymous">Anonymous</label>
                        </div>
                        
                      </div>
                    </div>
                  </div>     
                </div>
              </div>

              <form className="card">
                <div className="card-body">
                  <div className="form-row">   
                    <div className="form-group col-md-2">
                      <label>ประเภทบัตร</label>
                      <select className="form-control">
                          <option></option>
                          <option>????????</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                      <label>เลขที่บัตร</label>
                      <input type='text' className="form-control" />                          
                    </div>                 
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-2">
                      <label>วันที่เริ่ม</label>
                      <input type='text' className="form-control" />                          
                    </div>  
                    <div className="form-group col-md-2">
                      <label>วันที่สิ้นสุด</label>
                      <input type='text' className="form-control" />                          
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-7">
                      <button type="button" className="btn btn-success ">เพิ่ม</button>&nbsp;
                      <button type="button" className="btn btn-warning ">แก้ไข</button>&nbsp;
                      <button type="button" className="btn btn-primary ">ปิดการใช้งาน</button>&nbsp;
                      <button type="button" className="btn btn-danger ">ลบ</button>                  
                    </div>  
                  </div>

                  <div className="form-row">

                    <div style={{ height: '200px', width: '100%' }} className="ag-theme-balham">
                      <AgGridReact
                          enableColResize={true}
                          rowSelection="multiple"
                          enableSorting={true}
                          suppressResize={true}
                          columnDefs={this.state.columnDefs}
                          rowData={this.state.rowData}>
                      </AgGridReact>
                    </div>                 


                  </div>
                </div>
              </form>

            </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h4>ข้อมูลที่อยู่</h4>
            </div>
            <div className="card-body">

              <div className="card">
                <div className="card-header">
                  <h5>ข้อมูลที่อยู่ตามทะเบียนบ้าน</h5>
                </div>
                  <div className="card-body">
                    <div className="form-row">
                      <div className="form-group col-md-2">
                        <label>บ้านเลขที่</label>
                        <input type='text' className="form-control"  />
                      </div>

                      <div className="form-group col-md-1">
                        <label>หมู่ที่</label>
                        <input type='text' className="form-control"  />
                      </div>

                      <div className="form-group col-md-4">
                        <label>ถนน / ซอย / หมู่บ้าน</label>
                        <input type='text' className="form-control"  />
                      </div>

                    </div>

                    <div className="form-row">
                      <div className="form-group col-md-1">
                        <label>จังหวัด</label>
                        <select className="form-control">
                          <option></option>
                          <option>30</option>
                        </select>
                      </div>

                      <div className="form-group col-md-3">
                        <fieldset disabled>
                          <label><br /></label>
                          <input type='text' className="form-control"  />
                        </fieldset>
                      </div>

                      <div className="form-group col-md-1">
                        <label>อำเภอ</label>
                        <select className="form-control">
                          <option></option>
                          <option>04</option>
                        </select>
                      </div>

                      <div className="form-group col-md-3">
                        <fieldset disabled>
                          <label><br /></label>
                          <input type='text' className="form-control"  />
                        </fieldset>
                      </div>

                    </div>

                    <div className="form-row">
                      <div className="form-group col-md-1">
                        <label>ตำบล/เขต</label>
                        <select className="form-control">
                          <option></option>
                          <option>03</option>
                        </select>
                      </div>

                      <div className="form-group col-md-3">
                        <fieldset disabled>
                          <label><br /></label>
                          <input type='text' className="form-control"  />
                        </fieldset>
                      </div>

                      <div className="form-group col-md-2">
                        <label>รหัสไปรษณีย์</label>
                        <input type='text' className="form-control"  />
                      </div>

                    </div>

                  </div>
                </div>

                <div className="card">
                
                  <div className="card-header">
                    <div className="form-row">
                      <div className="form-group col-md-3">
                        <h5>ที่อยู่ที่สามารถติดต่อได้</h5>
                      </div>
                      <div className="form-group col-md-2">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="adds"/>
                          <label className="custom-control-label" for="adds">หน่วยงาน</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="form-row">
                      <div className="form-group col-md-2">
                        <label>บ้านเลขที่</label>
                        <input type='text' className="form-control"  />
                      </div>

                      <div className="form-group col-md-1">
                        <label>หมู่ที่</label>
                        <input type='text' className="form-control"  />
                      </div>

                      <div className="form-group col-md-4">
                        <label>ถนน / ซอย / หมู่บ้าน</label>
                        <input type='text' className="form-control"  />
                      </div>

                    </div>

                    <div className="form-row">
                      <div className="form-group col-md-1">
                        <label>จังหวัด</label>
                        <select className="form-control">
                          <option></option>
                          <option>30</option>
                        </select>
                      </div>

                      <div className="form-group col-md-3">
                        <fieldset disabled>
                          <label><br /></label>
                          <input type='text' className="form-control"  />
                        </fieldset>
                      </div>

                      <div className="form-group col-md-1">
                        <label>อำเภอ</label>
                        <select className="form-control">
                          <option></option>
                          <option>04</option>
                        </select>
                      </div>

                      <div className="form-group col-md-3">
                        <fieldset disabled>
                          <label><br /></label>
                          <input type='text' className="form-control"  />
                        </fieldset>
                      </div>

                    </div>

                    <div className="form-row">
                      <div className="form-group col-md-1">
                        <label>ตำบล/เขต</label>
                        <select className="form-control">
                          <option></option>
                          <option>03</option>
                        </select>
                      </div>

                      <div className="form-group col-md-3">
                        <fieldset disabled>
                          <label><br /></label>
                          <input type='text' className="form-control"  />
                        </fieldset>
                      </div>

                      <div className="form-group col-md-2">
                        <label>รหัสไปรษณีย์</label>
                        <input type='text' className="form-control"  />
                      </div>

                    </div>

                  </div>

                </div>

                <div className="card">
                  <div className="card-body">
                    <div className="form-row">
                      <div className="form-group col-md-5">
                        <label>สถานะบุคคล</label>
                        <select className="form-control">
                          <option></option>
                          <option>test</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                
                <form>
                  <div className="card">
                  <div className="card-header">
                      <div className="form-row">
                        <div className="form-group col-md-2">
                          <h5>ญาติที่ติดต่อ</h5>
                        </div>
                        <div className="form-group col-md-3">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="addsp"/>
                            <label className="custom-control-label" for="addsp">ที่อยู่ตามทะเบียนบ้านผู้ป่วย</label>
                          </div>
                        </div>
                        <div className="form-group col-md-3">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="addspp"/>
                            <label className="custom-control-label" for="addspp">ที่อยู่ที่สามารถติดต่อได้ของผู้ป่วย</label>
                          </div>
                        </div>
                        <div className="form-group col-md-2">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="addsppn"/>
                            <label className="custom-control-label" for="addsppn">ไม่มีญาติติดต่อ</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-body">
                      <div className="form-row">
                        <div className="form-group col-auto">
                          <label>คำนำหน้า</label>
                          <select className="form-control">
                            <option></option>
                            <option>นาย</option>
                            <option>นาง</option>
                            <option>นางสาว</option>
                          </select>
                        </div>

                        <div className="form-group col-md-2">
                          <label>ชื่อ</label>
                          <input type='text' className="form-control"  />
                        </div>

                        <div className="form-group col-md-2">
                          <label>นามสกุล</label>
                          <input type='text' className="form-control"  />
                        </div>

                        <div className="form-group col-auto">
                          <label>ความสัมพันธ์กับผู้ป่วย</label>
                          <select className="form-control">
                            <option></option>
                            <option>พ่อ</option>
                            <option>แม่</option>
                            <option>สามี</option>
                            <option>ภรรยา</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group col-md-2">
                          <label>เบอร์มือถือ</label>
                          <input type='text' className="form-control"  />
                        </div>

                        <div className="form-group col-md-2">
                          <label>เบอร์บ้าน</label>
                          <input type='text' className="form-control"  />
                        </div>

                        <div className="form-group col-md-2">
                          <label>เบอร์ที่ทำงาน</label>
                          <input type='text' className="form-control"  />
                        </div>

                        <div className="form-group col-auto">
                          <label>ลำดับความสำคัญ</label>
                          <select className="form-control">
                            <option></option>
                            <option>??</option>
                            <option>??</option>
                          </select>
                        </div>

                        <div className="form-row">
                          <div className="form-group col-md-2">
                            <label>บ้านเลขที่</label>
                            <input type='text' className="form-control"  />
                          </div>

                          <div className="form-group col-md-2">
                            <label>หมู่ที่</label>
                            <input type='text' className="form-control"  />
                          </div>

                          <div className="form-group col-md-5">
                            <label>ถนน / ซอย / หมู่บ้าน</label>
                            <input type='text' className="form-control"  />
                          </div>
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group col-auto">
                          <label>จังหวัด</label>
                          <select className="form-control">
                            <option></option>
                            <option>03</option>
                            <option>04</option>
                          </select>
                        </div>

                        <div className="form-group col-md-3">
                          <fieldset disabled>
                            <label><br /></label>
                            <input type='text' className="form-control"  />
                          </fieldset>
                        </div>

                        <div className="form-group col-auto">
                          <label>อำเภอ/เขต</label>
                          <select className="form-control">
                            <option></option>
                            <option>01</option>
                            <option>02</option>
                          </select>
                        </div>

                        <div className="form-group col-md-3">
                          <fieldset disabled>
                            <label><br /></label>
                            <input type='text' className="form-control"  />
                          </fieldset>
                        </div>
                      </div>

                      <div className="form-row">
                         <div className="form-group col-auto">
                          <label>ตำบล/เขต</label>
                          <select className="form-control">
                            <option></option>
                            <option>01</option>
                            <option>02</option>
                          </select>
                        </div>

                        <div className="form-group col-md-3">
                          <fieldset disabled>
                            <label><br /></label>
                            <input type='text' className="form-control"  />
                          </fieldset>
                        </div>

                        <div className="form-group col-md-2">
                          <label>รหัสไปรษณีย์</label>
                          <input type='text' className="form-control"  />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group col-md-7">
                          <button type="button" className="btn btn-success ">เพิ่ม</button>&nbsp;
                          <button type="button" className="btn btn-warning ">แก้ไข</button>&nbsp;
                          <button type="button" className="btn btn-primary ">ปิดการใช้งาน</button>&nbsp;
                          <button type="button" className="btn btn-danger ">ลบ</button>                  
                        </div>  
                      </div>
                      
                      <div className="form-row">
                      
                        <div style={{ height: '200px', width: '100%' }} className="ag-theme-balham">
                          <AgGridReact
                              enableColResize={true}
                              rowSelection="multiple"
                              enableSorting={true}
                              suppressResize={true}
                              columnDefs={this.state.columnDefs2}
                              rowData={this.state.rowData2}>
                          </AgGridReact>
                        </div> 

                      </div>

                    </div>
                  </div>
                </form>
                
                    
            </div>
            

            
          </div>

          <div className="card">
            <div className="card-header">
              <h4>ข้อมูลสิทธิรักษา</h4>
            </div>
            <div className="card-body">
              <div className="card">
                <div className="card-header">
                  <h5>สิทธิรักษาพยาบาลทั้งหมด</h5>
                </div>
                <form>
                    <div className="card-body">
                      <div style={{ height: '200px', width: '100%' }} className="ag-theme-balham">
                        <AgGridReact
                          enableColResize={true}
                          rowSelection="multiple"
                          enableSorting={true}
                          suppressResize={true}
                          columnDefs={this.state.columnDefs5}
                          rowData={this.state.rowData5}>
                        </AgGridReact>
                      </div> 
                      <br />
                      <button type="button" className="btn btn-success " data-toggle="modal" data-target="#myModal">เพิ่ม</button>&nbsp;
                      <button type="button" className="btn btn-danger ">ลบ</button>&nbsp;
                    </div>

                    <div className="modal fade" id="myModal">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                        
                          <div className="modal-header">
                            <h4 className="modal-title">สิทธิรักษาพยาบาล</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                          </div>
                         
                          <div className="modal-body">                            
                          <div className="card">
                            <div className="card-header">
                              <h5>ประเภทสิทธิ</h5>
                            </div>
                            <div style={{ height: '300px', width: '100%' }} className="ag-theme-balham">
                              <AgGridReact
                                enableColResize={true}
                                rowSelection="multiple"
                                enableSorting={true}
                                suppressResize={true}
                                columnDefs={this.state.columnDefs7}
                                rowData={this.state.rowData7}>
                              </AgGridReact>
                            </div> 

                            </div>
                            <div className="card">
                            <div className="card-header">
                              <h5>สิทธิรักษาพยาบาลทั้งหมด</h5>
                            </div>
                            <div style={{ height: '300px', width: '100%' }} className="ag-theme-balham">
                              <AgGridReact
                                enableColResize={true}
                                rowSelection="multiple"
                                enableSorting={true}
                                suppressResize={true}
                                columnDefs={this.state.columnDefs8}
                                rowData={this.state.rowData8}>
                              </AgGridReact>
                            </div> 

                            </div>
                            <div className="card">
                            <div className="card-header">
                              <h5>สิทธิคนไข้ทั้งหมด</h5>
                            </div>
                            <div style={{ height: '200px', width: '100%' }} className="ag-theme-balham">
                              <AgGridReact
                                enableColResize={true}
                                rowSelection="multiple"
                                enableSorting={true}
                                suppressResize={true}
                                columnDefs={this.state.columnDefs9}
                                rowData={this.state.rowData9}>
                              </AgGridReact>
                            </div> 

                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" class="btn btn-success" >เพิ่ม</button>
                          </div>
                        </div>

                      </div>
                    </div>
                </form>
              </div>

              <div className="card">
                <div className="card-header">
                  <h5>สิทธิรักษาพยาบาลหลัก</h5>
                </div>
                <form>
                  <div className="card-body">
                    <div style={{ height: '200px', width: '100%' }} className="ag-theme-balham">
                      <AgGridReact
                        enableColResize={true}
                        rowSelection="multiple"
                        enableSorting={true}
                        suppressResize={true}
                        columnDefs={this.state.columnDefs6}
                        rowData={this.state.rowData6}>
                      </AgGridReact>
                    </div> 
                  </div>
                </form>
              </div>
            </div>

          </div>

          <div className="card">
            <div className="card-header">
              <h4>ข้อมูลการเปลี่ยนชื่อ-สกุล</h4>
            </div>
            <div className="card-body">
            <div className="card">
              <div className="card-header">
                <h5>เปลียนชื่อ-สกุล</h5>
              </div>
              <form>
              <div className="card-body">
                <div className="form-row"> 
                  <div className="form-group col-md-3">
                    <input type="text" className="form-control" placeholder="ธนกร" />
                  </div>
                  <div className="form-group col-md-3">
                    <input type="text" className="form-control" placeholder="กิตติภิวัฒกุล" />
                  </div>
                  <div className="form-group col-md-2">
                    <button type="button" className="btn btn-success ">ยืนยันการเปลี่ยนชื่อ-สกุล</button>
                  </div>

                </div>
              </div>
              </form>
              
            </div>

            <div className="card">
              <div className="card-header">
                <h5>ประวัติการเปลี่ยนชื่อ-สกุล</h5>
              </div>
              <div style={{ height: '200px', width: '100%' }} className="ag-theme-balham">
                <AgGridReact
                  enableColResize={true}
                  rowSelection="multiple"
                  enableSorting={true}
                  suppressResize={true}
                  columnDefs={this.state.columnDefs3}
                  rowData={this.state.rowData3}>
                </AgGridReact>
              </div> 

              
            </div>
            </div>

            
          </div>

          <div className="card">
            <div className="card-header">
              <h4>สังกัดหน่วยงานและสวัสดิการ</h4>
            </div>
            <div className="card-body">
              <div className="card">
                <div className="card-header">
                  <h5>ข้อมูลบุคลากร/นักศึกษา</h5>
                </div>
                <div className="card-body">
                  <div className="form-row">
                  <div className="form-group col-md-4">
                    <label>สำนัก/สังกัด</label>
                    <select className="form-control">
                      <option></option>
                      <option>01</option>
                      <option>02</option>
                    </select>
                  </div>

                  <div className="form-group col-md-4">
                    <label>ส่วนงาน/สาขาวิชา</label>
                    <select className="form-control">
                      <option></option>
                      <option>01</option>
                      <option>02</option>
                    </select>
                  </div>

                  <div className="form-group col-md-4">
                    <label>ส่วนงานย่อย</label>
                    <select className="form-control">
                      <option></option>
                      <option>01</option>
                      <option>02</option>
                    </select>
                  </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-4">
                      <label>รหัส นศ./พนง.</label>
                      <input type="text" className="form-control" />
                    </div>

                      <div className="form-inline">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="student"/>
                          <label className="custom-control-label" for="student">นักศึกษา</label>
                        </div>
                      </div>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <div className="form-inline">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="emp"/>
                          <label className="custom-control-label" for="emp">พนักงาน</label>
                        </div>
                      </div>
                    
                  </div>

                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h5>สวัสดิการครอบครัวพนักงาน</h5>
                </div>

                <form>
                <div className="card-body">
                  <div className="form-row">
                    <div className="form-group col-md-4">
                      <label>สังกัด</label>
                      <select className="form-control">
                        <option></option>
                        <option>01</option>
                        <option>02</option>
                      </select>
                    </div>

                    <div className="form-group col-md-4">
                      <label>ส่วนงาน</label>
                      <select className="form-control">
                        <option></option>
                        <option>01</option>
                        <option>02</option>
                      </select>
                    </div>

                    <div className="form-group col-md-4">
                      <label>ส่วนงานย่อย</label>
                      <select className="form-control">
                        <option></option>
                        <option>01</option>
                        <option>02</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-4">
                      <label>รหัส พนง.</label>
                      <input type="text" className="form-control" />
                    </div>

                    <div className="form-group col-md-4">
                      <label>Comment</label>
                      <input type="text" className="form-control" />
                    </div>

                    <div className="form-group col-md-4">
                      <label>คนไข้เป็น</label>
                      <select className="form-control">
                        <option></option>
                        <option>01</option>
                        <option>02</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-2">
                      <label>วันที่ออกบัตร</label>
                      <input type="text" className="form-control" />
                    </div>

                    <div className="form-group col-md-2">
                      <label>วันบัตรหมดอายุ</label>
                      <input type="text" className="form-control" />
                    </div>

                    <div className="form-inline">
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="act"/>
                        <label className="custom-control-label" for="act">Active</label>
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-5">
                      <button type="button" className="btn btn-success ">เพิ่ม</button>&nbsp;&nbsp;&nbsp;
                      <button type="button" className="btn btn-warning ">แก้ไข</button>&nbsp;&nbsp;&nbsp;
                      <button type="button" className="btn btn-danger ">ลบ</button>                  
                    </div>  
                  </div>

                <div style={{ height: '200px', width: '100%' }} className="ag-theme-balham">
                <AgGridReact
                  enableColResize={true}
                  rowSelection="multiple"
                  enableSorting={true}
                  suppressResize={true}
                  columnDefs={this.state.columnDefs4}
                  rowData={this.state.rowData4}>
                </AgGridReact>
              </div> 
                </div>
                </form>
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

export default Register;
