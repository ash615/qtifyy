import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const Filter = ({ key, value, handleChange }) => (
  <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        key={key}
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        textColor="inherit"
        indicatorColor="secondary"
      >
        <Tab label="All" id="simple-tab-0" aria-controls="simple-tabpanel-0" />
        <Tab label="Rock" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
        <Tab label="Jazz" id="simple-tab-2" aria-controls="simple-tabpanel-2" />
        <Tab label="Pop" id="simple-tab-3" aria-controls="simple-tabpanel-3" />
        <Tab
          label="Blues"
          id="simple-tab-4"
          aria-controls="simple-tabpanel-4"
        />
      </Tabs>
    </Box>
  </Box>
);

export default Filter;

// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function Filter({ value, handleChange }) {
//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//           textColor="inherit"
//           indicatorColor="secondary"
//         >
//           <Tab label="All" {...a11yProps(0)} />
//           <Tab label="Rock" {...a11yProps(1)} />
//           <Tab label="Jazz" {...a11yProps(2)} />
//           <Tab label="Pop" {...a11yProps(3)} />
//           <Tab label="Blues" {...a11yProps(4)} />
//         </Tabs>
//       </Box>
//     </Box>
//   );
// }
