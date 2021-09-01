// import React, { useContext, useState } from "react";
// import Sidebar from "react-sidebar";
// import LocationContext from "../contexts/LocationContext";
// import Filters from "./Filters";

// const FilterBar = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const { setSelectedMarket } = useContext(LocationContext);

//   const onSetSidebarOpen = (open) => {
//     setSidebarOpen(open);
//   };

//   return (
//     <div onClick={() => setSelectedMarket(null)}>
//       <Sidebar
//         sidebar={<Filters setSidebarOpen={setSidebarOpen} />}
//         open={sidebarOpen}
//         onSetOpen={onSetSidebarOpen}
//         styles={{ sidebar: { background: "white", width: 325 } }}
//       >
//         <div
//           className="filter-icon"
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//         >
//           <i className="fas fa-sliders-h"></i>
//         </div>
//       </Sidebar>
//     </div>
//   );
// };

// export default FilterBar;
