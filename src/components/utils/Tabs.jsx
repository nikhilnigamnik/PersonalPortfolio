import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import Tools from "../Skills/Tools";
import BackEnd from "../Skills/BackEnd";
import FrontEnd from "../Skills/FrontEnd";

export default function TabS() {
  const data = [
    {
      label: "Front End",
      value: "html",
      desc: <FrontEnd />,
    },
    {
      label: "Back End",
      value: "react",
      desc: <BackEnd />,
    },
    {
      label: "Tools",
      value: "vue",
      desc: <Tools />,
    },
  ];

  return (
    <Tabs value="html">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
        
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
