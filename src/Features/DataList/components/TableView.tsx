import { FC } from "react";

import Datatable from "../../../components/Common/Datatable";

const TableView: FC<any> = (props) => {
  return (
    <div className="card b">
      <div className="card-body">
        <Datatable
          options={{
            responsive: true,
            oLanguage: {
              sSearch: '<em class="fa fa-search"></em>',
              sLengthMenu: "_MENU_ records per page",
              info: "Showing page _PAGE_ of _PAGES_",
              zeroRecords: "Nothing found - sorry",
              infoEmpty: "No records available",
              infoFiltered: "(filtered from _MAX_ total records)",
              oPaginate: {
                sNext: '<em class="fa fa-caret-right"></em>',
                sPrevious: '<em class="fa fa-caret-left"></em>',
              },
            },
            dom: "Bfrtip",
            buttons: [
              { extend: "copy", className: "btn-info" },
              { extend: "csv", className: "btn-info" },
              {
                extend: "excel",
                className: "btn-info",
                title: "XLS-File",
              },

              { extend: "print", className: "btn-info" },
            ],
          }}
        >
          <table className="table table-striped my-4 w-100">
            <thead>
              <tr>
                <th>Type</th>
                <th>#ID</th>
                <th>Description</th>
                <th>Created</th>
                <th>Priority</th>
                <th>Asigned</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">bug</div>
                </td>
                <td>BI:54678</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>01/01/2016</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Sylvia Daniels</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-success">open</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">bug</div>
                </td>
                <td>BI:55778</td>
                <td className="text-nowrap">
                  <small>Aliquam felis nibh, ultrices non elementum</small>
                </td>
                <td>01/05/2016</td>
                <td>
                  <div className="circle circle-lg" data-title="low"></div>
                </td>
                <td>
                  <a href="">Sherry Carroll</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-success">open</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">issue</div>
                </td>
                <td>BI:56878</td>
                <td className="text-nowrap">
                  <small>
                    Aliquam condimentum enim a risus cursus blandit.
                  </small>
                </td>
                <td>05/01/2016</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Mitchell Jones</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-warning">
                    pending
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">issue</div>
                </td>
                <td>BI:57978</td>
                <td className="text-nowrap">
                  <small>Sed at libero augue, in euismod tellus.</small>
                </td>
                <td>01/11/2016</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Tracey Parker</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-warning">
                    pending
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">bug</div>
                </td>
                <td>BI:1107</td>
                <td className="text-nowrap">
                  <small>Praesent lacinia ultricies neque.</small>
                </td>
                <td>01/01/2015</td>
                <td>
                  <div
                    className="circle circle-lg bg-danger"
                    data-title="high"
                  ></div>
                </td>
                <td>
                  <a href="">Warren Gray</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-danger">closed</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">issue</div>
                </td>
                <td>BI:1117</td>
                <td className="text-nowrap">
                  <small>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </small>
                </td>
                <td>11/05/2013</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Jackson Ramos</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-success">open</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">bug</div>
                </td>
                <td>BI:10127</td>
                <td className="text-nowrap">
                  <small>Pellentesque habitant morbi tristique</small>
                </td>
                <td>05/02/2014</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Ernest Berry</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-danger">closed</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">bug</div>
                </td>
                <td>BI:54678</td>
                <td className="text-nowrap">
                  <small>Integer venenatis ultrices vulputate.</small>
                </td>
                <td>01/01/2016</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Sylvia Daniels</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-success">open</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">issue</div>
                </td>
                <td>BI:55778</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>01/05/2016</td>
                <td>
                  <div className="circle circle-lg" data-title="low"></div>
                </td>
                <td>
                  <a href="">Sherry Carroll</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-success">open</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">bug</div>
                </td>
                <td>BI:56878</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>05/01/2016</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Mitchell Jones</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-warning">
                    pending
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">issue</div>
                </td>
                <td>BI:57978</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>01/11/2016</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Tracey Parker</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-warning">
                    pending
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">bug</div>
                </td>
                <td>BI:1107</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>01/01/2015</td>
                <td>
                  <div
                    className="circle circle-lg bg-danger"
                    data-title="high"
                  ></div>
                </td>
                <td>
                  <a href="">Warren Gray</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-danger">closed</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">issue</div>
                </td>
                <td>BI:1117</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>11/05/2013</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Jackson Ramos</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-success">open</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">issue</div>
                </td>
                <td>BI:10127</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>05/02/2014</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Ernest Berry</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-danger">closed</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">bug</div>
                </td>
                <td>BI:54678</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>01/01/2016</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Sylvia Daniels</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-success">open</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">bug</div>
                </td>
                <td>BI:55778</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>01/05/2016</td>
                <td>
                  <div className="circle circle-lg" data-title="low"></div>
                </td>
                <td>
                  <a href="">Sherry Carroll</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-success">open</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">bug</div>
                </td>
                <td>BI:56878</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>05/01/2016</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Mitchell Jones</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-warning">
                    pending
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">bug</div>
                </td>
                <td>BI:57978</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>01/11/2016</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Tracey Parker</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-warning">
                    pending
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">bug</div>
                </td>
                <td>BI:1107</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>01/01/2015</td>
                <td>
                  <div
                    className="circle circle-lg bg-danger"
                    data-title="high"
                  ></div>
                </td>
                <td>
                  <a href="">Warren Gray</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-danger">closed</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">bug</div>
                </td>
                <td>BI:1117</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>11/05/2013</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Jackson Ramos</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-success">open</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">issue</div>
                </td>
                <td>BI:10127</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>05/02/2014</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Ernest Berry</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-danger">closed</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">issue</div>
                </td>
                <td>BI:54678</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>01/01/2016</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Sylvia Daniels</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-success">open</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">issue</div>
                </td>
                <td>BI:55778</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>01/05/2016</td>
                <td>
                  <div className="circle circle-lg" data-title="low"></div>
                </td>
                <td>
                  <a href="">Sherry Carroll</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-success">open</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">bug</div>
                </td>
                <td>BI:56878</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>05/01/2016</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Mitchell Jones</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-warning">
                    pending
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">bug</div>
                </td>
                <td>BI:57978</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>01/11/2016</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Tracey Parker</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-warning">
                    pending
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">bug</div>
                </td>
                <td>BI:1107</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>01/01/2015</td>
                <td>
                  <div
                    className="circle circle-lg bg-danger"
                    data-title="high"
                  ></div>
                </td>
                <td>
                  <a href="">Warren Gray</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-danger">closed</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">issue</div>
                </td>
                <td>BI:1117</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>11/05/2013</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Jackson Ramos</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-success">open</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">issue</div>
                </td>
                <td>BI:10127</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>05/02/2014</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Ernest Berry</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-danger">closed</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">bug</div>
                </td>
                <td>BI:54678</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>01/01/2016</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Sylvia Daniels</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-success">open</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">issue</div>
                </td>
                <td>BI:55778</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>01/05/2016</td>
                <td>
                  <div className="circle circle-lg" data-title="low"></div>
                </td>
                <td>
                  <a href="">Sherry Carroll</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-success">open</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">issue</div>
                </td>
                <td>BI:56878</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>05/01/2016</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Mitchell Jones</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-warning">
                    pending
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">issue</div>
                </td>
                <td>BI:57978</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>01/11/2016</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Tracey Parker</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-warning">
                    pending
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">bug</div>
                </td>
                <td>BI:1107</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>01/01/2015</td>
                <td>
                  <div
                    className="circle circle-lg bg-danger"
                    data-title="high"
                  ></div>
                </td>
                <td>
                  <a href="">Warren Gray</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-danger">closed</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">bug</div>
                </td>
                <td>BI:1117</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>11/05/2013</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Jackson Ramos</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-success">open</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="badge bg-gray-lighter">issue</div>
                </td>
                <td>BI:10127</td>
                <td className="text-nowrap">
                  <small>Maecenas mollis egestas convallis.</small>
                </td>
                <td>05/02/2014</td>
                <td>
                  <div
                    className="circle circle-lg bg-warning"
                    data-title="normal"
                  ></div>
                </td>
                <td>
                  <a href="">Ernest Berry</a>
                </td>
                <td>
                  <div className="inline wd-xxs badge badge-danger">closed</div>
                </td>
              </tr>
            </tbody>
          </table>
        </Datatable>
      </div>
    </div>
  );
};

export default TableView;
