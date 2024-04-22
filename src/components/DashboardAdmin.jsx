import React from "react";
import SidebarAdmin from "./SidebarAdmin";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { DateTime } from "luxon";

export default function DashboardAdmin() {
  const { data, isLoading } = useQuery({
    queryKey: ["getReservations"],
    queryFn: () =>
      axios
        .get(`http://localhost:8081/api/v1/admin/reservations`)
        .then((res) => {
          return res.data;
        }),
  });
  return (
    <div className="min-h-screen bg-gray-50/50">
      <SidebarAdmin />
      <div className="p-4 xl:ml-80">
        <nav className="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
          <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
            <div className="capitalize">
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-gray-900">
                home
              </h6>
            </div>
          </div>
        </nav>
        <div className="mt-12">
          <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-2">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                <svg
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#ffffff"
                  className="w-6 h-6 text-white"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>car_2_line</title>{" "}
                    <g
                      id="页面-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g
                        id="Transport"
                        transform="translate(-240.000000, 0.000000)"
                        fill-rule="nonzero"
                      >
                        {" "}
                        <g
                          id="car_2_line"
                          transform="translate(240.000000, 0.000000)"
                        >
                          {" "}
                          <path
                            d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                            id="MingCute"
                            fill-rule="nonzero"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M16.4197,4 C17.0821923,4 17.6978207,4.32768095 18.068695,4.86821775 L18.1562,5.00772 L21.7365,11.2733 C21.8804167,11.5251333 21.9674583,11.8046056 21.9924745,12.0922144 L22,12.2656 L22,16.7639 C22,17.0123 21.953728,17.257948 21.8641536,17.4885048 L21.7889,17.6584 L20.6708,19.8944 C20.3562,20.5236 19.736624,20.9375837 19.0432213,20.993514 L18.882,21 L17,21 C15.9456091,21 15.0818322,20.18415 15.0054856,19.1492661 L15,19 L9,19 C9,20.0543909 8.18412267,20.9181678 7.14926241,20.9945144 L7,21 L5.11803,21 C4.4146,21 3.76722454,20.6309592 3.40708503,20.0357146 L3.32918,19.8944 L2.21115,17.6584 C2.100062,17.43616 2.0315788,17.195744 2.00862904,16.9494912 L2,16.7639 L2,12.2656 C2,11.9755167 2.06307639,11.6896694 2.18403241,11.4275606 L2.26351,11.2733 L5.84384,5.00772 C6.17252923,4.43250462 6.76247195,4.06057633 7.41578582,4.00676024 L7.58032,4 L16.4197,4 Z M16.4197,6 L7.58032,6 L4,12.2656 L4,16.7639 L5.11803,19 L7,19 L7,18.1 C7,17.533 7.42901351,17.0661778 7.98014344,17.0064548 L8.1,17 L15.9,17 C16.467,17 16.9338222,17.4290222 16.9935452,17.9801452 L17,18.1 L17,19 L18.882,19 L20,16.7639 L20,12.2656 L16.4197,6 Z M16.5545,11.1047 C17.0482,10.8591 17.6477,11.0594 17.8944,11.5528 C18.1392,12.0422 17.9325,12.6509 17.4461,12.895 C15.8024,13.7145 13.8097,14 12,14 C10.1543,14 8.22949,13.7177 6.55847,12.8973 C6.07273,12.6566 5.86273,12.0385 6.10557,11.5528 C6.33730429,11.08935 6.87446296,10.9002663 7.34571779,11.0642535 L7.61306729,11.1790741 L7.61306729,11.1790741 L7.85733656,11.2762313 L7.85733656,11.2762313 L8.07586815,11.3555479 L8.07586815,11.3555479 L8.3367623,11.4424691 L8.3367623,11.4424691 L8.63814549,11.5335391 L8.63814549,11.5335391 L8.97814421,11.6253022 L8.97814421,11.6253022 L9.35488495,11.7143029 L9.35488495,11.7143029 L9.7664942,11.7970853 C10.4091227,11.9148673 11.1631093,12 12,12 C13.5159,12 15.1687,11.7683 16.5545,11.1047 Z"
                            id="形状"
                            fill="#ffffff"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  Total Cars
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  24 Cars
                </h4>
              </div>
              <div className="border-t border-blue-gray-50 p-4">
                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                  <strong className="text-green-500">18</strong>&nbsp;In The
                  Garage
                </p>
              </div>
            </div>

            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6 text-white"
                >
                  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
                </svg>
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  Total Rents
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  {data?.length}
                </h4>
              </div>
            </div>
          </div>

          <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-1">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
              <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">
                  Reservations
                </h6>
              </div>
              <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
                <table className="w-full min-w-[640px] table-auto">
                  <thead>
                    <tr>
                      <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                          Car
                        </p>
                      </th>
                      <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                          Customer
                        </p>
                      </th>
                      <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                          Email
                        </p>
                      </th>
                      <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                          Pick-up date
                        </p>
                      </th>
                      <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                          Drop-off date
                        </p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((reservation, index) => (
                      <tr key={index}>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="flex items-center gap-4">
                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                              {reservation.car}
                            </p>
                          </div>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                            {reservation.customer}
                          </p>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                            {reservation.email}
                          </p>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                            {DateTime.fromISO(reservation.pick).toLocaleString(
                              DateTime.DATE_MED
                            )}
                          </p>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                            {DateTime.fromISO(reservation.drop).toLocaleString(
                              DateTime.DATE_MED
                            )}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
