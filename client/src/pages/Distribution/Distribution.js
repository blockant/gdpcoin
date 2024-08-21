import { Link } from "react-router-dom";
import { stage } from "../../constants";
import SaleReportCard from "../../components/SaleReportCard";
import TotalBalanceCard from "../../components/TotalBalanceCard";

const Distribution = () => {
    return (
      <div class="page-content">
          <div class="container">
              <div class="row">
                <div class="main-content col-lg-8">
                    <div class="content-area card">
                        <div class="card-innr">
                            <div class="card-head">
                                <h4 class="card-title">GDPcoin Presale Distribution, Rate &amp; Sales Info</h4>
                            </div>
                            <div class="card-text">
                                <p>To become a part of GDPC project, you can found all details of presale. <br class="d-none d-sm-block" /> You can contribute and <Link to="/buy-token">buy GDPC</Link>.</p>
                                <p>You can get a quick response and chat with our team in Telegram: <a href="#">https://t.me/xxx</a></p>
                            </div>
                            <div class="gaps-3x"></div>
                            <div class="card-head">
                                <h5 class="card-title card-title-md">Schedule</h5>
                            </div>
                            <div class="schedule-item">
                                <div class="row">
                                    <div class="col-xl-5 col-md-5 col-lg-8">
                                        <div class="pdb-1x">
                                            <h5 class="schedule-title"><span>Pre-Sale (12 weeks)</span><span class="badge badge-success ucap badge-xs">Running</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="row-xl-5 row-md-5 row-lg-8">
                                        <div style={{display: "flex", marginTop: "5px"}}>
                                            <h6 class="font-mid text-dark" style={{width: "200px"}}><span>Time Period</span></h6>
                                            <div class="pdl-5x">
                                                <h6 class="font-mid text-dark"><span>Price(USD)</span></h6>
                                            </div>
                                            <div class="pdl-5x">
                                                <h6 class="font-mid text-dark"><span>Allocation</span></h6>
                                            </div>
                                            <div class="pdl-5x">
                                                <h6 class="font-mid text-dark"><span>Bonus</span></h6>
                                            </div>
                                        </div>                                               
                                    </div>
                                    <div class="row-xl-5 row-md-5 row-lg-8">

                                        <div style={{display: "flex", marginTop: "5px"}}>
                                            <div style={{display: 'flex', width : "250px"}}>
                                                {/* <span>Sep 4, 2023, to Sep 10, 2023</span> */}
                                                <span>2023.9.4 - 9.10</span>
                                                {/* <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    { stage == 1 && <span class="badge badge-success ucap badge-xs" style={{marginLeft: "12px"}}>On</span>}
                                                </div>                                                     */}
                                            </div>
                                            <div class="pdl-0-3x">
                                                <span>0.532602</span>
                                            </div>
                                            <div class="pdl-5x">
                                                <span>33,000,000</span>
                                            </div>
                                            <div class="pdl-5x">
                                                <span>5.00%</span>
                                            </div>
                                        </div>                                            
                                        <div style={{display: "flex", marginTop: "5px"}}>
                                            <div style={{width : "250px"}}>
                                                {/* <span>Apr 11, 2023, to Apr 17, 2023</span> */}
                                                <span>2023.9.11 - 9.17</span>
                                            </div>
                                            <div class="pdl-0-3x">
                                                <span>0.719175</span>
                                            </div>
                                            <div class="pdl-5x">
                                                <span>33,000,000</span>
                                            </div>
                                            <div class="pdl-5x">
                                                <span>7.00%</span>
                                            </div>                                                
                                            { stage == 2 && <span class="badge badge-success ucap badge-xs" style={{marginLeft: "12px"}}>Running</span>}
                                        </div>
                                        <div style={{display: "flex", marginTop: "5px"}}>
                                            <div style={{width : "250px"}}>
                                                {/* <span>Apr 18, 2023, to Apr 24, 2023</span> */}
                                                <span>2023.9.18 - 9.24</span>
                                            </div>
                                            <div class="pdl-0-3x">
                                                <span>0.953353</span>
                                            </div>
                                            <div class="pdl-5x">
                                                <span>33,000,000</span>
                                            </div>
                                            <div class="pdl-5x">
                                                <span>9.00%</span>
                                            </div>                                                
                                            { stage == 3 && <span class="badge badge-success ucap badge-xs" style={{marginLeft: "12px"}}>Running</span>}
                                        </div>       
                                        <div style={{display: "flex", marginTop: "5px"}}>
                                            <div style={{width : "250px"}}>
                                                {/* <span>Apr 25, 2023 to May 1, 2023</span> */}
                                                <span>2023.9.25 - 10.1</span>
                                            </div>
                                            <div class="pdl-0-3x">
                                                <span>1.240246</span>
                                            </div>
                                            <div class="pdl-5x">
                                                <span>33,000,000</span>
                                            </div>
                                            <div class="pdl-4-5x">
                                                <span>11.00%</span>
                                            </div>                                                
                                            { stage == 4 && <span class="badge badge-success ucap badge-xs" style={{marginLeft: "12px"}}>Running</span>}
                                        </div>       
                                        <div style={{display: "flex", marginTop: "5px"}}>
                                            <div style={{width : "250px"}}>
                                                {/* <span>May 2, 2023 to May 8, 2023</span> */}
                                                <span>2023.10.2 - 10.8</span>
                                            </div>
                                            <div class="pdl-0-3x">
                                                <span>1.582851</span>
                                            </div>
                                            <div class="pdl-5x">
                                                <span>33,000,000</span>
                                            </div>
                                            <div class="pdl-4-5x">
                                                <span>13.00%</span>
                                            </div>                                                
                                            { stage == 5 && <span class="badge badge-success ucap badge-xs" style={{marginLeft: "12px"}}>Running</span>}
                                        </div>       
                                        <div style={{display: "flex", marginTop: "5px"}}>
                                            <div style={{width : "250px"}}>
                                                {/* <span>May 9, 2023 to May 15, 2023</span> */}
                                                <span>2023.10.9 - 10.15</span>
                                            </div>
                                            <div class="pdl-0-3x">
                                                <span>1.981018</span>
                                            </div>
                                            <div class="pdl-5x">
                                                <span>33,000,000</span>
                                            </div>
                                            <div class="pdl-4-5x">
                                                <span>15.00%</span>
                                            </div>                                                
                                            { stage == 6 && <span class="badge badge-success ucap badge-xs" style={{marginLeft: "12px"}}>Running</span>}
                                        </div>       
                                        <div style={{display: "flex", marginTop: "5px"}}>
                                            <div style={{width : "250px"}}>
                                                {/* <span>May 16, 2023 to May 22, 2023</span> */}
                                                <span>2023.10.16 - 10.22</span>
                                            </div>
                                            <div class="pdl-0-3x">
                                                <span>2.430431</span>
                                            </div>
                                            <div class="pdl-5x">
                                                <span>33,000,000</span>
                                            </div>
                                            <div class="pdl-4-5x">
                                                <span>17.00%</span>
                                            </div>                                                
                                            { stage == 7 && <span class="badge badge-success ucap badge-xs" style={{marginLeft: "12px"}}>Running</span>}
                                        </div>       
                                        <div style={{display: "flex", marginTop: "5px"}}>
                                            <div style={{width : "250px"}}>
                                                {/* <span>May 23, 2023 to May 29, 2023</span> */}
                                                <span>2023.10.23 - 10.29</span>
                                            </div>
                                            <div class="pdl-0-3x">
                                                <span>2.921792</span>
                                            </div>
                                            <div class="pdl-5x">
                                                <span>33,000,000</span>
                                            </div>
                                            <div class="pdl-4-5x">
                                                <span>19.00%</span>
                                            </div>                                                
                                        </div>       
                                        <div style={{ display: "flex", marginTop: "5px" }}>
                                          <div style={{ width: "250px" }}>
                                            {/* <span>May 30, 2023 to Jun 5, 2023</span> */}
                                            <span>2023.10.30 - 11.5</span>
                                          </div>
                                          <div class="pdl-0-3x">
                                            <span>3.440351</span>
                                          </div>
                                          <div class="pdl-5x">
                                            <span>33,000,000</span>
                                          </div>
                                          <div class="pdl-4-5x">
                                            <span>21.00%</span>
                                          </div>
                                        </div>
                                        <div style={{ display: "flex", marginTop: "5px" }}>
                                          <div style={{ width: "250px" }}>
                                            {/* <span>Jun 6, 2023 to Jun 12, 2023</span> */}
                                            <span>2023.11.6 - 11.12</span>
                                          </div>
                                          <div class="pdl-0-3x">
                                            <span>3.966002</span>
                                          </div>
                                          <div class="pdl-5x">
                                            <span>33,000,000</span>
                                          </div>
                                          <div class="pdl-4-5x">
                                            <span>23.00%</span>
                                          </div>
                                        </div>
                                        <div style={{ display: "flex", marginTop: "5px" }}>
                                          <div style={{ width: "250px" }}>
                                            {/* <span>Jun 13, 2023 to Jun 19, 2023</span> */}
                                            <span>2023.11.13 - 11.19</span>
                                          </div>
                                          <div class="pdl-0-3x">
                                            <span>4.474047</span>
                                          </div>
                                          <div class="pdl-5x">
                                            <span>33,000,000</span>
                                          </div>
                                          <div class="pdl-4-5x">
                                            <span>26.00%</span>
                                          </div>
                                        </div>
                                        <div style={{ display: "flex", marginTop: "5px" }}>
                                          <div style={{ width: "250px" }}>
                                            {/* <span>Jun 20, 2023 to Jun 26, 2023</span> */}
                                            <span>2023.11.20 - 11.26</span>
                                          </div>
                                          <div class="pdl-0-3x">
                                            <span>4.936709</span>
                                          </div>
                                          <div class="pdl-5x">
                                            <span>33,000,000</span>
                                          </div>
                                          <div class="pdl-4-5x">
                                            <span>30.00%</span>
                                          </div>
                                        </div>
                                      </div>
                {/* <div class="col-xl-2 col-md-3 align-self-center text-xl-right">
                                        <div class="pdb-1x">
                                            <span class="schedule-bonus">30% Bonus</span>
                                        </div>
                                    </div> */}
              </div>
            </div>
            <div class="schedule-item">
              <div class="row">
                <div class="col-xl-8 col-md-8 col-lg-8">
                  <div class="pdb-1x">
                    <h5 class="schedule-title">
                      <span>Soft-Launch (9 weeks)</span>
                      <span class="badge badge-disabled ucap badge-xs">
                        Upcomming
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <h6 class="text-light mb-0">
              * Time zone set in (GMT -6) Las Vegas, United States
            </h6>
          </div>
        </div>
                </div>
                <div class="aside sidebar-right col-lg-4">
                  <TotalBalanceCard />
                  <SaleReportCard />
                </div>
              </div>
          </div>
      </div>
    );
};

export default Distribution;
